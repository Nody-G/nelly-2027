import { FiscalParameters } from '../types/fiscal';
import { PoliticalBlocId } from '../types';
import { ScenarioResult, OptimizationLeversBreakdown } from '../types/simulation';
import { 
  calculateIncomeTaxStandard, 
  calculateIncomeTaxLFI, 
  calculateDividendsTaxation,
  calculateFoncierReelAnnual
} from './taxEngine';
import { computeDailyLivingCostsByBloc, computeFullCostOfLivingBreakdown } from './budgetEngine';
import { taxConstants } from '../data/taxScale2026';

export function computeOptimizationLevers(params: FiscalParameters): OptimizationLeversBreakdown {
  // Levier 1 : Loyer bureau dans la maison à 305 000 € (600 €/mois au lieu de 300 €)
  const foncier = calculateFoncierReelAnnual(
    params.housePurchasePrice,
    params.mortgageInterestRate,
    0.28,
    params.homeOfficeRentMonthly,
    100
  );
  const extraRentAnnual = (params.homeOfficeRentMonthly - 300) * 12; // (600 - 300) * 12 = 3 600 €
  const extraChargesAnnual = 1200; // 100 € * 12 charges refacturées

  // Levier 2 : CESU préfinancé 2026 + Chèques-Vacances
  const cesuAmount = taxConstants.plafondCesu2026; // 2 591 €
  const cvAmount = taxConstants.chequesVacancesMax; // 540 €
  const cesuAncvPackage = cesuAmount + cvAmount; // 3 131 €
  const cesuCorporateTaxCredit = cesuAmount * taxConstants.creditImpotFamilleTaux; // 647.75 €

  // Levier 3 : Déblocage épargne achat maison 305k€ (PEE si salarié, PER si seul) - PONCTUEL 2026
  const savingsPlanRelease = params.hasEmployee ? 12500 : 7500;
  // Abondement PEE annuel ordinaire pérenne (hors achat) : 8% PASS
  const peeAnnualOrdinary = params.hasEmployee ? 3880 : 2000;

  // Levier 4 : Aménagement bureau & archives en direct par Nell'Immo - PONCTUEL 2026
  const homeOfficeWorksHT = 4500;
  const tvaRecoveredOnWorks = 900; // TVA 20% récupérée par Nell'Immo

  // Levier 5 : Économie audit des 40 000 € de pub/logiciels (RÉCURRENT)
  const advertisingSavingsHT = 40000 * (params.adSavingsPct / 100); // 12% = 4 800 € HT

  // Levier 6 : Intérêts de Compte Courant d'Associé (CCA) ou surplus Holding
  const holdingOrLoanInterest = 1500;

  // Totaux
  const annualRecurringTotal = extraRentAnnual + extraChargesAnnual + cesuAncvPackage + peeAnnualOrdinary + (advertisingSavingsHT * 0.55) + cesuCorporateTaxCredit;
  const oneOffPurchaseBoostTotal = savingsPlanRelease + homeOfficeWorksHT + tvaRecoveredOnWorks;

  const totalCashExtractedWithoutIR = extraRentAnnual + extraChargesAnnual + cesuAncvPackage + savingsPlanRelease + homeOfficeWorksHT;
  const totalCorporateTaxSaved = (extraRentAnnual + extraChargesAnnual + cesuAmount + homeOfficeWorksHT + advertisingSavingsHT) * 0.25 + cesuCorporateTaxCredit;

  return {
    extraRentAnnual,
    extraChargesAnnual,
    deductibleInterestAndPropertyTax: foncier.totalDeductibleExpenses,
    cesuAncvPackage,
    cesuCorporateTaxCredit,
    savingsPlanRelease,
    homeOfficeWorksHT,
    tvaRecoveredOnWorks,
    advertisingSavingsHT,
    holdingOrLoanInterest,
    totalCashExtractedWithoutIR,
    totalCorporateTaxSaved,
    annualRecurringTotal,
    oneOffPurchaseBoostTotal
  };
}

export function runSingleScenario(
  blocId: PoliticalBlocId,
  isPassive: boolean,
  params: FiscalParameters,
  referencePassiveNetPurchasingPower: number = 0
): ScenarioResult {
  const totalIncome = params.totalRevenue;
  const initialDividends = Math.min(params.dividendsGross, Math.max(0, totalIncome - 12000));
  const salaryNet = totalIncome - initialDividends;

  const livingCosts = computeDailyLivingCostsByBloc(blocId);
  const levers = computeOptimizationLevers(params);

  let dividendsReplacedByLevers = 0;
  let remainingDividends = initialDividends;
  let extraCashFromBusinessLevers = 0;
  let csgOnSavingsUnlocked = 0;

  // Capacité de remplacement selon le mode de vue (Pérenne récurrent vs Année 1 avec achat)
  const isFirstYearView = params.viewMode === 'firstYear';

  if (!isPassive) {
    if (isFirstYearView) {
      // Vue Année 1 (intègre le déblocage exceptionnel de la maison 305k€)
      const capacityToReplace = levers.extraRentAnnual + levers.extraChargesAnnual + levers.cesuAncvPackage + levers.savingsPlanRelease + levers.homeOfficeWorksHT;
      dividendsReplacedByLevers = Math.min(initialDividends, capacityToReplace);
      remainingDividends = Math.max(0, initialDividends - dividendsReplacedByLevers);
      csgOnSavingsUnlocked = Math.min(dividendsReplacedByLevers, levers.savingsPlanRelease) * 0.097;
      extraCashFromBusinessLevers = (levers.advertisingSavingsHT * 0.60) + levers.tvaRecoveredOnWorks + levers.cesuCorporateTaxCredit;
    } else {
      // Vue Annuelle Récurrente Pérenne (tous les ans sans déblocage ponctuel de maison)
      const peeOrdinary = params.hasEmployee ? 3880 : 1500;
      const capacityToReplace = levers.extraRentAnnual + levers.extraChargesAnnual + levers.cesuAncvPackage + peeOrdinary;
      dividendsReplacedByLevers = Math.min(initialDividends, capacityToReplace);
      remainingDividends = Math.max(0, initialDividends - dividendsReplacedByLevers);
      csgOnSavingsUnlocked = peeOrdinary * 0.097;
      extraCashFromBusinessLevers = (levers.advertisingSavingsHT * 0.60) + levers.cesuCorporateTaxCredit;
    }
  }

  // Calculs des impôts selon le bloc politique
  let incomeTax = 0;
  let socialContributionsOnDividends = 0;

  if (blocId === 'nfp_lfi') {
    const activeDividends = isPassive ? initialDividends : remainingDividends;
    // Sous LFI : cotisations sociales sur dividendes (~35% en SASU, ~42% en SARL)
    const socialRate = params.companyForm === 'SASU' ? 0.35 : 0.42;
    socialContributionsOnDividends = activeDividends * socialRate;
    const dividendsNetForIR = activeDividends - socialContributionsOnDividends;
    incomeTax = calculateIncomeTaxLFI(salaryNet, dividendsNetForIR, params.isSingleParent);
  } else {
    // Continuité, RN ou Droite
    const isRN = (blocId === 'rn');
    incomeTax = calculateIncomeTaxStandard(salaryNet, params.isSingleParent, isRN, blocId);

    const activeDividends = isPassive ? initialDividends : remainingDividends;
    const divTax = calculateDividendsTaxation(activeDividends, params.companyForm, blocId);
    
    socialContributionsOnDividends = divTax.socialCharges;
    incomeTax += divTax.incomeTax;
  }

  const totalTaxBurden = incomeTax + socialContributionsOnDividends + csgOnSavingsUnlocked;

  // Calcul du Pouvoir d'Achat Net Réel :
  // (Revenu global - Impôts) + Gains trésorerie entreprise + Allocations familiales directes - Coût de la vie ciblé (Filles & Énergie)
  const netIncomeAfterTaxes = totalIncome - totalTaxBurden;
  const familyAllowancesCash = livingCosts.familyAllowancesCash;
  const netPurchasingPower = netIncomeAfterTaxes + extraCashFromBusinessLevers + familyAllowancesCash - livingCosts.total;

  // Calcul du Coût de la Vie Complet du Foyer (Crédit maison 305k€, taxe foncière, alimentation, mobilité, énergie, filles, santé, loisirs)
  const fullItems = computeFullCostOfLivingBreakdown();
  const fullHouseholdCostOfLiving = fullItems.reduce((sum, item) => {
    if (blocId === 'nfp_lfi') return sum + item.lfiCost;
    if (blocId === 'rn') return sum + item.rnCost;
    if (blocId === 'droite') return sum + item.droiteCost;
    return sum + item.continuiteCost;
  }, 0);

  // Reste à épargner / capacité financière nette annuelle une fois l'intégralité du coût de la vie payée
  const disposableSavingsCapacity = netIncomeAfterTaxes + extraCashFromBusinessLevers + familyAllowancesCash - fullHouseholdCostOfLiving;
  
  const netGainVsReferencePassive = referencePassiveNetPurchasingPower > 0 
    ? (netPurchasingPower - referencePassiveNetPurchasingPower)
    : 0;

  const blocNames: Record<PoliticalBlocId, string> = {
    continuite: 'Continuité (Statu Quo)',
    nfp_lfi: 'Nouveau Front Populaire / LFI',
    rn: 'Rassemblement National (RN)',
    droite: 'Droite Républicaine / Libérale'
  };

  // Calcul séparé clair
  const annualRecurringGain = netGainVsReferencePassive;
  const oneOffPurchaseBoost = isFirstYearView ? levers.oneOffPurchaseBoostTotal : 0;

  return {
    blocId,
    blocName: blocNames[blocId],
    isPassive,
    totalIncome,
    salaryNet,
    dividendsGross: initialDividends,
    dividendsReplacedByLevers,
    dividendsRemaining: remainingDividends,
    incomeTax,
    socialContributionsOnDividends,
    csgOnSavingsUnlocked,
    totalTaxBurden,
    extraCashFromBusinessLevers,
    dailyLifeLivingExpenses: livingCosts.total,
    dailyLifeAidsAndSavings: livingCosts.savingsVsBase,
    familyAllowancesCash,
    netPurchasingPower,
    fullHouseholdCostOfLiving,
    disposableSavingsCapacity,
    netGainVsReferencePassive,
    annualRecurringGain,
    oneOffPurchaseBoost
  };
}

export function runAllScenarios(params: FiscalParameters) {
  // Calcul de la référence absolue : Continuité Passive
  const refPassive = runSingleScenario('continuite', true, params, 0);
  const refNet = refPassive.netPurchasingPower;
  refPassive.netGainVsReferencePassive = 0;

  const continuiteOpti = runSingleScenario('continuite', false, params, refNet);
  const lfiPassive = runSingleScenario('nfp_lfi', true, params, refNet);
  const lfiOpti = runSingleScenario('nfp_lfi', false, params, refNet);
  const rnPassive = runSingleScenario('rn', true, params, refNet);
  const rnOpti = runSingleScenario('rn', false, params, refNet);
  const droitePassive = runSingleScenario('droite', true, params, refNet);
  const droiteOpti = runSingleScenario('droite', false, params, refNet);

  return {
    referencePassive: refPassive,
    continuite: { passive: refPassive, optimized: continuiteOpti },
    lfi: { passive: lfiPassive, optimized: lfiOpti },
    rn: { passive: rnPassive, optimized: rnOpti },
    droite: { passive: droitePassive, optimized: droiteOpti },
  };
}
