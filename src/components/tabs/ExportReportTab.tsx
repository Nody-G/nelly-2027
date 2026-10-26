import React from 'react';
import { FiscalParameters } from '../../types/fiscal';
import { runAllScenarios } from '../../engine/scenarioEngine';
import { calculateMonthlyMortgagePayment } from '../../engine/taxEngine';
import { CrossMatrixTab } from './CrossMatrixTab';
import { LawBadge } from '../common/LawBadge';
import { MapPin } from 'lucide-react';

interface ExportReportTabProps {
  params: FiscalParameters;
}

export const ExportReportTab: React.FC<ExportReportTabProps> = ({ params }) => {
  const scenarios = runAllScenarios(params);
  const formatEuro = (n: number) => Math.round(n).toLocaleString('fr-FR') + ' €';
  const duration = params.loanDurationYears || 25;
  const monthlyLoan = Math.round(
    calculateMonthlyMortgagePayment(params.loanAmount || 260000, params.mortgageInterestRate || 3.85, duration)
  );

  return (
    <div className="space-y-5">
      {/* FEUILLE OFFICIELLE DU DOSSIER */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-300 shadow-md space-y-6 text-slate-900">
        {/* Entête du document officiel */}
        <div className="border-b-2 border-slate-900 pb-5 flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-700">
              AUDIT STRATÉGIQUE, PRÊT IMMOBILIER 25 ANS & POUVOIR D'ACHAT • PÉLISSANNE (13330)
            </div>
            <h1 className="text-xl sm:text-2xl font-black mt-1">
              Dossier Nell'Immo — Nelly Fernandez : Maison 305k€ (Prêt 260k€ / 25 ans), 2 Filles & Horizon 2027
            </h1>
            <div className="text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-indigo-600" />
              <span>NELL'IMMO SASU (SIREN 853 807 006 • RCS Salon-de-Provence) • 26 Av. des Enjouvènes, 13330 Pélissanne</span>
            </div>
          </div>

          <div className="text-right text-xs space-y-0.5 shrink-0 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <div className="font-bold text-slate-900">Dirigeante : Nelly Fernandez (SASU)</div>
            <div className="text-slate-700">
              <strong>Revenus 2025 :</strong> {formatEuro(params.totalRevenue)} ({formatEuro(params.totalRevenue - params.dividendsGross)} salaire + {formatEuro(params.dividendsGross)} div.)
            </div>
            <div className="text-slate-700">
              <strong>Achat Pélissanne :</strong> 305 000 € + <strong>23 500 € frais de notaire</strong> (328 500 €)
            </div>
            <div className="text-amber-900 font-bold">
              Prêt : 260 000 € sur 25 ans à {params.mortgageInterestRate.toFixed(2)}% ({monthlyLoan} €/m • attendu 3,7% - 4,0%)
            </div>
            <div className="text-emerald-700 font-bold">
              Loyer Nell'Immo : 400 €/m (maison louée) → {params.homeOfficeRentMonthly} €/m + 100 € ch.
            </div>
          </div>
        </div>

        {/* 1. Synthèse des Résultats selon l'Élection 2027 */}
        <div className="space-y-3">
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1">
            1. Comparatif Financier Net, Coût de la Vie Complet (8 Postes incluant Prêt 260k€ / 25 ans) & Épargne
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-xl border border-sky-300 bg-sky-50/50 space-y-1">
              <div className="font-bold text-sky-900">1. Continuité (Statu Quo)</div>
              <div className="text-lg font-black text-sky-700">
                +{formatEuro(scenarios.continuite.optimized.netGainVsReferencePassive)} / an
              </div>
              <div className="text-[11px] text-slate-600">
                Coût vie complet : <strong>{formatEuro(scenarios.continuite.optimized.fullHouseholdCostOfLiving)}</strong>
              </div>
              <div className="text-[11px] text-indigo-900 font-bold">
                Épargne libre : {formatEuro(scenarios.continuite.optimized.disposableSavingsCapacity)}/an
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-emerald-300 bg-emerald-50/50 space-y-1">
              <div className="font-bold text-emerald-900">2. Programme NFP / LFI</div>
              <div className="text-lg font-black text-emerald-700">
                +{formatEuro(scenarios.lfi.optimized.netGainVsReferencePassive)} / an
              </div>
              <div className="text-[11px] text-slate-600">
                Coût vie complet : <strong>{formatEuro(scenarios.lfi.optimized.fullHouseholdCostOfLiving)}</strong>
              </div>
              <div className="text-[11px] text-emerald-900 font-bold">
                Épargne libre : {formatEuro(scenarios.lfi.optimized.disposableSavingsCapacity)}/an
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-amber-300 bg-amber-50/50 space-y-1">
              <div className="font-bold text-amber-950">3. Rassemblement National</div>
              <div className="text-lg font-black text-amber-800">
                +{formatEuro(scenarios.rn.optimized.netGainVsReferencePassive)} / an
              </div>
              <div className="text-[11px] text-slate-600">
                Coût vie complet : <strong>{formatEuro(scenarios.rn.optimized.fullHouseholdCostOfLiving)}</strong>
              </div>
              <div className="text-[11px] text-amber-900 font-bold">
                Épargne libre : {formatEuro(scenarios.rn.optimized.disposableSavingsCapacity)}/an
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-indigo-300 bg-indigo-50/50 space-y-1">
              <div className="font-bold text-indigo-900">4. Droite Républicaine</div>
              <div className="text-lg font-black text-indigo-700">
                +{formatEuro(scenarios.droite.optimized.netGainVsReferencePassive)} / an
              </div>
              <div className="text-[11px] text-slate-600">
                Coût vie complet : <strong>{formatEuro(scenarios.droite.optimized.fullHouseholdCostOfLiving)}</strong>
              </div>
              <div className="text-[11px] text-indigo-900 font-bold">
                Épargne libre : {formatEuro(scenarios.droite.optimized.disposableSavingsCapacity)}/an
              </div>
            </div>
          </div>
        </div>

        {/* 2. Tableau des 6 leviers de la Maison à 305 000 € */}
        <div className="space-y-3">
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1">
            2. Les 6 Leviers Activés par l'Achat de la Maison à 305 000 € (Prêt 260k€ sur 25 ans + Notaire 23,5k€)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-300 text-slate-500 uppercase text-[10px] bg-slate-50">
                  <th className="py-2 px-2.5">N°</th>
                  <th className="py-2 px-2.5">Levier Stratégique</th>
                  <th className="py-2 px-2.5">Base Juridique</th>
                  <th className="py-2 px-2.5">Mécanisme Opérationnel Documenté</th>
                  <th className="py-2 px-2.5 text-right">Impact Financier Net</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="py-2 px-2.5 font-bold">1</td>
                  <td className="py-2 px-2.5 font-bold text-slate-900">Passage Loyer 400 €/m (locataire) → 650 €/m + 100 € ch. (propriétaire)</td>
                  <td className="py-2 px-2.5"><LawBadge article="Art. 28 & 31" code="CGI" /></td>
                  <td className="py-2 px-2.5">Déduction de 28% des intérêts du prêt de 260 000 € sur 25 ans (3,7-4%) + taxe foncière (0 € d'IR)</td>
                  <td className="py-2 px-2.5 font-bold text-emerald-700 text-right">+4 200 € / an net</td>
                </tr>
                <tr>
                  <td className="py-2 px-2.5 font-bold">2</td>
                  <td className="py-2 px-2.5 font-bold text-slate-900">Déblocage PEE Achat Résidence Principale</td>
                  <td className="py-2 px-2.5"><LawBadge article="Art. R3324-22" code="C. trav." /></td>
                  <td className="py-2 px-2.5">Rembourse plus de la moitié des 23 500 € de frais de notaire à 0% d'IR</td>
                  <td className="py-2 px-2.5 font-bold text-emerald-700 text-right">3 880 €/an (12 500 € An 1)</td>
                </tr>
                <tr>
                  <td className="py-2 px-2.5 font-bold">3</td>
                  <td className="py-2 px-2.5 font-bold text-slate-900">CESU Dirigeante (2 591 €) + ANCV (540 €)</td>
                  <td className="py-2 px-2.5"><LawBadge article="Art. L7233-4" code="C. trav." /></td>
                  <td className="py-2 px-2.5">Piano à domicile, garderie 5 ans et escalade à 0 € d'IR + 25% crédit IS</td>
                  <td className="py-2 px-2.5 font-bold text-emerald-700 text-right">3 131 € net + 648 € CI</td>
                </tr>
                <tr>
                  <td className="py-2 px-2.5 font-bold">4</td>
                  <td className="py-2 px-2.5 font-bold text-slate-900">Travaux Bureau 35 m² & Borne Électrique</td>
                  <td className="py-2 px-2.5"><LawBadge article="Art. 39-1" code="CGI" /></td>
                  <td className="py-2 px-2.5">Prise en charge HT aménagement/clim bureau + TVA 20% récupérée</td>
                  <td className="py-2 px-2.5 font-bold text-emerald-700 text-right">4 500 € HT + 900 € TVA</td>
                </tr>
                <tr>
                  <td className="py-2 px-2.5 font-bold">5</td>
                  <td className="py-2 px-2.5 font-bold text-slate-900">Audit Budget Pub (40 000 €)</td>
                  <td className="py-2 px-2.5"><LawBadge article="Loi Hoguet" code="Honoraires" /></td>
                  <td className="py-2 px-2.5">Portails payants réservés aux mandats exclusifs (-12% = 4 800 € HT)</td>
                  <td className="py-2 px-2.5 font-bold text-emerald-700 text-right">+4 080 € net après IS</td>
                </tr>
                <tr>
                  <td className="py-2 px-2.5 font-bold">6</td>
                  <td className="py-2 px-2.5 font-bold text-slate-900">Donation Nue-Propriété Maison (305 000 €)</td>
                  <td className="py-2 px-2.5"><LawBadge article="Art. 669" code="CGI" /></td>
                  <td className="py-2 px-2.5">Donation notariée avant 51 ans (40% valeur = 61 000 € / fille &lt; 100k€)</td>
                  <td className="py-2 px-2.5 font-bold text-emerald-700 text-right">0 € de droits à vie</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Matrice Stratégique Multicritère Intégrée */}
        <div className="space-y-3 pt-2">
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1">
            3. Matrice de Décision Multicritère Documentée (10 Axes Clés)
          </h2>
          <CrossMatrixTab />
        </div>
      </div>
    </div>
  );
};
