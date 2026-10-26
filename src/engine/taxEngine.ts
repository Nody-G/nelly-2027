import { barèmeIRActuel, barèmeIR_LFI_14_Tranches, taxConstants } from '../data/taxScale2026';
import { CompanyForm, PoliticalBlocId } from '../types';

export function calculateFiscalParts(isSingleParent: boolean, numChildrenSharedCustody: number = 2, extraPartRN: boolean = false): number {
  let baseParts = 1.0;
  
  if (numChildrenSharedCustody <= 0) return baseParts;

  // En garde alternée classique : 0.25 part pour chacun des 2 premiers enfants
  let childrenParts = numChildrenSharedCustody * 0.25;

  // Sous proposition RN : part pleine dès le 2e enfant (en garde alternée : 0.5 part pour le 2e enfant au lieu de 0.25)
  if (extraPartRN && numChildrenSharedCustody >= 2) {
    childrenParts += 0.25;
  }

  // Majoration Case T Parent Isolé (Art. 194-II du CGI) : 0.25 part supplémentaire pour le premier enfant en garde alternée
  let singleParentBonus = isSingleParent ? 0.25 : 0.0;

  return baseParts + childrenParts + singleParentBonus;
}

export function computeIRWithScale(taxableBase: number, parts: number, scale = barèmeIRActuel): number {
  if (taxableBase <= 0 || parts <= 0) return 0;
  
  const quotient = taxableBase / parts;
  let taxPerPart = 0;

  for (const bracket of scale) {
    if (quotient > bracket.limitMin) {
      const maxInBracket = bracket.limitMax ? Math.min(quotient, bracket.limitMax) : quotient;
      const taxableInBracket = maxInBracket - bracket.limitMin;
      if (taxableInBracket > 0) {
        taxPerPart += taxableInBracket * bracket.rate;
      }
    }
  }

  return taxPerPart * parts;
}

export function calculateIncomeTaxStandard(
  netSalaries: number,
  isSingleParent: boolean,
  extraPartRN: boolean = false,
  blocId: PoliticalBlocId = 'continuite'
): number {
  // Abattement forfaitaire de 10% pour frais professionnels (Art. 83-3° CGI)
  // Plafonné entre 495 € et 14 171 € pour éviter toute sur-déduction sur hauts salaires
  const abattement = Math.min(
    Math.max(netSalaries * 0.10, taxConstants.abattement10PctMin),
    taxConstants.abattement10PctMax
  );
  const netImposable = Math.max(0, netSalaries - abattement);

  const partsFoyer = calculateFiscalParts(isSingleParent, 2, extraPartRN);

  // Calcul de l'impôt pour 1 part (contribuable seul sans enfant)
  const taxSingle = computeIRWithScale(netImposable, 1.0, barèmeIRActuel);
  // Calcul de l'impôt avec le quotient familial du foyer
  const taxWithFamilyParts = computeIRWithScale(netImposable, partsFoyer, barèmeIRActuel);

  // Plafonnement du quotient familial (Art. 197-I-2 CGI)
  // Sous la Droite Républicaine : le plafond est relevé de 1 791 € à 2 500 € par demi-part (1 250 € par quart de part)
  // Sous le RN : le 2e enfant compte pour 0.50 part en garde alternée (soit 0.75 part enfants au total = 3 quarts de part)
  const ceilingPerQuarterPart = blocId === 'droite'
    ? taxConstants.plafondQuartPartQF_Droite
    : taxConstants.plafondQuartPartQF;

  const quarterPartsCount = extraPartRN ? 3 : 2;
  const maxAdvantageChildren = quarterPartsCount * ceilingPerQuarterPart;

  // Majoration parent isolé (Case T) = 1 quart de part spécifique en garde alternée (Art. 197-I-2 CGI)
  const maxAdvantageCaseT = isSingleParent ? taxConstants.plafondParentIsoleQuartPart : 0; // 2 074.50 €
  const totalMaxAdvantage = maxAdvantageChildren + maxAdvantageCaseT;

  const theoreticalAdvantage = taxSingle - taxWithFamilyParts;

  let finalTax = theoreticalAdvantage > totalMaxAdvantage
    ? Math.max(0, taxSingle - totalMaxAdvantage)
    : Math.max(0, taxWithFamilyParts);

  // Sous Droite Républicaine : crédit/réduction d'impôt famille & baisse ciblée charges TPE/PME (~180 € sur l'IR dirigeant)
  if (blocId === 'droite') {
    finalTax = Math.max(0, finalTax - 180);
  }

  return finalTax;
}

export function calculateIncomeTaxLFI(
  netSalaries: number,
  dividendsAfterSocialCharges: number,
  isSingleParent: boolean
): number {
  // 1. Abattement légal de 10% sur les salaires (Art. 83-3° CGI) avec bornes min/max respectées
  const abattementSalaire = Math.min(
    Math.max(netSalaries * 0.10, taxConstants.abattement10PctMin),
    taxConstants.abattement10PctMax
  );
  const taxableSalary = Math.max(0, netSalaries - abattementSalaire);

  // 2. Sous LFI/NFP : révocation du PFU (Art. 200 A CGI) et de l'abattement de 40% (Art. 158-3-2° CGI)
  // Les dividendes nets de cotisations sociales sont intégrés à l'assiette du barème progressif à 14 tranches,
  // après déduction de la CSG déductible (6,8% selon Art. 154 quinquies CGI)
  const totalNetTaxableIncome = taxableSalary + Math.max(0, dividendsAfterSocialCharges);

  // 3. Application du barème progressif à 14 tranches sur 1 part individuelle
  // (LFI remplace le quotient familial par un crédit d'impôt forfaitaire par enfant)
  const taxGross = computeIRWithScale(totalNetTaxableIncome, 1.0, barèmeIR_LFI_14_Tranches);
  
  // 4. Crédit d'impôt forfaitaire pour 2 enfants en garde alternée (~1 800 € si parent isolé Case T, 1 300 € standard)
  const childCredit = isSingleParent ? 1800 : 1300;
  
  return Math.max(0, taxGross - childCredit);
}

export function calculateDividendsTaxation(
  dividendsGross: number,
  companyForm: CompanyForm,
  blocId: PoliticalBlocId
): { socialCharges: number; incomeTax: number; totalTax: number } {
  if (dividendsGross <= 0) {
    return { socialCharges: 0, incomeTax: 0, totalTax: 0 };
  }

  if (blocId === 'nfp_lfi') {
    // Révocation Flat Tax : soumission aux cotisations sociales (~35%)
    const socialCharges = dividendsGross * 0.35;
    return {
      socialCharges,
      incomeTax: 0,
      totalTax: socialCharges
    };
  }

  if (companyForm === 'SASU') {
    // Présidente assimilée salariée : Flat Tax / PFU
    // Sous Continuité : 31.4% (avec hausse CSG financière)
    // Sous RN ou Droite : 30.0%
    const rate = (blocId === 'continuite') ? taxConstants.pfuTauxActuel : taxConstants.pfuTauxStandard;
    const totalTax = dividendsGross * rate;
    const socialCharges = dividendsGross * (rate - 0.128);
    const incomeTax = dividendsGross * 0.128;
    return { socialCharges, incomeTax, totalTax };
  } else {
    // SARL / EURL (Gérante TNS) : dividendes > 10% du capital social sont assujettis aux cotisations TNS (~42%)
    const socialCharges = dividendsGross * 0.42;
    const taxableAfterCharges = dividendsGross - socialCharges;
    const incomeTax = taxableAfterCharges * 0.60 * 0.30;
    return {
      socialCharges,
      incomeTax,
      totalTax: socialCharges + incomeTax
    };
  }
}

export function calculateFoncierReelAnnual(
  housePurchasePrice: number,
  mortgageRatePct: number,
  proProportion: number = 0.28,
  monthlyRent: number = 600,
  monthlyCharges: number = 100
) {
  const annualRentIncome = monthlyRent * 12; // 7 200 €
  const annualChargesReimbursed = monthlyCharges * 12; // 1 200 €
  const totalReceived = annualRentIncome + annualChargesReimbursed; // 8 400 €

  // Intérêts annuels moyens d'emprunt (sur 305k€ à 3.5% sur 20-25 ans : ~9 000 €/an)
  const annualMortgageInterests = housePurchasePrice * (mortgageRatePct / 100) * 0.85;
  const annualPropertyTax = 1900; // Taxe foncière Pélissanne
  const annualInsurance = 450; // Assurance PNO habitation

  const deductibleInterests = annualMortgageInterests * proProportion; // ~2 520 €
  const deductiblePropertyTax = annualPropertyTax * proProportion; // ~532 €
  const deductibleInsurance = annualInsurance * proProportion; // ~126 €
  const deductibleMaintenanceAndCharges = annualChargesReimbursed; // 1 200 €

  // Travaux de réfection / aménagement déductibles de la zone pro (Art. 31-I-1°-a CGI : ~3 500 € à 4 500 € reportables)
  const deductibleWorksRefurbishment = 4100;

  const totalDeductibleExpenses = deductibleInterests + deductiblePropertyTax + deductibleInsurance + deductibleMaintenanceAndCharges + deductibleWorksRefurbishment;
  
  // Bénéfice foncier net après déduction des travaux et intérêts : tombe à 0 €
  const netTaxableFoncier = Math.max(0, totalReceived - totalDeductibleExpenses);

  return {
    annualRentIncome,
    annualChargesReimbursed,
    totalCashReceived: totalReceived,
    deductibleInterests,
    deductiblePropertyTax,
    deductibleWorksRefurbishment,
    totalDeductibleExpenses,
    netTaxableFoncier,
    taxSavedIRAndUrssaf: totalReceived * 0.472 // Si c'était du salaire ou dividende imposé à ~47%
  };
}
