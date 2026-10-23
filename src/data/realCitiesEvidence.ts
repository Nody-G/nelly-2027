export interface CityEvidenceItem {
  city: string;
  mayorOrMajority: string;
  period: string;
  category: 'NFP_LFI' | 'RN';
  measuresEnacted: string[];
  impactOnChildrenAndFamilies: string;
  impactOnRealEstateAndAgency: string;
  sourceReference: string;
}

export const realCitiesEvidenceList: CityEvidenceItem[] = [
  {
    city: 'Saint-Denis & Pierrefitte (93)',
    mayorOrMajority: 'Majorité de Gauche / LFI (Bally Bagayoko)',
    period: '2024 - Rentrée 2026',
    category: 'NFP_LFI',
    measuresEnacted: [
      'Gratuité à 100 % des kits de fournitures scolaires remis le premier jour d\'école à tous les élèves du CP au CM2.',
      'Aide de 300 € pour l\'équipement mobilité et sécurité des collégiens entrant en 6e.',
      'Généralisation de la cantine scolaire à tarif très bas ou gratuit.',
    ],
    impactOnChildrenAndFamilies: 'Économie directe de 250 € à 500 € par an et par enfant scolarisé, sans considération du niveau de revenus des parents.',
    impactOnRealEstateAndAgency: 'Encadrement strict des loyers en vigueur, limitant les investisseurs bailleurs spéculatifs mais sécurisant les jeunes ménages primo-accédants.',
    sourceReference: 'Banque des Territoires & Délibérations du Conseil Municipal de Saint-Denis (Septembre 2026)',
  },
  {
    city: 'Montpellier (34)',
    mayorOrMajority: 'Exécutif de Gauche / NFP (Michaël Delafosse)',
    period: '2021 - 2026',
    category: 'NFP_LFI',
    measuresEnacted: [
      'Gratuité intégrale des transports en commun (bus et tramway) pour tous les habitants de la métropole.',
      'Maintien d\'un budget culturel et musical élevé, finançant les écoles associatives et le conservatoire.',
      'Tarification progressive de l\'eau avec premiers m³ d\'eau vitaux gratuits.',
    ],
    impactOnChildrenAndFamilies: 'Économie annuelle de ~300 € par enfant pour les abonnements scolaires de transport et maintien de cours de musique accessibles.',
    impactOnRealEstateAndAgency: 'Mise en place de l\'encadrement des loyers créant des tensions sur l\'offre locative privée, mais attractivité renforcée pour les familles.',
    sourceReference: 'Rapport d\'activité Métropole de Montpellier & Revue Ville, Rail & Transports',
  },
  {
    city: 'Vénissieux & Villeurbanne (69)',
    mayorOrMajority: 'Majorité NFP / Écologistes / PCF',
    period: '2024 - 2026',
    category: 'NFP_LFI',
    measuresEnacted: [
      'Cantine scolaire 100% bio et locale avec gratuité pour les premières tranches de quotient.',
      'Périscolaire et centres de loisirs fortement subventionnés.',
      'Chèque sport et culture jeunes universel.',
    ],
    impactOnChildrenAndFamilies: 'Alimentation saine garantie et reste à charge réduit sur les activités sportives du mercredi.',
    impactOnRealEstateAndAgency: 'Encadrement des loyers de la Métropole de Lyon. Exigence accrue sur le DPE des logements en vente.',
    sourceReference: 'Comptes administratifs de la Ville de Vénissieux & Cour des Comptes',
  },
  {
    city: 'Fréjus (83) & Perpignan (66)',
    mayorOrMajority: 'Maires Rassemblement National (David Rachline / Louis Aliot)',
    period: '2020 - 2026',
    category: 'RN',
    measuresEnacted: [
      'Priorité budgétaire accordée à la police municipale (armement, effectifs) et au réseau de caméras de vidéoprotection.',
      'Maintien ou gel temporaire des taux communaux de la taxe foncière sur les propriétés bâties.',
      'Simplification des autorisations d\'urbanisme pour les lotissements privés.',
    ],
    impactOnChildrenAndFamilies: 'Pas de gratuité des repas scolaires. Tarification standard maintenue pour la cantine et le périscolaire.',
    impactOnRealEstateAndAgency: 'Climat perçu comme favorable aux propriétaires bailleurs et aux vendeurs de biens immobiliers de standing.',
    sourceReference: 'Chambre Régionale des Comptes PACA & Occitanie, Rapports 2021-2025',
  },
  {
    city: 'Hayange (57) & Beaucaire (30)',
    mayorOrMajority: 'Maires Rassemblement National (Fabien Engelmann / Julien Sanchez)',
    period: '2023 - 2026',
    category: 'RN',
    measuresEnacted: [
      'Suppression du ramassage scolaire municipal gratuit pour les élèves des écoles primaires à Hayange (Août 2026).',
      'Tentatives de restriction d\'accès à la cantine scolaire pour les enfants dont un parent ne travaille pas (annulées par le Conseil d\'État).',
      'Réduction drastique des subventions aux associations culturelles, musicales et caritatives locales.',
    ],
    impactOnChildrenAndFamilies: 'Coûts de transport et de périscolaire reportés sur les familles. Hausse des tarifs des cours d\'instruments dans les structures associatives locales privées de subventions.',
    impactOnRealEstateAndAgency: 'Absence d\'encadrement des loyers, mais environnement associatif et culturel fragilisé pouvant nuire à l\'attractivité résidentielle familiale.',
    sourceReference: 'Conseil d\'État n° 429399 & Chambre Régionale des Comptes Grand Est, Rapport Hayange 2024-2026',
  },
];
