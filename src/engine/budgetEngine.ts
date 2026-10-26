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
      // Factures réduites à 2 300 € (-3 387 €) + Allocations familiales dès le 1er enfant (+600 €/an en garde alternée)
      return {
        cantine: 0,
        fournitures: 0,
        piano: 200, // Subvention publique conservatoire/école municipale + chèque culture (-200 €)
        sport: 250, // Pass'Sport universel 150 € sans condition de ressources CAF (-150 €)
        sante: 200, // 100% Sécu (orthodontie 100% remboursée + fin surcomplémentaire privée : -1 250 €)
        energieEau: 1650, // Premiers m3 d'eau gratuits + blocage tarif réglementé électricité Art. L410-2 C. com. (-750 €)
        total: 2300,
        familyAllowancesCash: 600, // Allocation familiale dès le 1er enfant modulée à 70k€ (50 €/mois en garde alternée)
        savingsVsBase: (baseTotal - 2300) + 600 // 3 387 € d'économies de factures + 600 € d'allocations = +3 987 €/an
      };
    
    case 'rn':
      // Factures à 5 037 € (-650 €) + Rétablissement universalité allocations familiales sans plafond (+1 080 €/an en garde alternée)
      return {
        cantine: baseCantine, // 777 € (maintien tarif communal plein pot)
        fournitures: 230, // Baisse TVA 5,5% papeterie/fournitures scolaires (-30 €)
        piano: 480, // Effet croisé : baisse des subventions culturelles locales répercutée sur les tarifs (+80 €)
        sport: 380, // TVA 5,5% équipements d'escalade chaussons/baudrier (-20 €)
        sante: baseSante, // 1 450 € (système dual Sécu + Mutuelle privée maintenu)
        energieEau: 1720, // Baisse TVA 20% -> 5,5% sur électricité, gaz, carburants (-680 €)
        total: 5037,
        familyAllowancesCash: 1080, // Universalité allocations familiales rétablie (Art. L521-1 CSS : ~90 €/mois en garde alternée 50/50 avec majoration +11 ans)
        savingsVsBase: (baseTotal - 5037) + 1080 // 650 € d'économies nettes factures + 1 080 € d'allocations = +1 730 €/an
      };

    case 'droite':
      return {
        cantine: baseCantine, // 777 €
        fournitures: baseFournitures, // 260 €
        piano: basePiano, // 400 €
        sport: 350, // Déduction fiscale cotisations sportives jeunes (-50 €)
        sante: 1400, // Optimisation contrat collectif / Madelin (-50 €)
        energieEau: 2150, // Baisse accise électricité (TICFE) et bouclier nucléaire (-250 €)
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
      methodologyAndWhy: 'Calcul fondé sur 140 jours d\'école/an divisés par 2 parents en garde alternée (70 repas/enfant/an). Avec 70 000 € de revenu, Nelly est en Tranche 5 maximale à Pélissanne (4,10 €/repas en primaire = 287 €) et au tarif plein départemental au Collège Roger Carcassonne (~7,00 €/repas incluant frais de demi-pension = 490 €). Sous LFI/NFP, l\'État compense aux communes et départements la gratuité universelle (chiffrée à 2,2 Mds€ au niveau national).',
      crossImpactNote: 'Sous RN et Droite, le refus de la gratuité universelle est motivé par la maîtrise des impôts locaux, mais expose Nelly au plein tarif jusqu\'à la fin du lycée.',
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
      methodologyAndWhy: 'Le plafond d\'éligibilité à l\'Allocation de Rentrée Scolaire (ARS : ~416 €/enfant) est fixé à ~31 150 € pour 2 enfants : avec 70 000 € de revenus, Nelly touche 0 € d\'ARS. Le coût réel mesuré par la CSF en garde alternée (50%) est de 100 € en CP/primaire et 160 € en 6e/5e (calculatrice, cahiers grands formats, équipement EPS). Le modèle LFI généralise l\'expérimentation de Saint-Denis (kits gratuits livrés dans les écoles).',
      crossImpactNote: 'Sous le RN, le port obligatoire de l\'uniforme/blouse (fourni par la commune/État au démarrage) réduit les dépenses vestimentaires de marque au collège Roger Carcassonne.',
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
      methodologyAndWhy: 'Nelly consacre 400 €/an (sa quote-part) aux cours de piano de son aînée de 11 ans. Pourquoi estimons-nous une hausse à 480 € sous le RN (et jusqu\'à 650 € en scénario tendu) ? Parce que les rapports des Chambres Régionales des Comptes (PACA et Occitanie sur Fréjus, Perpignan, Beaucaire) documentent une baisse moyenne de 20% à 35% des subventions aux associations culturelles et écoles de musique, répercutée sur les cotisations des familles non boursières.',
      crossImpactNote: 'PARADE FISCALE NELL\'IMMO : En faisant venir le professeur de piano à domicile dans la maison de Pélissanne, Nelly paie les 400 € avec ses 2 591 € de CESU préfinancés par Nell\'Immo (Art. 244 quater F CGI : 0 € d\'IR, 0 € d\'URSSAF + 25% de crédit d\'IS) et bénéficie de 50% de crédit d\'impôt personnel (Art. 199 sexdecies CGI) sur tout reliquat !',
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
      methodologyAndWhy: 'Actuellement, le Pass\'Sport d\'État (50 €) est réservé aux bénéficiaires de l\'ARS ou de l\'AEEH, excluant Nelly. Le programme NFP/LFI prévoit son universalisation et son relèvement à 150 € pour chaque enfant inscrit en club fédéral (FFME). Sous le RN, la baisse de TVA de 20% à 5,5% sur les équipements sportifs réduit le coût d\'achat des chaussons et du baudrier d\'environ 20 €/an.',
      crossImpactNote: 'PARADE FISCALE NELL\'IMMO : Sans attendre l\'État, Nell\'Immo attribue 540 €/an de Chèques-Vacances ANCV exonérés d\'IR et de charges sociales à Nelly, directement acceptés par les clubs affiliés FFME/ANCV pour régler la licence et les stages d\'escalade.',
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
      methodologyAndWhy: 'Pourquoi ce montant de 1 450 €/an ? En France, un semestre d\'orthodontie multi-attaches (bagues entre 11 et 14 ans) est facturé en moyenne 850 € à 1 000 € en Provence, alors que la Sécurité Sociale ne rembourse que 193,50 € par semestre (base TO 90). Après remboursement de la mutuelle et division par 2 en garde alternée, le reste à charge net de Nelly est de ~700 €/an, auquel s\'ajoute ~750 €/an de cotisation mutuelle/soins courants non remboursés. Sous LFI, le « 100% Sécu » intègre les complémentaires dans la Sécurité Sociale et rembourse à 100% les tarifs opposables d\'orthodontie pédiatrique (-1 250 €/an).',
      crossImpactNote: 'Contrepartie documentée sous LFI : le financement du 100% Sécu repose sur une hausse des cotisations sociales patronales et sur les revenus du capital, d\'où l\'importance vitale pour Nelly de substituer le foncier réel aux dividendes.',
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
      methodologyAndWhy: 'Pour une maison individuelle de 125 m² à Pélissanne équipée de climatisation réversible (indispensable face aux étés à 38-40°C en Provence) et occupée en télétravail/bureau d\'agence (35 m²), la consommation annuelle moyenne est de ~9 500 kWh d\'électricité (~2 000 €/an) + ~110 m³ d\'eau (~400 €/an) = 2 400 €/an. Sous le RN, le passage de la TVA de 20% à 5,5% sur l\'énergie et les carburants génère 12% de baisse TTC sur l\'électricité (-240 €) + 440 € d\'économie sur les pleins de carburant de Nelly = -680 €/an. Sous LFI, le blocage des prix par décret (Art. L410-2 C. com.) au coût de production nucléaire EDF (~50 €/MWh) et la gratuité des 15 premiers m³ d\'eau vitaux par personne réduisent la facture de -750 €/an.',
      crossImpactNote: 'PARADE FISCALE NELL\'IMMO : Grâce au bail professionnel de 35 m² (28% de la surface de la maison), Nell\'Immo rembourse 1 200 €/an (100 €/mois) de charges d\'électricité, climatisation et eau à Nelly en franchise totale d\'impôt !',
      lawRef: 'Art. L410-2 C. com.'
    }
  ];
}

export function computeFullCostOfLivingBreakdown(): FullCostOfLivingItem[] {
  return [
    {
      id: 'housing_mortgage',
      category: '1. Logement & Fiscalité Locale',
      label: 'Crédit Maison 305k€ (270k€ sur 20 ans), Taxe Foncière Pélissanne & Assurance',
      continuiteCost: 21140,
      lfiCost: 21490,
      rnCost: 22190,
      droiteCost: 20990,
      continuiteWhy: 'Crédit signé à 3,50% (1 566 €/mois = 18 792 €/an) + Taxe foncière Pélissanne (1 900 €) + Assurance PNO/MRH (450 €).',
      lfiWhy: 'Crédit initial figé, mais risque de tension sur les taux (4,20% si renégociation ou prêt travaux) et hausse de la fiscalité locale départementale (+350 €/an).',
      rnWhy: 'Impact croisé : la baisse des dotations d\'État aux communes et la tension obligataire (Spread OAT à 110 bps → taux à 4,65% sur tout crédit complémentaire/renégociation) alourdissent le coût global (+1 050 €/an).',
      droiteWhy: 'Stabilité des taux bancaires (~3,35%) et plafonnement de la hausse des valeurs locatives cadastrales (-150 €/an).',
      deepCrossReasoning: 'POURQUOI CETTE RÉFLEXION ? Le logement représente 64% des dépenses fixes de Nelly. En croisant son prêt de 305 000 € avec le bail professionnel de 35 m² (Art. 28 & 31 CGI), Nell\'Immo lui verse 8 400 €/an (700 €/mois charges comprises) qui financent 40% de ses échéances bancaires et de sa taxe foncière à 0 € d\'impôt ! Sans ce croisement, Nelly devrait sortir 12 200 € de dividendes bruts taxés à 30-35% pour payer la même somme.',
      sourceRef: 'Banque de France (Taux OAT/Crédits 2026) & Avis Taxe Foncière Pélissanne (13330)',
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
      deepCrossReasoning: 'POURQUOI CETTE RÉFLEXION ? L\'alimentation a subi +21% d\'inflation cumulée depuis 2022. LFI agit par blocage réglementaire des prix et des marges (Art. L410-2 C. com., gain immédiat mais risque de réduction des gammes), tandis que le RN agit par baisse de TVA ciblée (gain dépendant du taux de répercussion réel par les distributeurs, estimé à 70% par l\'IPP).',
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
      continuiteWhy: 'Tarif réglementé actuel (~0,21 €/kWh TTC après fin du bouclier tarifaire et réforme post-ARENH) pour 9 500 kWh + 400 € d\'eau.',
      lfiWhy: 'Sortie du marché européen de l\'électricité (retour au tarif régulé coût nucléaire EDF) + gratuité des premiers m³ d\'eau vitaux (-750 €/an).',
      rnWhy: 'Baisse immédiate de la TVA de 20% à 5,5% sur l\'électricité, le gaz et le fioul domestique (-340 € élec) + part carburant (-340 €) = -680 €/an.',
      droiteWhy: 'Réduction de l\'accise sur l\'électricité (ex-TICFE) et relance du programme électronucléaire (-250 €/an).',
      deepCrossReasoning: 'POURQUOI CETTE RÉFLEXION ? À Pélissanne, la climatisation réversible entre juin et septembre est un poste énergétique aussi lourd que le chauffage d\'hiver. L\'estimation croise la directive européenne TVA (qui autorise désormais les États membres à abaisser la TVA sur l\'électricité à 5,5%, rendant la mesure RN juridiquement applicable dès un PLFR) avec le remboursement de 1 200 €/an de charges par Nell\'Immo.',
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
      deepCrossReasoning: 'POURQUOI CETTE RÉFLEXION ? En zone périurbaine comme Pélissanne (13330), la voiture est indispensable. De plus, l\'Arrêté du 25 février 2025 a durci l\'avantage en nature des véhicules de fonction thermiques de 30% à 50% (67% avec carburant) ! Si Nell\'Immo bascule son leasing sur un véhicule 100% électrique avec borne à domicile (Art. 39-1 CGI), Nelly bénéficie de 70% d\'abattement sur l\'avantage en nature et économise ~1 600 €/an supplémentaires.',
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
      deepCrossReasoning: 'POURQUOI CETTE RÉFLEXION ? L\'orthodontie est le premier poste de reste à charge médical des familles avec un enfant entrant au collège (11 ans). En tant que Présidente assimilée salariée de SASU (Art. L311-3 23° CSS), Nelly peut souscrire un contrat collectif « Frais de Santé Cadre » payé par Nell\'Immo (déductible de l\'IS) avec une option renforcée orthodontie à 300% BRSS.',
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
      deepCrossReasoning: 'POURQUOI CETTE RÉFLEXION ? C\'est l\'exemple parfait du croisement entre politique publique et ingénierie d\'entreprise : quel que soit le parti élu, Nelly finance les 400 € de piano via ses CESU Nell\'Immo (cours à domicile) et les 400 € d\'escalade via ses Chèques-Vacances ANCV Nell\'Immo, ramenant son coût fiscal personnel à 0 € !',
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
      deepCrossReasoning: 'POURQUOI CETTE RÉFLEXION ? Les abonnements fibre Internet de la maison de Pélissanne et le forfait mobile principal de Nelly sont déjà passés à 100% en charges professionnelles dans Nell\'Immo (CA 130k€ HT). Seul le reliquat strictement familial (vacances, loisirs des filles) pèse sur le budget privé.',
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
      title: 'Achat Maison 305k€, Activation des 6 Leviers & Année Électorale',
      daughtersAges: 'Cadette : 5-6 ans (CP) • Aînée : 11-12 ans (6e/5e)',
      keyLifeEvents: 'Signature maison 305 000 € à Pélissanne, bail pro 600 € + 100 €, déblocage PEE 12 500 €, travaux bureau 4 500 € HT.',
      annualPurchasingPowerByBloc: {
        continuite: { passive: 51178, optimized: 62688, note: '+11 510 € (Récurrent) / +18 095 € (Année 1 avec achat)' },
        nfp_lfi: { passive: 48440, optimized: 66920, note: 'En vertu de la non-rétroactivité fiscale, le barème 14 tranches ne s\'applique qu\'en 2028 !' },
        rn: { passive: 53640, optimized: 64590, note: 'Baisse immédiate TVA 5,5% énergie par PLFR dès l\'été 2027 (+680 €)' },
        droite: { passive: 52120, optimized: 63450, note: 'Stabilité immédiate des taux de crédit pour l\'achat à 305 000 €' }
      },
      documentedReasoning: 'POURQUOI CETTE PRÉDICTION ? En droit constitutionnel français (Art. 34 de la Constitution & jurisprudence du Conseil constitutionnel sur la petite rétroactivité fiscale), une loi de finances votée à l\'automne 2027 ne régit l\'IR que sur les revenus de 2027 déclarés en 2028 (ou à compter du 1er janvier 2028 pour la suppression du PFU). Par conséquent, en 2026 et 2027, le gain de pouvoir d\'achat de Nelly provient à 90% de ses propres leviers d\'optimisation (bail pro, PEE, CESU, audit pub) et des seules mesures par décret ou PLFR d\'été (blocage des prix LFI ou TVA 5,5% RN).',
      sourceRef: 'Art. 34 Constitution de 1958 & Conseil Constitutionnel (Non-rétroactivité)'
    },
    {
      horizonId: 'h2_2030',
      period: 'Horizon 2 • 2028 - 2032 (Plein Effet du Mandat)',
      title: 'Collège & Lycée des Filles, Orthodontie, Marché Immobilier & Fiscalité Pleine',
      daughtersAges: 'Cadette : 7-11 ans (Primaire/6e) • Aînée : 13-17 ans (Collège/Lycée Salon)',
      keyLifeEvents: 'Pleine application des réformes fiscales (PFU vs 14 tranches), pic des dépenses d\'orthodontie et d\'activités, donation nue-propriété avant les 51 ans de Nelly.',
      annualPurchasingPowerByBloc: {
        continuite: { passive: 50600, optimized: 62200, note: 'Érosion par l\'inflation (+1,8%/an) sans aide familiale nouvelle, mais CA agence stable (130k€).' },
        nfp_lfi: { passive: 47800, optimized: 66850, note: 'Écart maximal Passif vs Optimisé (+19 050 €/an !) : le bail pro neutralise la fin du PFU et Nelly cumule +3 987 €/an d\'aides/gratuités.' },
        rn: { passive: 53900, optimized: 61800, note: 'Gain fiscal + allocations (+1 730 €), mais risque de perte d\'1 vente/an sur Nell\'Immo si taux crédit à 4,65% (-5 500 € net dirigeante).' },
        droite: { passive: 52800, optimized: 66900, note: 'Relance des investisseurs locatifs privés (+12% CA Nell\'Immo = +7 000 € net dirigeante) + QF relevé à 2 500 €.' }
      },
      documentedReasoning: 'POURQUOI CETTE PRÉDICTION ? Entre 2028 et 2032, nous croisons le revenu personnel de Nelly avec le chiffre d\'affaires de Nell\'Immo (sensible aux taux de crédit OAT et aux règles DPE/encadrement des loyers). Si on regarde uniquement la fiche d\'impôt à CA constant (70k€), LFI Optimisé et RN Optimisé sont proches (~64-66k€). Mais en intégrant la dynamique commerciale de l\'agence immobilière à Pélissanne, la Droite Républicaine (rebond des investisseurs bailleurs) et LFI Optimisé (si pivot vers la gestion locative GUL +14,4k€ HT) surperforment, tandis que le RN souffre si le Spread OAT-Bund bloque les crédits immobiliers des acquéreurs.',
      sourceRef: 'Croisement Modèle Micro-Fiscal DGFiP × Modèle Crédit Immobilier Banque de France'
    },
    {
      horizonId: 'h3_2035',
      period: 'Horizon 3 • 2033 - 2039 (Études Supérieures & Retraite)',
      title: 'Entrée des 2 Filles à l\'Université (Aix/Marseille) & Départ en Retraite de Nelly',
      daughtersAges: 'Cadette : 12-18 ans (Études en 2039) • Aînée : 18-24 ans (Études dès sept. 2033)',
      keyLifeEvents: 'Coût de 2 logements étudiants à Aix/Marseille (~12 600 €/an/fille) + Liquidation de la retraite de Nelly (60 ans vs 62-63 ans vs 64 ans).',
      annualPurchasingPowerByBloc: {
        continuite: { passive: 38500, optimized: 54500, note: 'Choc financier de -12 600 €/an par fille en études (0 € bourse CROUS), amorti à +4 000 €/an si studio acheté via Holding Mère-Fille.' },
        nfp_lfi: { passive: 61200, optimized: 79600, note: 'Allocation d\'Autonomie Jeunesse (+12 756 €/an par fille dès 18 ans) + Retraite à 60 ans (+25 200 €/an de pension gagnée sur 4 ans) !' },
        rn: { passive: 41000, optimized: 56200, note: 'Fin des allocations familiales à 20 ans et 0 € de bourse CROUS : études à charge, compensées par la Holding et retraite vers 62-63 ans.' },
        droite: { passive: 40200, optimized: 57500, note: 'Transmission studio/maison à 0 € de droits (abattement 200k€), mais retraite à 64-65 ans et études 100% à la charge de la famille.' }
      },
      documentedReasoning: 'POURQUOI CETTE PRÉDICTION ? C\'est à l\'horizon 2033-2039 que se produit le basculement patrimonial le plus spectaculaire. Avec 70 000 € de revenus, Nelly est exclue des bourses CROUS actuelles : financer un studio et la vie étudiante à Aix-en-Provence coûte ~1 050 €/mois (12 600 €/an par fille, soit 63 000 € sur 5 ans). Sous LFI/NFP, l\'Allocation d\'Autonomie Jeunesse (1 063 €/mois = 12 756 €/an par fille) couvre 100% de cette dépense, et l\'abrogation de la retraite à 64 ans permet à Nelly de percevoir 4 années supplémentaires de pension (~2 100 €/mois × 48 mois = +100 800 €). Sous Continuité, RN ou Droite, la seule parade documentée consiste à capitaliser dès 2026 les excédents de Nell\'Immo dans une Holding (Art. 145 CGI, IS à 1,25%) pour acheter un studio à Aix et en donner l\'usufruit temporaire aux filles (Art. 669 CGI).',
      sourceRef: 'Barème National CROUS, Contrat Législature NFP 2024 & Art. 145 / 669 CGI'
    }
  ];
}

export const getDetailedExpenseLines = computeDaughterLivingExpensesBreakdown;
