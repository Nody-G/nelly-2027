import React from 'react';
import { Sliders, RotateCcw, Building, Users, HelpCircle, Briefcase, Calendar, Sparkles } from 'lucide-react';
import { FiscalParameters } from '../../types/fiscal';
import { Tooltip } from '../common/Tooltip';

interface ControlsPanelProps {
  params: FiscalParameters;
  onChange: (updated: Partial<FiscalParameters>) => void;
  onReset: () => void;
}

export const ControlsPanel: React.FC<ControlsPanelProps> = ({ params, onChange, onReset }) => {
  const formatEuro = (val: number) => Math.round(val).toLocaleString('fr-FR') + ' €';

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
      {/* En-tête */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h2 className="font-bold text-slate-800 text-sm flex items-center gap-2">
          <Sliders className="w-4 h-4 text-indigo-600" />
          <span>Paramètres Réels de Nelly Fernandez</span>
        </h2>
        <button 
          onClick={onReset}
          className="text-xs text-indigo-600 hover:text-indigo-800 hover:underline font-medium flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Réinitialiser</span>
        </button>
      </div>

      {/* MODE DE VUE : RECURRENTE VS ANNEE 1 ACHAT */}
      <div className="p-3 rounded-xl bg-indigo-50/80 border border-indigo-200 space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-950 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Horizon de calcul</span>
          </span>
          <Tooltip 
            term="Différence de vue"
            explanation="La vue 'Annuelle Récurrente' montre le gain pérenne de pouvoir d'achat acquis chaque année sans l'apport exceptionnel d'achat. La vue 'Année 1 Achat' intègre en plus les 12 500 € de PEE débloqués pour l'achat de la maison à 305k€ et les 4 500 € HT de travaux de bureau pris en charge par Nell'Immo."
          />
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <button
            type="button"
            onClick={() => onChange({ viewMode: 'recurring' })}
            className={`py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all text-center ${
              params.viewMode === 'recurring'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-indigo-900 border border-indigo-200 hover:bg-indigo-100/50'
            }`}
          >
            Pérenne annuel
          </button>
          <button
            type="button"
            onClick={() => onChange({ viewMode: 'firstYear' })}
            className={`py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all text-center ${
              params.viewMode === 'firstYear'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-indigo-900 border border-indigo-200 hover:bg-indigo-100/50'
            }`}
          >
            Année 1 (Achat 305k€)
          </button>
        </div>
      </div>

      {/* Forme Juridique : SASU vs SARL */}
      <div>
        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5 flex items-center justify-between">
          <span>Statut juridique réel de Nell'Immo</span>
          <Tooltip 
            term="Impact Flat Tax vs TNS"
            explanation="En SASU (assimilée salariée), les dividendes sont soumis à la Flat Tax (31,4% ou 30%) sans cotisations URSSAF. En SARL/EURL (gérante majoritaire TNS), les dividendes dépassant 10% du capital supportent environ 42% de cotisations sociales TNS en plus de l'IR."
            lawRef="Art. L131-6 CSS & Art. 200 A CGI"
          />
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onChange({ companyForm: 'SASU' })}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
              params.companyForm === 'SASU'
                ? 'border-2 border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm'
                : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            SASU (PFU 31,4%)
          </button>
          <button
            type="button"
            onClick={() => onChange({ companyForm: 'SARL' })}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
              params.companyForm === 'SARL'
                ? 'border-2 border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm'
                : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            SARL / EURL (TNS)
          </button>
        </div>
      </div>

      {/* Salarié ou alternant présent */}
      <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200">
        <div className="flex items-center justify-between gap-2">
          <div>
            <div className="text-xs font-bold text-amber-950 flex items-center gap-1">
              <span>Au moins 1 salarié ou alternant ?</span>
              <Tooltip 
                term="Condition PEE"
                explanation="Art. L3332-2 du Code du travail : La présence d'au moins 1 salarié (même à temps partiel ou alternant de plus de 3-6 mois) permet d'ouvrir un PEE abondé à 300% par Nell'Immo et déblocable à 0% d'IR avec l'acte d'achat de la maison à 305 000 €. Sans salarié, Nelly utilise le PER individuel ou le compte courant d'associé."
                lawRef="Art. L3332-2 & R3324-22 C. trav."
              />
            </div>
            <div className="text-[11px] text-amber-800">Active PEE (si oui) ou PER/CCA (si non)</div>
          </div>
          <input 
            type="checkbox"
            checked={params.hasEmployee}
            onChange={(e) => onChange({ hasEmployee: e.target.checked })}
            className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
          />
        </div>
      </div>

      {/* Chiffre d'Affaires Nell'Immo & Rémunération */}
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-800 flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-indigo-600" />
            <span>Chiffre d'Affaires Agence : ~130 000 € HT</span>
          </span>
          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
            ~13 mandats / an
          </span>
        </div>
        <div className="text-[11px] text-slate-600 leading-relaxed">
          Sur <strong>130 000 € de CA</strong>, l'agence dépense ~40 000 € de pub et ~20 000 € de charges (leasing, logiciels, assurance). Le reliquat de <strong>70 000 €</strong> constitue la rémunération globale arbitrable de Nelly.
        </div>
      </div>

      {/* Revenu Global */}
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="font-semibold text-slate-700">Revenu global (Salaire net + Dividendes)</span>
          <span className="font-extrabold text-indigo-600">{formatEuro(params.totalRevenue)}</span>
        </div>
        <input 
          type="range"
          min={40000}
          max={120000}
          step={2000}
          value={params.totalRevenue}
          onChange={(e) => {
            const newRev = parseFloat(e.target.value);
            const maxDiv = Math.max(0, newRev - 15000);
            const updatedDiv = Math.min(params.dividendsGross, maxDiv);
            onChange({ totalRevenue: newRev, dividendsGross: updatedDiv });
          }}
          className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
        />
        <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
          <span>40 000 €</span>
          <span>70 000 € (Actuel)</span>
          <span>120 000 €</span>
        </div>
      </div>

      {/* Dont Dividendes Bruts Actuels */}
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="font-semibold text-slate-700 flex items-center gap-1">
            <span>Dont Dividendes bruts actuels</span>
            <Tooltip 
              term="Part Dividendes"
              explanation="C'est la quote-part actuellement versée en dividendes (ex: 30 000 €) que la nouvelle stratégie maison 305k€ va remplacer par des revenus fonciers nets au réel, des CESU, de l'épargne et des charges déductibles."
            />
          </span>
          <span className="font-extrabold text-amber-600">{formatEuro(params.dividendsGross)}</span>
        </div>
        <input 
          type="range"
          min={0}
          max={Math.max(0, params.totalRevenue - 15000)}
          step={2000}
          value={params.dividendsGross}
          onChange={(e) => onChange({ dividendsGross: parseFloat(e.target.value) })}
          className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-amber-600"
        />
        <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
          <span>0 €</span>
          <span>30 000 € (Actuel)</span>
          <span>{formatEuro(params.totalRevenue - 15000)}</span>
        </div>
      </div>

      {/* Loyer bureau nouvelle maison */}
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="font-semibold text-slate-700 flex items-center gap-1">
            <span>Loyer bureau Maison 305k€ (Actuel : 300€)</span>
            <Tooltip 
              term="Foncier Réel 600€"
              explanation="Dans sa maison achetée 305 000 €, elle passe de 300 € (remboursement partiel locataire) à 600 €/mois de loyer + 100 € de charges pour 35 m² (bureau, archives Loi Hoguet, garage stockage panneaux, parking pro). Au Régime Foncier Réel (Art. 31 CGI), 28% des intérêts du prêt de 305k€ et de la taxe foncière annulent tout impôt foncier !"
              lawRef="Art. 28 & 31 CGI"
            />
          </span>
          <span className="font-extrabold text-emerald-600">{params.homeOfficeRentMonthly} € / mois</span>
        </div>
        <input 
          type="range"
          min={300}
          max={800}
          step={50}
          value={params.homeOfficeRentMonthly}
          onChange={(e) => onChange({ homeOfficeRentMonthly: parseFloat(e.target.value) })}
          className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-emerald-600"
        />
        <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
          <span>300 € (Ancien)</span>
          <span>600 € (Marché Pélissanne)</span>
          <span>800 €</span>
        </div>
      </div>

      {/* Économie sur les 40 000 € de pub */}
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="font-semibold text-slate-700 flex items-center gap-1">
            <span>Optimisation Budget Pub (40k€ SeLoger/LBC)</span>
            <Tooltip 
              term="Audit Pub 40k€"
              explanation="En réservant les portails payants aux seuls mandats exclusifs à Pélissanne et en supprimant les logiciels doublons, 12% d'économie dégage +4 800 € HT de résultat net réinjectable dans Nell'Immo."
            />
          </span>
          <span className="font-extrabold text-emerald-600">
            {params.adSavingsPct} % (+{formatEuro(40000 * (params.adSavingsPct / 100))} HT)
          </span>
        </div>
        <input 
          type="range"
          min={0}
          max={25}
          step={1}
          value={params.adSavingsPct}
          onChange={(e) => onChange({ adSavingsPct: parseFloat(e.target.value) })}
          className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-emerald-600"
        />
        <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
          <span>0 %</span>
          <span>12 % (+4 800 € HT)</span>
          <span>25 % (+10 000 € HT)</span>
        </div>
      </div>

      {/* Case T Parent Isolé (Garde alternée) */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
        <div>
          <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
            <span>Case T Parent Isolé (2 filles : 5 et 11 ans)</span>
            <Tooltip 
              term="Case T Garde Alternée"
              explanation="Art. 194-II du CGI : 2 enfants en garde alternée donnent 1,75 part si Nelly Fernandez vit seule (Case T) ou 1,5 part si elle vit en concubinage non déclaré seul."
              lawRef="Art. 194-II & 195 CGI"
            />
          </span>
          <div className="text-[11px] text-slate-500">
            {params.isSingleParent ? '1,75 parts fiscales (Case T cochée)' : '1,50 parts fiscales (Concubinage)'}
          </div>
        </div>
        <input 
          type="checkbox"
          checked={params.isSingleParent}
          onChange={(e) => onChange({ isSingleParent: e.target.checked })}
          className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
        />
      </div>

    </div>
  );
};
