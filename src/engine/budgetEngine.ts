import { PoliticalBlocId } from '../types';
import { pelissanneLocalData } from '../data/pelissanneRates';

export interface DaughterExpenseBreakdown {
  label: string;
  cadette5ans: number;
  ainee11ans: number;
  totalAnnual: number;
  description: string;
  sourceRef: string;
}

export function computeDailyLivingCostsByBloc(blocId: PoliticalBlocId) {
  const baseCantine = pelissanneLocalData.municipalTariffs.cantineScolaire.totalAnnuelGardeAlternee; // ~777 €
  const baseFournitures = 260; // 100 € primaire + 160 € collège
  const basePiano = pelissanneLocalData.municipalTariffs.musiquePiano.coutAnnuelStandard; // 400 €
  const baseSport = pelissanneLocalData.municipalTariffs.sportCadette.coutAnnuelLicenceEtTenue; // 400 € (Escalade)
  const baseSante = 1450; // Mutuelle TNS/salariée + dépassements orthodontie
  const baseEnergie = 2400; // Électricité + climatisation réversible + eau
  const baseTotal = baseCantine + baseFournitures + basePiano + baseSport + baseSante + baseEnergie; // 5 687 €

  switch (blocId) {
    case 'nfp_lfi':
      return {
        cantine: 0,
        fournitures: 0,
        piano: 200, // Subvention universelle + chèque culture (-200 €)
        sport: 250, // Pass'Sport universel (-150 € sur les 400 € d'escalade)
        sante: 200, // 100% Sécu (zéro mutuelle privée, orthodontie 100% prise en charge)
        energieEau: 1650, // Premiers m3 d'eau gratuits + blocage tarif électricité
        total: 2300,
        savingsVsBase: baseTotal - 2300 // ~3 387 €
      };
    
    case 'rn':
      return {
        cantine: baseCantine,
        fournitures: 240, // Légère baisse TVA fournitures
        piano: 450, // Baisse subventions culturelles locales répercutée sur les tarifs
        sport: 380, // TVA 5,5% équipements d'escalade
        sante: baseSante,
        energieEau: 1750, // Baisse TVA 20% -> 5,5% sur électricité, gaz, carburants (-650 €)
        total: 5047,
        savingsVsBase: baseTotal - 5047 // ~640 €
      };

    case 'droite':
      return {
        cantine: baseCantine,
        fournitures: baseFournitures,
        piano: basePiano,
        sport: baseSport,
        sante: baseSante,
        energieEau: 2300,
        total: 5587,
        savingsVsBase: 100
      };

    case 'continuite':
    default:
      return {
        cantine: baseCantine,
        fournitures: baseFournitures,
        piano: basePiano,
        sport: baseSport,
        sante: baseSante,
        energieEau: baseEnergie,
        total: baseTotal,
        savingsVsBase: 0
      };
  }
}

export function computeDaughterLivingExpensesBreakdown(blocId: PoliticalBlocId): DaughterExpenseBreakdown[] {
  const costs = computeDailyLivingCostsByBloc(blocId);

  return [
    {
      label: 'Restauration Scolaire & Périscolaire (Pélissanne)',
      cadette5ans: blocId === 'nfp_lfi' ? 0 : 287,
      ainee11ans: blocId === 'nfp_lfi' ? 0 : 490,
      totalAnnual: costs.cantine,
      description: blocId === 'nfp_lfi'
        ? 'Gratuité intégrale de la cantine scolaire et de la garderie périscolaire'
        : 'Tarif plein communal (4,10 €/repas en garde alternée) à Pélissanne',
      sourceRef: 'Grille tarifaire Ville de Pélissanne 2026'
    },
    {
      label: 'Fournitures Scolaires & Manuels (Primaire + Collège)',
      cadette5ans: blocId === 'nfp_lfi' ? 0 : 100,
      ainee11ans: blocId === 'nfp_lfi' ? 0 : 160,
      totalAnnual: costs.fournitures,
      description: blocId === 'nfp_lfi'
        ? 'Kits complets de fournitures scolaires remis gratuitement le jour de la rentrée'
        : 'Achats libres à charge intégrale de la famille (0 € d\'ARS)',
      sourceRef: 'Baromètre Rentrée CSF 2026'
    },
    {
      label: 'Pratique Musicale : Piano (Aînée 11 ans)',
      cadette5ans: 0,
      ainee11ans: costs.piano,
      totalAnnual: costs.piano,
      description: 'École de musique de Pélissanne ou cours particuliers à domicile (finançables en CESU préfinancé Nell\'Immo)',
      sourceRef: 'École Municipale de Musique & CGI Art. 199 sexdecies'
    },
    {
      label: 'Activité Sportive : Escalade (Cadette 5 ans)',
      cadette5ans: costs.sport,
      ainee11ans: 0,
      totalAnnual: costs.sport,
      description: 'Club d\'escalade de Pélissanne et chaussons/baudrier (finançables en Chèques-Vacances ANCV de Nell\'Immo)',
      sourceRef: 'Clubs d\'escalade Pays Salonais'
    },
    {
      label: 'Santé, Orthodontie (11 ans) & Optique',
      cadette5ans: 150,
      ainee11ans: blocId === 'nfp_lfi' ? 50 : 1300,
      totalAnnual: costs.sante,
      description: blocId === 'nfp_lfi'
        ? 'Prise en charge à 100% par la Sécurité Sociale sans mutuelle privée'
        : 'Mutuelle privée dirigeante + reste à charge orthodontie (~250 €/semestre)',
      sourceRef: 'Assurance Maladie Ameli & Devis orthodontie Salon-de-Provence'
    },
    {
      label: 'Énergie, Chauffage & Eau (Maison 305k€ à Pélissanne)',
      cadette5ans: costs.energieEau / 2,
      ainee11ans: costs.energieEau / 2,
      totalAnnual: costs.energieEau,
      description: blocId === 'rn'
        ? 'Baisse immédiate de la TVA à 5,5% sur électricité, gaz et carburants'
        : blocId === 'nfp_lfi'
        ? 'Tarifs bloqués et gratuité des premiers mètres cubes d\'eau vitaux'
        : 'Tarifs réglementés actuels de l\'énergie et de l\'eau en Provence',
      sourceRef: 'Commission de Régulation de l\'Énergie & SEM Pélissanne'
    }
  ];
}

export const getDetailedExpenseLines = computeDaughterLivingExpensesBreakdown;

