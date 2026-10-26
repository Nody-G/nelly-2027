import { TaxBracket } from '../types/fiscal';

export const barèmeIRActuel: TaxBracket[] = [
  { limitMin: 0, limitMax: 11497, rate: 0.00 },
  { limitMin: 11497, limitMax: 29315, rate: 0.11 },
  { limitMin: 29315, limitMax: 83823, rate: 0.30 },
  { limitMin: 83823, limitMax: 177106, rate: 0.41 },
  { limitMin: 177106, limitMax: null, rate: 0.45 },
];

export const barèmeIR_LFI_14_Tranches: TaxBracket[] = [
  { limitMin: 0, limitMax: 10293, rate: 0.00 },
  { limitMin: 10293, limitMax: 15439, rate: 0.05 },
  { limitMin: 15439, limitMax: 20585, rate: 0.10 },
  { limitMin: 20585, limitMax: 27790, rate: 0.15 },
  { limitMin: 27790, limitMax: 36024, rate: 0.20 },
  { limitMin: 36024, limitMax: 46317, rate: 0.25 },
  { limitMin: 46317, limitMax: 56610, rate: 0.30 },
  { limitMin: 56610, limitMax: 66903, rate: 0.35 },
  { limitMin: 66903, limitMax: 82342, rate: 0.40 },
  { limitMin: 82342, limitMax: 102928, rate: 0.45 },
  { limitMin: 102928, limitMax: 133806, rate: 0.50 },
  { limitMin: 133806, limitMax: 174978, rate: 0.55 },
  { limitMin: 174978, limitMax: 411712, rate: 0.60 },
  { limitMin: 411712, limitMax: null, rate: 0.90 },
];

export const taxConstants = {
  abattement10PctMin: 495,
  abattement10PctMax: 14171,
  // Plafonnement du quotient familial par demi-part classique (2025/2026 - Art. 197-I-2 CGI)
  plafondDemiPartQF: 1791,
  // Plafond pour un quart de part en garde alternée (1791 / 2)
  plafondQuartPartQF: 895.5,
  // Plafond demi-part proposé par la Droite Républicaine (relèvement à 2 500 €)
  plafondDemiPartQF_Droite: 2500,
  plafondQuartPartQF_Droite: 1250,
  // Plafond avantage spécifique premier enfant parent isolé (Case T)
  plafondParentIsoleDemiPart: 4149,
  plafondParentIsoleQuartPart: 2074.5,
  // Taux de PFU
  pfuTauxActuel: 0.314, // 12.8% IR + 18.6% PS (avec hausse 1.4 pt CSG financière)
  pfuTauxStandard: 0.300, // 12.8% IR + 17.2% PS standard
  // CSG déductible si option barème
  csgDeductibleRate: 0.068,
  // Abattement 40% sur dividendes si option barème
  abattementDividendesBareme: 0.40,
  // Plafond CESU préfinancé 2026 (Art. L7233-4 C. trav.)
  plafondCesu2026: 2591,
  // Crédit d'impôt famille pour l'entreprise (Art. 244 quater F CGI)
  creditImpotFamilleTaux: 0.25,
  // Chèques-Vacances dirigeants TPE exonérés (Code du tourisme)
  chequesVacancesMax: 540,
  // Abondement PEE max (300% plafonné à 8% PASS)
  abondementPeeMax: 3880,
  // Taux d'intérêt Compte Courant d'Associé déductible TMP (Art. 39-1-3 CGI)
  tauxInteretCCAMax: 0.0465,
};
