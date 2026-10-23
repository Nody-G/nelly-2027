export interface ScientificStudy {
  id: string;
  author: string;
  institution: string;
  title: string;
  year: string;
  sampleAndMethod: string;
  keyFindings: string[];
  takeawayForPublic: string;
}

export interface TaxFlightFactCheck {
  statement: string;
  verdict: 'VRAI' | 'FAUX' | 'NUANCÉ & CONDITIONNEL';
  verdictColor: 'emerald' | 'rose' | 'amber';
  explanation: string;
  source: string;
}

export const scientificStudiesOnCapitalFlight: ScientificStudy[] = [
  {
    id: 'france-strategie-2023',
    author: 'Comité Fabrice Lenglart',
    institution: 'France Stratégie & DGFiP (Rapport Final Octobre 2023)',
    title: 'Évaluation des réformes de la fiscalité du capital (Suppression de l\'ISF et instauration du PFU)',
    year: '2023',
    sampleAndMethod: 'Analyse exhaustive de l\'ensemble des déclarations fiscales françaises (fichiers anonymisés DGFiP de l\'IR, de l\'ancien ISF et de l\'IFI de 2011 à 2022).',
    keyFindings: [
      'Sous l\'ancien ISF, environ 600 à 1 000 foyers assujettis quittaient la France chaque année, soit 0,2% à 0,3% des redevables de l\'ISF, emportant entre 2 et 3 milliards d\'euros de capital annuel.',
      'Après la réforme de 2018 (remplacement de l\'ISF par l\'IFI et PFU à 30%), les départs de gros patrimoines ont diminué de ~40% (environ 350-400 départs/an) et les retours ont progressé de +20% à +30%, ramenant le solde migratoire net proche de l\'équilibre.',
      'Constat fondamental : La suppression de l\'ISF a ralenti l\'exil fiscal, mais France Stratégie souligne qu\'aucun effet d\'entraînement économique spectaculaire sur l\'investissement productif des entreprises ni sur le PIB n\'a pu être prouvé statistiquement.'
    ],
    takeawayForPublic: 'La fuite des très riches sous l\'ISF existait bel et bien (2 à 3 Mds€/an), mais elle ne concernait qu\'une fraction marginale (0,25%) des assujettis. La fin de l\'ISF a freiné les départs sans pour autant créer de miracle économique.'
  },
  {
    id: 'kleven-saez-2020',
    author: 'Henrik Kleven, Camille Landais, Emmanuel Saez, Stefanie Stantcheva',
    institution: 'Quarterly Journal of Economics & Annual Review of Economics',
    title: 'Taxation and International Mobility of Top Earners: A Review and Synthesis',
    year: '2020',
    sampleAndMethod: 'Méta-analyse économétrique sur les mobilités transfrontalières de hauts revenus (sportifs d\'élite, fondateurs de start-ups, cadres dirigeants, détenteurs d\'actifs liquides) en Europe et aux USA.',
    keyFindings: [
      'L\'élasticité de migration fiscale varie considérablement selon la nature des actifs et l\'ancrage territorial : elle est très faible (0,1 à 0,3) pour les chefs d\'entreprise de PME ancrés localement et les détenteurs d\'immobilier.',
      'Elle est en revanche très forte (0,8 à 1,6) pour les fondateurs de la tech, les gestionnaires de fonds, les cadres nomades et les détenteurs de portefeuilles financiers liquides.',
      'Au-delà d\'un taux marginal effectif de prélèvement de 65% à 70%, les comportements basculent : la délocalisation physique vers la Suisse, la Belgique, Dubaï ou le Royaume-Uni l\'emporte sur la simple optimisation fiscale interne.'
    ],
    takeawayForPublic: 'Les entrepreneurs locaux (comme Nelly) et l\'immobilier ne fuient pas. En revanche, le capital financier liquide et les multinationales se déplacent très rapidement dès que la fiscalité devient confiscatoire (>65%).'
  },
  {
    id: 'zucman-piketty-2024',
    author: 'Gabriel Zucman & Thomas Piketty',
    institution: 'EU Tax Observatory & World Inequality Lab (Paris School of Economics)',
    title: 'A Proposal for a Wealth Tax and Citizenship-Based Universal Taxation',
    year: '2024',
    sampleAndMethod: 'Modélisation macroéconomique des flux de capitaux internationaux et proposition d\'architecture fiscale extraterritoriale inspirée du FATCA américain.',
    keyFindings: [
      'L\'exil fiscal n\'est pas une fatalité naturelle : il est le produit de failles juridiques et de l\'absence de taxation extraterritoriale en Europe.',
      'Proposition centrale : instaurer un « impôt universel lié à la nationalité » (tout citoyen français résidant à Dubaï ou en Suisse paie le différentiel d\'impôt au fisc français) assorti d\'une Exit Tax sur 10 ans.',
      'Un impôt mondial de 2% sur les 3 000 milliardaires mondiaux rapporterait 250 milliards de dollars par an sans détruire l\'économie.'
    ],
    takeawayForPublic: 'Pour Zucman et Piketty, taxer les ultra-riches est parfaitement viable à condition de verrouiller juridiquement les frontières fiscales avec un passeport fiscal et une Exit Tax renforcée.'
  }
];

export const legalObstaclesUniversalTax = {
  title: 'Pourquoi l\'« Impôt Universel » de LFI se heurte à un mur juridique',
  subtitle: 'L\'Article 55 de la Constitution et les Traités Internationaux',
  obstacles: [
    {
      title: 'L\'Article 55 de la Constitution & 120 Conventions Fiscales Bilatérales',
      badge: 'Blocage Juridique Majeur',
      badgeColor: 'rose',
      description: 'En droit français, l\'article 55 de la Constitution accorde une valeur supérieure aux traités internationaux sur la loi ordinaire. Or, la France a signé plus de 120 conventions fiscales bilatérales fondées sur le critère de la RESIDENCE FISCALE et non de la nationalité. Pour taxer un Français vivant en Suisse ou en Belgique, la France devrait renégocier unilatéralement 120 traités, ce que les États tiers refuseraient catégoriquement.'
    },
    {
      title: 'Droit Européen : Liberté de Circulation des Capitaux et Personnes',
      badge: 'Cour de Justice de l\'UE (CJUE)',
      badgeColor: 'amber',
      description: 'Les articles 21, 45 et 63 du Traité sur le Fonctionnement de l\'Union Européenne (TFUE) garantissent la liberté d\'établissement et de circulation. La CJUE (arrêts Lasteyrie du Saillant et N.) a jugé que toute Exit Tax créant un obstacle financier disproportionné au départ d\'un citoyen européen est illégale.'
    },
    {
      title: 'Plafonnement Constitutionnel de la Capacité Contributive',
      badge: 'Conseil Constitutionnel',
      badgeColor: 'purple',
      description: 'Le Conseil constitutionnel (Décision n° 2012-662 DC sur la tranche à 75%) sanctionne toute imposition confiscatoire. Tout cumul d\'IR, de CSG, de cotisations et d\'ISF dépassant 70% à 75% des revenus nets est censuré d\'office au nom de l\'article 13 de la Déclaration des Droits de l\'Homme de 1789.'
    }
  ]
};

export const nellyRicochetRisks = {
  title: 'L\'Effet Ricochet sur Nelly (70 000 €) & l\'Agence Nell\'Immo',
  subtitle: 'Quand la surtaxe des ultra-riches ne rapporte pas les milliards espérés, qui paie la note ?',
  risks: [
    {
      mechanism: '1. Élargissement forcé de la base fiscale vers la classe moyenne supérieure',
      impactOnNelly: 'Si la taxation des milliardaires rapporte 15 Mds€ au lieu des 100 Mds€ prévus (à cause des conventions bilatérales et des départs), le gouvernement est contraint d\'abaisser les seuils. Nelly, avec ses 70 000 € de revenu net, devient la cible prioritaire des surtaxes de CSG et du barème IR durci.',
      financialVulnerability: 'Risque de hausse d\'impôt de +2 500 € à +4 000 €/an si elle ne sanctuarise pas ses flux en charges professionnelles déductibles.'
    },
    {
      mechanism: '2. Gel des investisseurs locatifs privés sur le pays d\'Aix / Salon',
      impactOnNelly: 'La menace d\'un retour de l\'ISF élargi à l\'immobilier et de l\'encadrement généralisé des loyers pousse les investisseurs bailleurs à l\'attentisme ou au retrait. Les mandats d\'investissement locatif chez Nell\'Immo chutent de 25%.',
      agencyCountermeasure: 'Basculer l\'agence sur la transaction de résidences principales familiales (primo et secundo-accédants de Pélissanne) et développer la gestion locative sécurisée avec garantie des loyers.'
    },
    {
      mechanism: '3. Choc des Taux d\'Intérêt par l\'écart de dette (Spread OAT-Bund)',
      impactOnNelly: 'Si les créanciers internationaux paniquent face à un budget non financé (que ce soit LFI ou RN), le taux souverain français s\'envole. Les banques répercutent ce coût : les prêts immobiliers passent de 3,5% à 4,5%+, éliminant 15% des acquéreurs potentiels de Nell\'Immo.',
      agencyCountermeasure: 'Nouer un partenariat exclusif avec un courtier en crédit local pour valider le financement des acquéreurs avant toute signature de compromis.'
    }
  ]
};

export const taxFlightFactChecks: TaxFlightFactCheck[] = [
  {
    statement: '« Si on taxe les ultra-riches à 70%, ils vont tous partir à l\'étranger du jour au lendemain. »',
    verdict: 'NUANCÉ & CONDITIONNEL',
    verdictColor: 'amber',
    explanation: 'Faux pour la majorité, vrai pour les plus mobiles. 99,7% des assujettis à l\'ISF sont restés en France. Cependant, les 0,3% qui partent représentent les capitaux les plus liquides et dynamiques (2 à 3 Mds€/an). L\'exil est réel mais concentré sur une minorité hyper-mobile.',
    source: 'France Stratégie (2023) & DGFiP'
  },
  {
    statement: '« La suppression de l\'ISF en 2018 a relancé massivement l\'investissement et la croissance en France. »',
    verdict: 'FAUX',
    verdictColor: 'rose',
    explanation: 'Le rapport final d\'évaluation de France Stratégie (2023) confirme que si la fin de l\'ISF a effectivement réduit les départs de 40%, aucun effet positif statistiquement significatif n\'a été mesuré sur l\'investissement productif des entreprises ni sur la croissance du PIB.',
    source: 'Rapport Comité Lenglart, France Stratégie (Octobre 2023)'
  },
  {
    statement: '« La France peut instaurer un impôt universel comme les États-Unis (FATCA) dès 2027. »',
    verdict: 'FAUX',
    verdictColor: 'rose',
    explanation: 'Les États-Unis ont pu imposer FATCA grâce à l\'hégémonie mondiale du dollar. La France est liée par l\'article 55 de la Constitution à 120 conventions fiscales qui l\'interdisent expressément tant qu\'elles ne sont pas renégociées avec l\'accord des autres pays.',
    source: 'Article 55 Constitution de 1958 & Conseil d\'État'
  },
  {
    statement: '« Les chefs d\'entreprise de province comme Nelly risquent d\'être touchés si le budget dérape. »',
    verdict: 'VRAI',
    verdictColor: 'emerald',
    explanation: 'C\'est l\'effet ricochet classique : quand les recettes attendues sur les 0,1% les plus riches ne suffisent pas à combler un déficit de 70 à 180 Mds€, les gouvernements élargissent les tranches d\'IR et les cotisations sociales sur les revenus de 50k€ à 100k€.',
    source: 'Cour des Comptes & Rapports budgétaires Sénat'
  }
];

