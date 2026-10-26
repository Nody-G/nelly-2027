import React, { useState } from 'react';
import { Scale, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { LawBadge } from '../common/LawBadge';
import { Tooltip } from '../common/Tooltip';

export const CustodySplitCalculator: React.FC = () => {
  const [totalSharedCosts, setTotalSharedCosts] = useState(3437); // Frais annuels partagés des 2 filles (hors énergie maison)
  const [nellyRatio, setNellyRatio] = useState(50); // 50/50 standard

  const nellyShare = totalSharedCosts * (nellyRatio / 100) * 2; // si totalSharedCosts = quote-part 50% de base à 50%
  const actualNellyShare = Math.round((totalSharedCosts * nellyRatio) / 50);

  // Montant que Nelly peut absorber via Nell'Immo (CESU 2 540 € base / 2 591 € plafond 2026 + Chèques-Vacances 540 €)
  const companyExemptCoverage = 3080;
  const nellyOutOfPocketAfterCompany = Math.max(0, actualNellyShare - companyExemptCoverage);

  const formatEuro = (n: number) => Math.round(n).toLocaleString('fr-FR') + ' €';

  return (
    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600" />
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
              Gestion Financière de la Garde Alternée (50/50) & Protection Fiscale
            </h3>
          </div>
          <p className="text-xs text-slate-600 mt-0.5">
            Comment financer la quote-part de Nelly (3 437 €/an hors énergie domestique) en franchise d'impôt et de charges URSSAF.
          </p>
        </div>
        <LawBadge article="Art. 194-II CGI" code="CGI" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* Curseur et réglage */}
        <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-3">
          <div className="flex justify-between font-bold text-slate-800">
            <span>Quote-part de base des 2 filles (Scolaire, Sport, Piano, Santé) :</span>
            <span className="text-indigo-600 font-extrabold">{formatEuro(totalSharedCosts)}</span>
          </div>
          <input 
            type="range"
            min={2000}
            max={6000}
            step={100}
            value={totalSharedCosts}
            onChange={(e) => setTotalSharedCosts(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
          />

          <div className="flex justify-between font-bold text-slate-800">
            <span>Répartition conventionnelle :</span>
            <span className="text-emerald-700">{nellyRatio}% Nelly / {100 - nellyRatio}% Père</span>
          </div>
          <input 
            type="range"
            min={30}
            max={70}
            step={5}
            value={nellyRatio}
            onChange={(e) => setNellyRatio(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-emerald-600"
          />

          <div className="p-2.5 rounded-lg bg-indigo-50/70 border border-indigo-100 flex justify-between text-indigo-950 font-semibold">
            <span>Part assumée par Nelly :</span>
            <span className="font-bold">{formatEuro(actualNellyShare)} / an</span>
          </div>
        </div>

        {/* Optimisation via Nell'Immo */}
        <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
          <div className="font-bold text-slate-900 uppercase text-[11px] flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Financement sans impôt via Nell'Immo</span>
          </div>

          <div className="flex justify-between text-slate-600">
            <span>Prise en charge{' '}
              <Tooltip 
                term="CESU Dirigeant (2 540 €)" 
                explanation="Plafond annuel d'aide financière de l'entreprise pour financer les services à la personne (garde d'enfants, soutien scolaire, cours à domicile, ménage). Exonéré d'impôt et de charges sociales pour Nelly, et génère un crédit d'impôt famille de 25% (635 €) pour Nell'Immo." 
                lawRef="Art. L7233-4 C. trav."
              /> :
            </span>
            <span className="font-bold text-emerald-700">-{formatEuro(Math.min(actualNellyShare, 2540))}</span>
          </div>

          <div className="flex justify-between text-slate-600">
            <span>Chèques-Vacances ANCV (Clubs sportifs / stages) :</span>
            <span className="font-bold text-emerald-700">-{formatEuro(Math.min(Math.max(0, actualNellyShare - 2540), 540))}</span>
          </div>

          <div className="flex justify-between pt-1 border-t border-slate-100 font-bold text-slate-900">
            <span>Reste à charge direct de Nelly :</span>
            <span className="text-indigo-600 font-extrabold">{formatEuro(nellyOutOfPocketAfterCompany)}</span>
          </div>

          <div className="text-[11px] text-slate-500 italic">
            * Près de 90% des dépenses des filles (hors énergie maison) sont absorbables par les enveloppes défiscalisées de Nell'Immo.
          </div>
        </div>
      </div>

      {/* Règle d'or juridique : Pas de cumul pension / parts fiscales */}
      <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-300 text-xs text-amber-950 space-y-1">
        <div className="font-bold flex items-center justify-between gap-1.5 text-amber-900">
          <span className="flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-amber-700" />
            <span>Règle d'or fiscale anti-redressement (Garde alternée) :</span>
          </span>
          <LawBadge article="Art. 194-II & 197-I-2" code="CGI" />
        </div>
        <p className="leading-relaxed">
          En garde alternée, la loi fiscale (<LawBadge article="Art. 194-II CGI" />) interdit formellement de cumuler pour le même enfant l'attribution d'un{' '}
          <Tooltip 
            term="quart de part fiscale" 
            explanation="En résidence alternée, l'avantage fiscal des deux premiers enfants est divisé par deux entre les parents : 0,25 part par enfant (soit +0,50 part pour les 2 filles = 1,50 part, ou 1,75 part avec la Case T parent isolé)." 
            lawRef="Art. 194-I CGI" 
          /> et la déduction d'une pension alimentaire. Le plafonnement légal du quotient familial est fixé à <strong>1 791 € par demi-part</strong> (soit 895,50 € par quart de part en garde alternée, <LawBadge article="Art. 197-I-2 CGI" />).
        </p>
      </div>

      {/* Impact politique sur la Garde Alternée */}
      <div className="p-3.5 rounded-xl bg-slate-900 text-white text-xs space-y-2">
        <div className="font-bold text-amber-300 uppercase text-[10px] flex items-center gap-1.5">
          <Scale className="w-3.5 h-3.5 text-amber-400" />
          <span>Arbitrage 2027 : Ce que chaque parti change pour sa Garde Alternée :</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-[11px] text-slate-300">
          <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 space-y-1">
            <strong className="text-sky-300 block">1. Continuité :</strong>
            <span>0 € d'allocations CAF (tranche 3). 1,50 part (1,75 Case T), plafond QF à <strong>1 791 €</strong> par demi-part.</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 space-y-1">
            <strong className="text-emerald-300 block">2. LFI / NFP :</strong>
            <span>Allocation CAF dès le 1er enfant (<strong>+600 €/an</strong> part Nelly) + gratuités scolaires et 100% Sécu (<strong>+3 387 €/an</strong>).</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 space-y-1">
            <strong className="text-amber-300 block">3. Programme RN :</strong>
            <span><strong>Allocations CAF universelles sans plafond (+1 080 €/an)</strong> + <strong>part pleine dès le 2e enfant (+0,25 part = +450 € IR)</strong>.</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 space-y-1">
            <strong className="text-indigo-300 block">4. Droite Répub. :</strong>
            <span>Relèvement du plafond du Quotient Familial de 1 791 € à <strong>2 500 € par demi-part</strong> + chèques sport/culture (+350 €).</span>
          </div>
        </div>
      </div>
    </div>
  );
};
