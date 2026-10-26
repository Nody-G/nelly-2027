import React from 'react';
import { FiscalParameters } from '../../types/fiscal';
import { runAllScenarios } from '../../engine/scenarioEngine';
import { CrossMatrixTab } from './CrossMatrixTab';
import { LawBadge } from '../common/LawBadge';
import { Printer, MapPin } from 'lucide-react';

interface ExportReportTabProps {
  params: FiscalParameters;
}

export const ExportReportTab: React.FC<ExportReportTabProps> = ({ params }) => {
  const scenarios = runAllScenarios(params);
  const formatEuro = (n: number) => Math.round(n).toLocaleString('fr-FR') + ' €';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Barre d'action d'exportation */}
      <div className="no-print bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="font-extrabold text-slate-900 text-sm">
            Dossier Exécutif d'Arbitrage Fiscal, Coût de la Vie & Stratégie 2027-2039
          </h3>
          <p className="text-xs text-slate-500">
            Document officiel de synthèse documenté prêt à imprimer et à transmettre à votre expert-comptable et à votre notaire.
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95"
        >
          <Printer className="w-4 h-4" />
          <span>Imprimer ou Enregistrer en PDF</span>
        </button>
      </div>

      {/* FEUILLE OFFICIELLE DU DOSSIER */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-300 shadow-lg space-y-6 text-slate-900">
        
        {/* Entête du document officiel */}
        <div className="border-b-2 border-slate-900 pb-5 flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-700">
              AUDIT STRATÉGIQUE, COÛT DE LA VIE & POUVOIR D'ACHAT • PÉLISSANNE (13330)
            </div>
            <h1 className="text-xl sm:text-2xl font-black mt-1">
              Dossier Nell'Immo — Nelly Fernandez : Stratégie Patrimoniale, 2 Filles (5 & 11 ans) & Présidentielle 2027
            </h1>
            <div className="text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-indigo-600" />
              <span>NELL'IMMO SASU (SIREN 853 807 006 • RCS Salon-de-Provence) • 26 Av. des Enjouvènes, 13330 Pélissanne</span>
            </div>
          </div>

          <div className="text-right text-xs space-y-0.5 shrink-0 bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="font-bold text-slate-900">Dirigeante : Nelly Fernandez</div>
            <div className="text-[11px] text-indigo-700 font-semibold">Présidente de SASU (Assimilée salariée)</div>
            <div className="text-slate-600">CA Nell'Immo : ~130 000 € HT / an</div>
            <div className="text-slate-600">Revenu net analysé : {formatEuro(params.totalRevenue)} / an</div>
            <div className="text-slate-600">Maison acquise : 305 000 € (Pélissanne)</div>
            <div className="text-emerald-700 font-bold">Garde alternée : 2 filles (5 ans Escalade 400€ & 11 ans Piano 400€)</div>
          </div>
        </div>

        {/* 1. Synthèse des Résultats selon l'Élection 2027 */}
        <div className="space-y-3">
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1">
            1. Comparatif Financier Net, Coût de la Vie Complet (8 Postes) & Capacité d'Épargne
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
            2. Les 6 Leviers d'Ingénierie Fiscale Activés par la Maison à 305 000 €
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-300 text-slate-500 uppercase text-[10px] bg-slate-50">
                  <th className="py-2 px-2.5">N°</th>
                  <th className="py-2 px-2.5">Levier Stratégique</th>
                  <th className="py-2 px-2.5">Base Juridique</th>
                  <th className="py-2 px-2.5">Mécanisme Opérationnel Documenté</th>
                  <th className="py-2 px-2.5 text-right">Gain Net pour Nelly</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="py-2 px-2.5 font-bold">1</td>
                  <td className="py-2 px-2.5 font-bold text-slate-900">Bail Pro Foncier Réel (600€/m) + Façade Pub (300€/m)</td>
                  <td className="py-2 px-2.5"><LawBadge article="Art. 28 & 31" code="CGI" /></td>
                  <td className="py-2 px-2.5">Déduction quote-part intérêts prêt 305k€ + taxe foncière Pélissanne</td>
                  <td className="py-2 px-2.5 font-bold text-emerald-700 text-right">+7 950 € / an</td>
                </tr>
                <tr>
                  <td className="py-2 px-2.5 font-bold">2</td>
                  <td className="py-2 px-2.5 font-bold text-slate-900">Déblocage PEE / PER Maison</td>
                  <td className="py-2 px-2.5"><LawBadge article="Art. R3324-22" code="C. trav." /></td>
                  <td className="py-2 px-2.5">Abondement 300% débloqué à 0% d'IR avec l'acte authentique d'achat</td>
                  <td className="py-2 px-2.5 font-bold text-emerald-700 text-right">7 500 € à 12 500 €</td>
                </tr>
                <tr>
                  <td className="py-2 px-2.5 font-bold">3</td>
                  <td className="py-2 px-2.5 font-bold text-slate-900">CESU Dirigeante + Chèques-Vacances ANCV</td>
                  <td className="py-2 px-2.5"><LawBadge article="Art. L7233-4" code="C. trav." /></td>
                  <td className="py-2 px-2.5">Ménage maison, garde 5 ans et cours de piano à domicile + 25% crédit IS</td>
                  <td className="py-2 px-2.5 font-bold text-emerald-700 text-right">3 080 € net + 635 € CI</td>
                </tr>
                <tr>
                  <td className="py-2 px-2.5 font-bold">4</td>
                  <td className="py-2 px-2.5 font-bold text-slate-900">Travaux Bureau & Borne Auto</td>
                  <td className="py-2 px-2.5"><LawBadge article="Art. 39-1" code="CGI" /></td>
                  <td className="py-2 px-2.5">Prise en charge HT climatisation/meubles bureau + TVA 20% récupérée</td>
                  <td className="py-2 px-2.5 font-bold text-emerald-700 text-right">4 500 € HT + 900 € TVA</td>
                </tr>
                <tr>
                  <td className="py-2 px-2.5 font-bold">5</td>
                  <td className="py-2 px-2.5 font-bold text-slate-900">Audit Budget Pub (40k€)</td>
                  <td className="py-2 px-2.5"><LawBadge article="Loi Hoguet" code="Honoraires" /></td>
                  <td className="py-2 px-2.5">Portails payants réservés aux mandats exclusifs (-12% de frais)</td>
                  <td className="py-2 px-2.5 font-bold text-emerald-700 text-right">+4 800 € HT marge</td>
                </tr>
                <tr>
                  <td className="py-2 px-2.5 font-bold">6</td>
                  <td className="py-2 px-2.5 font-bold text-slate-900">Donation Nue-Propriété Maison</td>
                  <td className="py-2 px-2.5"><LawBadge article="Art. 669" code="CGI" /></td>
                  <td className="py-2 px-2.5">Donation notariée avant 51 ans (40% valeur = 61 000 € / fille &lt; 100k€)</td>
                  <td className="py-2 px-2.5 font-bold text-emerald-700 text-right">0 € de droits à vie</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Recommandations prioritaires pour l'expert-comptable */}
        <div className="p-4 rounded-2xl bg-slate-100 border border-slate-300 space-y-2 text-xs">
          <div className="font-black uppercase tracking-wider text-slate-800">
            3. Feuille de Route Opérationnelle pour l'Expert-Comptable & le Notaire (2026-2027) :
          </div>
          <ol className="list-decimal list-inside space-y-1.5 text-slate-700 leading-relaxed">
            <li>
              <strong>Verrouiller le prêt immobilier à taux fixe (~3,45%) avant l'élection de 2027</strong> pour immuniser l'acquisition de la maison de 305 000 € contre tout écartement du spread OAT 10 ans (+90 à +130 €/mois évités).
            </li>
            <li>
              <strong>Rédiger et signer le bail professionnel (25 m² bureau + façade publicitaire)</strong> entre Nelly Fernandez (propriétaire particulier au régime foncier réel 2044) et NELL'IMMO SASU.
            </li>
            <li>
              <strong>Émettre la décision unilatérale de présidence pour les CESU préfinancés</strong> (2 540 € base / 2 591 € plafond 2026) et imputer le crédit d'impôt famille de 25% (Art. 244 quater F CGI) sur le solde d'IS.
            </li>
            <li>
              <strong>Régulariser chez le notaire de Pélissanne/Salon la donation avec réserve d'usufruit</strong> de la nue-propriété aux deux filles avant le 51e anniversaire de Nelly (valeur fiscale 61 000 €/fille = 0 € de droits sous les 4 blocs politiques).
            </li>
          </ol>
        </div>

        {/* 4. Matrice Stratégique Multicritère Intégrée */}
        <div className="space-y-3 pt-2">
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1">
            4. Matrice de Décision Multicritère Documentée (10 Axes Clés)
          </h2>
          <CrossMatrixTab />
        </div>

        {/* Pied de page certificat */}
        <div className="pt-4 border-t border-slate-300 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 gap-2">
          <span>Dossier généré conformément au Code Général des Impôts, au Code de la Sécurité Sociale et aux enquêtes INSEE / OVE / Banque de France 2026.</span>
          <span>Nell'Immo • Pélissanne (13330) • Document confidentiel</span>
        </div>

      </div>

    </div>
  );
};
