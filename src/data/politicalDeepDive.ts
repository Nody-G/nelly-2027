export interface PolicyComparisonPoint {
  category: 'Fiscalité & Capital' | 'Vie Quotidienne & Enfants' | "Immobilier & Agence Nell'Immo" | 'Transmission & Retraite' | 'Bien Commun & Cadre de Vie';
  title: string;
  lfiProposal: {
    measure: string;
    legalInstrument: string;
    programSource: string;
    feasibilityProbability: 'Haute (>85%)' | 'Moyenne (50-70%)' | 'Conditionnelle (<40%)';
    feasibilityExplanation: string;
    whyAndHow: string;
    concreteEuroImpactNelly: string;
    riskOrDrawback: string;
  };
  rnProposal: {
    measure: string;
    legalInstrument: string;
    programSource: string;
    feasibilityProbability: 'Haute (>85%)' | 'Moyenne (50-70%)' | 'Conditionnelle (<40%)';
    feasibilityExplanation: string;
    whyAndHow: string;
    concreteEuroImpactNelly: string;
    riskOrDrawback: string;
  };
}

export const detailedPolicyComparisons: PolicyComparisonPoint[] = [
  {
    category: 'Fiscalité & Capital',
    title: 'Régime des Dividendes & Flat Tax (PFU)',
    lfiProposal: {
      measure: 'Suppression définitive du PFU (Flat Tax). Soumission de tous les dividendes aux cotisations sociales (~35%) et au barème progressif de l\'IR.',
      legalInstrument: 'Loi de Finances Initiale (Art. 34 Constitution)',
      programSource: 'Programme NFP Juin 2024 (Mesure n°18) & Livret Fiscalité LFI (Rapport chiffré p. 14)',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Exige le vote d\'une Loi de Finances. Sans majorité absolue à l\'Assemblée, nécessite le recours à l\'article 49.3 avec risque élevé de motion de censure immédiate.',
      whyAndHow: 'LFI entend aligner la fiscalité du capital sur celle du travail en supprimant le taux forfaitaire libératoire de 12,8% d\'IR + 17,2% PS pour réinjecter ~25 Mds€ dans les caisses de l\'État.',
      concreteEuroImpactNelly: 'Si Nelly ne change rien (30 000 € de dividendes passifs) : +5 500 € à +6 500 € d\'impôts et charges en plus par an. Si elle active les 6 leviers maison : 0 € d\'impact grâce au remplacement par du foncier réel et des CESU.',
      riskOrDrawback: 'Pression fiscale maximale sur les dividendes classiques des TPE non optimisées.'
    },
    rnProposal: {
      measure: 'Maintien de la Flat Tax à 30% (refus de toute surtaxe du capital mobilier) pour encourager l\'investissement dans l\'économie productive.',
      legalInstrument: 'Statu quo législatif ou amendement de confirmation au PLF',
      programSource: 'Programme RN 2022-2027 (Livret Économie p. 8) & Amendements PLF 2025 n° I-CF124',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Le maintien du PFU ne nécessite aucun texte de rupture : c\'est le droit positif en vigueur. Une majorité de droite ou de centre soutient ce statu quo.',
      whyAndHow: 'Le RN considère que surtaxer les dividendes des chefs d\'entreprise français ferait fuir les capitaux et fragiliserait les PME/TPE familiales.',
      concreteEuroImpactNelly: 'Maintien du taux standard à 30% (environ 9 000 € d\'impôt sur 30 000 € de dividendes). Gain nul par rapport au régime actuel, mais protection contre la surtaxe.',
      riskOrDrawback: 'Aucun allègement supplémentaire sur les dividendes par rapport à 2024.'
    }
  },
  {
    category: 'Fiscalité & Capital',
    title: 'Barème de l\'Impôt sur le Revenu & Quotient Familial',
    lfiProposal: {
      measure: 'Création d\'un barème progressif à 14 tranches (de 0% à 90%) et remplacement du quotient familial par un crédit d\'impôt forfaitaire universel par enfant.',
      legalInstrument: 'Loi de Finances Initiale',
      programSource: 'Programme NFP Juin 2024 & Proposition de Loi LFI n° 1248 (Assemblée Nationale)',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Projet emblématique de la gauche mais contesté par le Conseil constitutionnel si les tranches marginales supérieures dépassent le seuil confiscatoire (~66-70%).',
      whyAndHow: 'Lisser la progressivité de l\'IR pour alléger les revenus en dessous de 4 000 €/mois et surtaxer fortement les hauts patrimoines au-delà de 100 000 €/an.',
      concreteEuroImpactNelly: 'Sur son salaire net de 40 000 €, l\'IR reste modéré (taux moyen d\'environ 6% à 8%). Avec le crédit d\'impôt enfants, l\'IR est d\'environ 2 500 €.',
      riskOrDrawback: 'Disparition du mécanisme traditionnel du quotient familial qui profitait aux classes moyennes supérieures.'
    },
    rnProposal: {
      measure: 'Maintien des 5 tranches actuelles, mais octroi d\'une part fiscale pleine dès le 2e enfant (au lieu d\'une demi-part), et exonération totale d\'IR pour les moins de 30 ans.',
      legalInstrument: 'Loi de Finances Initiale',
      programSource: 'Programme RN « 22 mesures 2022-2027 » (Mesure n°4) & Amendements PLF 2024-2026',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Mesure populaire et consensuelle auprès de toutes les oppositions de droite. Faisable dès le premier budget.',
      whyAndHow: 'Politique nataliste : récompenser financièrement les familles ayant au moins 2 enfants pour redresser la démographie française.',
      concreteEuroImpactNelly: 'Comme Nelly a 2 filles en garde alternée, le 2e enfant passe de 0,25 part à 0,50 part : son foyer fiscal passe de 1,75 à 2,00 parts (ou 2,25 parts avec Case T), soit une baisse d\'IR de ~300 € à 500 €/an.',
      riskOrDrawback: 'Coût budgétaire élevé pour l\'État (estimé à 3 Mds€), risquant d\'accroître le déficit public.'
    }
  },
  {
    category: 'Fiscalité & Capital',
    title: 'Taxation des Ultra-Riches, ISF & Risque d\'Exil Fiscal',
    lfiProposal: {
      measure: 'Rétablissement de l\'ISF renforcé avec volet climatique (taux progressif jusqu\'à 2% ou 3% sur les patrimoines nets > 1,3 M€), « impôt universel » basé sur la nationalité (modèle FATCA) et Exit Tax renforcée sur 10 ans.',
      legalInstrument: 'Loi de Finances Initiale (Art. 34 Constitution) & Renégociation de conventions',
      programSource: 'Programme NFP Juin 2024 (Mesure n°19) & Livret Fiscalité LFI',
      feasibilityProbability: 'Conditionnelle (<40%)',
      feasibilityExplanation: 'Le rétablissement de l\'ISF est réalisable par simple loi de finances, mais l\'impôt universel sur la nationalité est bloqué par l\'Article 55 de la Constitution (120 conventions fiscales bilatérales fondées sur la résidence). L\'Exit Tax excessive est limitée par la CJUE.',
      whyAndHow: 'Faire contribuer les 1% et 0,1% les plus fortunés au financement de la transition écologique et des services publics, tout en prétendant neutraliser l\'exil fiscal par un passeport fiscal extraterritorial.',
      concreteEuroImpactNelly: 'La maison de 305 000 € de Nelly et son agence sont totalement exonérées de l\'ISF (seuil d\'entrée à 1,3 M€). En revanche, effet indirect majeur : assèchement des investisseurs locatifs privés à Pélissanne (-25% de mandats) et risque de report de la pression fiscale sur sa tranche (70k€).',
      riskOrDrawback: 'Exil réel des capitaux financiers très liquides (2 à 3 Mds€/an d\'actifs selon France Stratégie) et blocage juridique international de l\'impôt universel.'
    },
    rnProposal: {
      measure: 'Remplacement de l\'IFI (Impôt sur la Fortune Immobilière) par l\'IFF (Impôt sur la Fortune Financière) : exonération intégrale de la résidence principale et de l\'immobilier d\'habitation, taxation ciblée de la spéculation financière.',
      legalInstrument: 'Loi de Finances Initiale',
      programSource: 'Programme RN 2022-2027 (Mesure n°5) & Livret Fiscalité Marine Le Pen',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Modification classique de l\'assiette fiscale du patrimoine réalisable par une majorité parlementaire de droite.',
      whyAndHow: 'Le RN veut sanctuariser la pierre et la transmission des maisons familiales françaises en déplaçant l\'impôt sur les seuls portefeuilles d\'actions et placements financiers.',
      concreteEuroImpactNelly: 'Exonération totale pour son patrimoine immobilier (maison 305k€). Incite les épargnants fortunés de la région d\'Aix à acheter de l\'immobilier plutôt que des actions, stimulant temporairement la demande pour Nell\'Immo.',
      riskOrDrawback: 'Risque de fuite des capitaux financiers hors de France (actions d\'entreprises françaises vendues au profit de paradis fiscaux) et déficit budgétaire accru.'
    }
  },
  {
    category: 'Fiscalité & Capital',
    title: 'Équilibre Budgétaire Global, Déficit Public & Contraintes UE',
    lfiProposal: {
      measure: 'Plan de 152 Mds€ de dépenses sur 3 ans (puis 233 Mds€ selon Montaigne) compensé par une surtaxe des hauts patrimoines, superprofits et multinationales, avec rupture assumée avec le Pacte de Stabilité européen des 3%.',
      legalInstrument: 'Loi de Programmation des Finances Publiques & PLF',
      programSource: 'Contrat de Législature NFP 2024 & Rapport de chiffrage officiel',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'L\'Institut Montaigne et l\'OFCE évaluent le déficit net supplémentaire entre 60 et 179 Mds€/an en raison de recettes réelles inférieures aux prévisions (54 Mds€ constatées).',
      whyAndHow: 'La doctrine néo-keynésienne de LFI postule que l\'injection massive de liquidités par la demande (salaires, services gratuits) crée un multiplicateur budgétaire générant plus de recettes que de coûts.',
      concreteEuroImpactNelly: 'Gain immédiat en services gratuits (+3 587 €/an sur les 2 filles), mais risque de tension sur la dette publique française : le Spread OAT s\'élargit, faisant monter les taux d\'emprunt immobilier à 4,20% (+170 €/mois sur une maison de 305k€).',
      riskOrDrawback: 'Risque d\'escalade de la Procédure de Déficit Excessif ouverte par Bruxelles et dégradation de la note souveraine de la France.'
    },
    rnProposal: {
      measure: 'Plan de 85 Mds€ de baisses d\'impôts et dépenses (TVA 5,5% énergie, exonération IR -30 ans) financé théoriquement par 15 à 20 Mds€ d\'économies sur l\'immigration et 2 Mds€ de baisse de contribution à l\'UE.',
      legalInstrument: 'Loi de Finances Rectificative (PLFR)',
      programSource: 'Plan de Redressement RN & Chiffrages Jordan Bardella 2024-2026',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'L\'Institut Montaigne et la Cour des Comptes chiffrent le déficit net à +71 Mds€/an car l\'AME ne coûte qu\'1,2 Md€ et la préférence nationale sur les prestations sociales est inconstitutionnelle.',
      whyAndHow: 'Le RN veut redonner du pouvoir d\'achat par la baisse directe des prix de l\'énergie sans toucher à la fiscalité des entreprises privées ni des ménages aisés.',
      concreteEuroImpactNelly: 'Gain immédiat de +650 € sur l\'énergie et +500 € sur l\'IR, mais risque financier très violent : les marchés financiers anticipent une crise de la dette souveraine avec un Spread OAT bondissant à 110 bps, portant les taux de prêt à 4,65% (-17% de capacité d\'emprunt pour les clients de Nell\'Immo).',
      riskOrDrawback: 'Déficit public non financé risquant de déclencher un blocage du marché immobilier par le crédit bancaire.'
    }
  },
  {
    category: 'Vie Quotidienne & Enfants',
    title: 'Cantine Scolaire, Fournitures & Garderie (2 Filles)',
    lfiProposal: {
      measure: 'Gratuité totale de la cantine scolaire, du ramassage périscolaire et distribution gratuite d\'un kit complet de fournitures scolaires pour tous les élèves sans condition de ressources.',
      legalInstrument: 'Loi d\'orientation sur l\'école républicaine + dotations d\'État aux communes',
      programSource: 'Programme NFP Juin 2024 (Mesure n°29) & Rapport d\'application Ville de Saint-Denis Rentrée 2026',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Déjà testé et validé juridiquement dans plusieurs dizaines de communes de gauche (Saint-Denis, Pierrefitte, Vénissieux, Villeurbanne) sans obstacle constitutionnel.',
      whyAndHow: 'Sanctuariser le droit à l\'éducation gratuite pour neutraliser le coût de la rentrée pour toutes les familles, quel que soit leur quotient CAF.',
      concreteEuroImpactNelly: 'Économie directe de +1 040 € / an à Pélissanne (cantine primaire Cadette 287 € + cantine collège Aînée 490 € + fournitures 260 € = 1 037 € d\'économie nette).',
      riskOrDrawback: 'Risque de saturation des cantines et nécessité pour la commune d\'embaucher plus de personnel périscolaire.'
    },
    rnProposal: {
      measure: 'Maintien des tarifs communaux actuels de cantine et de garderie. Priorité donnée au contrôle d\'accès et à l\'approvisionnement 100% français/local.',
      legalInstrument: 'Autonomie des collectivités territoriales (Code Général des Collectivités Territoriales)',
      programSource: 'Livret Collectivités Locales RN & Délibérations mairies de Fréjus, Beaucaire, Hayange',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Application immédiate par les municipalités sans coût additionnel pour l\'État.',
      whyAndHow: 'Le RN refuse la gratuité universelle, estimant que les familles doivent contribuer au coût réel des repas pour ne pas surcharger les contribuables locaux.',
      concreteEuroImpactNelly: 'Économie nulle (0 €) sur la cantine : Nelly continue de payer le tarif haut de la tranche 5 à Pélissanne (4,10 €/repas) soit ~780 €/an + 240 € de fournitures.',
      riskOrDrawback: 'Hausse potentielle des tarifs périscolaires si les dotations de l\'État aux communes baissent.'
    }
  },
  {
    category: 'Vie Quotidienne & Enfants',
    title: 'Santé, Orthodontie (11 ans) & Pratique Musicale/Sportive',
    lfiProposal: {
      measure: 'Instauration du « 100% Sécu » (remboursement intégral de l\'orthodontie des ados, de l\'optique et des soins dentaires sans mutuelle privée) + Chèque culture & sport universel.',
      legalInstrument: 'Projet de Loi de Financement de la Sécurité Sociale (PLFSS)',
      programSource: 'L\'Avenir en Commun (Livret Santé) & Contrat de Législature NFP',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Réforme structurelle colossale de l\'Assurance Maladie nécessitant le redéploiement des cotisations des mutuelles privées vers la Sécurité Sociale.',
      whyAndHow: 'Supprimer les frais de gestion des complémentaires privées pour rembourser directement 100% des soins essentiels des enfants.',
      concreteEuroImpactNelly: 'Économie nette de +1 250 € / an sur l\'orthodontie et la mutuelle de sa fille de 11 ans + 520 € sur le piano et le sport = +1 770 € / an de pouvoir d\'achat.',
      riskOrDrawback: 'Délai d\'attente potentiel accru chez les orthodontistes conventionnés secteur 1.'
    },
    rnProposal: {
      measure: 'Maintien du système dual Sécurité Sociale + Mutuelle privée. Baisse de la TVA à 5,5% sur les équipements sportifs et instruments de musique.',
      legalInstrument: 'Loi de Finances Initiale',
      programSource: 'Programme RN 2022-2027 (Livret Santé & Pouvoir d\'achat p. 11)',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Ne bouscule pas l\'architecture de santé existante et s\'appuie sur une simple baisse de taux de TVA sectorielle.',
      whyAndHow: 'Le RN privilégie l\'incitation fiscale par la TVA plutôt que l\'étatisation de la couverture santé complémentaire.',
      concreteEuroImpactNelly: 'Économie modeste sur les fournitures et instruments (-120 €/an), mais reste à charge orthodontie inchangé (~700 €/an à la charge de Nelly et de sa mutuelle).',
      riskOrDrawback: 'Baisse fréquente des subventions aux associations musicales et culturelles dans les municipalités RN, renchérissant le coût des cours de piano.'
    }
  },
  {
    category: "Immobilier & Agence Nell'Immo",
    title: 'Régulation Locative (DPE, Loyers) & Taux d\'Emprunt Bancaire',
    lfiProposal: {
      measure: 'Encadrement généralisé des loyers, interdiction des expulsions locatives sans relogement et mise en place de la Garantie Universelle des Loyers (GUL).',
      legalInstrument: 'Loi d\'urgence pour le logement',
      programSource: 'Contrat de Législature NFP (Chapitre Logement) & Livret LFI Logement',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'L\'encadrement des loyers s\'applique par arrêté préfectoral rapide (déjà actif à Paris, Lille, Lyon, Montpellier, Bordeaux).',
      whyAndHow: 'Enrayer la spéculation immobilière et protéger les locataires contre la hausse excessive des quittances.',
      concreteEuroImpactNelly: "Impact agence Nell'Immo : -10% sur les ventes d'investissement locatif privé, mais compensation immédiate par la gestion locative sous GUL (+14 400 € HT/an).",
      riskOrDrawback: 'Attentisme des investisseurs bailleurs privés à Pélissanne et Salon-de-Provence.'
    },
    rnProposal: {
      measure: 'Abrogation ou moratoire de 5 ans sur les interdictions de louer liées au DPE (passoires thermiques G et F autorisées à la location), refus d\'encadrement des loyers.',
      legalInstrument: 'Proposition de Loi de simplification du logement (abrogation partielle Loi Climat)',
      programSource: 'Amendements RN n° CE356 Loi Climat & Résilience et Déclarations officielles groupe RN 2024-2026',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Soutenu par la droite républicaine et les fédérations immobilières (FNAIM, UNIS). Majorité parlementaire très probable sur ce point.',
      whyAndHow: 'Remettre sur le marché les 1,5 million de logements menacés d\'interdiction de louer pour débloquer la crise du logement locatif.',
      concreteEuroImpactNelly: "Opportunité immédiate pour Nell'Immo : +10% à +15% de mandats de vente libérés sur les maisons anciennes de Pélissanne.",
      riskOrDrawback: 'Risque macroéconomique de spread OAT : si la dette souveraine se tend, les taux de crédit bancaire montent à 4,2-4,5%, faisant perdre 10% de capacité d\'emprunt aux acquéreurs de Nell\'Immo.'
    }
  },
  {
    category: "Immobilier & Agence Nell'Immo",
    title: 'TVA Énergie, Carburants & Factures du Foyer',
    lfiProposal: {
      measure: 'Gratuité des premiers mètres cubes d\'eau vitaux, blocage des prix de l\'électricité et du gaz par décret, sortie du marché européen de l\'énergie.',
      legalInstrument: 'Décret présidentiel / ministériel (Code de l\'énergie Art. L410-2)',
      programSource: 'Programme NFP Juin 2024 (Mesure n°2) & Livret Énergie LFI',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Le blocage des prix par décret est juridiquement possible en situation de crise, mais la sortie des règles européennes de concurrence expose à un contentieux avec Bruxelles.',
      whyAndHow: 'Faire baisser les tarifs au niveau du coût réel de production du parc nucléaire et hydraulique français (~45-50 €/MWh).',
      concreteEuroImpactNelly: 'Économie annuelle de +750 € sur l\'électricité, la climatisation réversible et l\'eau de la maison de 305k€ à Pélissanne.',
      riskOrDrawback: 'Risque de déficit des opérateurs publics (EDF) si l\'État ne compense pas intégralement le gel tarifaire.'
    },
    rnProposal: {
      measure: 'Baisse immédiate et pérenne du taux de TVA de 20% à 5,5% sur tous les produits énergétiques : électricité, gaz, fioul et carburants automobiles.',
      legalInstrument: 'Loi de Finances Rectificative (PLFR) adoptée en session extraordinaire',
      programSource: 'Programme RN « 22 mesures » (Mesure n°1) & Proposition de Loi RN n° 29 Assemblée Nationale',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Mesure prioritaire n°1 affichée par Jordan Bardella pour l\'été 2027. Dérogations fiscales sur l\'énergie autorisées par la directive européenne TVA révisée.',
      whyAndHow: 'Rendre du pouvoir d\'achat direct aux ménages et aux entreprises dépendantes de la voiture pour leurs déplacements professionnels.',
      concreteEuroImpactNelly: "Économie de +650 €/an sur l'électricité de la maison de 305k€ + économie directe sur le carburant du véhicule de fonction de Nell'Immo.",
      riskOrDrawback: 'Coût colossal pour le budget de l\'État (estimé à 12 à 15 Mds€/an) sans recette de compensation identifiée.'
    }
  },
  {
    category: 'Transmission & Retraite',
    title: 'Donation Maison 305k€ & Droits de Succession aux 2 Filles',
    lfiProposal: {
      measure: 'Plafonnement des très gros héritages (héritage maximum au-delà de 12 millions d\'euros), maintien de l\'abattement légal de 100 000 € par enfant pour les patrimoines moyens.',
      legalInstrument: 'Loi de Finances Initiale',
      programSource: 'L\'Avenir en Commun (Livret Fiscalité) & Programme NFP Juin 2024',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Le plafonnement absolu à 100% au-delà d\'un seuil a été jugé inconstitutionnel par le Conseil Constitutionnel (droit de propriété) ; une surtaxe progressive reste toutefois possible.',
      whyAndHow: 'Combattre la concentration dynastique des méga-patrimoines tout en protégeant les résidences familiales des classes moyennes.',
      concreteEuroImpactNelly: '0 € de droits de succession pour ses 2 filles : en donnant la nue-propriété (Art. 669 CGI), la valeur transmise n\'est que de 61 000 €/fille, bien sous les 100 000 €.',
      riskOrDrawback: 'Aucun risque pour la maison de 305 000 € de Nelly. Risque uniquement pour les patrimoines supérieurs à 1 million d\'euros.'
    },
    rnProposal: {
      measure: 'Exonération des donations et successions jusqu\'à 100 000 € par enfant tous les 10 ans (au lieu de 15 ans) et exonération des donations de grands-parents jusqu\'à 50 000 €.',
      legalInstrument: 'Loi de Finances Initiale',
      programSource: 'Programme RN « 22 mesures » (Mesure n°10) & Amendements PLF 2025',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Mesure de transmission patrimoniale très consensuelle à l\'Assemblée Nationale.',
      whyAndHow: 'Faciliter la transmission du patrimoine entre générations de son vivant pour aider les jeunes à s\'installer plus tôt.',
      concreteEuroImpactNelly: '0 € de droits de mutation. Permet en outre à Nelly de renouveler une donation défiscalisée tous les 10 ans au lieu de 15 ans si son patrimoine s\'accroît.',
      riskOrDrawback: 'Favorise davantage les patrimoines détenant plusieurs biens immobiliers.'
    }
  },
  {
    category: 'Transmission & Retraite',
    title: 'Âge Légal de Départ à la Retraite & Annuités',
    lfiProposal: {
      measure: 'Abrogation immédiate de la loi de 2023 et rétablissement de la retraite à 60 ans à taux plein avec 40 annuités de cotisation.',
      legalInstrument: 'Loi ordinaire d\'abrogation dès l\'été 2027',
      programSource: 'Programme NFP Juin 2024 (Mesure prioritaire n°1) & Proposition d\'abrogation déposée à l\'AN',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Une majorité parlementaire d\'abrogation existe potentiellement à l\'Assemblée Nationale (gauche + RN opposés aux 64 ans).',
      whyAndHow: 'Permettre aux actifs de profiter de leur retraite en bonne santé et libérer des emplois pour les jeunes.',
      concreteEuroImpactNelly: 'Gain financier et personnel massif : Nelly peut liquider sa retraite 4 ans plus tôt (à 60 ans au lieu de 64 ans), touchant 4 années supplémentaires de pension (environ +100 800 € cumulés).',
      riskOrDrawback: 'Nécessite de financer le déficit du régime des retraites par des cotisations sur les hauts salaires et les dividendes.'
    },
    rnProposal: {
      measure: 'Retraite à 60 ans réservée uniquement aux personnes ayant commencé à travailler avant 20 ans avec 40 annuités. Pour les autres, départ progressif entre 62 et 63 ans.',
      legalInstrument: 'Loi de réforme des retraites',
      programSource: 'Programme RN 2022-2027 (Déclarations Jordan Bardella Juin 2024) & Fiche Retraite RN',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Le coût de retour partiel à 60/62 ans impose un étalement dans le temps sous contrainte des règles budgétaires européennes.',
      whyAndHow: 'Récompenser prioritairement les carrières longues et pénibles ayant débuté jeunes dans l\'artisanat ou l\'industrie.',
      concreteEuroImpactNelly: 'Comme Nelly est dirigeante d\'entreprise ayant fait des études supérieures, elle ne relève pas des carrières longues précoces : son âge de départ se situerait à 62-63 ans (gain de 1 à 2 ans par rapport à la loi actuelle).',
      riskOrDrawback: 'Flou persistant sur l\'âge exact de départ pour les professions indépendantes et gérants de société.'
    }
  },
  {
    category: 'Vie Quotidienne & Enfants',
    title: 'Financement des Études Supérieures des Filles (2033 & 2039)',
    lfiProposal: {
      measure: 'Allocation d\'autonomie universelle de 1 063 € net par mois versée directement à chaque jeune dès 18 ans, repas CROUS à 1 € pour tous et gratuité intégrale des droits d\'inscription universitaire.',
      legalInstrument: 'Loi de programmation pour la jeunesse et l\'enseignement supérieur',
      programSource: 'Programme NFP Juin 2024 (Mesure n°28) & Livret LFI Jeunesse',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Coût annuel évalué à 10 Mds€. Faisable si le budget global est adopté, mais risque de rabotage des montants sous contrainte budgétaire.',
      whyAndHow: 'Garantir l\'indépendance financière des étudiants sans dépendre du revenu parental et éradiquer la précarité étudiante.',
      concreteEuroImpactNelly: "Gain financier colossal pour Nelly : +12 756 € / an par fille à partir de ses 18 ans (soit +25 512 € / an d'économie de cash quand les 2 filles seront en études). Nelly n'a pas à payer de loyer étudiant sur ses dividendes.",
      riskOrDrawback: 'Risque de saturation des filières universitaires et d\'augmentation de la sélection d\'entrée.'
    },
    rnProposal: {
      measure: 'Maintien des bourses d\'État sur critères sociaux actuels et de mérite, réservées prioritairement aux familles modestes de nationalité française. Refus de toute allocation universelle.',
      legalInstrument: 'Loi de Finances Initiale',
      programSource: 'Programme RN 2022-2027 (Livret Enseignement Supérieur & Jeunesse)',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Statu quo budgétaire sur les bourses d\'État sans création de nouvelle dépense publique massive.',
      whyAndHow: 'Le RN estime que les parents ayant des revenus confortables (70 000 €) doivent assumer intégralement la subsistance de leurs enfants majeurs.',
      concreteEuroImpactNelly: '0 € d\'aide de l\'État. En tant que dirigeante gagnant 70 000 €, Nelly dépasse tous les plafonds de bourse CROUS. Elle devra financer elle-même les logements étudiants à Aix ou Marseille (~1 000 €/mois/fille, soit 24 000 €/an sur fonds propres).',
      riskOrDrawback: 'Coût intégralement supporté par la trésorerie de Nelly au moment où ses filles entrent en études supérieures (2033 et 2039).'
    }
  },
  {
    category: "Immobilier & Agence Nell'Immo",
    title: 'Honoraires d\'Agence (Loi Hoguet) & Frais de Notaire (DMTO)',
    lfiProposal: {
      measure: 'Projet de plafonnement des honoraires de transaction des agences immobilières (limitation à 2% - 2,5% max ou barème légal dégressif) et hausse des DMTO de 4,5% à 5,5% pour financer les départements.',
      legalInstrument: 'Amendements Loi Hoguet & Loi de Finances (Art. 1594 D du CGI)',
      programSource: 'Propositions d\'amendements LFI PLF 2024-2025 sur les frais d\'intermédiation et rapports de la Commission des Finances',
      feasibilityProbability: 'Conditionnelle (<40%)',
      feasibilityExplanation: 'Le plafonnement des honoraires de vente se heurte au principe constitutionnel de la liberté contractuelle et du commerce (décision Conseil constitutionnel), mais la hausse des DMTO est très facilement adoptée.',
      whyAndHow: 'Faire baisser le coût total d\'acquisition pour les ménages modestes en réduisant la part des intermédiaires et en alimentant les caisses départementales.',
      concreteEuroImpactNelly: "Vigilance extrême pour Nell'Immo : si les honoraires sont encadrés, la commission moyenne passe de 3,5% à 2,5% (-2 500 € par transaction). De plus, la hausse des DMTO alourdit les frais de notaire de +2 500 € sur une maison de 250 000 € à Pélissanne, freinant les acheteurs.",
      riskOrDrawback: 'Pression baissière sur le chiffre d\'affaires de transaction de l\'agence Nell\'Immo.'
    },
    rnProposal: {
      measure: 'Liberté contractuelle totale des honoraires d\'agence (refus de tout plafonnement d\'État), suppression des hausses de DMTO et allègement des démarches d\'enregistrement.',
      legalInstrument: 'Maintien de la liberté des prix (Code de commerce & Loi Hoguet)',
      programSource: 'Programme Économique RN 2022-2027 & Prises de position FNAIM',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Le modèle libéral d\'intermédiation est la règle en vigueur. Aucune remise en cause.',
      whyAndHow: 'Protéger les agences indépendantes et le réseau des commerçants de proximité face à l\'ingérence administrative de l\'État.',
      concreteEuroImpactNelly: "Totale liberté commerciale pour Nell'Immo : Nelly conserve la maîtrise de son barème d'honoraires (3,0% ou 3,5% sur mandat exclusif, 4,5% sur mandat simple) sans contrainte réglementaire.",
      riskOrDrawback: 'Concurrence féroce maintenue entre agences traditionnelles et réseaux de mandataires indépendants à bas coûts.'
    }
  },
  {
    category: "Immobilier & Agence Nell'Immo",
    title: 'Coût Salarial si Recrutement dans l\'Agence (Négociateur / Assistant)',
    lfiProposal: {
      measure: 'Revalorisation immédiate du SMIC à 1 600 € net (environ 2 090 € brut) et suppression progressive des allègements généraux de cotisations patronales (« allègements Fillon ») au-delà de 1,2 SMIC.',
      legalInstrument: 'Décret du Ministère du Travail (Art. L. 3231-2 C. trav.) et Loi de Finances de la Sécurité Sociale (PLFSS)',
      programSource: 'Programme NFP Juin 2024 (Mesure n°3) & Livret Travail LFI',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Le SMIC net peut être relevé par simple décret en Conseil des ministres dès les 15 premiers jours de mandat sans vote du Parlement.',
      whyAndHow: 'Permettre aux salariés de vivre dignement de leur travail face à l\'inflation et forcer le partage de la valeur ajoutée dans les entreprises.',
      concreteEuroImpactNelly: "Si Nell'Immo souhaite embaucher un(e) assistant(e) ou un négociateur salarié junior : le coût annuel employeur passe d'environ 26 000 € à 31 500 € (+5 500 € / an de charges salariales pour Nell'Immo). Incite Nelly à travailler seule ou avec des agents commerciaux indépendants sous statut mandataire (RSAC).",
      riskOrDrawback: 'Frein direct à l\'embauche de salariés pour les TPE unipersonnelles comme Nell\'Immo.'
    },
    rnProposal: {
      measure: 'Dispositif « Hausse de 10% des salaires sans cotisations patronales » : exonération totale de cotisations patronales pendant 5 ans sur toute augmentation de salaire jusqu\'à 3 SMIC, sans hausse imposée du SMIC légal.',
      legalInstrument: 'Loi de relance économique d\'urgence',
      programSource: 'Programme RN « 22 mesures » (Mesure n°2) & Déclarations Jordan Bardella',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Le Conseil constitutionnel surveille les ruptures d\'égalité devant l\'impôt sur les exonérations ciblées sans contrepartie.',
      whyAndHow: 'Inciter les patrons de PME/TPE à augmenter les salaires par la baisse de charges plutôt que par une hausse obligatoire du SMIC.',
      concreteEuroImpactNelly: "Si Nell'Immo rémunère un collaborateur ou un jeune de moins de 30 ans : exonération d'IR pour le salarié et souplesse sur les cotisations patronales. Moins de pression financière sur la masse salariale de l'agence.",
      riskOrDrawback: 'Aucune garantie de hausse de pouvoir d\'achat pour les salariés si l\'employeur ne choisit pas d\'augmenter volontairement.'
    }
  },
  {
    category: 'Vie Quotidienne & Enfants',
    title: 'Subventions Locales Culture & Sport (Piano 400 € & Escalade 400 €)',
    lfiProposal: {
      measure: 'Plan d\'urgence pour la culture et le sport associatif : sanctuarisation des dotations aux collectivités territoriales, chèque culture & sport de 150 € à 200 € par enfant et péréquation républicaine.',
      legalInstrument: 'Loi de Finances Initiale (Mission Culture & Jeunesse)',
      programSource: 'Programme NFP Juin 2024 & Livret Sport et Culture Populaire LFI',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Financement par les dotations globales de fonctionnement (DGF) réorientées vers les communes.',
      whyAndHow: 'Garantir l\'accès universel à la pratique artistique (piano, musique) et sportive pour tous les enfants.',
      concreteEuroImpactNelly: 'Les tarifs de l\'École Municipale de Musique de Pélissanne et du club d\'escalade restent modérés et subventionnés (-150 € à -200 € d\'économie par fille grâce au chèque culture/sport).',
      riskOrDrawback: 'Centralisation accrue des critères d\'attribution des subventions associatives.'
    },
    rnProposal: {
      measure: 'Baisse drastique des subventions aux associations culturelles et artistiques jugées non prioritaires au niveau municipal et départemental, réorientation vers la sécurité et la police municipale.',
      legalInstrument: 'Délibérations budgétaires des communes et des départements',
      programSource: 'Audit des politiques culturelles dans les municipalités RN (Rapports Cour des Comptes & Observatoire de la liberté de création : Fréjus, Hayange, Beaucaire, Perpignan)',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Pouvoir discrétionnaire total des maires et conseils départementaux sur l\'attribution des subventions aux associations locales.',
      whyAndHow: 'Le RN estime que les activités culturelles spécialisées doivent être financées par leurs usagers directs et non par les impôts locaux de tous les contribuables.',
      concreteEuroImpactNelly: 'Effet pervers réel constaté sur le terrain : si les subventions de l\'école de musique ou du club d\'escalade sont coupées, les structures répercutent le coût sur les familles. Le cours de piano de l\'aînée risque de passer de 400 € à 650 € - 750 € / an (+250 € à +350 € de reste à charge pour Nelly).',
      riskOrDrawback: 'Augmentation directe du coût des activités extrascolaires pour les familles de la classe moyenne.'
    }
  },
  {
    category: 'Vie Quotidienne & Enfants',
    title: 'Allocations Familiales & Universalité en Garde Alternée',
    lfiProposal: {
      measure: 'Revalorisation de 10% des allocations familiales, création d\'une allocation universelle dès le 1er enfant, maintien du principe de modulation progressive selon le revenu familial.',
      legalInstrument: 'Projet de Loi de Financement de la Sécurité Sociale (PLFSS)',
      programSource: 'Programme NFP Juin 2024 (Mesure n°26) & Livret Famille LFI',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Mesure classique de politique familiale relevant de la branche Famille de la Sécurité Sociale (CNAF).',
      whyAndHow: 'Soutenir le niveau de vie de toutes les familles dès la première naissance pour éradiquer la pauvreté infantile.',
      concreteEuroImpactNelly: 'Avec 70 000 € de revenu et 2 enfants en garde alternée, Nelly toucherait une allocation d\'environ +45 € à +60 € / mois (+540 € à +720 € / an), contre 0 € actuellement sous le régime Macron.',
      riskOrDrawback: 'Modulation maintenant un niveau d\'aide plus faible pour la classe moyenne supérieure.'
    },
    rnProposal: {
      measure: 'Rétablissement de l\'universalité totale des allocations familiales dès le 1er enfant pour tous les foyers français sans condition de ressources, et part fiscale pleine dès le 2e enfant.',
      legalInstrument: 'Loi de Finances Initiale & PLFSS (Code de la Sécurité Sociale Art. L. 521-1)',
      programSource: 'Programme RN 2022-2027 (Mesure n°4) & Livret Famille Marine Le Pen',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Suppression du décret Touraine de 2015 qui avait mis fin à l\'universalité des allocations familiales. Très forte attente populaire.',
      whyAndHow: 'Relancer la natalité française en considérant que chaque enfant de la République doit ouvrir droit aux mêmes allocations familiales, quel que soit le revenu des parents.',
      concreteEuroImpactNelly: 'Gain net direct majeur pour Nelly : versement direct d\'environ +75 € à +110 € / mois (+900 € à +1 320 € / an) au titre de ses 2 filles en garde alternée + gain d\'IR de +450 € / an grâce à la part fiscale pleine dès le 2e enfant.',
      riskOrDrawback: 'Coût budgétaire élevé pour la branche famille (estimé à 2,5 Mds€), réservé aux familles de nationalité française.'
    }
  },
  {
    category: 'Bien Commun & Cadre de Vie',
    title: 'Santé Publique, Urgences & Hôpital de Salon-de-Provence',
    lfiProposal: {
      measure: 'Grand plan de réhabilitation de l\'hôpital public : embauche de 100 000 soignants, réouverture de 50 000 lits, arrêt immédiat de la tarification à l\'activité (T2A) et création de centres de santé pluridisciplinaires publics avec médecins salariés pour en finir avec les déserts médicaux.',
      legalInstrument: 'Loi de programmation pour la santé publique & PLFSS',
      programSource: 'Programme NFP Juin 2024 & Livret Santé LFI',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Exige une réorientation massive des flux financiers de l\'Assurance Maladie et une négociation tendue avec les cliniques privées commerciales.',
      whyAndHow: 'Garantir l\'égal accès aux soins d\'urgence et pédiatriques à moins de 20 minutes de chaque foyer sans dépassement d\'honoraires.',
      concreteEuroImpactNelly: 'Désengorgement direct des urgences de l\'Hôpital de Salon-de-Provence et pédiatrie d\'Aix-en-Provence. Nelly n\'attend plus 6 à 8 heures avec sa fille de 5 ans en cas d\'accident sportif (escalade) ou urgence médicale nocturne.',
      riskOrDrawback: 'Délai de formation des nouveaux soignants (3 à 5 ans minimum avant effet concret).'
    },
    rnProposal: {
      measure: 'Suppression des Agences Régionales de Santé (ARS), réaffectation des effectifs administratifs vers l\'encadrement hospitalier, arrêt total de l\'Aide Médicale d\'État (AME) pour la réinjecter dans les urgences, et exonération totale d\'impôt pendant 5 ans pour les jeunes médecins s\'installant dans les zones sous-dotées.',
      legalInstrument: 'Loi d\'urgence pour la refondation sanitaire',
      programSource: 'Programme RN Santé 2022-2027 & Déclarations Jordan Bardella 2024',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'La réorganisation administrative des ARS et l\'incitation fiscale pour médecins sont soutenues par les collectivités territoriales.',
      whyAndHow: 'Débureaucratiser l\'hôpital public pour remettre les financements directement au lit du patient et attirer les généralistes en zone rurale et périurbaine.',
      concreteEuroImpactNelly: 'Amélioration de la présence médicale de garde dans le secteur Pélissanne / Salon-de-Provence grâce aux incitations fiscales pour jeunes généralistes.',
      riskOrDrawback: 'La suppression de l\'AME (1,2 Md€) ne suffit absolument pas à financer les besoins colossaux des hôpitaux publics (déficit de plus de 15 Mds€).'
    }
  },
  {
    category: 'Bien Commun & Cadre de Vie',
    title: 'Écoles de Pélissanne, Canicules & Gestion de l\'Eau (Touloubre)',
    lfiProposal: {
      measure: 'Plan « Urgence Canicule Écoles » : rénovation thermique et climatisation éco-responsable des bâtiments scolaires dans le Sud, limitation à 20 élèves par classe en élémentaire, et sanctuarisation de la gestion publique de l\'eau face aux sécheresses et crues de la Touloubre.',
      legalInstrument: 'Plan de bifurcation écologique de 200 Mds€ & Dotations d\'équipement des territoires ruraux (DETR)',
      programSource: 'Programme NFP Juin 2024 (Mesures n°31 & 35) & Livret Eau LFI',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Nécessite la mobilisation des banques publiques (Banque des Territoires / Caisse des Dépôts) pour financer les travaux communaux.',
      whyAndHow: 'Protéger la santé des enfants en classe face aux canicules récurrentes à Pélissanne (40°C en juin-septembre) et sécuriser la ressource en eau potable provençale.',
      concreteEuroImpactNelly: 'Sa fille de 5 ans et son aînée de 11 ans étudient dans des classes tempérées et isolées (écoles Victor Hugo, Roux de Brignoles, Collège Roger Carcassonne) plutôt que dans des bâtiments étouffants.',
      riskOrDrawback: 'Pression fiscale accrue sur les hauts patrimoines pour financer le fonds vert d\'État.'
    },
    rnProposal: {
      measure: 'Refus des normes écologiques européennes contraignantes, moratoire sur les interdictions DPE, soutien direct aux communes pour l\'entretien des cours d\'eau et bassins de rétention contre les inondations, et relance massive du nucléaire.',
      legalInstrument: 'Loi de simplification des normes environnementales',
      programSource: 'Programme RN Écologie de terroir & Amendements Loi Climat',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Forte convergence avec les maires ruraux et les fédérations du BTP pour alléger les contraintes réglementaires.',
      whyAndHow: 'Protéger le pouvoir d\'achat des ménages contre « l\'écologie punitive » tout en finançant la sécurité physique face aux intempéries.',
      concreteEuroImpactNelly: 'Travaux de digues et de curage de la Touloubre facilités sans blocage administratif environnemental pour protéger sa maison de 305k€ contre les risques d\'inondation.',
      riskOrDrawback: 'Absence de plan d\'adaptation massif face au réchauffement climatique extrême dans le Sud de la France.'
    }
  },
  {
    category: 'Bien Commun & Cadre de Vie',
    title: 'Sécurité Locale, Tranquillité Publique & Justice des Mineurs',
    lfiProposal: {
      measure: 'Rétablissement de la police républicaine de proximité (îlotiers de quartier formés à la désescalade), démantèlement des brigades jugées conflictuelles, abolition du contrôle au faciès (récépissé de contrôle), et justice des mineurs axée sur l\'éducation et la réinsertion.',
      legalInstrument: 'Loi d\'orientation et de programmation du Ministère de l\'Intérieur (LOPMI)',
      programSource: 'Programme NFP Juin 2024 & Livret Sécurité et Libertés LFI',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Hostilité syndicale policière importante nécessitant une reprise en main politique complète de l\'institution.',
      whyAndHow: 'Recréer le lien de confiance entre la jeunesse et les forces de l\'ordre par une présence pédestre bienveillante et dissuasive.',
      concreteEuroImpactNelly: 'Climat d\'apaisement dans les transports scolaires et aux abords du collège Roger Carcassonne pour ses 2 filles, mais craintes d\'une réponse pénale trop clémente face aux incivilités récurrentes.',
      riskOrDrawback: 'Risque de sentiment d\'impunité si la réponse pénale immédiate tarde à intervenir.'
    },
    rnProposal: {
      measure: 'Tolérance zéro : peines planchers obligatoires pour les atteintes aux personnes, fin des réductions automatiques de peine, abaissement de la majorité pénale à 16 ans, armement généralisé des polices municipales et construction de 20 000 places de prison.',
      legalInstrument: 'Projet de Loi de Sécurité Nationale & Réforme du Code Pénal',
      programSource: 'Programme RN Sécurité & Justice 2022-2027',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Très large consensus à droite et soutien massif des syndicats de forces de l\'ordre.',
      whyAndHow: 'Rétablir l\'autorité républicaine et la certitude de la sanction pour protéger les citoyens honnêtes et pacifier l\'espace public.',
      concreteEuroImpactNelly: 'Renforcement immédiat de la police municipale de Pélissanne et présence de patrouilles armées aux abords des écoles et des commerces. Sécurité maximale pour ses 2 filles dans leurs trajets quotidiens (piano, escalade, collège).',
      riskOrDrawback: 'Coût carcéral très élevé (plus de 5 Mds€) et risque de tensions accrues dans les quartiers périphériques des grandes villes voisines (Salon, Marseille).'
    }
  }
];
