import { PoliticalBlocId } from '../types';
import { pelissanneLocalData } from '../data/pelissanneRates';

export interface DaughterExpenseBreakdown {
  label: string;
  cadette5ans: number;
  ainee11ans: number;
  totalAnnual: number;
  description: string;
  sourceRef: string;
  methodologyAndWhy: string;
  crossImpactNote: string;
  lawRef?: string;
}

export interface FullCostOfLivingItem {
  id: string;
  category: string;
  label: string;
  continuiteCost: number;
  lfiCost: number;
  rnCost: number;
  droiteCost: number;
  continuiteWhy: string;
  lfiWhy: string;
  rnWhy: string;
  droiteWhy: string;
  deepCrossReasoning: string;
  sourceRef: string;
  lawRef?: string;
}

export interface LifeHorizonProjection {
  horizonId: string;
  period: string;
  title: string;
  daughtersAges: string;
  keyLifeEvents: string;
  annualPurchasingPowerByBloc: {
    continuite: { passive: number; optimized: number; note: string };
    nfp_lfi: { passive: number; optimized: number; note: string };
    rn: { passive: number; optimized: number; note: string };
    droite: { passive: number; optimized: number; note: string };
  };
  documentedReasoning: string;
  sourceRef: string;
}

export function computeDailyLivingCostsByBloc(blocId: PoliticalBlocId) {
  const baseCantine = pelissanneLocalData.municipalTariffs.cantineScolaire.totalAnnuelGardeAlternee; // 777 € (287 € primaire + 490 € collège)
  const baseFournitures = 260; // 100 € primaire + 160 € collège
  const basePiano = pelissanneLocalData.municipalTariffs.musiquePiano.coutAnnuelStandard; // 400 €
  const baseSport = pelissanneLocalData.municipalTariffs.sportCadette.coutAnnuelLicenceEtTenue; // 400 € (Escalade)
  const baseSante = 1450; // Mutuelle dirigeante (750 €) + reste à charge orthodontie semestres Aînée (700 €)
  const baseEnergie = 2400; // Électricité + climatisation réversible été/hiver + eau (Maison 125 m² Pélissanne)
  const baseTotal = baseCantine + baseFournitures + basePiano + baseSport + baseSante + baseEnergie; // 5 687 €

  switch (blocId) {
    case 'nfp_lfi':
      return {
        cantine: 0,
        fournitures: 0,
        piano: 200,
        sport: 250,
        sante: 200,
        energieEau: 1650,
        total: 2300,
        familyAllowancesCash: 600,
        savingsVsBase: (baseTotal - 2300) + 600 // +3 987 €/an
      };
    
    case 'rn':
      return {
        cantine: baseCantine,
        fournitures: 230,
        piano: 480,
        sport: 380,
        sante: baseSante,
        energieEau: 1720,
        total: 5037,
        familyAllowancesCash: 1080,
        savingsVsBase: (baseTotal - 5037) + 1080 // +1 730 €/an
      };

    case 'droite':
      return {
        cantine: baseCantine,
        fournitures: baseFournitures,
        piano: basePiano,
        sport: 350,
        sante: 1400,
        energieEau: 2150,
        total: 5337,
        familyAllowancesCash: 0,
        savingsVsBase: baseTotal - 5337 // +350 €/an
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
        familyAllowancesCash: 0,
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
        ? 'Gratuité intégrale de la cantine scolaire primaire et collège (0 €)'
        : 'Tarif plein communal tranche 5 (4,10 €/repas × 70 j/an en garde alternée) + collège Carcassonne',
      sourceRef: 'Délibération Ville de Pélissanne n° 2024-52 & CD13 Collèges',
      methodologyAndWhy: 'Calcul fondé sur 140 jours d\'école/an divisés par 2 parents en garde alternée (70 repas/enfant/an). Avec 60 000 € de revenus 2025 (40k€ salaire + 20k€ dividendes), Nelly est en Tranche 5 maximale à Pélissanne (4,10 €/repas en primaire = 287 €) et au tarif plein départemental au Collège Roger Carcassonne (~7,00 €/repas = 490 €).',
      crossImpactNote: 'Sous RN et Droite, le maintien de la tarification locale évite une hausse de taxe foncière mais laisse 777 €/an à la charge de Nelly.',
      lawRef: 'Art. L410-2 C. com.'
    },
    {
      label: 'Fournitures Scolaires & Manuels (Primaire + Collège)',
      cadette5ans: blocId === 'nfp_lfi' ? 0 : (blocId === 'rn' ? 90 : 100),
      ainee11ans: blocId === 'nfp_lfi' ? 0 : (blocId === 'rn' ? 140 : 160),
      totalAnnual: costs.fournitures,
      description: blocId === 'nfp_lfi'
        ? 'Kits complets de fournitures scolaires remis gratuitement le jour de la rentrée'
        : blocId === 'rn'
        ? 'Baisse de TVA à 5,5% sur la papeterie scolaire (-30 €), 0 € d\'ARS'
        : 'Achats libres à charge intégrale de la famille (0 € d\'ARS CAF car revenus > plafond)',
      sourceRef: 'Baromètre Rentrée Scolaire CSF / Familles de France 2026',
      methodologyAndWhy: 'Le plafond d\'éligibilité à l\'ARS (~31 150 € pour 2 enfants) exclut Nelly (60 000 € de revenus). Le coût réel en garde alternée (50%) est de 100 € en CP/primaire et 160 € en 6e/5e.',
      crossImpactNote: 'Sous le RN, le port obligatoire de l\'uniforme/blouse (fourni au démarrage) réduit les dépenses vestimentaires de marque au collège Roger Carcassonne.',
      lawRef: 'Art. L521-1 CSS'
    },
    {
      label: 'Pratique Musicale : Piano (Aînée 11 ans)',
      cadette5ans: 0,
      ainee11ans: costs.piano,
      totalAnnual: costs.piano,
      description: blocId === 'nfp_lfi'
        ? 'Tarification subventionnée + Chèque Culture (-200 €)'
        : blocId === 'rn'
        ? 'Risque de hausse tarifaire (+80 €) par baisse des subventions culturelles locales'
        : 'École Municipale de Musique de Pélissanne ou cours à domicile (400 €/an)',
      sourceRef: 'École Municipale de Musique Pélissanne & Rapports CRC PACA',
      methodologyAndWhy: 'Nelly consacre 400 €/an (sa quote-part) aux cours de piano de son aînée de 11 ans.',
      crossImpactNote: 'PARADE FISCALE NELL\'IMMO : En faisant venir le professeur de piano à domicile dans la nouvelle maison de Pélissanne, Nelly paie les 400 € avec ses 2 591 € de CESU préfinancés par Nell\'Immo (0 € d\'IR, 0 € d\'URSSAF + 25% de crédit d\'IS) !',
      lawRef: 'Art. 199 sexdecies CGI'
    },
    {
      label: 'Activité Sportive : Escalade (Cadette 5 ans)',
      cadette5ans: costs.sport,
      ainee11ans: 0,
      totalAnnual: costs.sport,
      description: blocId === 'nfp_lfi'
        ? 'Pass\'Sport universel revalorisé à 150 € sans condition CAF (-150 €)'
        : blocId === 'rn'
        ? 'TVA 5,5% sur chaussons/baudrier et équipements sportifs (-20 €)'
        : blocId === 'droite'
        ? 'Déduction fiscale des cotisations sportives associatives (-50 €)'
        : 'Club d\'escalade (Sensabloc / CAF Pays Salonais) + chaussons & stages (400 €/an)',
      sourceRef: 'FFME / Clubs Pays Salonais & Code du Tourisme (ANCV)',
      methodologyAndWhy: 'Le programme NFP/LFI prévoit l\'universalisation du Pass\'Sport à 150 €. Sous le RN, la baisse de TVA à 5,5% sur les équipements sportifs réduit le coût des chaussons et du baudrier (-20 €/an).',
      crossImpactNote: 'PARADE FISCALE NELL\'IMMO : Nell\'Immo attribue 540 €/an de Chèques-Vacances ANCV exonérés d\'IR et de charges sociales à Nelly.',
      lawRef: 'Art. L7233-4 C. trav.'
    },
    {
      label: 'Santé, Mutuelle & Orthodontie (Aînée 11 ans)',
      cadette5ans: 150,
      ainee11ans: blocId === 'nfp_lfi' ? 50 : (blocId === 'droite' ? 1250 : 1300),
      totalAnnual: costs.sante,
      description: blocId === 'nfp_lfi'
        ? '« 100% Sécu » : remboursement intégral orthodontie 11-16 ans et soins sans mutuelle privée'
        : 'Quote-part mutuelle dirigeante (750 €) + reste à charge semestres d\'orthodontie (700 €)',
      sourceRef: 'Base Ameli (TO 90 = 193,50 €/semestre) & Devis Orthodontistes Salon/Aix',
      methodologyAndWhy: 'En garde alternée, le reste à charge net d\'orthodontie de Nelly est de ~700 €/an + ~750 €/an de mutuelle. Sous LFI, le « 100% Sécu » rembourse à 100% l\'orthodontie pédiatrique (-1 250 €/an).',
      crossImpactNote: 'En SASU (Art. L311-3 23° CSS), Nelly peut souscrire une mutuelle cadre d\'entreprise payée à 100% par Nell\'Immo.',
      lawRef: 'Art. L311-3 23° CSS'
    },
    {
      label: 'Énergie, Climatisation Réversible & Eau (Maison 125 m²)',
      cadette5ans: Math.round(costs.energieEau / 2),
      ainee11ans: Math.round(costs.energieEau / 2),
      totalAnnual: costs.energieEau,
      description: blocId === 'rn'
        ? 'Baisse immédiate TVA 20% → 5,5% sur électricité, gaz et carburants (-680 €/an)'
        : blocId === 'nfp_lfi'
        ? 'Premiers m³ d\'eau gratuits + blocage tarif électricité hors marché UE (-750 €/an)'
        : blocId === 'droite'
        ? 'Baisse de l\'accise sur l\'électricité (TICFE) et relance nucléaire (-250 €/an)'
        : 'Tarifs réglementés actuels électricité (clim été + chauffage hiver) & eau à Pélissanne',
      sourceRef: 'Commission de Régulation de l\'Énergie (CRE) 2026 & Régie des Eaux Pays Salonais',
      methodologyAndWhy: 'Pour la maison de 125 m² à Pélissanne équipée de climatisation réversible et d\'un bureau d\'agence de 35 m², la consommation annuelle moyenne est de ~2 000 € d\'électricité + ~400 € d\'eau = 2 400 €/an.',
      crossImpactNote: 'PARADE FISCALE NELL\'IMMO : Avec le nouveau bail professionnel dans la maison achetée à 305 000 €, Nell\'Immo rembourse 1 200 €/an (100 €/mois) de charges d\'électricité, climatisation et eau en franchise totale d\'impôt !',
      lawRef: 'Art. L410-2 C. com.'
    }
  ];
}

export function computeFullCostOfLivingBreakdown(): FullCostOfLivingItem[] {
  return [
    {
      id: 'housing_mortgage',
      category: '1. Logement, Prêt 260k€ sur 25 ans (3,7% - 4,0%) & Notaire (23,5k€)',
      label: 'Prêt 260 000 € sur 25 ans (Taux 3,7% à 4,0%, médian 3,85% = 1 351 €/m), Taxe Foncière & Assurance',
      continuiteCost: 18560,
      lfiCost: 18910,
      rnCost: 19410,
      droiteCost: 18410,
      continuiteWhy: 'Prêt de 260 000 € sur 25 ans à 3,85% médian (1 351 €/mois = 16 210 €/an ; de 1 330 €/m à 3,7% à 1 372 €/m à 4,0%) + Taxe foncière Pélissanne (1 900 €) + Assurance (450 €). Frais de notaire (23 500 €) financés par l\'apport.',
      lfiWhy: 'Prêt de 260 000 € sur 25 ans figé à la signature, mais hausse estimée de la fiscalité locale départementale/communale (+350 €/an).',
      rnWhy: 'Prêt initial figé sur 25 ans, mais risque de tension sur les taux (4,65% en cas de crédit complémentaire) et compensation des baisses de dotations par la fiscalité locale (+850 €/an).',
      droiteWhy: 'Détente des taux bancaires (favorable pour décrocher 3,70% au lieu de 4,00% sur 25 ans, soit -252 €/an) et plafonnement de la taxe foncière (-150 €/an).',
      deepCrossReasoning: 'POURQUOI CETTE RÉFLEXION ? En empruntant 260 000 € sur 25 ans (au lieu de 20 ans) pour sa maison à 305 000 € (+23 500 € de frais de notaire), la mensualité de Nelly baisse de 204 €/mois (1 351 €/mois à 3,85% au lieu de 1 555 €/mois sur 20 ans), ce qui dégage +2 450 €/an de trésorerie disponible ! De plus, sur 25 ans, le capital s\'amortit plus lentement les premières années, ce qui maintient des intérêts d\'emprunt élevés (~9 905 € en An 1, dont 28% = 2 773 € déductibles) pour gommer l\'impôt sur le loyer Nell\'Immo (passé de 400 €/m en location à 650 €/m + 100 € charges) au Régime Foncier Réel (Art. 28 & 31 CGI).',
      sourceRef: 'Offre de Prêt 260k€ sur 25 ans (3,7%-4,0%), Notaire (23 500 €) & Art. 28/31 CGI',
      lawRef: 'Art. 28 & 31 CGI'
    },
    {
      id: 'food_groceries',
      category: '2. Alimentation & Courses',
      label: 'Panier Alimentaire & Hygiène (Nelly + 2 Filles en Garde Alternée 50/50)',
      continuiteCost: 5400,
      lfiCost: 4750,
      rnCost: 5050,
      droiteCost: 5300,
      continuiteWhy: '450 €/mois (base INSEE pour 1 adulte + 2 enfants à 50% du temps en Provence) soumis à l\'inflation libre (~2,2%/an).',
      lfiWhy: 'TVA à 0% sur les produits alimentaires de première nécessité + blocage par décret des marges de la grande distribution (-650 €/an).',
      rnWhy: 'Panier de 100 produits de première nécessité avec TVA abaissée à 5,5% / 0% et priorité aux circuits courts français (-350 €/an).',
      droiteWhy: 'Assouplissement des négociations commerciales (Loi Egalim IV) pour favoriser les promotions en supermarché (-100 €/an).',
      deepCrossReasoning: 'POURQUOI CETTE RÉFLEXION ? LFI agit par blocage réglementaire des prix et des marges (Art. L410-2 C. com.), tandis que le RN agit par baisse de TVA ciblée.',
      sourceRef: 'INSEE Indice des Prix à la Consommation & Institut des Politiques Publiques (IPP)',
      lawRef: 'Art. L410-2 C. com.'
    },
    {
      id: 'energy_water',
      category: '3. Énergie Domestique & Eau',
      label: 'Électricité, Climatisation Réversible (Été/Hiver) & Eau (Maison 125 m²)',
      continuiteCost: 2400,
      lfiCost: 1650,
      rnCost: 1720,
      droiteCost: 2150,
      continuiteWhy: 'Tarif réglementé actuel (~0,21 €/kWh TTC) pour 9 500 kWh + 400 € d\'eau.',
      lfiWhy: 'Sortie du marché européen de l\'électricité (retour au tarif régulé coût nucléaire EDF) + gratuité des premiers m³ d\'eau vitaux (-750 €/an).',
      rnWhy: 'Baisse immédiate de la TVA de 20% à 5,5% sur l\'électricité, le gaz et le fioul domestique (-340 € élec) + part carburant (-340 €) = -680 €/an.',
      droiteWhy: 'Réduction de l\'accise sur l\'électricité (ex-TICFE) et relance du programme électronucléaire (-250 €/an).',
      deepCrossReasoning: 'POURQUOI CETTE RÉFLEXION ? Avec le passage de la maison louée (400 €/m hors charges) à la nouvelle maison achetée à 305 000 € (650 €/m + 100 €/m de charges), Nell\'Immo rembourse 1 200 €/an d\'eau et d\'électricité à Nelly à 0 € d\'impôt.',
      sourceRef: 'Commission de Régulation de l\'Énergie (CRE) & Directive UE 2022/542',
      lawRef: 'Art. 39-1 CGI'
    },
    {
      id: 'mobility_fuel',
      category: '4. Mobilité Privée & Transports',
      label: 'Carburants Privés, Péages (Salon/Aix/Marseille) & Transports Scolaires',
      continuiteCost: 1800,
      lfiCost: 1350,
      rnCost: 1320,
      droiteCost: 1680,
      continuiteWhy: '150 €/mois de déplacements privés (hors tournées agence déjà déduites), péages A7/A54 et abonnements scolaires.',
      lfiWhy: 'Blocage du prix des carburants à 1,50 €/L à la pompe + gratuité totale des transports en commun (bus/TER) pour les <25 ans (-450 €/an).',
      rnWhy: 'TVA à 5,5% sur les carburants (-22 cts/L), baisse de 15% des péages autoroutiers et abrogation des ZFE d\'Aix-Marseille (-480 €/an).',
      droiteWhy: 'Coup de pouce ciblé pour les actifs roulants et maintien des aides aux véhicules propres (-120 €/an).',
      deepCrossReasoning: 'POURQUOI CETTE RÉFLEXION ? Dans sa nouvelle maison à 305 000 €, Nelly peut faire installer une borne de recharge électrique payée à 100% par Nell\'Immo (Art. 39-1 CGI) avec 70% d\'abattement sur l\'avantage en nature.',
      sourceRef: 'BOSS Avantages en Nature (Arrêté 25/02/2025) & Ministère de la Transition Écologique',
      lawRef: 'Avantages en Nature BOSS'
    },
    {
      id: 'school_canteen_alsh',
      category: '5. Scolarité, Cantine & ALSH',
      label: 'Cantine Scolaire, Fournitures & Garderie/ALSH (Cadette 5 ans & Aînée 11 ans)',
      continuiteCost: 1487,
      lfiCost: 200,
      rnCost: 1457,
      droiteCost: 1487,
      continuiteWhy: 'Cantine garde alternée (777 €) + Fournitures (260 €) + Garderie périscolaire & ALSH Jean-Paul Houlié le mercredi (450 €).',
      lfiWhy: 'Gratuité intégrale cantine (0 €) et fournitures (0 €) + périscolaire fortement subventionné à 200 €/an (-1 287 €/an).',
      rnWhy: 'Maintien des tarifs communaux tranche 5 (777 € cantine + 450 € ALSH) et légère baisse TVA fournitures (-30 €/an).',
      droiteWhy: 'Maintien de la tarification au quotient familial municipal (1 487 €/an).',
      deepCrossReasoning: 'POURQUOI CETTE RÉFLEXION ? Tant que la cadette a moins de 6 ans révolus au 1er janvier, les 450 € de centre de loisirs ALSH et garderie du soir donnent droit au Crédit d\'Impôt Garde d\'Enfant de 50% (Art. 200 quater B CGI) ET peuvent être payés à 100% via les CESU préfinancés par Nell\'Immo !',
      sourceRef: 'Grille Tarifaire Ville de Pélissanne 2026 & Art. 200 quater B CGI',
      lawRef: 'Art. L7233-4 C. trav.'
    },
    {
      id: 'health_orthodontics',
      category: '6. Santé, Mutuelle & Orthodontie',
      label: 'Mutuelle Familiale & Semestres d\'Orthodontie (Aînée 11-14 ans)',
      continuiteCost: 1450,
      lfiCost: 200,
      rnCost: 1450,
      droiteCost: 1400,
      continuiteWhy: 'Quote-part mutuelle privée (750 €) + reste à charge orthodontie de l\'aînée (700 €/an après remboursement Sécu 193,50 €/semestre).',
      lfiWhy: '100% Sécu : intégration des mutuelles dans la Sécu et remboursement à 100% de l\'orthodontie des enfants (-1 250 €/an).',
      rnWhy: 'Maintien du système actuel Sécurité Sociale + complémentaire santé privée obligatoire (1 450 €/an).',
      droiteWhy: 'Déductibilité fiscale accrue des contrats collectifs santé/prévoyance des dirigeants TPE (-50 €/an).',
      deepCrossReasoning: 'POURQUOI CETTE RÉFLEXION ? En tant que Présidente assimilée salariée de SASU (Art. L311-3 23° CSS), Nelly peut souscrire un contrat collectif « Frais de Santé Cadre » payé par Nell\'Immo.',
      sourceRef: 'Ameli Assurance Maladie & DREES Comptes de la Santé',
      lawRef: 'Art. L311-3 23° CSS'
    },
    {
      id: 'culture_sport',
      category: '7. Culture (Piano) & Sport (Escalade)',
      label: 'Cours de Piano (Aînée 400 €) & Club d\'Escalade (Cadette 400 €)',
      continuiteCost: 800,
      lfiCost: 450,
      rnCost: 860,
      droiteCost: 750,
      continuiteWhy: '400 €/an de piano + 400 €/an d\'escalade payés plein tarif (revenus > plafond Pass\'Sport actuel).',
      lfiWhy: 'Généralisation du Pass\'Sport à 150 € sans condition CAF + Chèque Culture/subvention conservatoire (-350 €/an).',
      rnWhy: 'TVA 5,5% sur équipement sportif (-20 €), mais hausse estimée du tarif municipal/associatif de musique par baisse des subventions (+80 €).',
      droiteWhy: 'Réduction d\'impôt pour inscription sportive des mineurs (-50 €/an).',
      deepCrossReasoning: 'POURQUOI CETTE RÉFLEXION ? Quel que soit le parti élu, Nelly finance les 400 € de piano via ses CESU Nell\'Immo (cours à domicile) et les 400 € d\'escalade via ses Chèques-Vacances ANCV Nell\'Immo, ramenant son coût fiscal personnel à 0 € !',
      sourceRef: 'Ministère des Sports & Chambres Régionales des Comptes PACA',
      lawRef: 'Art. 199 sexdecies CGI'
    },
    {
      id: 'telecom_leisure',
      category: '8. Assurances, Télécoms & Vacances',
      label: 'Assurances Personnelles, Forfaits Ados & Loisirs/Vacances avec les Filles',
      continuiteCost: 2200,
      lfiCost: 1950,
      rnCost: 2100,
      droiteCost: 2150,
      continuiteWhy: 'Assurance scolaire/individuelle accident, téléphonie collégienne, vacances scolaires et sorties culturelles (2 200 €/an).',
      lfiWhy: 'Gratuité des musées nationaux/monuments pour les jeunes, chèques vacances sociaux élargis et transports TER gratuits (-250 €/an).',
      rnWhy: 'Baisse de TVA sur les péages et carburants de départs en vacances (-100 €/an).',
      droiteWhy: 'Défiscalisation accrue des Chèques-Vacances pour dirigeants de TPE (-50 €/an).',
      deepCrossReasoning: 'POURQUOI CETTE RÉFLEXION ? Les abonnements fibre Internet de la maison de Pélissanne et le forfait mobile principal de Nelly sont déjà passés à 100% en charges professionnelles dans Nell\'Immo.',
      sourceRef: 'INSEE Enquête Budget de Famille & Code du Tourisme',
      lawRef: 'Art. 39-1 CGI'
    }
  ];
}

export function computeLifeHorizonProjections(): LifeHorizonProjection[] {
  return [
    {
      horizonId: 'h1_2027',
      period: 'Horizon 1 • 2026 - 2027 (Court Terme)',
      title: 'Achat Maison 305k€ (Prêt 260k€ sur 25 ans à 3,7-4% + 23,5k€ Notaire) & Bail 400€ → 650€',
      daughtersAges: 'Cadette : 5-6 ans (CP) • Aînée : 11-12 ans (6e/5e)',
      keyLifeEvents: 'Signature maison 305 000 € (+23 500 € notaire), prêt 260 000 € sur 25 ans (1 330 € à 1 372 €/m), loyer pro passé de 400 € à 650 € + 100 € charges.',
      annualPurchasingPowerByBloc: {
        continuite: { passive: 44315, optimized: 54664, note: '+10 349 € (Récurrent) / +19 569 € (Année 1 achat)' },
        nfp_lfi: { passive: 44162, optimized: 59195, note: '+15 033 € vs réf. : 56% à 100% des 20k€ de dividendes sont remplacés !' },
        rn: { passive: 46773, optimized: 56674, note: '+12 359 € vs réf. : baisse immédiate TVA 5,5% énergie + CAF 1 080 €' },
        droite: { passive: 45245, optimized: 55420, note: 'Détente des taux vers 3,70% sur le prêt de 260 000 € sur 25 ans' }
      },
      documentedReasoning: 'POURQUOI CETTE PRÉDICTION ? Le passage du prêt de 260 000 € sur 25 ans (au lieu de 20 ans) abaisse la mensualité à 1 351 €/mois (à 3,85%), tout en maintenant ~9 905 € d\'intérêts d\'emprunt la 1re année dont 28% (2 773 €) effacent l\'impôt sur le nouveau bail professionnel de 9 000 €/an.',
      sourceRef: 'Art. 28 & 31 CGI, Offre de Prêt 260k€ sur 25 ans (3,7%-4,0%) & Art. 34 Constitution'
    },
    {
      horizonId: 'h2_2030',
      period: 'Horizon 2 • 2028 - 2032 (Plein Effet du Mandat)',
      title: 'Collège & Lycée des Filles, Orthodontie, Marché Immobilier & Fiscalité Pleine',
      daughtersAges: 'Cadette : 7-11 ans (Primaire/6e) • Aînée : 13-17 ans (Collège/Lycée Salon)',
      keyLifeEvents: 'Pleine application des réformes fiscales (PFU vs 14 tranches sur les dividendes résiduels), orthodontie, donation nue-propriété avant les 51 ans de Nelly.',
      annualPurchasingPowerByBloc: {
        continuite: { passive: 43900, optimized: 54300, note: 'Érosion par l\'inflation (+1,8%/an) sans aide familiale nouvelle, mais prêt de 260k€ sur 25 ans figé.' },
        nfp_lfi: { passive: 43700, optimized: 59100, note: 'Écart maximal (+15 400 €/an !) : les dividendes résiduels ne sont plus que de 8 789 € et Nelly cumule +3 987 €/an d\'aides/gratuités.' },
        rn: { passive: 46900, optimized: 55200, note: 'Gain fiscal + allocations (+1 730 €), vigilance sur le volume de ventes Nell\'Immo si taux acheteurs > 4,5%.' },
        droite: { passive: 45800, optimized: 57900, note: 'Relance des investisseurs locatifs privés (+12% CA Nell\'Immo) + QF relevé à 2 500 €.' }
      },
      documentedReasoning: 'POURQUOI CETTE PRÉDICTION ? Le prêt sur 25 ans allège la charge fixe du foyer de 2 450 €/an et prolonge la durée pendant laquelle les intérêts d\'emprunt gomment les revenus fonciers du bureau Nell\'Immo.',
      sourceRef: 'Croisement Modèle Micro-Fiscal DGFiP × Amortissement Prêt 260k€ sur 25 ans'
    },
    {
      horizonId: 'h3_2035',
      period: 'Horizon 3 • 2033 - 2039 (Études Supérieures & Retraite)',
      title: 'Entrée des 2 Filles à l\'Université (Aix/Marseille) & Départ en Retraite de Nelly',
      daughtersAges: 'Cadette : 12-18 ans (Études en 2039) • Aînée : 18-24 ans (Études dès sept. 2033)',
      keyLifeEvents: 'Coût de 2 logements étudiants à Aix/Marseille (~12 600 €/an/fille) + Liquidation de la retraite de Nelly (60 ans vs 62-63 ans vs 64 ans).',
      annualPurchasingPowerByBloc: {
        continuite: { passive: 33200, optimized: 48400, note: 'Choc financier de -6 300 €/an (quote-part Nelly) par fille en études (0 € bourse CROUS), amorti par la Holding.' },
        nfp_lfi: { passive: 54900, optimized: 71800, note: 'Allocation d\'Autonomie Jeunesse (+12 756 €/an par fille dès 18 ans) + Retraite à 60 ans (+25 200 €/an de pension gagnée sur 4 ans) !' },
        rn: { passive: 35800, optimized: 50100, note: 'Fin des allocations familiales à 20 ans et 0 € de bourse CROUS : études à charge, compensées par pension déductible ou Holding.' },
        droite: { passive: 35100, optimized: 51200, note: 'Transmission studio/maison à 0 € de droits (abattement 200k€), mais retraite à 64-65 ans et études à la charge de la famille.' }
      },
      documentedReasoning: 'POURQUOI CETTE PRÉDICTION ? En économisant +2 450 €/an de mensualité grâce au prêt sur 25 ans (1 351 €/m au lieu de 1 555 €/m), Nelly accumule +17 150 € de trésorerie supplémentaire d\'ici 2033 (entrée de l\'aînée à l\'université) !',
      sourceRef: 'Barème National CROUS, Contrat Législature NFP 2024 & Art. 145 / 156 CGI'
    }
  ];
}

export const getDetailedExpenseLines = computeDaughterLivingExpensesBreakdown;
