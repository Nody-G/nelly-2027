import React, { useState } from 'react';
import { ShieldCheck, Heart, Sparkles, Scale } from 'lucide-react';
import { LawBadge } from '../common/LawBadge';
import { Tooltip } from '../common/Tooltip';

export const TransmissionModeler: React.FC = () => {
  const [houseValue, setHouseValue] = useState(305000);
  const [nellyAge, setnellyAge] = useState(43); // Âge de Nelly (< 51 ans)

  // Selon l'Art. 669 du CGI :
  // De 41 à 50 ans : usufruit = 60%, nue-propriété = 40%
  // De 51 à 60 ans : usufruit = 50%, nue-propriété = 50%
  const bareOwnershipPct = nellyAge < 51 ? 0.40 : 0.50;
  const bareOwnershipTotalValue = houseValue * bareOwnershipPct;
  const valuePerDaughter = bareOwnershipTotalValue / 2; // 2 filles
  
  // Abattement en ligne directe (Art. 779-I CGI) : 100 000 € par enfant
  const allowancePerChild = 100000;
  const taxablePerChild = Math.max(0, valuePerDaughter - allowancePerChild);
  const taxDue = taxablePerChild > 0 ? taxablePerChild * 0.20 : 0;

  const formatEuro = (n: number) => Math.round(n).toLocaleString('fr-FR') + ' €';

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-md space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-amber-400" />
            <h3 className="font-extrabold text-sm sm:text-base text-white">
              Protection Patrimoniale & Transmission aux 2 Filles (Maison de 305 000 €)
            </h3>
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            <Tooltip 
              term="Démembrement de propriété notarié" 
              explanation="Séparation juridique de l'usufruit (conservé par Nelly qui continue d'y vivre et de travailler) et de la nue-propriété (donnée aux deux filles). À son décès, l'usufruit s'éteint sans aucun droit de succession à payer." 
              lawRef="Art. 669 CGI"
            /> : 0 € d'impôt sous NFP/LFI, RN ou Continuité.
          </p>
        </div>
        <LawBadge article="Art. 669 & 779 CGI" code="CGI" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        {/* Paramètres */}
        <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 space-y-2">
          <div className="font-bold text-amber-300 uppercase text-[11px]">Paramètres de la donation</div>
          <div className="flex justify-between">
            <span className="text-slate-400">Valeur de la maison à Pélissanne :</span>
            <span className="font-bold text-white">{formatEuro(houseValue)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Âge de Nelly au moment de l'acte :</span>
            <span className="font-bold text-amber-400">{nellyAge} ans (Avant 51 ans)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Valeur fiscale de la Nue-Propriété :</span>
            <span className="font-bold text-emerald-400">{bareOwnershipPct * 100} % ({formatEuro(bareOwnershipTotalValue)})</span>
          </div>
        </div>

        {/* Bilan par Fille */}
        <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 space-y-2">
          <div className="font-bold text-emerald-400 uppercase text-[11px]">Part transmise par fille (Cadette & Aînée)</div>
          <div className="flex justify-between">
            <span className="text-slate-400">Valeur reçue par chaque fille :</span>
            <span className="font-bold text-white">{formatEuro(valuePerDaughter)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Abattement légal (Art. 779 CGI) :</span>
            <span className="font-bold text-slate-300">{formatEuro(allowancePerChild)} / fille</span>
          </div>
          <div className="flex justify-between pt-1 border-t border-slate-700 font-bold">
            <span className="text-emerald-300">Droits de mutation à payer :</span>
            <span className="text-sm font-black text-emerald-400">{formatEuro(taxDue)} (ZÉRO IMPÔT)</span>
          </div>
        </div>
      </div>

      <div className="p-3.5 bg-indigo-950/60 rounded-xl border border-indigo-800 text-xs text-indigo-200 leading-relaxed">
        <strong>Pourquoi ce montage est invulnérable pour ses filles :</strong> Nelly donne la nue-propriété à ses deux filles tout en conservant l'usufruit à vie. Nelly continue d'habiter la maison, d'y installer son bureau de transaction Nell'Immo et d'en percevoir le loyer sans rien changer. Au décès de l'usufruitière, l'usufruit s'éteint sans aucune fiscalité supplémentaire (Art. 1133 CGI). Les filles deviennent alors 100% pleines propriétaires de la maison sans jamais verser 1 € de droits de succession.
      </div>
    </div>
  );
};

