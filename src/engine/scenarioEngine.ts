import { FiscalParameters } from '../types/fiscal';
import { OptimizationLeversBreakdown, ScenarioResult } from '../types/simulation';
import { PoliticalBlocId } from '../types';
import {
  calculateIncomeTaxStandard,
  calculateIncomeTaxLFI,
  calculateDividendsTaxation,
  calculateMonthlyMortgagePayment,
} from './taxEngine';
import { computeDailyLivingCostsByBloc, computeFullCostOfLivingBreakdown } from './budgetEngine';

export function computeOptimizationLevers(params: FiscalParameters): OptimizationLeversBreakdown {
  if (!params.enableOptimizationLevers) {
    return {
      extraRentAnnual: 0,
      extraChargesAnnual: 0,
      deductibleInterestAndPropertyTax: 0,
      cesuAncvPackage: 0,
      cesuCorporateTaxCredit: 0,
      savingsPlanRelease: 0,
      homeOfficeWorksHT: 0,
      tvaRecoveredOnWorks: 0,
      advertisingSavingsHT: 0,
      holdingOrLoanInterest: 0,
      totalCashExtractedWithoutIR: 0,
      totalCorporateTaxSaved: 0,
      annualRecurringTotal: 0,
      oneOffPurchaseBoostTotal: 0,
    };
  }

  const isFirstYear = params.viewMode === 'firstYear';

  // 1. Passage du loyer actuel de 400 €/mois (maison louée à Pélissanne) au nouveau bail propriétaire (ex: 650 €/mois + 100 €/mois charges) dans la maison achetée à 305 000 €
  const currentRent = params.currentTenantRentMonthly ?? 400;
  const extraRentAnnual = Math.max(0, (params.homeOfficeRentMonthly - currentRent) * 12);
  const extraChargesAnnual = 100 * 12; // 1 200 €/an d'eau/électricité/clim réversible remboursés

  // Quote-part de 28% des intérêts sur le prêt de 260 000 € (entre 3,7% et 4,0%) + 28% de la taxe foncière (1 900 €)
  const loanAmount = params.loanAmount || 260000;
  const rate = params.mortgageInterestRate || 3.85;
  const deductibleInterestAndPropertyTax = Math.round(loanAmount * (rate / 100) * 0.985 * 0.28 + 1900 * 0.28);

  // 2. Package CESU Préfinancé (plafond 2026 : 2 591 €) + Chèques-Vacances ANCV (540 €) = 3 131 €/an exonérés d'IR et de charges
  const cesuAmount = 2591;
  const ancvAmount = 540;
  const cesuAncvPackage = cesuAmount + ancvAmount; // 3 131 €
  const cesuCorporateTaxCredit = Math.round(cesuAmount * 0.25); // 648 €

  // 3. Épargne salariale PEE/PER :
  // - En rythme annuel récurrent : abondement 300% net de CSG/CRDS (9,7%) = 3 880 €/an
  // - En Année 1 (achat de la maison à 305 000 € + 23 500 € notaire) : déblocage exceptionnel du PEE accumulé = 12 500 €
  const peeOrdinaryAnnual = 3880;
  const peeUnlockPurchaseYear1 = 12500;
  const savingsPlanRelease = isFirstYear ? peeUnlockPurchaseYear1 : peeOrdinaryAnnual;

  // 4. Travaux bureau 35 m² (4 500 € HT) + TVA 20% récupérée (900 €)
  const homeOfficeWorksHT = isFirstYear ? 4500 : 500;
  const tvaRecoveredOnWorks = Math.round(homeOfficeWorksHT * 0.20);

  // 5. Audit du budget publicitaire de 40 000 € : économie brute (ex: 12% = 4 800 € HT)
  const advertisingSavingsHT = params.adBudgetAnnual * (params.adSavingTargetPercent / 100);

  // 6. Rémunération Compte Courant d'Associé / Holding
  const holdingOrLoanInterest = 930;

  // Sur 20 000 € de dividendes (chiffres 2025), le nouveau bail + charges + CESU + PEE remplacent de 56% (récurrent) à 100% (Année 1) des dividendes !
  const totalCashExtractedWithoutIR =
    extraRentAnnual + extraChargesAnnual + cesuAncvPackage + savingsPlanRelease;

  const totalCorporateTaxSaved =
    (extraRentAnnual + extraChargesAnnual + cesuAncvPackage + homeOfficeWorksHT) * 0.15 + cesuCorporateTaxCredit;

  const recurringCashGain =
    extraRentAnnual +
    extraChargesAnnual +
    cesuAncvPackage +
    cesuCorporateTaxCredit +
    peeOrdinaryAnnual +
    600 + // entretien courant + TVA
    advertisingSavingsHT * 0.85;

  const oneOffPurchaseBoostTotal =
    (peeUnlockPurchaseYear1 - peeOrdinaryAnnual) + (4500 + 900 - 600); // 8 620 € + 4 800 € = 13 420 €

  return {
    extraRentAnnual,
    extraChargesAnnual,
    deductibleInterestAndPropertyTax,
    cesuAncvPackage,
    cesuCorporateTaxCredit,
    savingsPlanRelease,
    homeOfficeWorksHT,
    tvaRecoveredOnWorks,
    advertisingSavingsHT,
    holdingOrLoanInterest,
    totalCashExtractedWithoutIR,
    totalCorporateTaxSaved,
    annualRecurringTotal: recurringCashGain,
    oneOffPurchaseBoostTotal: isFirstYear ? oneOffPurchaseBoostTotal : 0,
  };
}

export function runScenarioForBloc(
  params: FiscalParameters,
  blocId: PoliticalBlocId,
  isPassive: boolean
): ScenarioResult {
  const blocNames: Record<PoliticalBlocId, string> = {
    continuite: 'Continuité / Statu Quo',
    nfp_lfi: 'Nouveau Front Populaire / LFI',
    rn: 'Rassemblement National',
    droite: 'Droite Républicaine',
  };

  const salaryNet = Math.max(0, params.totalRevenue - params.dividendsGross); // 40 000 € sur 2025
  const levers = computeOptimizationLevers(params);

  // Dividendes remplacés par les leviers non imposables (loyer réel, charges, CESU, PEE)
  const dividendsReplaced = isPassive
    ? 0
    : Math.min(params.dividendsGross, levers.totalCashExtractedWithoutIR);

  const dividendsRemaining = Math.max(0, params.dividendsGross - dividendsReplaced);

  const divTax = calculateDividendsTaxation(dividendsRemaining, params.companyForm, blocId);

  let incomeTax = 0;
  const extraPartRN = blocId === 'rn';

  if (blocId === 'nfp_lfi') {
    const dividendsNetOfSocial = dividendsRemaining - divTax.socialCharges;
    const deductibleCsgOnDividends = dividendsRemaining * 0.068;
    const taxableDividendsForScale = Math.max(0, dividendsNetOfSocial - deductibleCsgOnDividends);

    incomeTax = calculateIncomeTaxLFI(salaryNet, taxableDividendsForScale, params.isSingleParentCaseT);
  } else {
    const irOnSalary = calculateIncomeTaxStandard(salaryNet, params.isSingleParentCaseT, extraPartRN, blocId);
    incomeTax = irOnSalary + divTax.incomeTax;
  }

  // En passant de locataire (sous-location 400 €/m) à propriétaire au Régime Foncier Réel dans la maison à 305k€ (prêt 260k€ à 3,7-4%),
  // les 4 800 €/an déjà facturés bénéficient eux aussi de l'effacement d'impôt par les intérêts d'emprunt (~2 761 €/an déductibles) : gain IR/PS de ~820 €/an
  const existingLeaseRealRegimeTaxShield = isPassive ? 0 : 820;

  const csgOnSavingsUnlocked = isPassive ? 0 : Math.round(levers.savingsPlanRelease * 0.097);
  const totalTaxBurden = Math.max(
    0,
    incomeTax + divTax.socialCharges + csgOnSavingsUnlocked - existingLeaseRealRegimeTaxShield
  );

  // Cash additionnel provenant des économies de gestion (Pub 40k€, Crédit d'impôt Famille 25%, TVA récupérée)
  const extraCashFromBusinessLevers = isPassive
    ? 0
    : Math.round(
        levers.advertisingSavingsHT * 0.85 +
          levers.cesuCorporateTaxCredit +
          levers.tvaRecoveredOnWorks +
          levers.homeOfficeWorksHT * 0.5
      );

  // Coûts du quotidien des 2 filles + énergie maison + allocations familiales selon le bloc
  const livingCosts = computeDailyLivingCostsByBloc(blocId);
  const baseLivingCosts = computeDailyLivingCostsByBloc('continuite');
  const billSavingsOnly = baseLivingCosts.total - livingCosts.total;
  const familyAllowancesCash = livingCosts.familyAllowancesCash;

  // Coût de la vie complet du foyer à Pélissanne (les 8 postes du budget réel), ajusté dynamiquement selon le taux du prêt de 260 000 € (attendu entre 3,7 % et 4,0 %)
  const fullCostItems = computeFullCostOfLivingBreakdown();
  const baseLoanAnnual = calculateMonthlyMortgagePayment(260000, 3.85, 20) * 12;
  const currentLoanAnnual =
    calculateMonthlyMortgagePayment(params.loanAmount || 260000, params.mortgageInterestRate || 3.85, 20) * 12;
  const loanRateDeltaAnnual = currentLoanAnnual - baseLoanAnnual;

  const fullHouseholdCostOfLiving =
    fullCostItems.reduce((acc, item) => {
      if (blocId === 'nfp_lfi') return acc + item.lfiCost;
      if (blocId === 'rn') return acc + item.rnCost;
      if (blocId === 'droite') return acc + item.droiteCost;
      return acc + item.continuiteCost;
    }, 0) + loanRateDeltaAnnual;

  // Pouvoir d'achat net annuel
  const netPurchasingPower =
    params.totalRevenue - totalTaxBurden + extraCashFromBusinessLevers + familyAllowancesCash - livingCosts.total;

  // Capacité d'épargne / Reste à vivre une fois TOUT le coût de la vie payé (y compris le prêt de 260 000 € à 3,7%-4%)
  const disposableSavingsCapacity =
    params.totalRevenue - totalTaxBurden + extraCashFromBusinessLevers + familyAllowancesCash - fullHouseholdCostOfLiving;

  return {
    blocId,
    blocName: blocNames[blocId],
    isPassive,
    totalIncome: params.totalRevenue,
    salaryNet,
    dividendsGross: params.dividendsGross,
    dividendsReplacedByLevers: dividendsReplaced,
    dividendsRemaining,
    incomeTax,
    socialContributionsOnDividends: divTax.socialCharges,
    csgOnSavingsUnlocked,
    totalTaxBurden,
    extraCashFromBusinessLevers,
    dailyLifeLivingExpenses: livingCosts.total,
    dailyLifeAidsAndSavings: billSavingsOnly,
    familyAllowancesCash,
    netPurchasingPower,
    fullHouseholdCostOfLiving,
    disposableSavingsCapacity,
    netGainVsReferencePassive: 0,
    annualRecurringGain: 0,
    oneOffPurchaseBoost: isPassive ? 0 : levers.oneOffPurchaseBoostTotal,
  };
}

export function runAllScenarios(params: FiscalParameters) {
  const referencePassive = runScenarioForBloc(params, 'continuite', true);
  const referencePower = referencePassive.netPurchasingPower;

  const recurringParams: FiscalParameters = { ...params, viewMode: 'recurring' };
  const referencePassiveRecurring = runScenarioForBloc(recurringParams, 'continuite', true);

  const attachDelta = (res: ScenarioResult) => {
    const recurringRes = runScenarioForBloc(recurringParams, res.blocId, res.isPassive);
    return {
      ...res,
      netGainVsReferencePassive: res.netPurchasingPower - referencePower,
      annualRecurringGain: recurringRes.netPurchasingPower - referencePassiveRecurring.netPurchasingPower,
    };
  };

  return {
    continuite: {
      passive: attachDelta(runScenarioForBloc(params, 'continuite', true)),
      optimized: attachDelta(runScenarioForBloc(params, 'continuite', false)),
    },
    lfi: {
      passive: attachDelta(runScenarioForBloc(params, 'nfp_lfi', true)),
      optimized: attachDelta(runScenarioForBloc(params, 'nfp_lfi', false)),
    },
    rn: {
      passive: attachDelta(runScenarioForBloc(params, 'rn', true)),
      optimized: attachDelta(runScenarioForBloc(params, 'rn', false)),
    },
    droite: {
      passive: attachDelta(runScenarioForBloc(params, 'droite', true)),
      optimized: attachDelta(runScenarioForBloc(params, 'droite', false)),
    },
    leversBreakdown: computeOptimizationLevers(params),
  };
}
