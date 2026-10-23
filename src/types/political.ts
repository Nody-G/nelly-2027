import { PoliticalBlocId } from './index';

export interface PoliticalBloc {
  id: PoliticalBlocId;
  name: string;
  shortLabel: string;
  badge: string;
  colorTheme: {
    primary: string;
    border: string;
    bgLight: string;
    textDark: string;
    headerBg: string;
  };
  summary: string;
  fiscalProgram: {
    pfuStatus: string;
    pfuRate: number; // ex 0.314, ou 0 si progressif
    irBracketsCount: number;
    irScaleDescription: string;
    quotientFamilialRule: string;
    inheritanceDirectAllowance: number;
    socialContributionsRateOnDividends: number;
  };
  dailyLifeAids: {
    canteenCost: number;
    canteenDescription: string;
    schoolSuppliesCost: number;
    suppliesDescription: string;
    pianoMusicCost: number;
    pianoDescription: string;
    sportCost: number;
    sportDescription: string;
    healthOrthodonticsCost: number;
    healthDescription: string;
    energyWaterCost: number;
    energyDescription: string;
    totalAnnualLivingCost: number;
    netAnnualSavingsVsReference: number;
  };
  housingAndBusiness: {
    rentControlPolicy: string;
    energyAuditPolicy: string;
    creditRatesImpactForecast: string;
    directRisksForAgency: string[];
    directOpportunitiesForAgency: string[];
  };
  sources: {
    title: string;
    citation: string;
    documentRef: string;
  }[];
}
