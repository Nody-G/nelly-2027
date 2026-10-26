import { PoliticalBlocId } from './index';

export interface ScenarioResult {
  blocId: PoliticalBlocId;
  blocName: string;
  isPassive: boolean;
  totalIncome: number;
  salaryNet: number;
  dividendsGross: number;
  dividendsReplacedByLevers: number;
  dividendsRemaining: number;
  incomeTax: number;
  socialContributionsOnDividends: number;
  csgOnSavingsUnlocked: number;
  totalTaxBurden: number;
  extraCashFromBusinessLevers: number; // pub économie, TVA récupérée, crédit impôt
  dailyLifeLivingExpenses: number;
  dailyLifeAidsAndSavings: number;
  familyAllowancesCash: number;        // Allocations familiales directes (CAF garde alternée)
  netPurchasingPower: number;          // Revenu restant après impôts + gains leviers + allocations - frais ciblés
  fullHouseholdCostOfLiving: number;   // Coût de la vie complet du foyer à Pélissanne (crédit maison, alimentation, mobilité, énergie, filles...)
  disposableSavingsCapacity: number;   // Reste à épargner / vivre net une fois TOUT le coût de la vie payé
  netGainVsReferencePassive: number;
  annualRecurringGain: number;         // Gain annuel pérenne (tous les ans)
  oneOffPurchaseBoost: number;         // Boost exceptionnel de trésorerie lié à l'achat 305k€ (PEE + travaux)
}

export interface OptimizationLeversBreakdown {
  extraRentAnnual: number;
  extraChargesAnnual: number;
  deductibleInterestAndPropertyTax: number;
  cesuAncvPackage: number;
  cesuCorporateTaxCredit: number;
  savingsPlanRelease: number;
  homeOfficeWorksHT: number;
  tvaRecoveredOnWorks: number;
  advertisingSavingsHT: number;
  holdingOrLoanInterest: number;
  totalCashExtractedWithoutIR: number;
  totalCorporateTaxSaved: number;
  annualRecurringTotal: number;
  oneOffPurchaseBoostTotal: number;
}
