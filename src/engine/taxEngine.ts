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
  const abattement = Math.min(
    Math.max(netSalaries * 0.10, taxConstants.abattement10PctMin),
    taxConstants.abattement10PctMax
  );
  const netImposable = Math.max(0, netSalaries - abattement);

  const partsFoyer = calculateFiscalParts(isSingleParent, 2, extraPartRN);

  const taxSingle = computeIRWithScale(netImposable, 1.0, barèmeIRActuel);
  const taxWithFamilyParts = computeIRWithScale(netImposable, partsFoyer, barèmeIRActuel);

  // Plafonnement du quotient familial (Art. 197-I-2 CGI)
  const ceilingPerQuarterPart = blocId === 'droite'
    ? taxConstants.plafondQuartPartQF_Droite
    : taxConstants.plafondQuartPartQF;

  const quarterPartsCount = extraPartRN ? 3 : 2;
  const maxAdvantageChildren = quarterPartsCount * ceilingPerQuarterPart;

  const maxAdvantageCaseT = isSingleParent ? taxConstants.plafondParentIsoleQuartPart : 0; // 2 074.50 €
  const totalMaxAdvantage = maxAdvantageChildren + maxAdvantageCaseT;

  const theoreticalAdvantage = taxSingle - taxWithFamilyParts;

  let finalTax = theoreticalAdvantage > totalMaxAdvantage
    ? Math.max(0, taxSingle - totalMaxAdvantage)
    : Math.max(0, taxWithFamilyParts);

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
  const abattementSalaire = Math.min(
    Math.max(netSalaries * 0.10, taxConstants.abattement10PctMin),
    taxConstants.abattement10PctMax
  );
  const taxableSalary = Math.max(0, netSalaries - abattementSalaire);

  const totalNetTaxableIncome = taxableSalary + Math.max(0, dividendsAfterSocialCharges);

  const taxGross = computeIRWithScale(totalNetTaxableIncome, 1.0, barèmeIR_LFI_14_Tranches);
  
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
    const socialCharges = dividendsGross * 0.35;
    return {
      socialCharges,
      incomeTax: 0,
      totalTax: socialCharges
    };
  }

  if (companyForm === 'SASU') {
    const rate = (blocId === 'continuite') ? taxConstants.pfuTauxActuel : taxConstants.pfuTauxStandard;
    const totalTax = dividendsGross * rate;
    const socialCharges = dividendsGross * (rate - 0.128);
    const incomeTax = dividendsGross * 0.128;
    return { socialCharges, incomeTax, totalTax };
  } else {
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

export function calculateMonthlyMortgagePayment(loanAmount: number, annualRatePct: number, durationYears: number = 25): number {
  const n = durationYears * 12;
  const r = (annualRatePct / 100) / 12;
  if (r <= 0) return loanAmount / n;
  return (loanAmount * r) / (1 - Math.pow(1 + r, -n));
}

export function calculateFoncierReelAnnual(
  loanAmount: number = 260000,
  mortgageRatePct: number = 3.85,
  proProportion: number = 0.28,
  monthlyRent: number = 650,
  monthlyCharges: number = 100,
  durationYears: number = 25
) {
  const annualRentIncome = monthlyRent * 12; // 7 800 € à 650 €/mois
  const annualChargesReimbursed = monthlyCharges * 12; // 1 200 €
  const totalReceived = annualRentIncome + annualChargesReimbursed; // 9 000 €

  // Sur 25 ans, l'amortissement initial du capital est plus progressif : les intérêts An 1 sur 260 000 € atteignent ~9 905 € à 3,85%
  const annualMortgageInterests = loanAmount * (mortgageRatePct / 100) * 0.99;
  const annualPropertyTax = 1900; // Taxe foncière Pélissanne
  const annualInsurance = 450; // Assurance PNO / habitation

  const deductibleInterests = annualMortgageInterests * proProportion; // ~2 773 € à 3,85%
  const deductiblePropertyTax = annualPropertyTax * proProportion; // ~532 €
  const deductibleInsurance = annualInsurance * proProportion; // ~126 €
  const deductibleMaintenanceAndCharges = annualChargesReimbursed; // 1 200 €

  // Travaux de réfection / aménagement déductibles de la zone pro (Art. 31-I-1°-a CGI : ~4 400 €)
  const deductibleWorksRefurbishment = 4400;

  const totalDeductibleExpenses =
    deductibleInterests +
    deductiblePropertyTax +
    deductibleInsurance +
    deductibleMaintenanceAndCharges +
    deductibleWorksRefurbishment;

  // Bénéfice foncier net après déduction des travaux et intérêts : tombe à 0 €
  const netTaxableFoncier = Math.max(0, totalReceived - totalDeductibleExpenses);

  const monthlyLoanPayment = calculateMonthlyMortgagePayment(loanAmount, mortgageRatePct, durationYears);

  return {
    annualRentIncome,
    annualChargesReimbursed,
    totalCashReceived: totalReceived,
    annualMortgageInterests,
    deductibleInterests,
    deductiblePropertyTax,
    deductibleWorksRefurbishment,
    totalDeductibleExpenses,
    netTaxableFoncier,
    monthlyLoanPayment,
    annualLoanPayment: monthlyLoanPayment * 12,
    taxSavedIRAndUrssaf: totalReceived * 0.472
  };
}
