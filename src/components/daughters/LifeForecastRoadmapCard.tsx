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
                Prévision de Vie Complète (2027 → 2039) • Chiffres Réels 2025 (40k€ + 20k€ div • Prêt 260k€ sur 25 ans)
              </span>
              <h3 className="font-extrabold text-base sm:text-lg text-white">
                Prévision de Vie pour Nelly & ses 2 Filles (LFI vs RN) : Coûts Réels & Vers Quoi Aller
              </h3>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Synthèse prédictive croisant les <strong>revenus 2025 de Nelly (40 000 € salaire + 20 000 € dividendes)</strong>, son <strong>prêt de 260 000 € sur 25 ans (taux 3,7 % - 4,0 % = 1 330 € à 1 372 €/mois) + 23 500 € de notaire</strong> sur sa nouvelle maison à 305 000 €, le passage de son loyer pro de <strong>400 €/mois (maison louée) à 650 €/mois + 100 € charges</strong>, et l'avenir de ses 2 filles (5 & 11 ans).
        </p>
      </div>

      <div className="p-5 space-y-6">
        {/* 1. CHOC COMPARÉ : SANS RIEN CHANGER vs AVEC LEVIERS NOUVELLE MAISON 305k€ */}
        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-600" />
            <span>1. Verdict Chiffré (Base 2025 : 40 000 € + 20 000 € div. • Prêt 25 ans) : Pourquoi tout s'optimise</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Cas Passif */}
            <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-rose-950 uppercase text-[11px]">
                  Cas A — Sans activer la nouvelle maison (20 000 € div. + loyer 400 €)
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white">
                  Avantage RN (+2 611 €/an)
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed text-[11px]">
                • <strong>Sous LFI (Passif) :</strong> Comme Nelly n'a que <strong>20 000 € de dividendes</strong>, la fin de la Flat Tax lui coûte ~4 140 € d'impôts en plus, mais ses <strong>+3 987 €/an d'économies de factures et CAF</strong> (cantine 0 €, 100 % Sécu orthodontie) compensent presque intégralement la hausse d'impôt !
                <br />• <strong>Sous le RN (Passif) :</strong> Maintien de la Flat Tax 30 % sur les 20 000 € de dividendes + part pleine dès le 2e enfant + 1 080 € de CAF universelle + baisse TVA 5,5 % énergie/carburant.
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
                • <strong>Remplacement de 56 % à 100 % des 20 000 € de dividendes :</strong> En passant le loyer Nell'Immo de 400 € (maison louée) à 650 € + 100 € charges dans la nouvelle maison (+4 200 €/an déduits grâce aux intérêts du prêt de 260 000 € sur 25 ans), + CESU (3 131 €) + PEE (3 880 €), Nelly remplace <strong>11 211 € sur ses 20 000 € de dividendes en récurrent (et 100 % la 1re année)</strong> !
                <br />• <strong>Bonus du prêt sur 25 ans :</strong> La mensualité tombe à <strong>1 351 €/mois (à 3,85 %)</strong> au lieu de 1 555 €/mois sur 20 ans, libérant <strong>+2 450 €/an d'épargne libre supplémentaire</strong> !
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

            <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
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
                    • <strong>Prêt 260 000 € sur 25 ans (3,7 % - 4,0 %) :</strong> Les ~9 905 € d'intérêts annuels permettent de déduire ~2 773 €/an sur les 9 000 € du nouveau bail professionnel (650 € + 100 €), gommant l'impôt foncier.
                  </li>
                  <li>
                    • <strong>Impact Nell'Immo :</strong> Compenser le recul des bailleurs privés en ouvrant 25 lots de gestion locative sous Garantie Universelle des Loyers (+14 400 € HT/an).
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
                    • <strong>Énergie & Mobilité :</strong> Baisse immédiate de la TVA de 20 % à 5,5 % sur l'électricité, le gaz et le carburant (-1 160 €/an cumulés maison + trajets) et fin des ZFE à Aix/Marseille.
                  </li>
                  <li>
                    • <strong>Prêt 260 000 € sur 25 ans verrouillé :</strong> Signé en 2026 entre 3,7 % et 4,0 % (1 330 € à 1 372 €/mois), le prêt protège Nelly contre toute hausse des taux OAT en 2027.
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
                    • <strong>Orthodontie de la Cadette (2032) :</strong> Lorsque la cadette entre en 6e à 11 ans, Nelly économise une seconde fois <strong>1 250 €/an</strong> grâce au 100 % Sécu.
                  </li>
                  <li>
                    • <strong>Années Lycée de l'Aînée :</strong> Transports scolaires et TER vers Salon-de-Provence / Aix 100 % gratuits, manuels et restauration lycéenne gratuits.
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
                    • <strong>Majoration CAF +14 ans :</strong> Les allocations familiales universelles versées à Nelly montent autour de <strong>+1 250 €/an</strong> net d'impôt.
                  </li>
                  <li>
                    • <strong>Exonération IR jeunes :</strong> Exonération totale d'IR jusqu'à 30 ans pour les jeunes en apprentissage ou premier emploi.
                  </li>
                  <li>
                    • <strong>Anticipation Études :</strong> Grâce aux +2 450 €/an économisés par l'étalement du prêt sur 25 ans, Nelly met de côté +17 150 € d'ici 2033 pour préparer les études de l'aînée.
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
                    • <strong>Coût des études (0 € de bourse CROUS) :</strong> Même à 60 000 € de revenus, Nelly dépasse les plafonds sociaux et les allocations CAF cessent à 20 ans. Coût part Nelly : <strong>6 300 €/an par fille</strong>.
                  </li>
                  <li>
                    • <strong>Parade fiscale obligatoire sous RN :</strong> Détacher fiscalement sa fille majeure et déduire une pension alimentaire (<LawBadge article="Art. 156-II-2° CGI" /> : 6 674 €/an déduits de la tranche à 30 %) ou la loger via sa Holding (<LawBadge article="Art. 145 CGI" />).
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
            <span className="text-[10px] font-mono text-indigo-300">Protection LFI & RN</span>
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
