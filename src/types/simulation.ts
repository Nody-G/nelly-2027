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
  netPurchasingPower: number; // revenu restant après impôts + gains leviers + aides
  netGainVsReferencePassive: number;
  annualRecurringGain: number;  // Gain annuel pérenne (tous les ans)
  oneOffPurchaseBoost: number;   // Boost exceptionnel de trésorerie lié à l'achat 305k€ (PEE + travaux)
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
