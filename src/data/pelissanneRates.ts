export const pelissanneLocalData = {
  city: 'Pélissanne',
  postalCode: '13330',
  intercommunality: 'Métropole d\'Aix-Marseille-Provence (Territoire du Pays Salonais)',
  schools: {
    maternelleEtPrimaire: ['École Maternelle Roux de Brignoles', 'École Élémentaire Victor Hugo', 'École Plan de Gare'],
    college: 'Collège Roger Carcassonne (Pélissanne)',
    lyceesSecteur: ['Lycée Adam de Craponne (Salon-de-Provence)', 'Lycée de l\'Empéri (Salon-de-Provence)'],
    universitesProches: ['Aix-Marseille Université - Campus Aix-en-Provence (25 min)', 'Marseille Luminy / Saint-Charles (45 min)'],
  },
  municipalTariffs: {
    cantineScolaire: {
      trancheHauteParRepas: 4.10,
      joursParAnParFilleGardeAlternee: 70, // ~140 jours d'école / 2 parents
      coutAnnuelCadette5ans: 287,
      coutAnnuelAinee11ansCollege: 490,
      totalAnnuelGardeAlternee: 777,
    },
    periscolaireEtAlsh: {
      periscolaireSoirHeure: 3.80,
      centreLoisirsMercrediDemiJournee: 12.50,
      centreLoisirsVacancesJournee: 19.20,
      alshStructure: 'Centre de Loisirs Jean-Paul Houlié (Pélissanne)',
      coutAnnuelMoyenCadette5ans: 450,
    },
    musiquePiano: {
      structure: 'École Municipale de Musique de Pélissanne / Cours particuliers domicile',
      coutAnnuelStandard: 400, // 400 € / an payés par Nelly
      droitPassSport: false, // Inéligible ARS car revenus Nelly > 31 000 €
      remboursementPossibleCesu: 2591, // Plafond CESU préfinancé 2026 utilisable pour prof particulier à domicile
    },
    sportCadette: {
      structure: 'Club d\'Escalade (Sensabloc / Club Alpin Pays Salonais / Pélissanne)',
      coutAnnuelLicenceEtTenue: 400, // 400 € / an payés par Nelly pour sa fille de 5 ans
      chequesVacancesAcceptes: true,
    },
    taxeFonciereMaison305k: {
      montantTotalEstime: 1900,
      quotePartProfessionnelle28Pct: 532, // Déductible au Régime Foncier Réel sur Nell'Immo
    },
    loyerBureauMaison305k: {
      surfaceDedieeBureauArchivesParking: 35, // m²
      loyerMensuelJustifieMarche: 600, // 17,14 €/m² charges et parking inclus (conforme au marché de Pélissanne)
      chargesMensuellesRefacturables: 100, // Quote-part eau, électricité, clim réversible, entretien
      loyerAnnuelTotalTTC: 7200,
      chargesAnnuellesRefacturees: 1200,
      totalFluxNetSortiDeNellImmo: 8400,
    }
  }
};
