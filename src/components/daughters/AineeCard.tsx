import React from 'react';
import { Music, Stethoscope, GraduationCap, Sparkles, CheckCircle2, AlertTriangle, School, Scale, Heart } from 'lucide-react';
import { LawBadge } from '../common/LawBadge';
import { Tooltip } from '../common/Tooltip';
import { pelissanneLocalData } from '../../data/pelissanneRates';

export const AineeCard: React.FC = () => {
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-4 shadow-xs">
      
      {/* En-tête Aînée */}
      <div className="flex flex-wrap items-center justify-between border-b border-purple-200 pb-3 gap-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex flex-col items-center justify-center font-black shadow-sm">
            <span className="text-base leading-none">11 ans</span>
            <span className="text-[9px] font-semibold opacity-90 uppercase mt-0.5">Aînée</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                Sa Fille Aînée : Collège Roger Carcassonne, Piano & Santé
              </h3>
            </div>
            <p className="text-xs text-purple-900 font-medium">
              Entrée en 6e / 5e au Collège • Pratique du Piano (400 € / an) • Orthodontie dentaire (11-14 ans)
            </p>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-purple-100 text-purple-900 border border-purple-300">
          Piano & Orthodontie
        </span>
      </div>

      <div className="space-y-3.5 text-xs text-slate-700 leading-relaxed">
        
        {/* Poste 1 : Piano 400 € / an & Optimisation */}
        <div className="p-3.5 rounded-xl bg-white border border-purple-100 space-y-2 shadow-2xs">
          <div className="font-bold text-slate-900 flex items-center justify-between gap-1">
            <div className="flex items-center gap-1.5">
              <Music className="w-4 h-4 text-purple-600 shrink-0" />
              <span>1. Ses Cours de Piano (400 € / an) : Levier d'Immunité Fiscale :</span>
            </div>
            <LawBadge article="Art. 199 sexdecies" code="CGI" />
          </div>
          <p className="text-slate-600">
            Nelly assume environ <strong>400 € / an</strong> pour la pratique du piano de son aînée (cours réguliers, partitions, répétitions).
          </p>
          <div className="p-2.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-950 text-[11px] space-y-1">
            <div className="font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Le Montage Idéal pour Nelly :</span>
            </div>
            <p>
              En faisant intervenir le professeur de musique <strong>au domicile de Pélissanne</strong>, Nelly le règle via les <strong>2 591 € de CESU préfinancés par Nell'Immo</strong> (
              <Tooltip 
                term="Art. 244 quater F CGI" 
                explanation="Crédit d'impôt famille de 25% remboursé à Nell'Immo sur les CESU accordés à sa dirigeante." 
                lawRef="Art. 244 quater F CGI" 
              />) : 0 € d'IR, 0 € de charges sociales, 25% de crédit d'impôt société, et <strong>50% de crédit d'impôt personnel</strong> sur tout reste à charge !
            </p>
          </div>
        </div>

        {/* Poste 2 : Orthodontie 11-14 ans */}
        <div className="p-3.5 rounded-xl bg-white border border-purple-100 space-y-2 shadow-2xs">
          <div className="font-bold text-slate-900 flex items-center justify-between gap-1">
            <div className="flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4 text-rose-600 shrink-0" />
              <span>2. Traitement d'Orthodontie Dentaire (Âge Clé 11 - 14 ans) :</span>
            </div>
            <span className="text-[10px] text-rose-700 font-semibold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              Devis ~1 600 € / an
            </span>
          </div>
          <p className="text-slate-600">
            À l'entrée au collège, la pose d'un appareil orthodontique coûte typiquement <strong>700 € à 1 000 € par semestre</strong>. La Sécurité sociale ne remboursant qu'une base forfaitaire dérisoire (193,50 €), le reste à charge annuel pour Nelly en garde alternée s'élève à <strong>~700 € / an</strong> après mutuelle privée.
          </p>
        </div>

        {/* ANALYSE COMPARÉE APPROFONDIE DU PASSAGE DE CHAQUE PARTI SUR L'AÎNÉE */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white space-y-3">
          <div className="flex items-center justify-between border-b border-indigo-800 pb-2">
            <div className="font-extrabold text-xs uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-purple-400" />
              <span>Ce que changera concrètement 2027 pour sa fille de 11 ans :</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Collège Carcassonne & Horizon Bac</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
            {/* Colonne LFI */}
            <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-500/40 space-y-1.5">
              <div className="font-bold text-emerald-300 flex items-center justify-between">
                <span>Sous LFI / NFP :</span>
                <span className="text-[9px] bg-emerald-800 text-emerald-100 px-1.5 py-0.2 rounded font-bold">100% Sécu & Gratuité</span>
              </div>
              <ul className="space-y-1 text-slate-300">
                <li>• <strong>Plan « 100% Sécu » :</strong> Remboursement intégral de l'orthodontie adolescente sans mutuelle privée (+700 €/an net économisé !).</li>
                <li>• <strong>Cantine collège gratuite :</strong> Prise en charge intégrale des repas au collège (+490 €/an).</li>
                <li>• <strong>Transports scolaires gratuits :</strong> Bus métropole Aix-Marseille à 0 € pour les &lt;25 ans.</li>
                <li>• <strong>Horizon 2033 (18 ans) :</strong> Garantie d'autonomie de <strong>1 158 € / mois</strong> pour financer ses études supérieures (+13 896 €/an !).</li>
                <li className="text-amber-300 font-medium">• ⚠️ Risque : délais d'attente allongés chez les orthodontistes conventionnés.</li>
              </ul>
            </div>

            {/* Colonne RN */}
            <div className="p-3 rounded-lg bg-amber-950/70 border border-amber-500/40 space-y-1.5">
              <div className="font-bold text-amber-300 flex items-center justify-between">
                <span>Sous le RN :</span>
                <span className="text-[9px] bg-amber-800 text-amber-100 px-1.5 py-0.2 rounded font-bold">Part Fiscale 2e Enfant</span>
              </div>
              <ul className="space-y-1 text-slate-300">
                <li>• <strong>Part fiscale pleine dès le 2e enfant :</strong> Gain direct de <strong>+450 € / an</strong> sur l'IR de Nelly grâce à sa 2e fille.</li>
                <li>• <strong>Uniforme obligatoire au collège :</strong> Tenue unique imposée au Collège Roger Carcassonne.</li>
                <li>• <strong>Suppression du collège unique :</strong> Orientation sélective en filières professionnelles ou générales dès 14 ans (fin de 4e/3e).</li>
                <li className="text-rose-300 font-medium">• ⚠️ <strong>Alerte piano :</strong> Baisse des subventions aux écoles de musique municipales constatée en mairies RN du Sud, risquant de faire grimper le cours de piano de 400 € à 650-750 €/an !</li>
                <li>• <strong>Orthodontie :</strong> Reste à charge de 700 € inchangé (mutuelle privée requise).</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
