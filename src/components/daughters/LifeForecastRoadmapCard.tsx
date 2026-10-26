import React, { useState } from 'react';
import {
  Compass,
  CalendarClock,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { LawBadge } from '../common/LawBadge';

export const LifeForecastRoadmapCard: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<'2027_2030' | '2030_2033' | '2033_2039'>('2027_2030');

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* En-tête */}
      <div className="bg-slate-900 text-white p-5 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Compass className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold block">
                Prévision de Vie & Choix de Société (2027 → 2039) • Base 2025 (40k€ + 20k€ div • Prêt 260k€ sur 25 ans)
              </span>
              <h3 className="font-extrabold text-base sm:text-lg text-white">
                Prévision de Vie pour Nelly & ses 2 Filles (LFI vs RN) : Coûts, Hôpitaux, École & Avenir
              </h3>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Synthèse prédictive croisant les <strong>revenus réels 2025 de Nelly (40 000 € salaire + 20 000 € dividendes)</strong>, son <strong>prêt de 260 000 € sur 25 ans (taux 3,7 % - 4,0 % = 1 330 € à 1 372 €/mois) + 23 500 € de notaire</strong> sur sa nouvelle maison à 305 000 €, le passage du loyer Nell'Immo de <strong>400 €/mois (maison louée) à 650 €/mois + 100 € charges</strong>, et les <strong>grands choix de société</strong> (immigration, hôpitaux en Provence, climat, école) pour ses 2 filles (5 & 11 ans).
        </p>
      </div>

      <div className="p-5 space-y-6">
        {/* 1. CHOC COMPARÉ : SANS RIEN CHANGER vs AVEC LEVIERS NOUVELLE MAISON 305k€ */}
        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-600" />
            <span>1. Verdict Chiffré & Climat de Société (Base 2025 : 40 000 € + 20 000 € div. • Prêt 25 ans)</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Cas Passif */}
            <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-rose-950 uppercase text-[11px]">
                  Cas A — Sans rien changer (20 000 € div. + loyer 400 €)
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white">
                  Avantage RN (+2 611 €/an)
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed text-[11px]">
                • <strong>Sous LFI (Passif) :</strong> Fin de la Flat Tax taxant les 20 000 € de dividendes au barème (-4 140 €), presque compensée par +3 987 €/an d'économies sur les filles (cantine 0 €, orthodontie 100 % Sécu).
                <br />• <strong>Sous le RN (Passif) :</strong> Maintien de la Flat Tax 30 % + part pleine 2e enfant (+450 €) + 1 080 € de CAF universelle + TVA 5,5 % carburant (-1 160 €).
                <br />• <strong>Revers de société RN :</strong> Tensions sur l'immigration risquant d'aggraver la pénurie de soignants à l'Hôpital de Salon/Aix et climat social électrique dans les Bouches-du-Rhône.
              </p>
            </div>

            {/* Cas Optimisé */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border-2 border-emerald-400 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-emerald-950 uppercase text-[11px]">
                  Cas B — Avec la Nouvelle Maison 305k€ (Bail 400€ → 650€ + Prêt 25 ans)
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-700 text-white">
                  Avantage LFI (+2 521 €/an)
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed text-[11px]">
                • <strong>Remplacement de 56 % à 100 % des 20 000 € de dividendes :</strong> En passant le loyer Nell'Immo de 400 € à 650 € + 100 € charges (+4 200 € déduits grâce aux intérêts du prêt de 260 000 € sur 25 ans), + CESU (3 131 €) + PEE (3 880 €), Nelly remplace <strong>11 211 € de dividendes par du cash à 0 % d'IR</strong> !
                <br />• <strong>Sérénité pour les 2 filles :</strong> Études supérieures gratuites en 2033 (1 063 €/mois versés à chaque fille = 63 000 € d'économie), retraite à 60 ans (+100 800 €), hôpitaux publics confortés et eau sanctuarisée face aux canicules en Provence.
              </p>
            </div>
          </div>
        </div>

        {/* 2. CHRONOLOGIE DE VIE EN 3 ÉTAPES (2027 -> 2039) */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-slate-900 flex items-center gap-2">
              <CalendarClock className="w-4 h-4 text-indigo-600" />
              <span>2. Prévision de Vie Étape par Étape pour Nelly et ses 2 Filles (2027 → 2039)</span>
            </h4>

            <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => setSelectedStage('2027_2030')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  selectedStage === '2027_2030'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Étape 1 : 2027-2030 (Collège & Primaire)
              </button>
              <button
                type="button"
                onClick={() => setSelectedStage('2030_2033')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  selectedStage === '2030_2033'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Étape 2 : 2030-2033 (Lycée & Collège)
              </button>
              <button
                type="button"
                onClick={() => setSelectedStage('2033_2039')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  selectedStage === '2033_2039'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Étape 3 : 2033-2039 (Université & Retraite)
              </button>
            </div>
          </div>

          {selectedStage === '2027_2030' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200 space-y-2">
                <div className="font-extrabold text-emerald-950 text-xs sm:text-sm">
                  2027-2030 sous LFI / NFP (Aînée 11-14 ans • Cadette 5-8 ans)
                </div>
                <ul className="space-y-1.5 text-slate-700 text-[11px] leading-relaxed">
                  <li>
                    • <strong>Quotidien des filles :</strong> Orthodontie de l'aînée remboursée à 100 % (« 100 % Sécu » : +1 250 €/an économisés), cantines primaire et Collège Carcassonne gratuites (+777 €), kits fournitures gratuits (+260 €), Pass'Sport & Culture (+350 €), CAF 1er enfant (+600 €).
                  </li>
                  <li>
                    • <strong>Santé & Soignants en Provence :</strong> Régularisation des métiers en tension dans la santé et la garde d'enfants, maintenant ouverts les services d'urgences pédiatriques de Salon et Aix.
                  </li>
                  <li>
                    • <strong>Prêt 260 000 € sur 25 ans (3,7 % - 4,0 %) :</strong> Les ~9 905 € d'intérêts annuels permettent de déduire ~2 773 €/an sur les 9 000 € du nouveau bail professionnel (650 € + 100 €), gommant l'impôt foncier.
                  </li>
                  <li>
                    • <strong>Impact Nell'Immo :</strong> 25 lots de gestion locative sous Garantie Universelle des Loyers (+14 400 € HT/an).
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200 space-y-2">
                <div className="font-extrabold text-amber-950 text-xs sm:text-sm">
                  2027-2030 sous le RN (Aînée 11-14 ans • Cadette 5-8 ans)
                </div>
                <ul className="space-y-1.5 text-slate-700 text-[11px] leading-relaxed">
                  <li>
                    • <strong>Quotidien des filles :</strong> Versement direct de <strong>+1 080 €/an d'allocations familiales universelles</strong> (90 €/mois part Nelly) + baisse d'IR (part pleine dès le 2e enfant). Cantine (777 €) et orthodontie (1 450 €) restent au tarif plein.
                  </li>
                  <li>
                    • <strong>École & Ambiance :</strong> Uniforme obligatoire au Collège Roger Carcassonne, discipline renforcée, mais risque de tri précoce à 14 ans vers l'apprentissage et réécriture des cours d'histoire.
                  </li>
                  <li>
                    • <strong>Alerte Hôpitaux :</strong> La priorité nationale et la restriction des soignants étrangers risquent d'aggraver la crise des urgences pédiatriques à Salon-de-Provence et Aix.
                  </li>
                  <li>
                    • <strong>Énergie & Mobilité :</strong> Baisse immédiate de la TVA de 20 % à 5,5 % sur l'électricité, le gaz et le carburant (-1 160 €/an) et fin des ZFE.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {selectedStage === '2030_2033' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200 space-y-2">
                <div className="font-extrabold text-emerald-950 text-xs sm:text-sm">
                  2030-2033 sous LFI / NFP (Aînée 14-17 ans Lycée Salon • Cadette 8-11 ans)
                </div>
                <ul className="space-y-1.5 text-slate-700 text-[11px] leading-relaxed">
                  <li>
                    • <strong>Orthodontie de la Cadette (2032) :</strong> Quand la cadette entre en 6e à 11 ans, Nelly économise une seconde fois <strong>1 250 €/an</strong> grâce au 100 % Sécu.
                  </li>
                  <li>
                    • <strong>Années Lycée de l'Aînée :</strong> Transports scolaires et TER vers Salon-de-Provence / Aix 100 % gratuits, manuels gratuits et suppression de la pression Parcoursup.
                  </li>
                  <li>
                    • <strong>Climat & Canicules en Provence :</strong> Sanctuarisation des réseaux d'eau potable face aux sécheresses estivales et développement de la rénovation thermique.
                  </li>
                  <li>
                    • <strong>Patrimoine :</strong> Donation de la nue-propriété de la maison de 305 000 € avant les 51 ans de Nelly (61 000 €/fille = 0 € de droits de mutation).
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200 space-y-2">
                <div className="font-extrabold text-amber-950 text-xs sm:text-sm">
                  2030-2033 sous le RN (Aînée 14-17 ans Lycée Salon • Cadette 8-11 ans)
                </div>
                <ul className="space-y-1.5 text-slate-700 text-[11px] leading-relaxed">
                  <li>
                    • <strong>Majoration CAF +14 ans :</strong> Allocations familiales universelles versées à Nelly portées à <strong>+1 250 €/an</strong> net d'impôt.
                  </li>
                  <li>
                    • <strong>Tensions Sociales en PACA :</strong> Climat de méfiance et manifestations récurrentes dans les transports en commun et les gares d'Aix et Marseille.
                  </li>
                  <li>
                    • <strong>Exonération IR jeunes :</strong> 0 € d'IR jusqu'à 30 ans pour les jeunes en apprentissage ou premier emploi.
                  </li>
                  <li>
                    • <strong>Anticipation Études :</strong> Grâce aux +4 200 €/an du nouveau bail Nell'Immo (650 € + 100 € charges), Nelly met de côté +25 200 € d'ici 2033 pour financer les études de l'aînée.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {selectedStage === '2033_2039' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200 space-y-2">
                <div className="font-extrabold text-emerald-950 text-xs sm:text-sm">
                  2033-2039 sous LFI / NFP (Études Supérieures Aix/Marseille & Retraite 60 ans)
                </div>
                <ul className="space-y-1.5 text-slate-700 text-[11px] leading-relaxed">
                  <li>
                    • <strong>Le Basculement Majeur de 2033 (18 ans de l'Aînée) :</strong> La Garantie d'Autonomie Jeunesse verse <strong>1 063 €/mois (12 756 €/an)</strong> directement à l'aînée dès 2033, puis à la cadette dès 2039 + repas CROUS à 1 €.
                  </li>
                  <li>
                    • <strong>Économie cumulée sur 5 ans d'études × 2 filles :</strong> Nelly économise <strong>63 000 € de trésorerie nette</strong> (sa quote-part de loyer et vie étudiante à Aix/Marseille).
                  </li>
                  <li>
                    • <strong>Ouverture Européenne :</strong> Maintien des bourses d'échanges internationaux et d'Erasmus pour ses filles.
                  </li>
                  <li>
                    • <strong>Retraite à 60 ans :</strong> Nelly peut liquider sa retraite à taux plein 4 ans plus tôt (soit <strong>+100 800 € de pensions cumulées</strong> entre 60 et 64 ans).
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200 space-y-2">
                <div className="font-extrabold text-amber-950 text-xs sm:text-sm">
                  2033-2039 sous le RN (Études Supérieures Aix/Marseille & Retraite 62-63 ans)
                </div>
                <ul className="space-y-1.5 text-slate-700 text-[11px] leading-relaxed">
                  <li>
                    • <strong>Coût des études (0 € de bourse CROUS) :</strong> Même à 60 000 € de revenus, Nelly dépasse les plafonds sociaux et les allocations CAF cessent à 20 ans. Coût part Nelly : <strong>6 300 €/an par fille</strong> (soit 63 000 € sur la décennie).
                  </li>
                  <li>
                    • <strong>Parade fiscale obligatoire sous RN :</strong> Détacher fiscalement sa fille majeure et déduire une pension alimentaire (<LawBadge article="Art. 156-II-2° CGI" /> : 6 674 €/an déduits de la tranche à 30 %) ou la loger via sa Holding (<LawBadge article="Art. 145 CGI" />).
                  </li>
                  <li>
                    • <strong>Incertitude Internationale :</strong> Tensions diplomatiques avec Bruxelles pouvant fragiliser les équivalences de diplômes et financements de mobilité européenne.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* 3. VERS QUOI IL VAUT MIEUX ALLER : LES 5 ACTIONS D'IMMUNITÉ TOTALE */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div className="flex items-center gap-2 font-extrabold text-xs sm:text-sm text-amber-300 uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>3. Vers quoi aller dès maintenant : Les 5 Actions Gagnantes pour Nelly</span>
            </div>
            <span className="text-[10px] font-mono text-indigo-300">Protection Totale 2027</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-[11px]">
            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
              <div className="font-bold text-amber-300">1. Prêt 260k€ / 25 ans</div>
              <p className="text-slate-300 leading-snug">
                Verrouiller le prêt de <strong>260 000 € sur 25 ans au plus près de 3,70 %</strong> (1 330 €/m vs 1 372 €/m à 4,0 %) et débloquer le PEE achat pour couvrir la moitié des <strong>23 500 € de frais de notaire</strong>.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
              <div className="font-bold text-emerald-300">2. Bail 400€ → 650€</div>
              <p className="text-slate-300 leading-snug">
                Dès la remise des clés de la maison à 305 000 €, passer le bail Nell'Immo de <strong>400 € (location actuelle) à 650 € + 100 € charges</strong> au Foncier Réel (<LawBadge article="Art. 28 & 31 CGI" />) et déduire 28 % des intérêts sur 25 ans.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
              <div className="font-bold text-sky-300">3. CESU & ANCV</div>
              <p className="text-slate-300 leading-snug">
                Activer <strong>2 591 € de CESU Dirigeant + 540 € d'ANCV</strong> par an pour payer le piano à domicile, la garderie et l'escalade à 0 € d'IR (+648 € de crédit d'IS).
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
              <div className="font-bold text-purple-300">4. Nue-Propriété</div>
              <p className="text-slate-300 leading-snug">
                Donner la <strong>nue-propriété de la maison de 305 000 € (0 € droits)</strong> avant 51 ans et préparer les études de 2033 (pension déductible 6 674 € ou studio Holding).
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
              <div className="font-bold text-pink-300">5. Audit Pub 40k€</div>
              <p className="text-slate-300 leading-snug">
                Réduire de 12 % les 40 000 € de portails annonces (<strong>+4 080 € net/an</strong>) et adapter l'agence selon 2027 (Gestion locative GUL sous LFI ou mandats DPE F/G sous RN).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
