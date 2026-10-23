export interface DaughterProfile {
  name: string;
  age: number;
  schoolLevel: string;
  schoolName: string;
  activities: {
    name: string;
    annualCost: number;
    description: string;
    fiscalLever: string;
    potentialSavings: number;
  }[];
  healthCosts: {
    name: string;
    annualCost: number;
    baseReimbursement: number;
    outOfPocketCurrent: number;
    underLFI: number;
    underRN: number;
    underContinuite: number;
  };
  milestones: {
    year: number;
    ageAtMilestone: number;
    event: string;
    financialImpact: string;
  }[];
}

export interface CustodyExpenseItem {
  category: string;
  totalAnnualCost: number;
  nellyShare: number; // Quote-part payée par Nelly (50% en garde alternée)
  fatherShare: number;
  optimizableViaCompany: boolean;
  companyPaymentMechanism?: string;
  taxCreditPersonalPct?: number;
}
