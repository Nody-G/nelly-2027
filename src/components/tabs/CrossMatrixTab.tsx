import React from 'react';
import { Table2, Check, X, AlertTriangle, ShieldCheck } from 'lucide-react';

export const CrossMatrixTab: React.FC = () => {
  const criteria = [
    {
      category: 'Fiscalité Personnelle',
      name: 'Régime des Dividendes',
      cont: 'PFU 31,4% (ou 30%) maintenu',
      lfi: 'Suppression PFU : Cotisations Sécu ~35% + Barème progressif',
      rn: 'PFU 30% maintenu',
      droite: 'PFU 30% maintenu avec PEA renforcé',
      best: 'rn'
    },
    {
      category: 'Fiscalité Personnelle',
      name: 'Barème de l\'Impôt sur le Revenu',
      cont: '5 tranches (0%, 11%, 30%, 41%, 45%)',
      lfi: '14 tranches (de 0% à 90%)',
      rn: '5 tranches actuelles',
      droite: '5 tranches avec quotient relevé',
      best: 'rn'
    },
    {
      category: 'Famille & Enfants',
      name: 'Quotient Familial (Garde Alternée)',
      cont: '1,75 parts (Case T parent isolé, plafonné)',
      lfi: 'Crédit d\'impôt forfaitaire universel',
      rn: 'Part pleine dès le 2e enfant (+0,25 part en garde alternée)',
      droite: 'Plafond du quotient familial relevé à 2 500 €',
      best: 'rn'
    },
    {
      category: 'Famille & Enfants',
      name: 'Cantine & Fournitures Scolaires',
      cont: 'Plein tarif Pélissanne tranche 5 (~1 040 €/an)',
      lfi: 'Gratuité totale cantine + packs fournitures (0 €)',
      rn: 'Plein tarif maintenu (~1 020 €/an)',
      droite: 'Tarif normal au coût de revient (~1 040 €/an)',
      best: 'lfi'
    },
    {
      category: 'Famille & Enfants',
      name: 'Piano (Aînée) & Sport (Cadette)',
      cont: 'Plein tarif (écoles municipales ou domicile)',
      lfi: 'Chèque culture/sport universel + subvention écoles de musique',
      rn: 'Baisse TVA 5,5% mais risque de coupes subventions culture',
      droite: 'Déduction fiscale des cotisations associatives',
      best: 'lfi'
    },
    {
      category: 'Santé & Protection',
      name: 'Orthodontie (11 ans) & Mutuelle',
      cont: 'Mutuelle privée + reste à charge (~500-800 €/an)',
      lfi: '100% Sécu intégrale sans mutuelle privée (0 € reste à charge)',
      rn: 'Système actuel Sécu + Mutuelle privée',
      droite: 'Système actuel Sécu + Mutuelle privée',
      best: 'lfi'
    },
    {
      category: 'Avenir des Filles',
      name: 'Études Supérieures (Horizon 2033)',
      cont: '0 € bourse CROUS (100% à charge ~12 756 €/an)',
      lfi: 'Allocation d\'Autonomie de 1 063 €/mois par fille (+12 756 €/an perçus)',
      rn: '0 € bourse CROUS (100% à charge de Nelly)',
      droite: 'Prêts étudiants garantis par l\'État',
      best: 'lfi'
    },
    {
      category: 'Business & Immobilier',
      name: "Transaction Immobilière Nell'Immo",
      cont: 'Marché régulier, taux bancaires modérés (~3,4%)',
      lfi: 'Encadrement généralisé des loyers, repli des investisseurs locatifs',
      rn: 'Risque de hausse des taux de crédit (3,8%-4,5%) si spread OAT',
      droite: 'Suppression encadrement, retour en force des investisseurs bailleurs',
      best: 'droite'
    },
    {
      category: 'Business & Immobilier',
      name: 'Règles DPE / Passoires Thermiques',
      cont: 'Calendrier Climat maintenu (G interdit 2025, F 2028)',
      lfi: 'Rénovation obligatoire stricte avec aides publiques',
      rn: 'Abrogation ou assouplissement majeur des interdictions DPE',
      droite: 'Report de 5 ans du calendrier DPE',
      best: 'rn'
    },
    {
      category: 'Patrimoine & Retraite',
      name: 'Donation Maison 305k€ aux 2 Filles',
      cont: '0 € de droits via nue-propriété (Art. 669 CGI)',
      lfi: '0 € de droits via nue-propriété (sous plafond 100k€/fille)',
      rn: '0 € de droits + abattement donations 100k€ tous les 10 ans',
      droite: '0 € de droits + abattement 200k€/enfant',
      best: 'rn'
    },
    {
      category: 'Patrimoine & Retraite',
      name: 'Âge de départ à la Retraite',
      cont: '64 ans avec 43 annuités (Loi 2023)',
      lfi: '60 ans avec 40 annuités (+100k€ pension reçue en avance)',
      rn: '60 à 62 ans si début de carrière précoce',
      droite: '64 à 65 ans',
      best: 'lfi'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase text-indigo-600">Matrice de Décision Multicritère</span>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
            Tableau Croisé exhaustif des 4 Blocs Politiques 2027 face à la Situation de Nelly
          </h2>
        </div>
        <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium">
          11 Critères Clés Comparés
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs min-w-[780px]">
          <thead>
            <tr className="border-b-2 border-slate-200 uppercase text-[10px] text-slate-500 bg-slate-50">
              <th className="py-3 px-3">Critère Stratégique</th>
              <th className="py-3 px-3 text-sky-900 bg-sky-50/50">1. Continuité (Statu Quo)</th>
              <th className="py-3 px-3 text-emerald-900 bg-emerald-50/50">2. NFP / LFI 2027</th>
              <th className="py-3 px-3 text-amber-900 bg-amber-50/50">3. Rassemblement National</th>
              <th className="py-3 px-3 text-indigo-900 bg-indigo-50/50">4. Droite Républicaine</th>
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
                  {item.best === 'lfi' && <span className="ml-1 text-[10px] bg-emerald-100 text-emerald-800 px-1 py-0.2 rounded font-bold">Top Social</span>}
                </td>

                <td className={`py-2.5 px-3 bg-amber-50/20 ${item.best === 'rn' ? 'font-bold text-amber-950' : 'text-slate-700'}`}>
                  {item.rn}
                  {item.best === 'rn' && <span className="ml-1 text-[10px] bg-amber-100 text-amber-900 px-1 py-0.2 rounded font-bold">Top Fiscal</span>}
                </td>

                <td className={`py-2.5 px-3 bg-indigo-50/20 ${item.best === 'droite' ? 'font-bold text-indigo-900' : 'text-slate-700'}`}>
                  {item.droite}
                  {item.best === 'droite' && <span className="ml-1 text-[10px] bg-indigo-100 text-indigo-800 px-1 py-0.2 rounded font-bold">Top Business</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-900 text-white text-xs space-y-1.5 mt-2">
        <div className="font-bold text-amber-300 uppercase text-[11px]">
          Synthèse Décisionnelle pour Nelly :
        </div>
        <p className="text-slate-300 leading-relaxed">
          • <strong>Sous RN ou Droite :</strong> Avantage fiscal pur sur les dividendes, TVA énergie et foncier, mais dépenses d'enfants et d'études 100% à sa charge personnelle et risque sur les taux d'emprunt des acheteurs.
          <br />• <strong>Sous LFI :</strong> Pression fiscale élevée sur les dividendes (neutralisable si elle active les leviers maison de ce dossier !), mais compensée par des gains massifs sur le quotidien (+3 590 €/an cantine/orthodontie), <strong>+25 500 €/an au total pour les études supérieures de ses deux filles</strong> et 4 années de retraite en avance.
          <br />• <strong>Le coup gagnant pour Nelly :</strong> Mettre en place les 6 leviers de la maison à 305 000 € dès maintenant pour être <strong>gagnante dans 100% des configurations politiques</strong>.
        </p>
      </div>
    </div>
  );
};

