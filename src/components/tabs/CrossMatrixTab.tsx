import React from 'react';
import { BookOpen } from 'lucide-react';

export const CrossMatrixTab: React.FC = () => {
  const criteria = [
    {
      category: '1. ELLE (Fiscalité)',
      name: 'Régime des Dividendes 2025 (20 000 €)',
      cont: 'PFU 31,4% (12,8% IR + 18,6% PS)',
      lfi: 'Suppression PFU : Barème 14 tranches + cotisations (~43%)',
      rn: 'PFU 30% maintenu (0% surtaxe)',
      droite: 'PFU ramené à 30% + baisse charges TPE (-180 €)',
      why: 'Art. 200 A CGI. Avec 20 000 € de dividendes, le passage du loyer de 400 € à 650 €+100 € (+4 200 €) + CESU (3 131 €) + PEE (3 880 €) remplace 56% à 100% des dividendes !',
      best: 'rn',
    },
    {
      category: '1. ELLE (Fiscalité)',
      name: "Impôt sur le Revenu (Salaire 40 000 €)",
      cont: '5 tranches (1,50 part QF avec Case T)',
      lfi: '14 tranches progressives + crédit impôt enfant (1 800 €)',
      rn: '5 tranches + part pleine dès le 2e enfant (1,75 part = -450 € IR)',
      droite: '5 tranches + plafond QF relevé à 2 500 €',
      why: 'Abattement 10% salaires (Art. 83-3° CGI : base 36 000 €). La part pleine RN dès le 2e enfant fait passer Nelly de 1,50 à 1,75 part en garde alternée.',
      best: 'rn',
    },
    {
      category: '1. ELLE (Maison & Prêt)',
      name: 'Maison 305k€ (+23,5k€ notaire) & Prêt 260k€ / 25 ans',
      cont: '1 330 € à 1 372 €/m (3,7%-4%) • Bail 650€+100€ à 0€ IR',
      lfi: 'Prêt 25 ans figé • Hausse TF locale (+350€) • Bail pro protégé',
      rn: 'Prêt 25 ans figé • Exonération IFF totale sur la maison 305k€',
      droite: 'Détente des taux vers 3,70% (1 330 €/m) & plafonnement TF',
      why: 'Art. 28 & 31 CGI : sur 25 ans, les 260 000 € empruntés génèrent ~9 905 € d’intérêts An 1, dont 28% (2 773 €) effacent l’impôt sur le loyer Nell’Immo.',
      best: 'droite',
    },
    {
      category: '2. SES 2 FILLES (5 & 11 ans)',
      name: 'Allocations Familiales CAF (Garde alternée 50/50)',
      cont: '0 € / an (modulées au-dessus du plafond)',
      lfi: '+600 € / an (allocation dès le 1er enfant)',
      rn: '+1 080 € / an (universalité rétablie sans plafond de revenus)',
      droite: '0 € / an (plafond actuel maintenu)',
      why: 'Art. L521-1 CSS : le RN abroge la modulation Touraine (2015) et rétablit le taux plein universel (~90 €/mois nets pour la part 50% de Nelly).',
      best: 'rn',
    },
    {
      category: '2. SES 2 FILLES (5 & 11 ans)',
      name: 'Cantine (Pélissanne), Fournitures, Piano & Escalade',
      cont: 'Plein tarif : 777 € cantine + 260 € fournitures + 800 € activités',
      lfi: '0 € cantine + 0 € fournitures + 350 € aides sport/piano (+1 387 €)',
      rn: '777 € cantine + 230 € fournitures (-30 € TVA) + 860 € activités',
      droite: '777 € cantine + 260 € fournitures + 750 € activités (-50 €)',
      why: 'Grille Mairie de Pélissanne (4,10 €/repas) & Collège Carcassonne × 70 repas/fille en garde alternée.',
      best: 'lfi',
    },
    {
      category: '2. SES 2 FILLES (Santé)',
      name: 'Orthodontie Aînée 11 ans (TO 90) & Mutuelle',
      cont: '1 450 €/an (700 € reste à charge bagues + 750 € mutuelle)',
      lfi: '200 €/an (« 100% Sécu » intégral : Gain +1 250 €/an)',
      rn: '1 450 €/an (Système Sécu + Mutuelle privée maintenu)',
      droite: '1 400 €/an (Contrat collectif cadre déductible)',
      why: 'Art. R162-52 CSS : la Sécu ne rembourse que 193,50 €/semestre sur un devis moyen de 850 €/semestre en Provence.',
      best: 'lfi',
    },
    {
      category: '2. SES 2 FILLES (Horizon 2033)',
      name: 'Études Supérieures à Aix/Marseille (2033 & 2039)',
      cont: '0 € bourse CROUS (~6 300 €/an/fille à charge de Nelly)',
      lfi: 'Allocation Autonomie 1 063 €/mois (+12 756 €/an/fille)',
      rn: '0 € bourse CROUS (parade : pension déductible 6 674 €/an)',
      droite: '0 € bourse CROUS (abattement donation 200k€ pour studio)',
      why: 'À 60 000 € de revenus (40k€ + 20k€), Nelly dépasse le plafond CROUS (~33 100 €). LFI verse 63 780 € sur 5 ans par fille.',
      best: 'lfi',
    },
    {
      category: "3. SOCIÉTÉ NELL'IMMO",
      name: "Chiffre d'Affaires (130k€ HT), Acheteurs & DPE",
      cont: 'Marché stable (13 ventes/an) • Calendrier DPE maintenu',
      lfi: 'Recul bailleurs (-10% ventes) compensé par Gestion GUL (+14,4k€)',
      rn: 'Fin interdictions DPE F/G (+mandats), mais risque taux crédit 4,6%',
      droite: 'Relance bailleurs privés (+12% CA = +15 600 € HT pour Nell’Immo)',
      why: 'Sensibilité des acquéreurs de Pélissanne aux taux de crédit (OAT 10 ans) et des vendeurs aux normes DPE.',
      best: 'droite',
    },
    {
      category: '1. ELLE (Patrimoine & Retraite)',
      name: 'Donation Maison 305k€ & Âge de Retraite',
      cont: '0 € droits (Nue-propriété 61k€/fille) • Retraite 64 ans',
      lfi: '0 € droits (< 100k€/fille) • Retraite 60 ans (+100,8k€ pension)',
      rn: '0 € droits (100k€ / 10 ans) • Retraite 62-63 ans',
      droite: '0 € droits (200k€ / 10 ans) • Retraite 64 ans',
      why: 'Art. 669 & 779 CGI : avant 51 ans, la nue-propriété vaut 40% (122k€ total = 61k€/fille), exonérée à 100% sous tous les partis.',
      best: 'lfi',
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase text-indigo-600">Matrice de Décision Multicritère Documentée</span>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
            Tableau Croisé des 4 Blocs Politiques 2027 (Elle • Ses 2 Filles • Nell'Immo)
          </h2>
        </div>
        <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium">
          Chiffres Réels 2025 (40k€ + 20k€ div • Prêt 260k€ / 25 ans)
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs min-w-[860px]">
          <thead>
            <tr className="border-b-2 border-slate-200 uppercase text-[10px] text-slate-500 bg-slate-50">
              <th className="py-3 px-3">Sphère & Critère</th>
              <th className="py-3 px-3 text-sky-900 bg-sky-50/50">1. Continuité</th>
              <th className="py-3 px-3 text-emerald-900 bg-emerald-50/50">2. NFP / LFI</th>
              <th className="py-3 px-3 text-amber-900 bg-amber-50/50">3. Programme RN</th>
              <th className="py-3 px-3 text-indigo-900 bg-indigo-50/50">4. Droite Répub.</th>
              <th className="py-3 px-3 text-slate-700 bg-slate-100">Justification & Règle Applicable</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {criteria.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-2.5 px-3">
                  <div className="text-[10px] text-indigo-600 font-bold uppercase">{item.category}</div>
                  <div className="font-bold text-slate-900">{item.name}</div>
                </td>

                <td className={`py-2.5 px-3 bg-sky-50/20 ${item.best === 'cont' ? 'font-bold text-sky-900' : 'text-slate-700'}`}>
                  {item.cont}
                </td>

                <td className={`py-2.5 px-3 bg-emerald-50/20 ${item.best === 'lfi' ? 'font-bold text-emerald-900' : 'text-slate-700'}`}>
                  {item.lfi}
                </td>

                <td className={`py-2.5 px-3 bg-amber-50/20 ${item.best === 'rn' ? 'font-bold text-amber-950' : 'text-slate-700'}`}>
                  {item.rn}
                </td>

                <td className={`py-2.5 px-3 bg-indigo-50/20 ${item.best === 'droite' ? 'font-bold text-indigo-900' : 'text-slate-700'}`}>
                  {item.droite}
                </td>

                <td className="py-2.5 px-3 bg-slate-50/80 text-[11px] text-slate-600 leading-snug max-w-[260px]">
                  <span className="inline-flex items-center gap-1 font-semibold text-indigo-900">
                    <BookOpen className="w-3 h-3 text-indigo-600 shrink-0" />
                  </span>{' '}
                  {item.why}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
