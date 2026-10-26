import React from 'react';
import { BookOpen } from 'lucide-react';

export const CrossMatrixTab: React.FC = () => {
  const criteria = [
    {
      category: 'Fiscalité Personnelle',
      name: 'Régime des Dividendes (30 000 €)',
      cont: 'PFU 31,4% (12,8% IR + 18,6% PS LFSS 2026)',
      lfi: 'Suppression PFU : Barème 14 tranches + CSG/cotisations (~43%)',
      rn: 'PFU 30% / 31,4% maintenu (0% surtaxe)',
      droite: 'PFU ramené à 30% + baisse charges TPE (-180 €)',
      why: 'Art. 200 A CGI & LFSS 2026. Neutralisable à 100% si les dividendes sont remplacés par le loyer bureau (7 200 €) et la pub façade (3 600 €).',
      best: 'rn',
    },
    {
      category: 'Fiscalité Personnelle',
      name: "Barème de l'Impôt sur le Revenu (Salaire 40k€)",
      cont: '5 tranches (0%, 11%, 30%, 41%, 45%)',
      lfi: '14 tranches progressives (de 0% à 90%)',
      rn: '5 tranches + part pleine dès le 2e enfant (-450 € IR)',
      droite: '5 tranches + plafond QF relevé à 2 500 €',
      why: 'Abattement 10% salaires (Art. 83-3° CGI : base 36 000 €). À ce niveau, la part pleine RN dès le 2e enfant fait baisser l’IR de ~450 €/an.',
      best: 'rn',
    },
    {
      category: 'Famille & Enfants',
      name: 'Quotient Familial & Allocations CAF (50/50)',
      cont: '1,50 part (plafond 1 791 €) • 0 € CAF (tranche 3)',
      lfi: 'Crédit impôt enfant + 600 €/an CAF dès le 1er enfant',
      rn: '1,75 part (+0,25 pt) + 1 080 €/an CAF universelle sans plafond',
      droite: 'Plafond QF relevé à 2 500 € • 0 € CAF (tranche 3)',
      why: 'Art. 194-I CGI & Art. L521-1 CSS. Le RN supprime la modulation de revenus Touraine (2015), rendant 90 €/mois nets (part 50%) à Nelly.',
      best: 'rn',
    },
    {
      category: 'Famille & Enfants',
      name: 'Cantine (Pélissanne) & Fournitures Rentrée',
      cont: 'Plein tarif Tranche 5 : 777 € cantine + 260 € fournitures',
      lfi: 'Gratuité universelle cantine + kit rentrée (Gain +1 037 €/an)',
      rn: 'Tarif municipal maintenu (1 037 €/an)',
      droite: 'Tarif municipal maintenu (1 037 €/an)',
      why: 'Grille Mairie de Pélissanne (4,10 €/repas) & CD13 Collège Carcassonne (4,45 €) × 70 repas/fille en garde alternée.',
      best: 'lfi',
    },
    {
      category: 'Famille & Enfants',
      name: 'Piano (Aînée 11 ans) & Escalade (Cadette 5 ans)',
      cont: '800 €/an (400 € piano + 400 € escalade)',
      lfi: '450 €/an (Chèque culture & Pass’Sport universel : +350 €)',
      rn: '800 €/an (vigilance subventions écoles de musique)',
      droite: '450 €/an (Chèque sport/musique 175 €/enfant : +350 €)',
      why: 'Coût associatif constaté à Pélissanne/Salon. Optimisable via CESU Dirigeant (cours à domicile Art. 199 sexdecies CGI) et ANCV.',
      best: 'lfi',
    },
    {
      category: 'Santé & Protection',
      name: 'Orthodontie (TO 90) & Mutuelle Filles',
      cont: '1 250 €/an (Reste à charge TO 90 ~700 € + mutuelle 550 €)',
      lfi: '0 €/an (« 100% Sécu » intégral : Gain +1 250 €/an)',
      rn: '1 250 €/an (Système Sécu + Mutuelle maintenu)',
      droite: '1 250 €/an (Déductibilité Madelin/entreprise maintenue)',
      why: 'Art. R162-52 CSS : la Sécu ne rembourse que 193,50 €/semestre sur un devis moyen de 850 €/semestre en PACA.',
      best: 'lfi',
    },
    {
      category: 'Coût de la Vie Complet',
      name: 'Budget Global Foyer Pélissanne (8 Postes)',
      cont: '36 677 €/an (3 056 €/mois tout compris)',
      lfi: '34 390 €/an (-2 287 €/an malgré hausse OAT crédit & TF)',
      rn: '36 227 €/an (-450 €/an car surcoût crédit OAT compense TVA)',
      droite: '35 677 €/an (-1 000 €/an grâce au repli OAT & TF stable)',
      why: 'Intègre les 8 postes INSEE : Crédit 305k€ + Taxe Foncière (16 150 €), Alimentation (6 840 €), Mobilité (3 900 €), Énergie (2 250 €), Enfants/Santé/Loisirs.',
      best: 'lfi',
    },
    {
      category: 'Avenir des Filles',
      name: 'Études Supérieures (Horizons 2033 & 2039)',
      cont: '0 € bourse CROUS (~6 500 €/an/fille à charge de Nelly)',
      lfi: 'Allocation Autonomie 1 063 €/mois (+12 756 €/an/fille, 1 158 € indexée)',
      rn: '0 € bourse CROUS (revenus 70k€ > plafond social)',
      droite: '0 € bourse CROUS (abattement donation 200k€ pour studio)',
      why: 'Enquête OVE & Barème CROUS : à 70 000 €, Nelly est exclue des bourses sur critères sociaux dans 3 blocs sur 4.',
      best: 'lfi',
    },
    {
      category: 'Business & Immobilier',
      name: "Marché Transaction Nell'Immo & Taux OAT",
      cont: 'Taux crédit ~3,45% • Marché Pélissanne stable (CA 130k€)',
      lfi: 'Taux ~4,20% + encadrement loyers (-12% ventes, +GUL gestion)',
      rn: 'Taux ~4,55% (spread OAT 110 bps) mais fin DPE (+mandats)',
      droite: 'Taux ~3,20% + statut bailleur privé (+6% CA Nell’Immo)',
      why: 'Corrélation Banque de France OAT 10 ans / Taux habitat & norme HCSF 35% : +1% de taux = -9,5% de pouvoir d’achat immobilier.',
      best: 'droite',
    },
    {
      category: 'Patrimoine & Retraite',
      name: 'Donation Maison 305k€ & Retraite Dirigeante',
      cont: '0 € droits (Nue-propriété 61k€/fille) • Retraite 64 ans',
      lfi: '0 € droits (< 100k€/fille) • Retraite 60 ans (+100,8k€ pension)',
      rn: '0 € droits (100k€ / 10 ans) • Retraite 62-63 ans (études sup)',
      droite: '0 € droits (200k€ / 10 ans) • Retraite 64 ans + PER renforcé',
      why: 'Art. 669 & 779 CGI : à 42 ans, la nue-propriété vaut 40% (122k€ total = 61k€/fille), exonérée à 100% sous tous les partis.',
      best: 'lfi',
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase text-indigo-600">Matrice de Décision Multicritère Documentée</span>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
            Tableau Croisé des 4 Blocs Politiques 2027 avec Justification Méthodologique
          </h2>
        </div>
        <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium">
          10 Axes Stratégiques & Sources
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs min-w-[860px]">
          <thead>
            <tr className="border-b-2 border-slate-200 uppercase text-[10px] text-slate-500 bg-slate-50">
              <th className="py-3 px-3">Critère Stratégique</th>
              <th className="py-3 px-3 text-sky-900 bg-sky-50/50">1. Continuité</th>
              <th className="py-3 px-3 text-emerald-900 bg-emerald-50/50">2. NFP / LFI</th>
              <th className="py-3 px-3 text-amber-900 bg-amber-50/50">3. Programme RN</th>
              <th className="py-3 px-3 text-indigo-900 bg-indigo-50/50">4. Droite Répub.</th>
              <th className="py-3 px-3 text-slate-700 bg-slate-100">Pourquoi cette estimation ? (Source & Règle)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {criteria.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-2.5 px-3">
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">{item.category}</div>
                  <div className="font-bold text-slate-900">{item.name}</div>
                </td>

                <td className={`py-2.5 px-3 bg-sky-50/20 ${item.best === 'cont' ? 'font-bold text-sky-900' : 'text-slate-700'}`}>
                  {item.cont}
                </td>

                <td className={`py-2.5 px-3 bg-emerald-50/20 ${item.best === 'lfi' ? 'font-bold text-emerald-900' : 'text-slate-700'}`}>
                  {item.lfi}
                  {item.best === 'lfi' && (
                    <span className="ml-1 text-[10px] bg-emerald-100 text-emerald-800 px-1 py-0.2 rounded font-bold">
                      Top Social
                    </span>
                  )}
                </td>

                <td className={`py-2.5 px-3 bg-amber-50/20 ${item.best === 'rn' ? 'font-bold text-amber-950' : 'text-slate-700'}`}>
                  {item.rn}
                  {item.best === 'rn' && (
                    <span className="ml-1 text-[10px] bg-amber-100 text-amber-900 px-1 py-0.2 rounded font-bold">
                      Top Fiscal
                    </span>
                  )}
                </td>

                <td className={`py-2.5 px-3 bg-indigo-50/20 ${item.best === 'droite' ? 'font-bold text-indigo-900' : 'text-slate-700'}`}>
                  {item.droite}
                  {item.best === 'droite' && (
                    <span className="ml-1 text-[10px] bg-indigo-100 text-indigo-800 px-1 py-0.2 rounded font-bold">
                      Top Business
                    </span>
                  )}
                </td>

                <td className="py-2.5 px-3 bg-slate-50/80 text-[11px] text-slate-600 leading-snug max-w-[260px]">
                  <span className="inline-flex items-center gap-1 font-semibold text-indigo-900">
                    <BookOpen className="w-3 h-3 text-indigo-600 shrink-0" />
                    <span>Justification :</span>
                  </span>{' '}
                  {item.why}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-900 text-white text-xs space-y-1.5 mt-2">
        <div className="font-bold text-amber-300 uppercase text-[11px]">
          Synthèse Décisionnelle Documentée pour Nelly :
        </div>
        <p className="text-slate-300 leading-relaxed">
          • <strong>Sous RN ou Droite :</strong> Avantage fiscal sur les dividendes, le quotient familial (+450 € IR sous RN ou plafond 2 500 € sous Droite) et les allocations familiales universelles (+1 080 €/an sous RN), mais frais scolaires/orthodontie (3 437 €/an) et études supérieures 2033 (~6 500 €/an/fille) à sa charge personnelle.
          <br />• <strong>Sous LFI / NFP :</strong> Surtaxation des dividendes passifs (+5 800 €), mais <strong>intégralement neutralisable via les leviers de la maison à 305 000 €</strong>, permettant d'encaisser +3 987 €/an d'économies directes et CAF aujourd'hui, puis +12 756 €/an par fille en études supérieures dès 2033 et la retraite à 60 ans.
        </p>
      </div>
    </div>
  );
};
