import React, { useState } from 'react';
import { 
  scientificStudiesOnCapitalFlight, 
  legalObstaclesUniversalTax, 
  nellyRicochetRisks, 
  taxFlightFactChecks 
} from '../../data/taxFlightStudiesData';
import { Tooltip } from '../common/Tooltip';
import { 
  BookOpen, 
  ShieldAlert, 
  Gavel, 
  HelpCircle, 
  TrendingDown, 
  AlertOctagon, 
  FileText, 
  CheckCircle2, 
  XCircle,
  ExternalLink,
  Users,
  Compass
} from 'lucide-react';

export const TaxFlightStudiesCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'STUDIES' | 'OBSTACLES' | 'RICOCHET' | 'QUIZ'>('STUDIES');
  const [revealedQuiz, setRevealedQuiz] = useState<Record<number, boolean>>({});

  const toggleQuiz = (idx: number) => {
    setRevealedQuiz(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
      
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700">
              <BookOpen className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              Dossier Scientifique & Juridique
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1">
            Taxation des Ultra-Riches, Risque d'Exil Fiscal & Fuite des Capitaux : Que Disent Vraiment les Études ?
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Démêler les fantasmes de la réalité économique avec les données réelles de la <strong className="text-slate-700">DGFiP</strong>, 
            les rapports de <strong className="text-slate-700">France Stratégie</strong> et la recherche académique internationale.
          </p>
        </div>

        {/* Navigation par onglets internes */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => setActiveTab('STUDIES')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'STUDIES' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            1. Études Scientifiques
          </button>
          <button
            onClick={() => setActiveTab('OBSTACLES')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'OBSTACLES' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            2. Le Mur Juridique
          </button>
          <button
            onClick={() => setActiveTab('RICOCHET')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'RICOCHET' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            3. L'Effet Ricochet Nelly (70k€)
          </button>
          <button
            onClick={() => setActiveTab('QUIZ')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'QUIZ' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            4. Vrai ou Faux ?
          </button>
        </div>
      </div>

      {/* 1. ÉTUDES SCIENTIFIQUES DE RÉFÉRENCE */}
      {activeTab === 'STUDIES' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="p-3 bg-indigo-50/70 border border-indigo-100 rounded-xl text-xs text-indigo-900 flex items-start gap-2">
            <Compass className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <span>
              <strong>Consensus de la recherche économique :</strong> La peur d'un exil fiscal total et massif de tous les riches est un mythe (99,7% restent en France). 
              En revanche, la fuite des capitaux financiers très liquides et des créateurs de start-ups internationales est une réalité empiriquement prouvée dès lors que le 
              taux marginal effectif dépasse 65-70%.
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {scientificStudiesOnCapitalFlight.map((study) => (
              <div key={study.id} className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">
                      {study.institution} ({study.year})
                    </span>
                    <h4 className="font-extrabold text-sm text-slate-900">
                      {study.title}
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">Auteurs : {study.author}</span>
                  </div>
                  <span className="text-[10px] font-mono bg-white text-slate-600 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs self-start sm:self-auto">
                    Données Réelles DGFiP
                  </span>
                </div>

                <div className="text-xs text-slate-600 space-y-1">
                  <span className="font-semibold text-slate-800 text-[11px] block">Méthodologie & Périmètre :</span>
                  <p className="italic text-slate-500">{study.sampleAndMethod}</p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-700">
                  <span className="font-bold text-slate-900 text-[11px] uppercase tracking-wide block">
                    Conclusions chiffrées clés :
                  </span>
                  <ul className="space-y-1.5 text-[11px] text-slate-600 list-disc list-inside">
                    {study.keyFindings.map((finding, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {finding}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-white rounded-xl border border-indigo-100 text-xs text-slate-800 font-medium flex items-start gap-2 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-indigo-900">Ce qu'il faut retenir : </strong>
                    <span>{study.takeawayForPublic}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. LE MUR JURIDIQUE DE L'IMPÔT UNIVERSEL */}
      {activeTab === 'OBSTACLES' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="border-b border-slate-100 pb-2">
            <h4 className="text-sm font-extrabold text-slate-900">
              {legalObstaclesUniversalTax.title}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              {legalObstaclesUniversalTax.subtitle}
            </p>
          </div>

          <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-900 flex items-start gap-2.5">
            <AlertOctagon className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong>L'illusion du modèle américain FATCA :</strong>
              <p className="mt-0.5 leading-relaxed text-[11px]">
                LFI propose de copier le système américain où les citoyens expatriés paient la différence d'impôt à la France. 
                Mais les États-Unis peuvent l'imposer au monde entier parce que le dollar est la monnaie de réserve mondiale et que les banques étrangères risquent l'exclusion du système financier américain. 
                La France n'a pas ce pouvoir unilatéral et est prisonnière de ses engagements conventionnels.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {legalObstaclesUniversalTax.obstacles.map((obs, idx) => (
              <div key={idx} className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    obs.badgeColor === 'rose' 
                      ? 'bg-rose-100 text-rose-800 border-rose-300' 
                      : obs.badgeColor === 'amber'
                      ? 'bg-amber-100 text-amber-800 border-amber-300'
                      : 'bg-purple-100 text-purple-800 border-purple-300'
                  }`}>
                    {obs.badge}
                  </span>
                </div>
                <h5 className="font-extrabold text-xs text-slate-900 leading-snug">
                  {obs.title}
                </h5>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {obs.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-slate-900 text-white rounded-xl text-xs space-y-2 border border-slate-800">
            <div className="flex items-center gap-2 text-indigo-400 font-bold">
              <Gavel className="w-4 h-4" />
              <span>Conséquence pratique pour les 152 Mds€ de recettes promises par LFI :</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Tant que les 120 traités internationaux ne sont pas renégociés avec la Suisse, Monaco, Dubaï ou la Belgique, 
              l'impôt universel ne s'appliquera pas. Les contribuables fortunés qui s'installent à l'étranger feront écarter l'impôt français par les tribunaux 
              en invoquant l'<strong>Article 55 de la Constitution</strong>. Le rendement réel de cette mesure sera proche de <strong>zéro euro</strong> à court terme.
            </p>
          </div>
        </div>
      )}

      {/* 3. L'EFFET RICOCHET SUR NELLY (70 000 €) */}
      {activeTab === 'RICOCHET' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="border-b border-slate-100 pb-2">
            <h4 className="text-sm font-extrabold text-slate-900">
              {nellyRicochetRisks.title}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              {nellyRicochetRisks.subtitle}
            </p>
          </div>

          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Le piège de la classe moyenne supérieure :</strong> Nelly Fernandez ne possède pas 10 millions d'euros. 
              Elle gagne 70 000 € net par son travail d'agence et achète une maison de 305 000 € à Pélissanne. 
              Pourtant, c'est précisément ce profil qui paie la note en cas de dérapage budgétaire.
            </span>
          </div>

          <div className="space-y-3">
            {nellyRicochetRisks.risks.map((risk, idx) => (
              <div key={idx} className="bg-slate-50/80 rounded-xl p-4 border border-slate-200 space-y-2">
                <h5 className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  <span>{risk.mechanism}</span>
                </h5>
                <p className="text-[11px] text-slate-600 leading-relaxed pl-3.5">
                  {risk.impactOnNelly}
                </p>
                {risk.financialVulnerability && (
                  <div className="pl-3.5 pt-1 text-[11px] font-semibold text-rose-700">
                    ⚠️ {risk.financialVulnerability}
                  </div>
                )}
                {risk.agencyCountermeasure && (
                  <div className="pl-3.5 pt-1 text-[11px] font-semibold text-emerald-800">
                    🛡️ <strong>Stratégie de riposte Nell'Immo :</strong> {risk.agencyCountermeasure}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. QUIZ VRAI OU FAUX ? */}
      {activeTab === 'QUIZ' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="border-b border-slate-100 pb-2">
            <h4 className="text-sm font-extrabold text-slate-900">
              Vrai ou Faux : Démêler les Idées Reçues sur l'Exil Fiscal & les Budgets
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Cliquez sur chaque affirmation pour découvrir la réponse documentée et sourcée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {taxFlightFactChecks.map((item, idx) => {
              const isRevealed = !!revealedQuiz[idx];
              return (
                <div 
                  key={idx} 
                  onClick={() => toggleQuiz(idx)}
                  className="bg-slate-50/80 hover:bg-slate-100/80 cursor-pointer rounded-2xl p-4 border border-slate-200 transition-all space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-extrabold text-xs text-slate-900 leading-snug">
                      {item.statement}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 border bg-white text-slate-500">
                      {isRevealed ? 'Masquer' : 'Voir vérification'}
                    </span>
                  </div>

                  {isRevealed ? (
                    <div className="pt-2 border-t border-slate-200/80 space-y-1.5 animate-in fade-in duration-150">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded border ${
                          item.verdictColor === 'emerald'
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : item.verdictColor === 'rose'
                            ? 'bg-rose-100 text-rose-800 border-rose-300'
                            : 'bg-amber-100 text-amber-800 border-amber-300'
                        }`}>
                          VERDICT : {item.verdict}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">Source : {item.source}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {item.explanation}
                      </p>
                    </div>
                  ) : (
                    <span className="text-[11px] text-indigo-600 font-semibold block">
                      👉 Cliquez pour afficher le fait vérifié...
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};

