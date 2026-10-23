export interface MacroScenarioData {
  party: 'LFI_NFP' | 'RN';
  name: string;
  officialClaim: {
    expenditures: number; // Mds € / an
    revenues: number;     // Mds € / an
    claimedBalance: number; // Mds € / an
    coreMessage: string;
  };
  independentAudit: {
    source: string;
    auditedExpenditures: number; // Mds € / an
    auditedRevenues: number;     // Mds € / an
    netDeficitImpact: number;    // Mds € / an
    keyFindings: string[];
  };
  euCompliance: {
    maastricht3Percent: 'Violation Critique (>6-8% PIB)' | 'Violation Majeure (5-7% PIB)';
    pdeRisk: string; // Procédure de Déficit Excessif
    sanctionsRisk: string;
  };
  marketSpreadImpact: {
    projectedSpreadOatBundBps: number; // points de base au-dessus de l'Allemagne
    spreadExplanation: string;
    mortgageRate20y: number; // Taux de crédit moyen sur 20 ans
    monthlyPayment305k: number; // Mensualité pour emprunt de 270 000 € (sur maison 305k€ avec apport)
    borrowingCapacityDropPercent: number; // Perte de capacité pour acheteurs Nell'Immo
  };
}

export const budgetFeasibilityData: Record<'LFI_NFP' | 'RN', MacroScenarioData> = {
  LFI_NFP: {
    party: 'LFI_NFP',
    name: 'Nouveau Front Populaire (LFI dominante)',
    officialClaim: {
      expenditures: 152,
      revenues: 152,
      claimedBalance: 0,
      coreMessage: 'Programme 100% financé euro pour euro sur 3 ans : la relance par la demande (hausse du SMIC, point d\'indice, gratuité des services) crée un choc de consommation et de recettes fiscales.'
    },
    independentAudit: {
      source: 'Institut Montaigne (Audit Législatives 2024) & Synthèse OFCE',
      auditedExpenditures: 233,
      auditedRevenues: 54,
      netDeficitImpact: 179, // en scénario plein (ou 60-80 Mds€ en vitesse de croisière modérée)
      keyFindings: [
        'Dépenses sous-évaluées : l\'abrogation des retraites de 2023, le SMIC à 1 600 € net et le 100% Sécu dépassent largement les estimations initiales.',
        'Rendement des recettes surestimé : l\'assiette de l\'ISF climatique, de l\'IR à 14 tranches et de la taxe superprofits fond de 40% à 60% sous l\'effet des optimisations et départs.',
        'Déficit public estimé entre 6,5% et 9% du PIB la première année (contre 5,5% en 2024).'
      ]
    },
    euCompliance: {
      maastricht3Percent: 'Violation Critique (>6-8% PIB)',
      pdeRisk: 'Procédure pour Déficit Excessif (PDE) activée immédiatement par Bruxelles (Art. 126 TFUE).',
      sanctionsRisk: 'Risque de gel des fonds de cohésion européens et amende théorique pouvant atteindre 0,05% du PIB tous les 6 mois.'
    },
    marketSpreadImpact: {
      projectedSpreadOatBundBps: 85, // 85 bps
      spreadExplanation: 'Inquiétude des créanciers internationaux (qui détiennent 53% de la dette française) face au risque de monétisation et de hausse de la fiscalité sur le capital mobilier.',
      mortgageRate20y: 4.20, // 4.20%
      monthlyPayment305k: 1664, // pour 270k€ empruntés sur 20 ans
      borrowingCapacityDropPercent: -12.5
    }
  },
  RN: {
    party: 'RN',
    name: 'Rassemblement National',
    officialClaim: {
      expenditures: 35,
      revenues: 35,
      claimedBalance: 0,
      coreMessage: 'Toutes les baisses d\'impôts (TVA 5,5% énergie, exonération IR -30 ans) sont gagées sur la suppression de l\'AME, la réduction drastique de l\'immigration et la baisse de la contribution au budget de l\'UE.'
    },
    independentAudit: {
      source: 'Institut Montaigne (Audit Législatives 2024) & Rapport Cour des Comptes',
      auditedExpenditures: 85,
      auditedRevenues: 14,
      netDeficitImpact: 71,
      keyFindings: [
        'Baisses d\'impôts massives et immédiates : La baisse de la TVA à 5,5% sur l\'énergie coûte à elle seule 11 à 12 Mds€/an.',
        'Économies sur l\'immigration irréalistes : Le RN compte 15 à 20 Mds€ d\'économies, alors que l\'Aide Médicale d\'État (AME) ne coûte que 1,2 Md€ (Cour des Comptes) et la suppression des prestations aux étrangers réguliers est bloquée par le Conseil constitutionnel.',
        'La baisse de contribution à l\'UE (2 Mds€) expose à des mesures de rétorsion immédiates sur la PAC des agriculteurs français.'
      ]
    },
    euCompliance: {
      maastricht3Percent: 'Violation Majeure (5-7% PIB)',
      pdeRisk: 'Durcissement de la procédure de déficit excessif ouverte en juillet 2024.',
      sanctionsRisk: 'Mise en demeure de la Commission européenne pour refus de respecter les règles du Pacte de Stabilité et de Croissance.'
    },
    marketSpreadImpact: {
      projectedSpreadOatBundBps: 110, // 110 bps
      spreadExplanation: 'Prime de risque politique et souveraine maximale due aux menaces unilatérales contre l\'UE et à l\'impossibilité de boucler le budget sans dette.',
      mortgageRate20y: 4.65, // 4.65%
      monthlyPayment305k: 1731, // pour 270k€ empruntés sur 20 ans
      borrowingCapacityDropPercent: -17.2
    }
  }
};
