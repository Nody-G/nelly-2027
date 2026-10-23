import { CompanyForm } from './index';

export type CalculationViewMode = 'recurring' | 'firstYear';

export interface FiscalParameters {
  totalRevenue: number;         // Revenu net dirigeant + dividendes (ex: 70 000 €)
  dividendsGross: number;       // Part de dividendes bruts actuels (ex: 30 000 €)
  companyForm: CompanyForm;     // SASU (assimilée salariée) vs SARL (gérante majoritaire TNS)
  hasEmployee: boolean;         // Présence d'au moins 1 salarié/alternant (condition PEE)
  isSingleParent: boolean;      // Case T parent isolé (garde alternée: 1.75 parts vs 1.5 parts)
  homeOfficeRentMonthly: number;// Loyer bureau maison 305k€ (ex: 600 €/mois)
  adSavingsPct: number;         // Pourcentage d'économie sur les 40 000 € de pub (ex: 12%)
  housePurchasePrice: number;   // 305 000 €
  mortgageInterestRate: number; // Taux crédit (ex: 3.5%)
  cadetteAge: number;           // 5 ans
  aineeAge: number;             // 11 ans
  viewMode: CalculationViewMode;// 'recurring' (annuel pérenne) vs 'firstYear' (avec déblocage achat 305k€)
}

export interface TaxBracket {
  limitMin: number;
  limitMax: number | null;
  rate: number;
}

export interface LawReference {
  code: string;
  article: string;
  title: string;
  summary: string;
  fullQuote: string;
  officialSourceUrl?: string;
  practicalApplication: string;
  urssafSafeguard: string;
}
