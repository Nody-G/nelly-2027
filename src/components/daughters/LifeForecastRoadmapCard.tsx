import React, { useState } from 'react';
import {
  Compass,
  CalendarClock,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  GraduationCap,
  Building2,
} from 'lucide-react';
import { LawBadge } from '../common/LawBadge';

export const LifeForecastRoadmapCard: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<'2027_2030' | '2030_2033' | '2033_2039'>('2027_2030');

  return (
    <div className="bg-white rounded-2xl border-2 border-indigo-200 shadow-sm overflow-hidden space-y-0">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 sm:p-6 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Compass className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold block">
                Prévision de Vie Complète (2027 → 2039) • Arbitrage Final
              </span>
              <h3 className="font-black text-base sm:text-xl text-white">
                Prévision de Vie pour Nelly & ses 2 Filles (LFI vs RN) : Coûts Réels & Vers Quoi Aller
              </h3>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
            Trajectoire 12 ans Documentée
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Synthèse prédictive croisant les <strong>8 postes du coût de la vie à Pélissanne</strong>, la <strong>fiscalité de Nell'Immo SASU (70 000 €)</strong> et les <strong>3 grandes étapes biologiques et scolaires des filles</strong> (Collège/Primaire → Lycée/Collège → Université Aix/Marseille & Retraite).
        </p>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* 1. CHOC COMPARÉ : SANS RIEN CHANGER vs AVEC LEVIERS MAISON 305k€ */}
        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-600" />
            <span>1. Le Verdict Chiffré Annuel : Pourquoi tout s'inverse selon l'activation des leviers maison</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Cas Passif */}
            <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-rose-950 uppercase text-[11px]">
                  Cas A — Si Nelly reste passive (30 000 € de dividendes classiques)
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white">
                  Avantage RN (+3 835 €/an)
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed text-[11px]">
                • <strong>Sous LFI (Passif) :</strong> La suppression de la Flat Tax soumet ses 30 000 € de dividendes aux cotisations sociales et au barème 14 tranches. Ses impôts bondissent à <strong>-19 860 €/an</strong> (+6 725 € de surtaxe), ce qui annule ses 4 637 € d'économies sur le coût de la vie. Son épargne libre tombe à <strong>18 700 €/an (1 558 €/mois)</strong>.
                <br />• <strong>Sous le RN (Passif) :</strong> Flat Tax maintenue + part pleine dès le 2e enfant (-12 398 € d'impôts) + 1 080 € de CAF universelle + baisse TVA énergie/carburant. Son épargne libre atteint <strong>22 535 €/an (1 878 €/mois)</strong>.
              </p>
            </div>

            {/* Cas Optimisé */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border-2 border-emerald-400 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-emerald-950 uppercase text-[11px]">
                  Cas B — Si Nelly active les Leviers Maison 305k€ (Bail Pro + CESU + Pub)
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-700 text-white">
                  Avantage LFI (+3 352 €/an)
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed text-[11px]">
                • <strong>Sous LFI (Optimisé) :</strong> En remplaçant ses dividendes par le loyer bureau + enseigne pub (10 800 € en foncier réel à 0 € d'impôt) et les CESU (2 540 €), la surtaxe dividendes tombe à 0 €. Elle cumule alors ses leviers avec la gratuité cantine/100% Sécu : son épargne libre grimpe à <strong>37 280 €/an (3 107 €/mois)</strong> !
                <br />• <strong>Sous le RN (Optimisé) :</strong> Elle cumule les leviers maison avec les 1 080 € de CAF universelle et la baisse d'IR : son épargne libre atteint <strong>33 928 €/an (2 827 €/mois)</strong>, mais elle conserve les frais scolaires et les futures études à sa charge.
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
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
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
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
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
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
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
                    • <strong>Coût de la vie complet :</strong> Abaisse le budget annuel du foyer de 36 677 € à <strong>32 040 €/an (-4 637 €)</strong>.
                  </li>
                  <li>
                    • <strong>Impact Nell'Immo :</strong> Recul de -12 % à -15 % des investisseurs locatifs privés (encadrement des loyers), à compenser en développant la gestion locative sous Garantie Universelle des Loyers (+14 400 € HT/an).
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200 space-y-2">
                <div className="font-extrabold text-amber-950 text-xs sm:text-sm">
                  2027-2030 sous le RN (Aînée 11-14 ans • Cadette 5-8 ans)
                </div>
                <ul className="space-y-1.5 text-slate-700 text-[11px] leading-relaxed">
                  <li>
                    • <strong>Quotidien des filles :</strong> Versement direct de <strong>+1 080 €/an d'allocations familiales universelles</strong> (90 €/mois part Nelly) + baisse d'IR de <strong>+450 €/an</strong> (part pleine dès le 2e enfant). Uniforme fourni au Collège Carcassonne, mais cantine (777 €) et orthodontie (1 450 €) plein tarif, et risque de hausse du piano (+80 €).
                  </li>
                  <li>
                    • <strong>Énergie & Mobilité :</strong> Baisse immédiate de la TVA de 20 % à 5,5 % sur l'électricité, le gaz et le carburant (-1 160 €/an cumulés maison + trajets) et fin des ZFE à Aix/Marseille.
                  </li>
                  <li>
                    • <strong>Impact Nell'Immo :</strong> L'abrogation des interdictions DPE F/G libère +12 % de mandats de vente, mais la tension sur la dette (Spread OAT → crédit à ~4,65 %) freine les acheteurs sans apport.
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
                    • <strong>Orthodontie de la Cadette (2032) :</strong> Lorsque la cadette entre en 6e à 11 ans et débute son traitement orthodontique, Nelly économise une seconde fois <strong>1 250 €/an</strong> grâce au 100 % Sécu.
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
                    • <strong>Majoration CAF +14 ans :</strong> Les deux filles ayant dépassé 11 et 14 ans, les allocations familiales universelles versées à Nelly montent autour de <strong>+1 250 €/an</strong> net d'impôt.
                  </li>
                  <li>
                    • <strong>Orientation sélective :</strong> Fin du collège unique dès la 4e/3e. Exonération totale d'IR jusqu'à 30 ans pour les jeunes entrant en apprentissage ou activité salariée.
                  </li>
                  <li>
                    • <strong>Anticipation Études :</strong> Comme les filles n'auront droit à aucune bourse CROUS en 2033 (revenus de Nelly à 70k€), Nelly doit capitaliser ~10 000 €/an dans une Holding Mère-Fille pour acheter un studio étudiant à Aix.
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
                    • <strong>Le Basculement Majeur de 2033 (18 ans de l'Aînée) :</strong> La Garantie d'Autonomie Jeunesse verse <strong>1 063 €/mois (12 756 €/an, soit 1 158 €/mois indexé inflation)</strong> directement à l'aînée dès 2033, puis à la cadette dès 2039 + repas CROUS à 1 €.
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
                    • <strong>Choc financier des études (0 € de bourse CROUS) :</strong> À 70 000 € de revenus, Nelly dépasse les plafonds sociaux et les allocations CAF cessent à 20 ans. Sans préparation, elle doit décaisser <strong>6 300 €/an par fille</strong> (12 600 €/an coût total studio Aix).
                  </li>
                  <li>
                    • <strong>Parade fiscale obligatoire sous RN :</strong> Détacher fiscalement sa fille majeure et lui verser une pension alimentaire déductible (<LawBadge article="Art. 156-II-2° CGI" /> : 6 674 €/an déduits de la tranche à 30 %) ou la loger via un studio détenu par sa Holding (<LawBadge article="Art. 145 CGI" />).
                  </li>
                  <li>
                    • <strong>Retraite à 62-63 ans :</strong> N'ayant pas débuté avant 20 ans, Nelly part entre 62 et 63 ans.
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
              <span>3. Vers quoi il faut aller dès maintenant : La Feuille de Route en 5 Actions Gagnantes à 100 %</span>
            </div>
            <span className="text-[10px] font-mono text-indigo-300">Protection LFI & RN</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-[11px]">
            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
              <div className="font-bold text-amber-300">Action 1 • Crédit Fixe</div>
              <p className="text-slate-300 leading-snug">
                Signer le prêt de la maison de <strong>305 000 € à taux fixe (~3,45 %) AVANT mai 2027</strong> pour se protéger contre la hausse des taux OAT (4,20 % à 4,65 %) sous LFI ou RN.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
              <div className="font-bold text-emerald-300">Action 2 • Zéro Dividende</div>
              <p className="text-slate-300 leading-snug">
                Facturer <strong>8 400 €/an de bail pro (35 m²) + 3 600 €/an d'enseigne pub</strong> à Nell'Immo en foncier réel (<LawBadge article="Art. 28 & 31 CGI" />) : neutralise à 100 % la suppression de la Flat Tax sous LFI !
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
              <div className="font-bold text-sky-300">Action 3 • CESU & ANCV</div>
              <p className="text-slate-300 leading-snug">
                Activer <strong>2 540 € de CESU Dirigeant + 540 € d'ANCV</strong> par an pour payer le piano à domicile, la garderie et l'escalade à 0 € d'IR et récupérer +635 € de crédit d'IS.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
              <div className="font-bold text-purple-300">Action 4 • Holding Studio</div>
              <p className="text-slate-300 leading-snug">
                Donner la <strong>nue-propriété de la maison (0 € droits)</strong> et loger le surplus de cash dans une <strong>Holding SASU (IS 1,25 %)</strong> pour acheter un studio à Aix si le RN gagne (0 € bourse en 2033).
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
              <div className="font-bold text-pink-300">Action 5 • Pivot Agence</div>
              <p className="text-slate-300 leading-snug">
                <strong>Si LFI passe :</strong> ouvrir 25 lots en Gestion Locative GUL (+14 400 € HT) + mandataires RSAC. <strong>Si RN passe :</strong> cibler les mandats DPE F/G libérés et les acheteurs avec 30 % d'apport.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
