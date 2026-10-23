import React from 'react';
import { Gavel, Scale, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Tooltip } from '../common/Tooltip';

export const FeasibilityAnalysisCard: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md space-y-4 text-xs leading-relaxed">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
            <Gavel className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-white">
              Analyse Institutionnelle des Probabilités : Décret vs Loi vs Blocage Constitutionnel
            </h3>
            <p className="text-slate-400 text-[11px] mt-0.5">
              Toutes les promesses ne se valent pas : voici les filtres juridiques et institutionnels réels après mai 2027.
            </p>
          </div>
        </div>
        <span className="text-[10px] font-mono font-bold uppercase bg-slate-800 text-indigo-300 px-2.5 py-1 rounded-lg border border-slate-700">
          Constitution de 1958
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Niveau 1 */}
        <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-emerald-400 text-xs">1. Mesures par Décret</span>
            <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-700">
              Probabilité &gt; 90%
            </span>
          </div>
          <p className="text-slate-300 text-[11px]">
            Ce sont les mesures applicables dès l'été 2027 sans vote des députés :
          </p>
          <ul className="space-y-1 list-disc list-inside text-slate-400 text-[11px]">
            <li>
              <strong>LFI :</strong> Blocage des prix de l'énergie (
              <Tooltip 
                term="Art. L410-2 Code de commerce" 
                explanation="Article permettant au gouvernement de fixer les prix par décret en cas de crise, calamité publique ou situation anormale du marché. Utilisable immédiatement dès la prise de fonction." 
                lawRef="Art. L410-2 C. com."
              />
              ) et arrêt des expulsions locatives sans relogement.
            </li>
            <li><strong>RN :</strong> Circulaires administratives sur l'immigration et consignes d'attribution de logements sociaux via les préfets.</li>
          </ul>
        </div>

        {/* Niveau 2 */}
        <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-amber-400 text-xs">2. Lois de Finances (Budget)</span>
            <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-700">
              Probabilité 50-70%
            </span>
          </div>
          <p className="text-slate-300 text-[11px]">
            Nécessitent un vote à l'Assemblée ou un passage en force par l'
            <Tooltip 
              term="article 49 alinéa 3" 
              explanation="Mécanisme constitutionnel permettant d'adopter un projet de loi de finances sans vote, sauf si une motion de censure est adoptée par la majorité absolue des députés." 
              lawRef="Art. 49.3 Constitution"
            /> :
          </p>
          <ul className="space-y-1 list-disc list-inside text-slate-400 text-[11px]">
            <li><strong>LFI :</strong> Fin du PFU, IR 14 tranches, ISF climatique. Si majorité relative, risque permanent de censure parlementaire.</li>
            <li><strong>RN :</strong> Baisse de TVA à 5,5% énergie (coût 12 Mds€) et part fiscale 2e enfant. Nécessite de négocier avec la droite républicaine.</li>
          </ul>
        </div>

        {/* Niveau 3 */}
        <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-purple-400 text-xs">3. Filtre Constitutionnel & Traités</span>
            <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-purple-950 text-purple-300 border border-purple-700">
              Contrôle Juridique
            </span>
          </div>
          <p className="text-slate-300 text-[11px]">
            Le Conseil Constitutionnel censure les mesures violant les principes fondamentaux :
          </p>
          <ul className="space-y-1 list-disc list-inside text-slate-400 text-[11px]">
            <li>
              <strong>Non-rétroactivité :</strong> Aucun impôt ne peut taxer rétroactivement les rémunérations ou dividendes déjà perçus par Nelly en 2026.
            </li>
            <li>
              <strong>Capacité contributive :</strong> Les taux marginaux d'IR au-delà de 70% ou les héritages plafonnés à 100% sont censurés pour caractère confiscatoire (
              <Tooltip 
                term="Décision 2012-662 DC" 
                explanation="Décision historique du Conseil Constitutionnel censurant la taxe à 75% : tout prélèvement global supérieur à 70-75% est jugé confiscatoire et contraire à l'Art. 13 de la Déclaration des Droits de l'Homme." 
                lawRef="Décision 2012-662 DC"
              />
              ).
            </li>
            <li>
              <strong>Traités Internationaux :</strong> L'impôt universel sur la nationalité est bloqué par l'
              <Tooltip 
                term="Article 55 de la Constitution" 
                explanation="Les traités internationaux ratifiés ont une autorité supérieure aux lois françaises. Les 120 conventions fiscales de la France fondées sur la résidence fiscale rendent inapplicable un impôt basé sur la nationalité." 
                lawRef="Art. 55 Constitution"
              />.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
