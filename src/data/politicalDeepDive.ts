export interface PolicyComparisonPoint {
  category:
    | 'Fiscalité & Capital'
    | 'Vie Quotidienne & Enfants'
    | "Immobilier & Agence Nell'Immo"
    | 'Transmission & Retraite'
    | 'Bien Commun & Cadre de Vie';
  title: string;
  continuiteSummary: string;
  droiteSummary: string;
  deepCrossMechanism: string;
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

export interface SystemicCrossInteraction {
  id: string;
  title: string;
  axesCroises: string;
  mechanismChain: string;
  documentedProofAndSources: string;
  impactContinuite: string;
  impactLFI: string;
  impactRN: string;
  impactDroite: string;
  strategicParadeForNelly: string;
}

/**
 * 6 Croisements Systémiques Multi-Facteurs (Effets de Second Tour Documentés)
 * Croisant : Fiscalité SASU × Marché Immobilier × Dette Souveraine (OAT) × Budget Communal Pélissanne × Cycle de Vie des 2 Filles
 */
export const systemicCrossInteractions: SystemicCrossInteraction[] = [
  {
    id: 'cross_oat_immo_ca',
    title: 'Croisement 1 : Déficit Public × Spread OAT 10 ans × Taux Crédit 305k€ × Chiffre d\'Affaires Nell\'Immo',
    axesCroises: 'Politique Budgétaire Nationale ↔ Marché Obligataire Européen ↔ Solvabilité Acquéreurs Pélissanne',
    mechanismChain:
      'Lorsqu\'un programme dégrade le solde public primaire sans financement crédible (+110 à +179 Mds€ bruts sous NFP, +71 Mds€ nets sous RN selon l\'Institut Montaigne), les investisseurs internationaux exigent une prime de risque sur l\'OAT française à 10 ans (+85 bps à +120 bps). Or les banques françaises indexent leurs grilles de crédit immobilier sur l\'OAT 10 ans + marge de 70 bps. Chaque hausse de +1% des taux d\'intérêt ampute de -9,5% le pouvoir d\'achat immobilier des ménages à mensualité constante (Haut Conseil de Stabilité Financière - HCSF, norme d\'endettement 35%).',
    documentedProofAndSources:
      'Sources : Chiffrage Institut Montaigne Juin 2024 ; Banque de France (Corrélation OAT 10 ans / Taux des crédits nouveaux à l\'habitat) ; Règlement HCSF D-2021-16 (plafond 35% assurance incluse).',
    impactContinuite: 'OAT ~3,10% → Crédit 3,45%. Mensualité maison 305k€ = 1 196 €/mois. Marché Pélissanne stable (CA 130 000 € HT).',
    impactLFI: 'OAT ~3,85% → Crédit 4,20%. Surcoût crédit +1 080 €/an (+90 €/mois) et recul des investisseurs privés (-12% CA transactions), partiellement compensé par la Garantie Universelle des Loyers (+14 400 € gestion).',
    impactRN: 'OAT ~4,15% → Crédit 4,55%. Surcoût crédit +1 560 €/an (+130 €/mois). Malgré l\'abrogation du DPE (+12% de biens mis en vente), l\'insolvabilité bancaire des primo-accédants bloque une partie des compromis.',
    impactDroite: 'OAT ~2,85% → Crédit 3,20%. Économie crédit -420 €/an (-35 €/mois) et retour des investisseurs bailleurs (+6% CA Nell\'Immo).',
    strategicParadeForNelly:
      'Signer l\'offre de prêt à taux fixe pour la maison de 305 000 € AVANT l\'échéance électorale de 2027 (en Continuité à ~3,45%), puis renégocier uniquement si les taux baissent (scénario Droite), tout en développant un portefeuille de 15 lots en gestion locative récurrente.',
  },
  {
    id: 'cross_pfu_bureau_is',
    title: 'Croisement 2 : Suppression du PFU × Loyer Bureau SASU (Art. 39-1 CGI) × Tranche Réduite IS 15%',
    axesCroises: 'Fiscalité des Dividendes ↔ Comptabilité SASU Nell\'Immo ↔ Revenus Fonciers Réels (25 m²)',
    mechanismChain:
      'Si Nelly laisse 30 000 € en bénéfice distribuable passif : la SASU paie d\'abord 15% d\'IS (Art. 219-I-b CGI, soit 4 500 €), puis Nelly subit 31,4% de PFU (Continuité/RN/Droite) ou ~43% de prélèvements cumulés sous le barème progressif LFI à 14 tranches + CSG. En revanche, en facturant 7 200 €/an de loyer bureau (25 m² de la maison de 305k€) + 3 600 €/an de redevance publicitaire sur le mur donnant sur l\'axe passant : ces 10 800 € deviennent une charge déductible de l\'IS (économisant 1 620 € d\'IS) et sont perçus par Nelly en revenus fonciers réels, intégralement gommés par la quote-part des intérêts d\'emprunt et de la taxe foncière (Art. 31-I-1° CGI).',
    documentedProofAndSources:
      'Sources : Art. 39-1-1° CGI (charges déductibles), Art. 31-I-1° CGI (déduction des intérêts d\'emprunt et taxes foncières en régime réel), Jurisprudence Conseil d\'État n° 298317 (bail professionnel dirigeant).',
    impactContinuite: 'Économie fiscale nette de +4 350 €/an par rapport au versement de dividendes passifs au PFU 31,4%.',
    impactLFI: 'Neutralisation totale de la suppression de la Flat Tax : 0 € de dividendes taxables au barème 14 tranches (+5 800 €/an sauvés).',
    impactRN: 'Cumulable avec le maintien du PFU et la baisse de TVA énergie sur les 25 m² professionnels (+4 350 €/an).',
    impactDroite: 'Cumulable avec la réduction de charges TPE (-180 €) et le relèvement du plafond QF à 2 500 €.',
    strategicParadeForNelly:
      'Inscrire dès l\'acte authentique chez le notaire la répartition de surface (25 m² professionnels / 100 m² habitation) pour bétonner la comptabilité analytique de Nell\'Immo.',
  },
  {
    id: 'cross_dgf_mairie_tf',
    title: 'Croisement 3 : Dotations d\'État aux Communes (DGF) × Gratuités Scolaires × Taxe Foncière Pélissanne',
    axesCroises: 'Budget de l\'État ↔ Finances Locales de Pélissanne ↔ Fiscalité Foncière & Tarifs Périscolaires',
    mechanismChain:
      'Une commune de 10 800 habitants comme Pélissanne équilibre sa section de fonctionnement entre la Taxe Foncière sur les Propriétés Bâties (TFPB, seul levier fiscal depuis la suppression de la Taxe d\'Habitation) et la Dotation Globale de Fonctionnement (DGF) versée par l\'État. Sous NFP/LFI, l\'État impose la gratuité des cantines et fournitures (+1 037 € de gain pour Nelly) mais la surconsommation municipale oblige souvent les villes (ex. Montpellier, Saint-Denis) à voter +5% à +8% de taux communal de TFPB (+340 €/an sur la maison de 305k€). Inversement, sous RN ou Droite, si l\'État réduit ses dépenses en comprimant la DGF aux collectivités (-3 à -5 Mds€), les mairies coupent les subventions aux écoles de musique et clubs sportifs, faisant bondir le piano et l\'escalade de +200 € à +350 €/an.',
    documentedProofAndSources:
      'Sources : Rapports Chambres Régionales des Comptes (CRC Occitanie, PACA, Île-de-France 2022-2025) ; Observatoire des Finances et de la Gestion Publique Locales (OFGL 2025).',
    impactContinuite: 'Statu quo : Cantine plein tarif (777 €), Taxe Foncière indexée sur l\'inflation IPCH (+3,2%/an).',
    impactLFI: 'Gain périscolaire +1 037 €/an minoré par une hausse probable de TFPB communale (-340 €/an) = Gain net réel +697 €/an.',
    impactRN: 'TFPB stabilisée en mairie RN, mais risque de hausse des tarifs associatifs (piano/sport) si les subventions culturelles baissent.',
    impactDroite: 'Maîtrise de la TFPB (+180 € d\'économie) et maintien des tarifs périscolaires au quotient familial.',
    strategicParadeForNelly:
      'Déduire 20% de la Taxe Foncière de Pélissanne (soit ~360 €/an) en charge foncière réelle grâce au bail professionnel des 25 m² facturé à Nell\'Immo.',
  },
  {
    id: 'cross_garde_alternee_caf_qf',
    title: 'Croisement 4 : Garde Alternée 50/50 (Art. 194 CGI) × Plafond Quotient Familial × Allocations CAF',
    axesCroises: 'Droit de la Famille ↔ Barème IR (0,25 part/enfant) ↔ Branche Famille Sécurité Sociale (CNAF)',
    mechanismChain:
      'En résidence alternée (Art. 194-I CGI), l\'avantage fiscal et social est doublement divisé : (1) chaque fille ne donne droit qu\'à 0,25 part fiscale (plafonnée à 895,50 € en droit actuel, soit 1 791 € pour les deux filles), et (2) à 70 000 € de revenu, Nelly tombe en Tranche 3 CAF (allocations divisées par 4, soit ~18 €/mois partagés à 50% avec le père, neutralisés dans le calcul). Or, les 3 programmes d\'opposition modifient cet équilibre par trois voies opposées : LFI supprime le QF mais ouvre la CAF dès le 1er enfant (+600 €/an) et le 100% Sécu orthodontie (+1 250 €) ; le RN accorde une part pleine dès le 2e enfant (+0,25 part en garde alternée = 1,75 part) et supprime toute modulation de revenus CAF (+1 080 €/an cash) ; la Droite relève le plafond du QF de 1 791 € à 2 500 € par demi-part (+1 250 € max pour Nelly).',
    documentedProofAndSources:
      'Sources : Art. 194-I et 197-I-2 du CGI ; Art. L521-1 et R521-1 du Code de la Sécurité Sociale (barèmes CAF 2026 en garde alternée).',
    impactContinuite: 'Plafond QF bloqué à 1 791 € au total pour les 2 filles et 0 € d\'allocations familiales effectives.',
    impactLFI: 'Remplacement du QF par un crédit d\'impôt forfaitaire + 600 €/an de CAF dès le 1er enfant + 3 387 €/an de gratuités.',
    impactRN: 'Passage de 1,50 à 1,75 part fiscale (+450 € d\'économie IR) + rétablissement de la CAF universelle (+1 080 €/an nets).',
    impactDroite: 'Plafond QF relevé à 1 250 € par demi-part en garde alternée (au lieu de 895,50 €), sécurisant l\'avantage fiscal sur hauts revenus.',
    strategicParadeForNelly:
      'Activer le CESU préfinancé par Nell\'Immo (2 540 €/an exonérés de charges et d\'IR + crédit d\'impôt entreprise 25%) tant que la cadette a moins de 6 ans, puis basculer sur le soutien scolaire à domicile (crédit d\'impôt 50% Art. 199 sexdecies CGI).',
  },
  {
    id: 'cross_horizon_2033_etudes',
    title: 'Croisement 5 : Bascule Temporelle 2033 (18 ans de l\'Aînée) × Fin du QF × Coût des Études Supérieures',
    axesCroises: 'Cycle Biologique des Filles (11 → 18 ans) ↔ Fiscalité des Parents ↔ Financement Étudiant (Aix/Marseille)',
    mechanismChain:
      'L\'erreur classique de planification patrimoniale consiste à juger un programme uniquement sur l\'année 2026. Or, en 2033, l\'aînée atteint 18 ans et part étudier à Aix-en-Provence ou Marseille. Le coût réel d\'un étudiant hors foyer parental (studio, alimentation, transport, frais) s\'élève à 11 500 €/an (Observatoire de la Vie Étudiante). Sous Continuité, RN ou Droite, Nelly (70 000 € de revenus) dépasse tous les plafonds des bourses CROUS sur critères sociaux : elle doit décaisser ~6 500 €/an de sa poche nette d\'impôt (et jusqu\'à 13 000 €/an en 2039 quand les 2 filles sont étudiantes). Sous NFP/LFI, l\'allocation d\'autonomie jeunesse universelle (1 063 €/mois = 12 756 €/an par étudiant majeur détaché, portée à 1 158 €/mois indexée inflation) transfère cette charge à l\'État.',
    documentedProofAndSources:
      'Sources : Enquête Nationale OVE (Observatoire de la Vie Étudiante 2024) ; Barème Bourses CROUS 2025-2026 ; Contrat de Législature NFP (Mesure Garantie d\'Autonomie Jeunesse).',
    impactContinuite: 'Chute du reste à vivre de Nelly de -6 500 €/an dès 2033 (0 € bourse CROUS, seule déduction de pension alimentaire Art. 156-II-2° CGI plafonnée à 6 674 €).',
    impactLFI: 'Inversion totale du classement financier en 2033 : l\'allocation d\'autonomie de 12 756 €/an/fille épargne toute sortie de trésorerie à Nelly.',
    impactRN: '0 € de bourse universelle (priorité nationale mais maintien des plafonds de ressources sociaux) : Nelly finance les études sur son épargne.',
    impactDroite: '0 € de bourse CROUS, mais possibilité de donner un studio locatif ou de la trésorerie sans fiscalité (abattement 200 000 € tous les 10 ans).',
    strategicParadeForNelly:
      'Si NFP/LFI n\'est pas au pouvoir en 2033 : détacher fiscalement l\'aînée à 18 ans et lui verser une pension alimentaire déductible du revenu global (Art. 156-II-2° CGI : 6 674 €/an déduits de la tranche à 30%) ou la salarier à temps partiel chez Nell\'Immo (exonération IR étudiant Art. 81-36° CGI jusqu\'à 3 SMIC mensuels).',
  },
  {
    id: 'cross_smic_mandataires_hoguet',
    title: 'Croisement 6 : Coût du Travail (SMIC 1 600 € net vs Exonérations) × Modèle d\'Agence (Salariés vs Mandataires RSAC)',
    axesCroises: 'Droit du Travail & Charges Patronales ↔ Loi Hoguet (1970) ↔ Rentabilité Nette de Nell\'Immo SASU',
    mechanismChain:
      'Si Nell\'Immo croît de 130 000 € à 200 000 € HT de chiffre d\'affaires à Pélissanne, Nelly devra déléguer la prospection ou l\'administratif. Sous NFP/LFI, le passage du SMIC à 1 600 € net + fin des allègements Fillon porte le coût chargé d\'un négociateur salarié débutant de 26 200 € à 31 800 €/an (+5 600 € de charges fixes risquées en cas de creux immobilier). En revanche, le statut d\'agent commercial indépendant inscrit au RSAC (Article 4 de la Loi Hoguet n° 70-9 du 2 janvier 1970) fonctionne 100% à la commission sur résultat (0 € de fixe, 0 € de cotisation patronale URSSAF).',
    documentedProofAndSources:
      'Sources : Art. 4 Loi n° 70-9 du 2 janvier 1970 (Loi Hoguet) ; Barèmes URSSAF 2026 réduction générale des cotisations patronales (ex-Fillon).',
    impactContinuite: 'Coût salarié modéré grâce à la réduction générale de cotisations patronales au niveau du SMIC.',
    impactLFI: 'Surcoût salarial de +5 600 €/an sur un poste salarié → Rend obligatoire le recours exclusif à des négociateurs indépendants RSAC.',
    impactRN: 'Exonération de cotisations patronales sur 10% d\'augmentation et exonération d\'IR pour un négociateur de moins de 30 ans.',
    impactDroite: 'Baisse structurelle des cotisations patronales entre 1 et 1,6 SMIC, facilitant l\'embauche d\'une assistante salariée à temps partiel.',
    strategicParadeForNelly:
      'Structurer le développement de Nell\'Immo exclusivement avec des agents commerciaux indépendants (RSAC rémunérés à 50% des honoraires encaissés) pour garder 0 € de masse salariale fixe quel que soit le gouvernement.',
  },
];

export const detailedPolicyComparisons: PolicyComparisonPoint[] = [
  {
    category: 'Fiscalité & Capital',
    title: 'Régime des Dividendes & Flat Tax (PFU)',
    continuiteSummary: 'PFU maintenu mais relevé à 31,4% depuis la LFSS 2026 (12,8% IR + 18,6% prélèvements sociaux suite à la hausse de +1,4 pt de CSG patrimoine). Option possible pour le barème avec abattement de 40%.',
    droiteSummary: 'Sanctuarisation de la Flat Tax à 30% (annulation de la hausse de CSG patrimoine de 1,4 pt) et baisse des cotisations patronales TPE (-180 €/an sur le salaire de Nelly).',
    deepCrossMechanism: 'Croisement Fiscalité × Immobilier : Le surcoût fiscal des dividendes sous NFP (+5 800 €) ou Continuité (PFU 31,4%) disparaît intégralement dès que Nelly transforme son bénéfice SASU en loyer de bureau (7 200 €) et redevance façade publicitaire (3 600 €) adossés à sa maison de 305 000 €.',
    lfiProposal: {
      measure: 'Suppression définitive du PFU (Flat Tax). Soumission de tous les dividendes aux cotisations sociales (~35%) et au barème progressif de l\'IR à 14 tranches (sans abattement de 40%).',
      legalInstrument: 'Loi de Finances Initiale (Art. 34 Constitution)',
      programSource: 'Programme NFP Juin 2024 (Mesure n°18) & Livret Fiscalité LFI (Rapport chiffré p. 14)',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Exige le vote d\'une Loi de Finances. Sans majorité absolue à l\'Assemblée, nécessite le recours à l\'article 49.3 avec risque élevé de motion de censure immédiate.',
      whyAndHow: 'LFI entend aligner la fiscalité du capital sur celle du travail en supprimant le taux forfaitaire libératoire pour réinjecter ~25 Mds€ dans les caisses de l\'État.',
      concreteEuroImpactNelly: 'Si Nelly ne change rien (30 000 € de dividendes passifs) : +5 500 € à +6 200 € d\'impôts et charges en plus par an. Si elle active les 6 leviers maison : 0 € d\'impact grâce au remplacement par du foncier réel et des CESU.',
      riskOrDrawback: 'Pression fiscale maximale sur les dividendes classiques des TPE non optimisées.'
    },
    rnProposal: {
      measure: 'Maintien de la Flat Tax à 30% / 31,4% (refus de toute surtaxe au barème progressif du capital mobilier) pour encourager l\'investissement dans les PME/TPE françaises.',
      legalInstrument: 'Statu quo législatif ou amendement de confirmation au PLF',
      programSource: 'Programme RN 2022-2027 (Livret Économie p. 8) & Amendements PLF 2025 n° I-CF124',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Le maintien du PFU ne nécessite aucun texte de rupture : c\'est le droit positif en vigueur. Une majorité de droite ou de centre soutient ce statu quo.',
      whyAndHow: 'Le RN considère que surtaxer les dividendes des chefs d\'entreprise français ferait fuir les capitaux et fragiliserait les PME/TPE familiales.',
      concreteEuroImpactNelly: 'Maintien du taux forfaitaire (9 420 € d\'impôt et PS sur 30 000 € de dividendes passifs). Protection contre la surtaxe mais gain supplémentaire de +4 350 €/an si elle active quand même les leviers maison.',
      riskOrDrawback: 'Aucun allègement supplémentaire sur les dividendes par rapport au régime actuel.'
    }
  },
  {
    category: 'Fiscalité & Capital',
    title: 'Barème de l\'Impôt sur le Revenu & Quotient Familial',
    continuiteSummary: 'Barème progressif à 5 tranches (0%, 11%, 30%, 41%, 45%). Quotient familial maintenu à 1,50 part pour Nelly (1 part + 0,25 × 2 en garde alternée), plafonné à 1 791 € par demi-part.',
    droiteSummary: 'Maintien des 5 tranches mais relèvement du plafonnement du Quotient Familial de 1 791 € à 2 500 € par demi-part (1 250 € par quart de part en garde alternée), favorisant directement les cadres et dirigeants avec enfants.',
    deepCrossMechanism: 'Croisement Garde Alternée × Tranche Marginale 30% : À 40 000 € de salaire net (36 000 € après abattement 10%), la demi-part des deux filles en garde alternée procure une réduction d\'IR de ~1 540 €, inférieure au plafond actuel de 1 791 €. Le plafond QF de la Droite (2 500 €) devient décisif dès que le revenu imposable de Nelly dépasse 58 000 €/an.',
    lfiProposal: {
      measure: 'Création d\'un barème progressif à 14 tranches (de 0% à 90%) et remplacement du quotient familial par un crédit d\'impôt forfaitaire universel par enfant.',
      legalInstrument: 'Loi de Finances Initiale',
      programSource: 'Programme NFP Juin 2024 & Proposition de Loi LFI n° 1248 (Assemblée Nationale)',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Projet emblématique de la gauche mais contesté par le Conseil constitutionnel si les tranches marginales supérieures dépassent le seuil confiscatoire (~66-70%).',
      whyAndHow: 'Lisser la progressivité de l\'IR pour alléger les revenus en dessous de 4 000 €/mois et surtaxer fortement les hauts revenus au-delà de 75 000 € - 100 000 €/an.',
      concreteEuroImpactNelly: 'Sur son seul salaire de 40 000 € (36 000 € imposable), l\'IR 14 tranches avec crédit d\'impôt enfants (850 € en 50/50) reste modéré (~3 182 €). Mais si les 30 000 € de dividendes s\'y ajoutent, elle grimpe dans les tranches à 30% et 40%.',
      riskOrDrawback: 'Disparition du mécanisme traditionnel du quotient familial qui profitait aux classes moyennes supérieures.'
    },
    rnProposal: {
      measure: 'Maintien des 5 tranches actuelles, mais octroi d\'une part fiscale pleine dès le 2e enfant (au lieu d\'une demi-part), et exonération totale d\'IR pour les moins de 30 ans.',
      legalInstrument: 'Loi de Finances Initiale',
      programSource: 'Programme RN « 22 mesures 2022-2027 » (Mesure n°4) & Amendements PLF 2024-2026',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Mesure populaire et consensuelle auprès de toutes les oppositions de droite. Faisable dès le premier budget.',
      whyAndHow: 'Politique nataliste : récompenser financièrement les familles ayant au moins 2 enfants pour redresser la démographie française.',
      concreteEuroImpactNelly: 'Avec 2 filles en garde alternée, le 2e enfant passe de 0,25 part à 0,50 part : son foyer fiscal passe de 1,50 à 1,75 part (ou 2,00 parts avec Case T), soit une baisse d\'IR directe de ~450 € à 650 €/an.',
      riskOrDrawback: 'Coût budgétaire élevé pour l\'État (estimé à 3 Mds€), risquant d\'accroître le déficit public.'
    }
  },
  {
    category: 'Fiscalité & Capital',
    title: 'Taxation des Ultra-Riches, ISF & Risque d\'Exil Fiscal',
    continuiteSummary: 'Maintien de l\'IFI (Impôt sur la Fortune Immobilière) uniquement sur les patrimoines immobiliers nets supérieurs à 1,3 M€ (exonération des actifs financiers et de l\'outil professionnel SASU).',
    droiteSummary: 'Maintien de l\'exonération des actifs productifs et allègement de l\'IFI sur l\'immobilier locatif de longue durée pour relancer l\'investissement des bailleurs privés.',
    deepCrossMechanism: 'Croisement Patrimoine Personnel × Chiffre d\'Affaires Agence : Nelly (maison 305k€) n\'est jamais assujettie à l\'ISF/IFI (< 1,3 M€). En revanche, ses clients acheteurs de villas à 600k€-1,2M€ à Pélissanne/Aix arbitrent immédiatement entre pierre et placements financiers selon que la loi taxe l\'immobilier (IFI/ISF) ou la finance (IFF du RN).',
    lfiProposal: {
      measure: 'Rétablissement de l\'ISF renforcé avec volet climatique (taux progressif jusqu\'à 2% ou 3% sur les patrimoines nets > 1,3 M€), « impôt universel » basé sur la nationalité et Exit Tax renforcée.',
      legalInstrument: 'Loi de Finances Initiale (Art. 34 Constitution) & Renégociation de conventions',
      programSource: 'Programme NFP Juin 2024 (Mesure n°19) & Livret Fiscalité LFI',
      feasibilityProbability: 'Conditionnelle (<40%)',
      feasibilityExplanation: 'Le rétablissement de l\'ISF est réalisable par simple loi de finances, mais l\'impôt universel sur la nationalité est bloqué par l\'Article 55 de la Constitution (120 conventions fiscales bilatérales).',
      whyAndHow: 'Faire contribuer les 1% les plus fortunés au financement de la transition écologique et des services publics.',
      concreteEuroImpactNelly: '0 € d\'ISF pour la maison de 305 000 € de Nelly et son agence. En revanche, effet indirect sur Nell\'Immo : retrait des investisseurs locatifs privés à Pélissanne (-25% de mandats d\'investissement).',
      riskOrDrawback: 'Exil réel des capitaux financiers liquides (2 à 3 Mds€/an d\'actifs selon France Stratégie) et blocage juridique international de l\'impôt universel.'
    },
    rnProposal: {
      measure: 'Remplacement de l\'IFI par l\'IFF (Impôt sur la Fortune Financière) : exonération intégrale de la résidence principale et de l\'immobilier d\'habitation, taxation ciblée de la spéculation financière.',
      legalInstrument: 'Loi de Finances Initiale',
      programSource: 'Programme RN 2022-2027 (Mesure n°5) & Livret Fiscalité Marine Le Pen',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Modification classique de l\'assiette fiscale du patrimoine réalisable par une majorité parlementaire de droite.',
      whyAndHow: 'Le RN veut sanctuariser la pierre et la transmission des maisons familiales françaises en déplaçant l\'impôt sur les seuls portefeuilles d\'actions.',
      concreteEuroImpactNelly: 'Exonération totale pour sa maison de 305k€. Incite les épargnants fortunés du Pays d\'Aix à arbitrer leurs actions vers la pierre à Pélissanne, soutenant la demande pour Nell\'Immo.',
      riskOrDrawback: 'Risque de fuite des capitaux financiers hors de France et tension obligataire.'
    }
  },
  {
    category: 'Fiscalité & Capital',
    title: 'Équilibre Budgétaire Global, Déficit Public & Contraintes UE',
    continuiteSummary: 'Trajectoire d\'ajustement budgétaire sous procédure de déficit excessif européenne : réduction progressive du déficit vers 3% d\'ici 2029 par gel des barèmes etéconomies ciblées, maintenant le spread OAT autour de 70-75 bps.',
    droiteSummary: 'Plan de réduction des dépenses publiques de 40 à 50 Mds€ (collectivités, agences d\'État, normes) rassurant les agences de notation et abaissant le spread OAT vers 55 bps (taux crédit ~3,20%).',
    deepCrossMechanism: 'Croisement Aides Directes × Coût du Crédit Immobilier : C\'est le paradoxe macroéconomique majeur pour Nelly. Les deux blocs qui distribuent le plus de pouvoir d\'achat immédiat (NFP : +3 987 €/an ; RN : +1 730 €/an) sont aussi ceux dont le déficit budgétaire renchérit le crédit de la maison de 305k€ de +1 080 €/an à +1 560 €/an si l\'emprunt est signé après l\'élection.',
    lfiProposal: {
      measure: 'Plan de 152 Mds€ de dépenses sur 3 ans (puis 233 Mds€ selon Montaigne) compensé par une surtaxe des hauts patrimoines, superprofits et multinationales, avec rupture assumée avec le Pacte de Stabilité européen.',
      legalInstrument: 'Loi de Programmation des Finances Publiques & PLF',
      programSource: 'Contrat de Législature NFP 2024 & Rapport de chiffrage officiel',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'L\'Institut Montaigne et l\'OFCE évaluent le déficit net supplémentaire entre 60 et 179 Mds€/an en raison de recettes réelles inférieures aux prévisions.',
      whyAndHow: 'La doctrine néo-keynésienne de LFI postule que l\'injection massive de liquidités par la demande (salaires, services gratuits) crée un multiplicateur budgétaire.',
      concreteEuroImpactNelly: 'Gain immédiat en services gratuits et CAF (+3 987 €/an sur les 2 filles), mais tension sur la dette publique française : le Spread OAT s\'élargit, portant les taux d\'emprunt immobilier vers 4,20% (+1 080 €/an sur le crédit de 305k€).',
      riskOrDrawback: 'Risque d\'escalade de la Procédure de Déficit Excessif ouverte par Bruxelles et dégradation de la note souveraine.'
    },
    rnProposal: {
      measure: 'Plan de 85 Mds€ de baisses d\'impôts et dépenses (TVA 5,5% énergie, exonération IR -30 ans, CAF universelle) financé théoriquement par 15 à 20 Mds€ d\'économies sur l\'immigration et 2 Mds€ sur la contribution UE.',
      legalInstrument: 'Loi de Finances Rectificative (PLFR)',
      programSource: 'Plan de Redressement RN & Chiffrages Jordan Bardella 2024-2026',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'L\'Institut Montaigne et la Cour des Comptes chiffrent le déficit net à +71 Mds€/an car l\'AME ne coûte qu\'1,2 Md€ et la préférence nationale se heurte au Conseil constitutionnel.',
      whyAndHow: 'Le RN veut redonner du pouvoir d\'achat par la baisse directe des prix de l\'énergie sans toucher à la fiscalité des entreprises privées.',
      concreteEuroImpactNelly: 'Gain immédiat de +650 € sur l\'énergie, +1 080 € de CAF universelle et +450 € sur l\'IR, mais risque financier sur le crédit : un Spread OAT à 110 bps porte les taux de prêt à 4,55% (-15% de capacité d\'emprunt pour les clients de Nell\'Immo).',
      riskOrDrawback: 'Déficit public non financé risquant de déclencher un resserrement du crédit bancaire immobilier.'
    }
  },
  {
    category: 'Vie Quotidienne & Enfants',
    title: 'Cantine Scolaire, Fournitures & Garderie (2 Filles)',
    continuiteSummary: 'Tarification municipale au quotient familial de Pélissanne : avec 70 000 € de revenus, Nelly paie le tarif plafond (Tranche 5 : 4,10 €/repas en primaire, 4,45 € au collège Roger Carcassonne), soit 777 €/an en garde alternée + 260 € de fournitures.',
    droiteSummary: 'Maintien des grilles tarifaires municipales actuelles (777 € cantine + 260 € fournitures), refus de la gratuité sans condition de ressources afin de contenir la Taxe Foncière communale.',
    deepCrossMechanism: 'Croisement Gratuité Scolaire × Impôts Locaux : À Pélissanne, Nelly est dans la tranche supérieure du quotient familial municipal (elle subventionne déjà le service via ses impôts tout en payant le tarif plafond). La gratuité universelle NFP lui fait donc gagner 100% du poste (1 037 €/an), alors qu\'une famille déjà au tarif social (1 €/repas) gagne quatre fois moins.',
    lfiProposal: {
      measure: 'Gratuité totale de la cantine scolaire, du périscolaire et distribution gratuite d\'un kit complet de fournitures scolaires pour tous les élèves sans condition de ressources.',
      legalInstrument: 'Loi d\'orientation sur l\'école républicaine + dotations d\'État aux communes',
      programSource: 'Programme NFP Juin 2024 (Mesure n°29) & Rapport d\'application Ville de Saint-Denis Rentrée 2026',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Déjà testé et validé juridiquement dans plusieurs dizaines de communes de gauche (Saint-Denis, Montpellier, Vénissieux, Villeurbanne) sans obstacle constitutionnel.',
      whyAndHow: 'Sanctuariser le droit à l\'éducation gratuite pour neutraliser le coût de la rentrée pour toutes les familles, quel que soit leur quotient CAF.',
      concreteEuroImpactNelly: 'Économie directe de +1 037 € / an à Pélissanne (cantine primaire Cadette 287 € + cantine collège Aînée 490 € + fournitures 260 € = 1 037 € d\'économie nette).',
      riskOrDrawback: 'Risque de saturation des cantines et hausse compensatoire de la Taxe Foncière communale.'
    },
    rnProposal: {
      measure: 'Maintien des tarifs communaux actuels de cantine et de garderie. Priorité donnée au contrôle d\'accès et à l\'approvisionnement 100% français/local.',
      legalInstrument: 'Autonomie des collectivités territoriales (Code Général des Collectivités Territoriales)',
      programSource: 'Livret Collectivités Locales RN & Délibérations mairies de Fréjus, Beaucaire, Hayange',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Application immédiate par les municipalités sans coût additionnel pour l\'État.',
      whyAndHow: 'Le RN refuse la gratuité universelle, estimant que les familles aisées doivent contribuer au coût réel des repas pour ne pas surcharger les contribuables locaux.',
      concreteEuroImpactNelly: 'Économie nulle (0 €) sur la cantine : Nelly continue de payer le tarif haut de la tranche 5 à Pélissanne (777 €/an + 260 € de fournitures = 1 037 €/an).',
      riskOrDrawback: 'Hausse potentielle des tarifs périscolaires si les dotations de l\'État aux communes baissent.'
    }
  },
  {
    category: 'Vie Quotidienne & Enfants',
    title: 'Santé, Orthodontie (11 ans) & Pratique Musicale/Sportive',
    continuiteSummary: 'Orthodontie remboursée sur la base de 193,50 €/semestre par l\'Assurance Maladie (Art. R162-52 CSS) pour un coût réel de 850 €/semestre en PACA : reste à charge + mutuelle = 1 250 €/an. Piano (400 €) et Escalade (400 €) plein tarif.',
    droiteSummary: 'Maintien du système Sécu + Mutuelle Madelin (1 250 €/an), mais création d\'un chèque sport/culture de 175 € par activité (-350 €/an sur le piano et l\'escalade des 2 filles).',
    deepCrossMechanism: 'Croisement 100% Sécu × Cotisations Mutuelle Madelin : Le « 100% Sécu » NFP supprime les 1 250 €/an de reste à charge orthodontie/mutuelle des filles, mais prévoit en contrepartie l\'intégration progressive des cotisations des complémentaires privées dans la CSG.',
    lfiProposal: {
      measure: 'Instauration du « 100% Sécu » (remboursement intégral de l\'orthodontie des ados, de l\'optique et des soins dentaires sans mutuelle privée) + Chèque culture & sport universel.',
      legalInstrument: 'Projet de Loi de Financement de la Sécurité Sociale (PLFSS)',
      programSource: 'L\'Avenir en Commun (Livret Santé) & Contrat de Législature NFP',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Réforme structurelle colossale de l\'Assurance Maladie nécessitant le redéploiement des cotisations des mutuelles privées vers la Sécurité Sociale.',
      whyAndHow: 'Supprimer les frais de gestion des complémentaires privées pour rembourser directement 100% des soins essentiels des enfants.',
      concreteEuroImpactNelly: 'Économie nette de +1 250 € / an sur l\'orthodontie et la mutuelle de sa fille de 11 ans + 350 € sur le piano et l\'escalade = +1 600 € / an de pouvoir d\'achat.',
      riskOrDrawback: 'Délai d\'attente potentiel accru chez les orthodontistes conventionnés secteur 1.'
    },
    rnProposal: {
      measure: 'Maintien du système dual Sécurité Sociale + Mutuelle privée. Baisse de la TVA à 5,5% sur les équipements sportifs et instruments de musique.',
      legalInstrument: 'Loi de Finances Initiale',
      programSource: 'Programme RN 2022-2027 (Livret Santé & Pouvoir d\'achat p. 11)',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Ne bouscule pas l\'architecture de santé existante et s\'appuie sur une simple baisse de taux de TVA sectorielle.',
      whyAndHow: 'Le RN privilégie l\'incitation fiscale par la TVA plutôt que l\'étatisation de la couverture santé complémentaire.',
      concreteEuroImpactNelly: 'Reste à charge orthodontie/mutuelle inchangé (1 250 €/an). Vigilance sur le coût du piano (400 €) si les subventions culturelles municipales baissent.',
      riskOrDrawback: 'Baisse fréquente des subventions aux associations musicales et culturelles dans les municipalités RN, renchérissant les cours artistiques.'
    }
  },
  {
    category: "Immobilier & Agence Nell'Immo",
    title: 'Régulation Locative (DPE, Loyers) & Taux d\'Emprunt Bancaire',
    continuiteSummary: 'Application stricte du calendrier de la Loi Climat & Résilience (interdiction de louer les DPE G depuis 2025, DPE F en 2028) et maintien du dispositif d\'investissement locatif Jeanbrun/Denormandie.',
    droiteSummary: 'Assouplissement du calendrier DPE F/G, statut fiscal du bailleur privé (amortissement comptable de 4%/an du bien loué nu) stimulant les ventes d\'investissement pour Nell\'Immo (+6% de CA).',
    deepCrossMechanism: 'Croisement Volume de Mandats (DPE) × Solvabilité Bancaire (OAT) : Abroger le DPE (RN) libère +12% de mandats de vente sur les maisons anciennes de Pélissanne, mais si le taux de crédit grimpe simultanément à 4,55% à cause du déficit public, les jeunes acheteurs ne peuvent plus financer ces biens sans une baisse de prix de -10%.',
    lfiProposal: {
      measure: 'Encadrement généralisé des loyers, interdiction des expulsions locatives sans relogement et mise en place de la Garantie Universelle des Loyers (GUL).',
      legalInstrument: 'Loi d\'urgence pour le logement',
      programSource: 'Contrat de Législature NFP (Chapitre Logement) & Livret LFI Logement',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'L\'encadrement des loyers s\'applique par arrêté préfectoral rapide (déjà actif à Paris, Lille, Lyon, Montpellier, Bordeaux).',
      whyAndHow: 'Enrayer la spéculation immobilière et protéger les locataires contre la hausse excessive des quittances.',
      concreteEuroImpactNelly: "Impact agence Nell'Immo : -12% sur les ventes d'investissement locatif privé, mais compensation immédiate si Nelly développe la gestion locative sous GUL (+14 400 € HT/an).",
      riskOrDrawback: 'Attentisme des investisseurs bailleurs privés à Pélissanne et Salon-de-Provence.'
    },
    rnProposal: {
      measure: 'Abrogation ou moratoire de 5 ans sur les interdictions de louer liées au DPE (passoires thermiques G et F autorisées à la location), refus d\'encadrement des loyers.',
      legalInstrument: 'Proposition de Loi de simplification du logement (abrogation partielle Loi Climat)',
      programSource: 'Amendements RN n° CE356 Loi Climat & Résilience et Déclarations officielles groupe RN 2024-2026',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Soutenu par la droite républicaine et les fédérations immobilières (FNAIM, UNIS). Majorité parlementaire très probable sur ce point.',
      whyAndHow: 'Remettre sur le marché les 1,5 million de logements menacés d\'interdiction de louer pour débloquer la crise du logement locatif.',
      concreteEuroImpactNelly: "Opportunité immédiate de mandats pour Nell'Immo (+10% à +15% de maisons anciennes remises sur le marché), sous réserve que le taux de crédit bancaire ne dépasse pas 4,2%.",
      riskOrDrawback: 'Risque macroéconomique de spread OAT : si la dette souveraine se tend, les taux de crédit bancaire montent à 4,55%, amputant la capacité d\'emprunt des acquéreurs.'
    }
  },
  {
    category: "Immobilier & Agence Nell'Immo",
    title: 'TVA Énergie, Carburants & Factures du Foyer',
    continuiteSummary: 'Facture énergétique au tarif réglementé EDF (TRV 2026) avec TVA à 20% sur la consommation et l\'accise TICFE rétablie : 2 250 €/an pour la maison de 125 m² à Pélissanne + 3 900 €/an de mobilité/carburant.',
    droiteSummary: 'Maintien de la TVA à 20% pour préserver l\'équilibre budgétaire, mais tarif nucléaire heures creuses méridiennes favorisant la climatisation solaire/PAC en Provence (-150 €/an).',
    deepCrossMechanism: 'Croisement Facture Domestique × Frais Kilométriques Agence : À Pélissanne, Nelly cumule deux consommations énergétiques : sa maison climatisée de 125 m² (2 250 €/an) et ses tournées de visites immobilières (15 000 km/an). LFI agit plus fort sur l\'électricité/eau (-750 €), tandis que le RN agit simultanément sur l\'électricité (-650 €) et le carburant routier (-520 €).',
    lfiProposal: {
      measure: 'Gratuité des premiers mètres cubes d\'eau vitaux, blocage des prix de l\'électricité et du gaz par décret (-15%), sortie du marché européen de l\'énergie (ARENH).',
      legalInstrument: 'Décret présidentiel / ministériel (Code de l\'énergie Art. L410-2)',
      programSource: 'Programme NFP Juin 2024 (Mesure n°2) & Livret Énergie LFI',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Le blocage des prix par décret est juridiquement possible en situation de crise, mais la sortie des règles européennes de concurrence expose à un contentieux avec Bruxelles.',
      whyAndHow: 'Faire baisser les tarifs au niveau du coût réel de production du parc nucléaire et hydraulique français (~45-50 €/MWh).',
      concreteEuroImpactNelly: 'Économie annuelle de +750 € sur l\'électricité, la climatisation réversible et les premiers m³ d\'eau de la maison de 305k€ à Pélissanne.',
      riskOrDrawback: 'Risque de déficit des opérateurs publics (EDF) si l\'État ne compense pas intégralement le gel tarifaire.'
    },
    rnProposal: {
      measure: 'Baisse immédiate et pérenne du taux de TVA de 20% à 5,5% sur tous les produits énergétiques : électricité, gaz, fioul et carburants automobiles.',
      legalInstrument: 'Loi de Finances Rectificative (PLFR) adoptée en session extraordinaire',
      programSource: 'Programme RN « 22 mesures » (Mesure n°1) & Proposition de Loi RN n° 29 Assemblée Nationale',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Mesure prioritaire n°1 affichée par Jordan Bardella pour l\'été 2027. Dérogations fiscales sur l\'énergie autorisées par la directive européenne TVA sur l\'électricité/gaz (contentieux probable sur les carburants pétroliers).',
      whyAndHow: 'Rendre du pouvoir d\'achat direct aux ménages périurbains et aux professionnels dépendants de la voiture.',
      concreteEuroImpactNelly: "Économie de +650 €/an sur l'électricité de la maison de 305k€ + économie directe de +520 €/an sur le carburant et l'entretien du véhicule de tournée.",
      riskOrDrawback: 'Coût colossal pour le budget de l\'État (estimé à 12 à 15 Mds€/an) sans recette de compensation validée.'
    }
  },
  {
    category: 'Transmission & Retraite',
    title: 'Donation Maison 305k€ & Droits de Succession aux 2 Filles',
    continuiteSummary: 'Abattement légal de 100 000 € par parent et par enfant renouvelable tous les 15 ans (Art. 779 CGI) + barème du démembrement Art. 669 CGI (nue-propriété = 40% entre 41 et 50 ans).',
    droiteSummary: 'Relèvement de l\'abattement en ligne directe à 150 000 € ou 200 000 € par enfant renouvelable tous les 10 ans, exonérant même la pleine propriété sans démembrement.',
    deepCrossMechanism: 'Croisement Démembrement Art. 669 CGI × Plafonds Successoraux : À 42 ans, l\'usufruit viager de Nelly vaut 60% et la nue-propriété vaut 40%. La maison de 305 000 € divisée entre ses 2 filles représente donc 305 000 € × 40% / 2 = 61 000 € de valeur fiscale transmise par fille. Comme 61 000 € est inférieur à l\'abattement de 100 000 € conservé par TOUS les partis (y compris LFI), les droits de mutation sont de 0 € dans les 4 scénarios.',
    lfiProposal: {
      measure: 'Plafonnement des très gros héritages (héritage maximum au-delà de 12 millions d\'euros), maintien de l\'abattement légal de 100 000 € par enfant pour les patrimoines moyens.',
      legalInstrument: 'Loi de Finances Initiale',
      programSource: 'L\'Avenir en Commun (Livret Fiscalité) & Programme NFP Juin 2024',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Le plafonnement absolu à 100% au-delà d\'un seuil se heurte au droit constitutionnel de propriété ; une surtaxe progressive des successions > 1 M€ reste possible.',
      whyAndHow: 'Combattre la concentration dynastique des méga-patrimoines tout en protégeant les résidences familiales des classes moyennes.',
      concreteEuroImpactNelly: '0 € de droits de succession pour ses 2 filles : en donnant la nue-propriété (Art. 669 CGI), la valeur transmise n\'est que de 61 000 €/fille, bien sous les 100 000 €.',
      riskOrDrawback: 'Aucun risque pour la maison de 305 000 € de Nelly. Risque uniquement si son patrimoine net dépassait 1,2 M€ à terme.'
    },
    rnProposal: {
      measure: 'Exonération des donations et successions jusqu\'à 100 000 € par enfant tous les 10 ans (au lieu de 15 ans) et exonération des donations de grands-parents jusqu\'à 50 000 €.',
      legalInstrument: 'Loi de Finances Initiale',
      programSource: 'Programme RN « 22 mesures » (Mesure n°10) & Amendements PLF 2025',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Mesure de transmission patrimoniale très consensuelle à l\'Assemblée Nationale.',
      whyAndHow: 'Faciliter la transmission du patrimoine entre générations de son vivant pour aider les jeunes à s\'installer plus tôt.',
      concreteEuroImpactNelly: '0 € de droits de mutation. Permet en outre à Nelly de renouveler une donation défiscalisée tous les 10 ans au lieu de 15 ans (ex. donation des parts de Nell\'Immo ou d\'un studio locatif).',
      riskOrDrawback: 'Favorise davantage les patrimoines détenant plusieurs biens immobiliers.'
    }
  },
  {
    category: 'Transmission & Retraite',
    title: 'Âge Légal de Départ à la Retraite & Annuités',
    continuiteSummary: 'Application de la réforme des retraites de 2023 : âge légal fixé à 64 ans avec 43 annuités (172 trimestres) pour le taux plein.',
    droiteSummary: 'Maintien strict des 64 ans et introduction d\'une dose de capitalisation facultative défiscalisée (PER dirigeant renforcé).',
    deepCrossMechanism: 'Croisement Salaire SASU vs Dividendes × Trimestres Retraite : Les dividendes ne valident aucun trimestre de retraite et aucun point AGIRC-ARRCO. C\'est parce que Nelly se verse 40 000 € de salaire assimilé-salarié (Présidente de SASU) qu\'elle valide ses 4 trimestres/an et cotise à la retraite complémentaire des cadres.',
    lfiProposal: {
      measure: 'Abrogation immédiate de la loi de 2023 et rétablissement de la retraite à 60 ans à taux plein avec 40 annuités de cotisation.',
      legalInstrument: 'Loi ordinaire d\'abrogation / PLFSS',
      programSource: 'Programme NFP Juin 2024 (Mesure prioritaire n°1) & Proposition d\'abrogation déposée à l\'AN',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Une majorité parlementaire d\'abrogation existe potentiellement à l\'Assemblée Nationale (gauche + RN opposés aux 64 ans).',
      whyAndHow: 'Permettre aux actifs de profiter de leur retraite en bonne santé et libérer des emplois pour les jeunes.',
      concreteEuroImpactNelly: 'Gain financier et patrimonial majeur : Nelly peut liquider sa retraite 4 ans plus tôt (à 60 ans au lieu de 64 ans), touchant 4 années supplémentaires de pension (~100 800 € cumulés sur 4 ans).',
      riskOrDrawback: 'Nécessite de financer le déficit du régime des retraites par des cotisations sur les hauts salaires et les dividendes.'
    },
    rnProposal: {
      measure: 'Retraite à 60 ans réservée uniquement aux personnes ayant commencé à travailler avant 20 ans avec 40 annuités. Pour les autres (études supérieures), départ progressif entre 62 et 63 ans.',
      legalInstrument: 'Loi de réforme des retraites',
      programSource: 'Programme RN 2022-2027 (Déclarations Jordan Bardella Juin 2024) & Fiche Retraite RN',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Le coût du retour partiel à 60/62 ans impose un étalement dans le temps sous contrainte budgétaire.',
      whyAndHow: 'Récompenser prioritairement les carrières longues et pénibles ayant débuté avant 20 ans.',
      concreteEuroImpactNelly: 'Comme Nelly est dirigeante d\'entreprise ayant débuté après 20 ans, elle ne relève pas des carrières précoces : son âge de départ se situerait à 62-63 ans (gain de 1 à 2 ans vs loi actuelle).',
      riskOrDrawback: 'Moins favorable que les 60 ans universels pour les cadres et dirigeants ayant fait des études.'
    }
  },
  {
    category: 'Vie Quotidienne & Enfants',
    title: 'Financement des Études Supérieures des Filles (2033 & 2039)',
    continuiteSummary: 'Bourses CROUS sur critères sociaux (plafond de ressources RFR ~33 100 € pour 2 enfants) : 0 € de bourse pour les filles de Nelly (70 000 € de revenus). Seule aide : déduction d\'une pension alimentaire plafonnée à 6 674 €/an (Art. 156 CGI).',
    droiteSummary: 'Maintien des bourses sur critères sociaux + bourses au mérite (Mention Très Bien au Bac : 900 €/an), et prêts étudiants garantis par l\'État.',
    deepCrossMechanism: 'Croisement Revenu Parental (70k€) × Plafond CROUS : Parce que Nelly gagne 70 000 €/an, ses deux filles sont exclues des bourses CROUS dans 3 blocs sur 4 (Continuité, RN, Droite). Seul le NFP détache le droit à l\'allocation étudiante (1 063 €/mois) du revenu fiscal des parents, ce qui explique pourquoi un ménage à 70k€ est paradoxalement le grand gagnant net de cette mesure de gauche en 2033 et 2039.',
    lfiProposal: {
      measure: 'Allocation d\'autonomie universelle de 1 063 € net par mois (seuil de pauvreté, soit 1 158 €/mois indexé inflation 2027) versée à chaque étudiant détaché dès 18 ans, repas CROUS à 1 € et gratuité des frais universitaires.',
      legalInstrument: 'Loi de programmation pour la jeunesse et l\'enseignement supérieur',
      programSource: 'Programme NFP Juin 2024 (Mesure n°28) & Livret LFI Jeunesse',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Coût annuel évalué à 10-12 Mds€. Faisable si le budget global est adopté, mais risque de ciblage progressif sous contrainte budgétaire.',
      whyAndHow: 'Garantir l\'indépendance financière des étudiants sans dépendre du revenu parental et éradiquer la précarité étudiante.',
      concreteEuroImpactNelly: "Gain financier colossal à l'horizon 2033 (18 ans de l'aînée) et 2039 (18 ans de la cadette) : +12 756 € / an par fille (+13 896 € indexé inflation). Nelly économise l'intégralité du loyer étudiant à Aix/Marseille.",
      riskOrDrawback: 'Risque de saturation des filières universitaires et coût budgétaire élevé pour l\'État.'
    },
    rnProposal: {
      measure: 'Maintien des bourses d\'État sur critères sociaux actuels et de mérite, réservées aux familles de nationalité française. Refus de toute allocation universelle sans condition de ressources.',
      legalInstrument: 'Loi de Finances Initiale',
      programSource: 'Programme RN 2022-2027 (Livret Enseignement Supérieur & Jeunesse)',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Statu quo budgétaire sur les bourses d\'État sans création de dépense universelle massive.',
      whyAndHow: 'Le RN estime que les parents ayant des revenus confortables (70 000 €) doivent assumer la subsistance de leurs enfants majeurs.',
      concreteEuroImpactNelly: '0 € d\'aide de l\'État (revenus de Nelly > plafonds CROUS). Elle devra financer elle-même les études à Aix ou Marseille (~6 500 € à 10 000 €/an/fille sur fonds propres), avec la seule déduction fiscale de pension alimentaire (Art. 156 CGI).',
      riskOrDrawback: 'Effort d\'épargne important à anticiper dès aujourd\'hui pour les échéances 2033 et 2039.'
    }
  },
  {
    category: "Immobilier & Agence Nell'Immo",
    title: 'Honoraires d\'Agence (Loi Hoguet) & Frais de Notaire (DMTO)',
    continuiteSummary: 'Liberté contractuelle des honoraires d\'agence (Loi Hoguet) et relèvement facultatif des DMTO départementaux de 4,50% à 5,00% autorisé par la Loi de Finances 2025-2026 (soit ~8% de frais de notaire totaux).',
    droiteSummary: 'Liberté totale des honoraires d\'agence et exonération des DMTO (frais de notaire) pour l\'achat de la première résidence principale jusqu\'à 250 000 € ou 300 000 €, fluidifiant les ventes de Nell\'Immo.',
    deepCrossMechanism: 'Croisement Frais de Notaire (DMTO) × Négociation des Honoraires : Lorsque les départements augmentent les DMTO de +0,5% à +1,0% (+1 500 € à +3 000 € sur une maison à 300k€), l\'acheteur dont l\'apport personnel est plafonné demande systématiquement à l\'agent immobilier (Nell\'Immo) de rogner sa commission du même montant pour boucler son plan de financement bancaire.',
    lfiProposal: {
      measure: 'Projet de plafonnement des honoraires de transaction des agences immobilières (limitation à 2% - 2,5% max ou barème dégressif) et hausse des DMTO de 4,5% à 5,5% pour financer les départements.',
      legalInstrument: 'Amendements Loi Hoguet & Loi de Finances (Art. 1594 D du CGI)',
      programSource: 'Propositions d\'amendements LFI PLF 2024-2025 sur les frais d\'intermédiation',
      feasibilityProbability: 'Conditionnelle (<40%)',
      feasibilityExplanation: 'Le plafonnement des honoraires de vente se heurte au principe constitutionnel de la liberté d\'entreprendre (contrairement aux honoraires de location déjà plafonnés par la loi ALUR), mais la hausse des DMTO est très facile à voter.',
      whyAndHow: 'Faire baisser le coût d\'intermédiation et alimenter les budgets sociaux des départements.',
      concreteEuroImpactNelly: "Vigilance pour Nell'Immo : si les honoraires étaient encadrés, la commission moyenne passerait de 4% à 2,5%. De plus, la hausse des DMTO alourdit les frais de notaire de +3 000 € sur une maison de 300 000 € à Pélissanne.",
      riskOrDrawback: 'Pression baissière sur les marges de transaction de l\'agence Nell\'Immo.'
    },
    rnProposal: {
      measure: 'Liberté contractuelle totale des honoraires d\'agence (refus de tout plafonnement d\'État), gel des hausses de DMTO et exonération de DMTO sur la revente/achat de résidence principale.',
      legalInstrument: 'Maintien de la liberté des prix (Code de commerce & Loi Hoguet)',
      programSource: 'Programme Économique RN 2022-2027 & Prises de position FNAIM',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Le modèle libéral d\'intermédiation est la règle en vigueur. Aucune remise en cause.',
      whyAndHow: 'Protéger les agences indépendantes et les commerçants de proximité face à l\'ingérence réglementaire.',
      concreteEuroImpactNelly: "Totale liberté commerciale pour Nell'Immo : Nelly conserve la maîtrise de son barème d'honoraires (4% à 5% TTC) sans contrainte d'État.",
      riskOrDrawback: 'Concurrence maintenue entre agences physiques et réseaux de mandataires.'
    }
  },
  {
    category: "Immobilier & Agence Nell'Immo",
    title: 'Coût Salarial si Recrutement dans l\'Agence (Négociateur / Assistant)',
    continuiteSummary: 'SMIC indexé sur l\'inflation (~1 426 € net en 2026) avec maintien de la réduction générale dégressive des cotisations patronales jusqu\'à 1,6 SMIC.',
    droiteSummary: 'Renforcement des allègements de cotisations patronales entre 1 et 2 SMIC ("Zéro charge au niveau du SMIC") et assouplissement du CDD/contrat de mission immobilier.',
    deepCrossMechanism: 'Croisement SMIC 1 600 € net × Statut RSAC : Comme démontré dans le Croisement Systémique n°6, Nelly peut immuniser à 100% Nell\'Immo contre toute hausse du coût du travail salarié en travaillant avec des agents commerciaux indépendants inscrits au RSAC (rémunérés uniquement à la commission sur vente encaissée).',
    lfiProposal: {
      measure: 'Revalorisation immédiate du SMIC à 1 600 € net (~2 090 € brut) et suppression progressive des allègements généraux de cotisations patronales au-delà de 1,2 SMIC.',
      legalInstrument: 'Décret du Ministère du Travail (Art. L. 3231-2 C. trav.) et PLFSS',
      programSource: 'Programme NFP Juin 2024 (Mesure n°3) & Livret Travail LFI',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Le SMIC net peut être relevé par simple décret en Conseil des ministres dès les 15 premiers jours sans vote du Parlement.',
      whyAndHow: 'Permettre aux salariés de vivre dignement de leur travail et augmenter la part des salaires dans la valeur ajoutée.',
      concreteEuroImpactNelly: "Si Nell'Immo embauche un(e) assistant(e) salarié(e) : le coût annuel employeur passe de ~26 200 € à ~31 800 € (+5 600 €/an). Incite Nelly à recourir exclusivement à des agents commerciaux indépendants (RSAC).",
      riskOrDrawback: 'Frein direct à l\'embauche salariée pour les TPE unipersonnelles.'
    },
    rnProposal: {
      measure: 'Dispositif « Hausse de 10% des salaires sans cotisations patronales » jusqu\'à 3 SMIC et exonération d\'IR pour les collaborateurs de moins de 30 ans.',
      legalInstrument: 'Loi de relance économique d\'urgence',
      programSource: 'Programme RN « 22 mesures » (Mesure n°2) & Déclarations Jordan Bardella',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Le Conseil constitutionnel surveille les ruptures d\'égalité devant les charges publiques sur les exonérations conditionnelles.',
      whyAndHow: 'Inciter les dirigeants de PME/TPE à augmenter les salaires par l\'exonération de charges plutôt que par une hausse obligatoire du SMIC.',
      concreteEuroImpactNelly: "Si Nell'Immo recrute un jeune négociateur de moins de 30 ans : exonération d'IR pour lui et pas de hausse imposée des charges fixes de l'agence.",
      riskOrDrawback: 'Moindre relance de la consommation populaire qu\'une hausse générale du SMIC.'
    }
  },
  {
    category: 'Vie Quotidienne & Enfants',
    title: 'Subventions Locales Culture & Sport (Piano 400 € & Escalade 400 €)',
    continuiteSummary: 'Pass\'Sport national (50 € sous conditions de ressources, non éligible pour Nelly à 70k€) ; tarifs associatifs de Pélissanne maintenus à 400 €/an pour le piano et 400 €/an pour l\'escalade.',
    droiteSummary: 'Création d\'un Chèque Sport & Culture de 175 € par enfant scolarisé (-350 €/an sur le piano et l\'escalade) et soutien aux associations sportives communales.',
    deepCrossMechanism: 'Croisement Subventions Municipales × Tarifs Associatifs : Le coût réel d\'une heure de cours individuel de piano en école municipale/associative est de ~1 100 €/an ; si la famille ne paie que 400 € (quote-part Nelly), c\'est parce que la commune et le département subventionnent les 700 € restants. Toute coupe des subventions culturelles se répercute immédiatement sur la facture des parents.',
    lfiProposal: {
      measure: 'Plan d\'urgence pour la culture et le sport associatif : sanctuarisation des dotations aux collectivités territoriales et chèque culture & sport universel (-350 €/an sur les 2 activités).',
      legalInstrument: 'Loi de Finances Initiale (Mission Culture & Jeunesse)',
      programSource: 'Programme NFP Juin 2024 & Livret Sport et Culture Populaire LFI',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Financement par les crédits Jeunesse & Sports et dotations communales.',
      whyAndHow: 'Garantir l\'accès universel à la pratique artistique (piano) et sportive (escalade) pour tous les enfants.',
      concreteEuroImpactNelly: 'Économie de +350 €/an sur l\'inscription au piano de l\'aînée (11 ans) et au club d\'escalade de la cadette (5 ans), ramenant son reste à charge de 800 € à 450 €/an.',
      riskOrDrawback: 'Dépendance aux arbitrages budgétaires annuels du ministère des Sports et de la Culture.'
    },
    rnProposal: {
      measure: 'Maintien des tarifs associatifs, réorientation prioritaire des subventions municipales et départementales de la culture subventionnée vers la sécurité et le patrimoine local.',
      legalInstrument: 'Délibérations budgétaires des communes et des départements',
      programSource: 'Audit des politiques culturelles dans les municipalités RN (Rapports CRC : Fréjus, Hayange, Beaucaire, Perpignan)',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Pouvoir discrétionnaire total des maires et conseils départementaux sur le vote des subventions aux associations.',
      whyAndHow: 'Le RN estime que les activités culturelles spécialisées doivent être financées prioritairement par leurs usagers directs.',
      concreteEuroImpactNelly: 'Reste à charge standard de 800 €/an (400 € piano + 400 € escalade), avec un point de vigilance si l\'école associative de musique voit sa subvention réduite (+150 € à +250 € de hausse tarifaire constatée dans certaines communes).',
      riskOrDrawback: 'Risque de renchérissement des cours artistiques pour les familles de la classe moyenne.'
    }
  },
  {
    category: 'Vie Quotidienne & Enfants',
    title: 'Allocations Familiales & Universalité en Garde Alternée',
    continuiteSummary: 'Modulation des allocations familiales selon le revenu (réforme 2015, Art. R521-1 CSS) : à 70 000 € de revenus, Nelly est en Tranche 3 (taux divisé par 4) et partagée à 50/50 en garde alternée = 0 € significatif.',
    droiteSummary: 'Maintien de la modulation CAF actuelle (0 € en tranche 3), la Droite privilégiant l\'allègement d\'impôt via le relèvement du plafond du Quotient Familial à 2 500 €.',
    deepCrossMechanism: 'Croisement CAF Universelle × Quotient Familial : Le RN est le seul bloc à cumuler à la fois le rétablissement des allocations familiales universelles non modulées (+1 080 €/an net d\'impôt pour Nelly en garde alternée) ET la part fiscale pleine dès le 2e enfant (+450 €/an d\'économie d\'IR), soit +1 530 €/an de politique familiale pure pour une mère de 2 enfants gagnant 70 000 €.',
    lfiProposal: {
      measure: 'Revalorisation des allocations familiales et ouverture du droit dès le 1er enfant, tout en conservant le principe de modulation progressive selon le revenu.',
      legalInstrument: 'Projet de Loi de Financement de la Sécurité Sociale (PLFSS)',
      programSource: 'Programme NFP Juin 2024 (Mesure n°26) & Livret Famille LFI',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Mesure classique de politique familiale relevant de la branche Famille de la Sécurité Sociale (CNAF).',
      whyAndHow: 'Soutenir le niveau de vie des familles dès la première naissance.',
      concreteEuroImpactNelly: 'Avec l\'ouverture des droits dès le 1er enfant (partagée à 50/50 en garde alternée et modulée selon ses revenus), Nelly perçoit +600 € / an (+50 €/mois) d\'allocations familiales nettes.',
      riskOrDrawback: 'La modulation selon le revenu limite le montant versé aux dirigeants gagnant 70 000 €.'
    },
    rnProposal: {
      measure: 'Rétablissement de l\'universalité totale des allocations familiales sans aucune condition de ressources (abrogation de la modulation Touraine de 2015) et part fiscale pleine dès le 2e enfant.',
      legalInstrument: 'Loi de Finances Initiale & PLFSS (Code de la Sécurité Sociale Art. L. 521-1)',
      programSource: 'Programme RN 2022-2027 (Mesure n°4) & Livret Famille Marine Le Pen',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Simple abrogation par décret/PLFSS des plafonds de modulation introduits en 2015.',
      whyAndHow: 'Relancer la natalité en garantissant que chaque famille de 2 enfants perçoive l\'allocation à taux plein (~180 €/mois avec majoration >14 ans, soit 90 €/mois pour la part 50% de Nelly).',
      concreteEuroImpactNelly: 'Gain cash direct de +1 080 € / an (90 €/mois × 12 en garde alternée 50/50, 100% exonéré d\'impôt) + gain d\'IR de ~450 € / an grâce à la part fiscale pleine dès le 2e enfant.',
      riskOrDrawback: 'Coût budgétaire pour la branche famille (~2,2 Mds€).'
    }
  },
  {
    category: 'Bien Commun & Cadre de Vie',
    title: 'Santé Publique, Urgences & Hôpital de Salon-de-Provence',
    continuiteSummary: 'Poursuite du Ségur de la Santé et du déploiement des Maisons de Santé Pluriprofessionnelles (MSP) dans le Pays Salonais, sous contrainte de l\'ONDAM.',
    droiteSummary: 'Débureaucratisation hospitalière, revalorisation de la médecine libérale de ville (secteur 1 et 2) et incitations au cumul emploi-retraite des médecins généralistes à Pélissanne/Salon.',
    deepCrossMechanism: 'Croisement Temps Dirigeante × Services Publics de Santé : Pour une présidente de SASU travaillant seule comme Nelly, une journée perdue aux urgences pédiatriques saturées de Salon ou d\'Aix pour sa cadette de 5 ans représente un coût d\'opportunité direct (rendez-vous de signature de mandat reporté).',
    lfiProposal: {
      measure: 'Plan de réhabilitation de l\'hôpital public : embauche de soignants, arrêt de la T2A et création de centres de santé publics avec médecins salariés dans les zones en tension.',
      legalInstrument: 'Loi de programmation pour la santé publique & PLFSS',
      programSource: 'Programme NFP Juin 2024 & Livret Santé LFI',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Exige une hausse significative de l\'ONDAM et le temps de formation des effectifs médicaux.',
      whyAndHow: 'Garantir l\'accès aux soins d\'urgence et pédiatriques à moins de 20 minutes sans dépassement d\'honoraires.',
      concreteEuroImpactNelly: 'Soutien direct à l\'Hôpital de Salon-de-Provence et aux urgences pédiatriques, réduisant le recours aux cliniques privées à dépassement d\'honoraires.',
      riskOrDrawback: 'Délai incompressible de formation des nouveaux médecins (3 à 8 ans).'
    },
    rnProposal: {
      measure: 'Suppression des ARS au profit d\'une gestion médicale de terrain, exonération totale d\'IR pendant 5 ans pour les jeunes médecins s\'installant en zone périurbaine/rurale et cumul emploi-retraite intégralement défiscalisé pour les médecins.',
      legalInstrument: 'Loi d\'urgence pour la refondation sanitaire',
      programSource: 'Programme RN Santé 2022-2027 & Déclarations Jordan Bardella 2024',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'L\'exonération fiscale pour médecins en cumul emploi-retraite est immédiatement applicable dès la première Loi de Finances.',
      whyAndHow: 'Inciter financièrement les médecins généralistes et pédiatres en activité ou jeunes retraités à maintenir leur cabinet ouvert à Pélissanne et Salon-de-Provence.',
      concreteEuroImpactNelly: 'Maintien rapide de l\'offre de médecins généralistes libéraux dans le bassin de Pélissanne grâce à la défiscalisation du cumul emploi-retraite médical.',
      riskOrDrawback: 'Ne résout pas à court terme le manque structurel d\'infirmiers hospitaliers publics.'
    }
  },
  {
    category: 'Bien Commun & Cadre de Vie',
    title: 'Écoles de Pélissanne, Canicules & Gestion de l\'Eau (Touloubre)',
    continuiteSummary: 'Fonds Vert de l\'État maintenu mais réduit pour cofinancer la rénovation thermique des écoles communales et l\'entretien hydraulique par le syndicat EPAGE HuCA (Touloubre).',
    droiteSummary: 'Soutien à l\'investissement des communes via la préservation du FCTVA (remboursement de la TVA sur les travaux municipaux) et accélération des ouvrages hydrauliques.',
    deepCrossMechanism: 'Croisement Climat Provençal × Valeur Patrimoniale Maison 305k€ : À Pélissanne, la valeur à long terme de la maison de 305 000 € dépend à la fois de la maîtrise du risque d\'inondation de la Touloubre (ouvrage hydraulique communal) et du confort thermique estival (40°C en juin/juillet).',
    lfiProposal: {
      measure: 'Plan « Urgence Canicule Écoles » : rénovation thermique et rafraîchissement écologique des bâtiments scolaires dans le Sud, limitation à 20 élèves par classe, et gratuité des premiers m³ d\'eau.',
      legalInstrument: 'Plan de bifurcation écologique & Dotations d\'équipement (DETR)',
      programSource: 'Programme NFP Juin 2024 (Mesures n°31 & 35) & Livret Eau LFI',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Nécessite la mobilisation de la Banque des Territoires / Caisse des Dépôts pour financer les travaux communaux.',
      whyAndHow: 'Protéger la santé des enfants en classe face aux canicules récurrentes à Pélissanne et sécuriser l\'accès à l\'eau potable.',
      concreteEuroImpactNelly: 'Confort scolaire accru pour ses 2 filles (écoles primaires et Collège Roger Carcassonne) et gratuité de la première tranche d\'eau domestique.',
      riskOrDrawback: 'Hausse de la tarification progressive de l\'eau sur les tranches supérieures (arrosage jardin / piscine).'
    },
    rnProposal: {
      measure: 'Simplification des normes environnementales pour accélérer le curage des cours d\'eau et la création de bassins de rétention (Touloubre), refus des restrictions d\'usage et soutien au nucléaire.',
      legalInstrument: 'Loi de simplification des normes environnementales',
      programSource: 'Programme RN Écologie de terroir & Amendements Loi Climat',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Forte convergence avec les élus locaux ruraux et périurbains pour lever les blocages administratifs sur les travaux hydrauliques.',
      whyAndHow: 'Privilégier les infrastructures physiques de protection contre les crues plutôt que les contraintes réglementaires.',
      concreteEuroImpactNelly: 'Protection physique renforcée du bassin de la Touloubre à Pélissanne et absence de surtaxation progressive sur l\'eau du jardin.',
      riskOrDrawback: 'Moindre subventionnement d\'État pour l\'isolation thermique des écoles publiques.'
    }
  },
  {
    category: 'Bien Commun & Cadre de Vie',
    title: 'Sécurité Locale, Tranquillité Publique & Justice des Mineurs',
    continuiteSummary: 'Maintien des effectifs actuels de Gendarmerie (brigade de Salon/Lançon) et de la Police Municipale de Pélissanne avec déploiement de la vidéoprotection existante.',
    droiteSummary: 'Renforcement des prérogatives des Polices Municipales, peines courtes d\'exécution immédiate et suppression des allocations familiales en cas d\'absentéisme ou délinquance grave.',
    deepCrossMechanism: 'Croisement Sécurité Locale × Attractivité Immobilière Pélissanne : La tranquillité publique de Pélissanne est le premier argument d\'achat des familles quittant Marseille ou Vitrolles pour acquérir une maison à 300 000 € - 450 000 € via Nell\'Immo.',
    lfiProposal: {
      measure: 'Rétablissement de la police de proximité (îlotiers de quartier), renforcement des éducateurs spécialisés et médiateurs aux abords des collèges, justice des mineurs axée sur la prévention.',
      legalInstrument: 'Loi d\'orientation et de programmation du Ministère de l\'Intérieur',
      programSource: 'Programme NFP Juin 2024 & Livret Sécurité et Libertés LFI',
      feasibilityProbability: 'Moyenne (50-70%)',
      feasibilityExplanation: 'Réorganisation de la doctrine d\'emploi des forces de sécurité intérieure.',
      whyAndHow: 'Agir sur les causes sociales des incivilités et renforcer la présence humaine préventive aux abords des établissements scolaires.',
      concreteEuroImpactNelly: 'Présence accrue de médiateurs et d\'encadrement éducatif autour du collège Roger Carcassonne, mais réserves d\'une partie de la clientèle d\'acheteurs périurbains attachés à la fermeté pénale.',
      riskOrDrawback: 'Opposition aux armements étendus des polices municipales.'
    },
    rnProposal: {
      measure: 'Tolérance zéro : peines planchers, abaissement de la majorité pénale à 16 ans, armement et élargissement des pouvoirs judiciaires des polices municipales.',
      legalInstrument: 'Projet de Loi de Sécurité Nationale & Réforme du Code Pénal',
      programSource: 'Programme RN Sécurité & Justice 2022-2027',
      feasibilityProbability: 'Haute (>85%)',
      feasibilityExplanation: 'Large convergence parlementaire à droite sur le renforcement des pouvoirs des maires et des polices municipales.',
      whyAndHow: 'Garantir la tranquillité des communes périurbaines et protéger les trajets autonomes des collégiens.',
      concreteEuroImpactNelly: 'Sécurisation maximale des trajets à pied/bus de l\'aînée de 11 ans à Pélissanne et maintien de la prime d\'attractivité résidentielle du village pour les clients de Nell\'Immo.',
      riskOrDrawback: 'Coût budgétaire élevé du plan pénitentiaire national (20 000 places).'
    }
  }
];
