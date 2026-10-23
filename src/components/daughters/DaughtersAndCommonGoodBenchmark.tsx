import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Scale, 
  GraduationCap, 
  School, 
  Music, 
  Trophy, 
  Stethoscope, 
  ShieldCheck, 
  Trees, 
  Bus, 
  ShieldAlert, 
  Layers, 
  BadgeCheck, 
  Landmark,
  Euro,
  ExternalLink
} from 'lucide-react';
import { Tooltip } from '../common/Tooltip';
import { LawBadge } from '../common/LawBadge';
import { pelissanneLocalData } from '../../data/pelissanneRates';

export const DaughtersAndCommonGoodBenchmark: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'GIRLS_BUDGET' | 'COMMON_GOOD' | 'VERDICT_SYNTHESIS'>('GIRLS_BUDGET');

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-0">
      
      {/* En-tête du composant */}
      <div className="bg-gradient-to-r from-pink-900 via-purple-900 to-indigo-950 text-white p-5 sm:p-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-pink-500/20 text-pink-300 border border-pink-400/30">
              <Heart className="w-5 h-5 fill-pink-400 text-pink-400" />
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-pink-300 font-bold block">
                Benchmark Politique Certifié • Horizon 2027
              </span>
              <h3 className="font-black text-base sm:text-xl text-white">
                Bien-Être des 2 Filles (5 & 11 ans) & Bien Commun à Pélissanne
              </h3>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-pink-200 border border-pink-300/30">
            Sa Priorité Absolue avec l'Argent
          </span>
        </div>

        <p className="text-xs sm:text-sm text-pink-100/90 leading-relaxed max-w-4xl">
          Nelly gagne environ <strong>70 000 € net par an</strong> avec l'agence Nell'Immo (CA 130 000 € HT). 
          À ce niveau de revenus, elle se situe au-dessus de la quasi-totalité des aides sociales actuelles (0 € d'allocations CAF, 0 € de bourses, plein tarif municipal à Pélissanne). 
          Voici le croisement exhaustif, poste par poste, des mesures réelles de <strong>La France Insoumise (NFP)</strong>, du <strong>Rassemblement National</strong> et de la <strong>Continuité</strong> pour ses filles et son cadre de vie provençal.
        </p>

        {/* Barre de navigation entre sous-onglets */}
        <div className="flex items-center gap-2 pt-2 overflow-x-auto text-xs">
          <button
            onClick={() => setActiveSubTab('GIRLS_BUDGET')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
              activeSubTab === 'GIRLS_BUDGET'
                ? 'bg-white text-slate-900 shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>1. Budget Réel & Dépenses des 2 Filles</span>
          </button>

          <button
            onClick={() => setActiveSubTab('COMMON_GOOD')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
              activeSubTab === 'COMMON_GOOD'
                ? 'bg-white text-slate-900 shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Trees className="w-4 h-4 text-emerald-400" />
            <span>2. Bien Commun & Cadre de Vie à Pélissanne</span>
          </button>

          <button
            onClick={() => setActiveSubTab('VERDICT_SYNTHESIS')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
              activeSubTab === 'VERDICT_SYNTHESIS'
                ? 'bg-white text-slate-900 shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Scale className="w-4 h-4 text-amber-400" />
            <span>3. Synthèse Croisée, Arbitrage & Vérités</span>
          </button>
        </div>
      </div>

      {/* CONTENU SOUS-ONGLET 1 : BUDGET DES 2 FILLES */}
      {activeSubTab === 'GIRLS_BUDGET' && (
        <div className="p-5 sm:p-6 space-y-6">
          
          {/* Les 3 Cartes de Bilan Chiffré Annuel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Carte Continuité */}
            <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-sky-800">Régime Actuel (Statu Quo)</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-200/80 text-sky-900">Base Référence</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-sky-950">
                3 850 € <span className="text-xs font-normal text-slate-600">/ an de reste à charge</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Plein tarif partout (cantine Pélissanne tranche 5, fournitures, orthodontie). <strong>0 € d'allocations familiales</strong> (dépassement plafond de ressources). 
                <span className="text-emerald-700 font-semibold block mt-1">
                  💡 Réductible à 1 650 €/an en activant le CESU Dirigeant 2 591 € et les Chèques-Vacances de Nell'Immo.
                </span>
              </p>
            </div>

            {/* Carte LFI */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border-2 border-emerald-400 space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800">Projet LFI / NFP 2027</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white">Top Dépenses Enfants</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-emerald-900">
                620 € <span className="text-xs font-bold text-emerald-700">(Gain net : +3 230 €/an !)</span>
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed">
                <strong>Gratuité totale</strong> de la cantine scolaire (+780 €) et des kits de fournitures (+250 €). 
                <strong>100% Sécu Orthodontie</strong> sans reste à charge (+700 €). Pass'Sport universel 150 € + chèque culture (+350 €). 
                Allocation dès le 1er enfant (+600 €).
                <span className="text-indigo-800 font-bold block mt-1">
                  🎓 Horizon 18 ans : Allocation autonomie de 1 158 €/mois par fille (+13 896 €/an !).
                </span>
              </p>
            </div>

            {/* Carte RN */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border-2 border-amber-300 space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800">Projet RN 2027</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white">Top Fiscal Famille</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-amber-950">
                2 350 € <span className="text-xs font-bold text-amber-700">(Gain net : +1 500 €/an)</span>
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed">
                <strong>Universalité des allocations familiales dès le 1er enfant</strong> sans condition de revenus : versement direct de <strong>+900 € à +1 320 € / an</strong> pour Nelly en garde alternée !
                <strong>Part fiscale pleine dès le 2e enfant</strong> (+450 € de baisse d'IR). 
                Baisse de TVA à 5,5% sur le matériel de sport et fournitures (-180 €). Cantine et orthodontie maintenues plein tarif.
              </p>
            </div>

          </div>

          {/* Tableau Détaillé Poste par Poste */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <span>Comparatif Chiffré Détaillé : Dépenses des 2 Filles en Garde Alternée</span>
              </h4>
              <span className="text-[11px] text-slate-500 font-medium">Montants annuels réels constatés à Pélissanne (13330)</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs min-w-[760px]">
                <thead>
                  <tr className="bg-slate-900 text-white text-[10px] uppercase tracking-wider">
                    <th className="py-3 px-3">Poste de Dépense Filles</th>
                    <th className="py-3 px-3 text-sky-200 bg-slate-800">1. Continuité (Actuel)</th>
                    <th className="py-3 px-3 text-emerald-300 bg-emerald-950">2. LFI / NFP 2027</th>
                    <th className="py-3 px-3 text-amber-300 bg-amber-950">3. Rassemblement National</th>
                    <th className="py-3 px-3 text-indigo-300 bg-slate-800">Levier & Garde-Fou Légal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  
                  {/* Ligne 1 : Cantine scolaire */}
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5">
                        <School className="w-3.5 h-3.5 text-pink-600" />
                        <span>Cantine Scolaire (Pélissanne)</span>
                      </div>
                      <div className="text-[10px] text-slate-500">Primaire (Cadette 5 ans) + Collège (Aînée 11 ans)</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 bg-sky-50/20">
                      <strong>777 € / an</strong>
                      <div className="text-[10px] text-slate-500">Tranche 5 haute (4,10 €/repas)</div>
                    </td>
                    <td className="py-2.5 px-3 font-bold text-emerald-800 bg-emerald-50/30">
                      0 € / an
                      <div className="text-[10px] text-emerald-600 font-semibold">Gratuité totale universelle (+777 €)</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 bg-amber-50/20">
                      <strong>777 € / an</strong>
                      <div className="text-[10px] text-slate-500">Maintien tarif communal actuel</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      <span className="text-[10px] text-slate-500">Tarif fixé par le CCAS de Pélissanne selon QF CAF.</span>
                    </td>
                  </tr>

                  {/* Ligne 2 : Fournitures & Rentrée */}
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Fournitures & Rentrée Scolaire</span>
                      </div>
                      <div className="text-[10px] text-slate-500">Cartables, trousses, cahiers, classeurs collège</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 bg-sky-50/20">
                      <strong>~250 € / an</strong>
                      <div className="text-[10px] text-slate-500">0 € ARS (revenus &gt; plafond)</div>
                    </td>
                    <td className="py-2.5 px-3 font-bold text-emerald-800 bg-emerald-50/30">
                      0 € / an
                      <div className="text-[10px] text-emerald-600 font-semibold">Kit officiel complet gratuit (+250 €)</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 bg-amber-50/20">
                      <strong>~220 € / an</strong>
                      <div className="text-[10px] text-slate-500">Baisse TVA 5,5% (-30 €)</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      <span className="text-[10px] text-slate-500">Financement par dotation d'État aux communes.</span>
                    </td>
                  </tr>

                  {/* Ligne 3 : Escalade Cadette */}
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5 text-pink-600" />
                        <span>Escalade (Cadette 5 ans)</span>
                      </div>
                      <div className="text-[10px] text-slate-500">Club Sensabloc / CAF Salon-Pélissanne (400 € / an)</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 bg-sky-50/20">
                      <strong>400 € / an</strong>
                      <div className="text-[10px] text-emerald-700 font-semibold">0 € d'IR si Chèques-Vacances Nell'Immo</div>
                    </td>
                    <td className="py-2.5 px-3 font-bold text-emerald-800 bg-emerald-50/30">
                      250 € / an
                      <div className="text-[10px] text-emerald-600 font-semibold">Pass'Sport universel 150 € (-150 €)</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 bg-amber-50/20">
                      <strong>380 € / an</strong>
                      <div className="text-[10px] text-slate-500">TVA 5,5% sur chaussons/baudrier (-20 €)</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      <Tooltip 
                        term="Chèques-Vacances ANCV" 
                        explanation="Exonérés de cotisations sociales et d'IR pour la dirigeante de SASU Nell'Immo. Acceptés pour régler les licences et stages sportifs."
                        lawRef="Art. L411-1 Code du tourisme"
                      />
                    </td>
                  </tr>

                  {/* Ligne 4 : Piano Aînée */}
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5">
                        <Music className="w-3.5 h-3.5 text-purple-600" />
                        <span>Cours de Piano (Aînée 11 ans)</span>
                      </div>
                      <div className="text-[10px] text-slate-500">École municipale ou prof particulier à domicile (400 €)</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 bg-sky-50/20">
                      <strong>400 € / an</strong>
                      <div className="text-[10px] text-purple-700 font-semibold">Optimisable à 0 € via CESU 2 591 €</div>
                    </td>
                    <td className="py-2.5 px-3 font-bold text-emerald-800 bg-emerald-50/30">
                      250 € / an
                      <div className="text-[10px] text-emerald-600 font-semibold">Chèque culture musique (-150 €)</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 bg-amber-50/20">
                      <strong>400 € à 650 € / an</strong>
                      <div className="text-[10px] text-amber-700 font-semibold">⚠️ Risque hausse tarif si coupes subventions</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      <Tooltip 
                        term="Art. 199 sexdecies CGI" 
                        explanation="Crédit d'impôt de 50% sur l'emploi à domicile pour les cours de piano dispensés dans la maison de Pélissanne."
                        lawRef="Art. 199 sexdecies CGI"
                      />
                    </td>
                  </tr>

                  {/* Ligne 5 : Santé & Orthodontie */}
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5">
                        <Stethoscope className="w-3.5 h-3.5 text-rose-600" />
                        <span>Orthodontie (Âge 11-14 ans)</span>
                      </div>
                      <div className="text-[10px] text-slate-500">Semestres de bagues dentaires (~1 600 € / an)</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 bg-sky-50/20">
                      <strong>~700 € / an</strong>
                      <div className="text-[10px] text-slate-500">Reste à charge après mutuelle</div>
                    </td>
                    <td className="py-2.5 px-3 font-bold text-emerald-800 bg-emerald-50/30">
                      0 € / an
                      <div className="text-[10px] text-emerald-600 font-semibold">Plan 100% Sécu intégrale (+700 €)</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 bg-amber-50/20">
                      <strong>~700 € / an</strong>
                      <div className="text-[10px] text-slate-500">Maintien mutuelle privée obligatoire</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      <span className="text-[10px] text-slate-500">Mutuelle familiale souscrite et déduite sur Nell'Immo.</span>
                    </td>
                  </tr>

                  {/* Ligne 6 : Allocations Familiales */}
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5">
                        <Euro className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Allocations Familiales CAF</span>
                      </div>
                      <div className="text-[10px] text-slate-500">2 enfants en garde alternée 50/50</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 bg-sky-50/20">
                      <strong>0 € / an</strong>
                      <div className="text-[10px] text-slate-500">Plafond de ressources dépassé (70k€)</div>
                    </td>
                    <td className="py-2.5 px-3 font-bold text-emerald-800 bg-emerald-50/30">
                      +600 € / an
                      <div className="text-[10px] text-emerald-600 font-semibold">Allocation universelle dès 1er enfant</div>
                    </td>
                    <td className="py-2.5 px-3 font-black text-amber-900 bg-amber-50/30">
                      +960 € à +1 320 € / an
                      <div className="text-[10px] text-amber-700 font-bold">Rétablissement Universalité Totale RN !</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      <Tooltip 
                        term="Art. L. 521-1 CSS" 
                        explanation="Article du Code de la Sécurité Sociale fixant les conditions d'attribution des allocations familiales."
                        lawRef="Art. L521-1 CSS"
                      />
                    </td>
                  </tr>

                  {/* Ligne 7 : Quotient Familial / IR */}
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5">
                        <Scale className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Quotient Familial (Part Fiscale)</span>
                      </div>
                      <div className="text-[10px] text-slate-500">Garde alternée + Majoration Case T parent isolé</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 bg-sky-50/20">
                      <strong>1,75 parts</strong>
                      <div className="text-[10px] text-slate-500">Plafond demi-part : 1 759 €</div>
                    </td>
                    <td className="py-2.5 px-3 font-bold text-emerald-800 bg-emerald-50/30">
                      Crédit d'impôt enfant
                      <div className="text-[10px] text-emerald-600 font-semibold">Barème 14 tranches lissé</div>
                    </td>
                    <td className="py-2.5 px-3 font-black text-amber-900 bg-amber-50/30">
                      2,00 parts (+450 € IR)
                      <div className="text-[10px] text-amber-700 font-bold">Part pleine dès le 2e enfant !</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      <Tooltip 
                        term="Art. 194-II & 195 CGI" 
                        explanation="Règles d'attribution des parts de quotient familial en garde alternée et majoration parent isolé case T."
                        lawRef="Art. 194-II & 195 CGI"
                      />
                    </td>
                  </tr>

                  {/* Ligne 8 : Études supérieures 2033 & 2039 */}
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
                        <span>Études Supérieures (Horizon 18 ans)</span>
                      </div>
                      <div className="text-[10px] text-slate-500">Aînée en 2033 & Cadette en 2039 (Logement Aix/Marseille)</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 bg-sky-50/20">
                      <strong>0 € de bourse</strong>
                      <div className="text-[10px] text-slate-500">100% à charge (~12k€/an/fille)</div>
                    </td>
                    <td className="py-2.5 px-3 font-black text-emerald-900 bg-emerald-50/40">
                      +13 896 € / an par fille !
                      <div className="text-[10px] text-emerald-700 font-bold">Allocation Autonomie 1 158 €/mois</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 bg-amber-50/20">
                      <strong>0 € de bourse</strong>
                      <div className="text-[10px] text-slate-500">Exo IR -30 ans si job étudiant</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      <Tooltip 
                        term="Donation temporaire d'usufruit" 
                        explanation="Permet à Nelly de loger sa fille dans un studio détenu par sa holding sans payer d'IFI ni d'IR sur les loyers."
                        lawRef="Art. 669 CGI"
                      />
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* CONTENU SOUS-ONGLET 2 : BIEN COMMUN & CADRE DE VIE À PÉLISSANNE */}
      {activeSubTab === 'COMMON_GOOD' && (
        <div className="p-5 sm:p-6 space-y-6">
          
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs font-bold uppercase text-emerald-600">Services Publics & Environnement Local</span>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
              Les 5 Piliers du Bien Commun à Pélissanne (13330) face aux Programmes 2027
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Écoles, santé de proximité (Hôpital de Salon), sécurité locale, gestion de l'eau face aux canicules/crues de la Touloubre et transports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
            
            {/* Pilier 1 : Santé Hôpital Salon */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <div className="p-2 rounded-xl bg-rose-100 text-rose-700">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-extrabold text-slate-900 text-sm">1. Santé de Proximité & Urgences Hôpital de Salon</h5>
                  <span className="text-[10px] text-slate-500">Accès aux soins d'urgence pour les 2 filles</span>
                </div>
              </div>
              <ul className="space-y-1.5 text-slate-600">
                <li>• <strong>Constat actuel :</strong> Urgences de Salon-de-Provence et pédiatrie d'Aix souvent saturées (attente 5 à 8h). Délais de 3 à 6 mois pour un spécialiste pédiatrique.</li>
                <li>• <strong>Sous LFI :</strong> Embauche de 100 000 soignants, réouverture de 50 000 lits et centres de santé publics municipaux avec médecins salariés pour stopper les déserts médicaux.</li>
                <li>• <strong>Sous RN :</strong> Suppression des Agences Régionales de Santé (ARS), recentrage sur le personnel de soin, exonération fiscale sur 5 ans pour attirer les jeunes médecins en zone périurbaine.</li>
              </ul>
            </div>

            {/* Pilier 2 : Écoles de Pélissanne */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <div className="p-2 rounded-xl bg-indigo-100 text-indigo-700">
                  <School className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-extrabold text-slate-900 text-sm">2. Écoles & Collège Roger Carcassonne</h5>
                  <span className="text-[10px] text-slate-500">Climatisation, effectifs de classe & autorité</span>
                </div>
              </div>
              <ul className="space-y-1.5 text-slate-600">
                <li>• <strong>Constat actuel :</strong> Canicules en mai-juin-septembre (38-40°C) dans des classes mal isolées à Pélissanne. Classes à 27-29 élèves au collège Carcassonne.</li>
                <li>• <strong>Sous LFI :</strong> Plan d'urgence isolation & climatisation éco-responsable des écoles du Sud, plafonnement à 20 élèves par classe en primaire, recrutement massif d'AESH.</li>
                <li>• <strong>Sous RN :</strong> Port de l'uniforme obligatoire au collège/primaire, rétablissement strict de l'autorité des professeurs, suppression du collège unique avec filières dès 14 ans.</li>
              </ul>
            </div>

            {/* Pilier 3 : Sécurité locale */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-extrabold text-slate-900 text-sm">3. Sécurité Publique & Tranquillité Locale</h5>
                  <span className="text-[10px] text-slate-500">Trajets scolaires, gendarmerie & police municipale</span>
                </div>
              </div>
              <ul className="space-y-1.5 text-slate-600">
                <li>• <strong>Sous RN :</strong> Tolérance zéro, peines planchers obligatoires, armement systématique des polices municipales, suppression des réductions automatiques de peine et 20 000 places de prison. Climat très sécuritaire et rassurant pour les déplacements des filles.</li>
                <li>• <strong>Sous LFI :</strong> Police de proximité bienveillante non armée de guerre (îlotiers), désescalade des tensions, investissement massif dans la justice des mineurs et l'éducation spécialisée.</li>
                <li>• <strong>Continuité :</strong> Création de 200 nouvelles brigades de gendarmerie en milieu rural/périurbain.</li>
              </ul>
            </div>

            {/* Pilier 4 : Eau & Climat Touloubre */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                  <Trees className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-extrabold text-slate-900 text-sm">4. Risques Inondation Touloubre & Sécheresse</h5>
                  <span className="text-[10px] text-slate-500">Protection de la maison de 305k€ et ressources en eau</span>
                </div>
              </div>
              <ul className="space-y-1.5 text-slate-600">
                <li>• <strong>Sous LFI :</strong> Application de la Règle Verte, grand plan de gestion publique de l'eau, interdiction des coupures, aides à 100% pour la rénovation thermique et désimperméabilisation des sols contre les crues de la Touloubre.</li>
                <li>• <strong>Sous RN :</strong> Simplification administrative drastique : facilitation des travaux de curage des cours d'eau et digues par les communes rurales sans veto environnemental. Refus du DPE obligatoire.</li>
              </ul>
            </div>

            {/* Pilier 5 : Transports */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5 md:col-span-2">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <div className="p-2 rounded-xl bg-purple-100 text-purple-700">
                  <Bus className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-extrabold text-slate-900 text-sm">5. Mobilité Quotidienne, Carburants & Transports (Salon - Pélissanne - Aix)</h5>
                  <span className="text-[10px] text-slate-500">Véhicule de fonction Nell'Immo et déplacements des enfants</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600">
                <div>
                  <strong className="text-slate-900 block mb-0.5">• Sous LFI / NFP :</strong>
                  Gratuité totale des transports en commun pour les moins de 25 ans (bus métropole Aix-Marseille, TER), blocage du prix du litre d'essence/gazole à 1,50 € par décret, développement des petites lignes ferroviaires.
                </div>
                <div>
                  <strong className="text-slate-900 block mb-0.5">• Sous le RN :</strong>
                  Baisse immédiate et pérenne de la TVA de 20% à 5,5% sur tous les carburants automobiles et l'électricité. Suppression des Zones à Faibles Émissions (ZFE) interdisant aux voitures plus anciennes d'accéder à Marseille ou Aix.
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* CONTENU SOUS-ONGLET 3 : SYNTHÈSE CROISÉE, ARBITRAGE & VÉRITÉS */}
      {activeSubTab === 'VERDICT_SYNTHESIS' && (
        <div className="p-5 sm:p-6 space-y-5">
          
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>L'Arbitrage Impartial & Sans Filtre pour Nelly Fernandez :</span>
            </div>
            <p className="text-xs text-amber-950 leading-relaxed">
              Il n'existe aucun « camp parfait ». Chaque programme présente des avantages indéniables et des risques sérieux pour Nelly, son entreprise et ses filles :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
            
            {/* Colonne LFI : Avantages & Risques */}
            <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
                <span className="font-extrabold text-sm text-emerald-950">Bilan LFI / NFP pour Nelly</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">Social & Éducation</span>
              </div>

              <div className="space-y-1.5">
                <div className="font-bold text-emerald-900 flex items-center gap-1 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Les Gains Majeurs pour ses 2 Filles (+3 230 € / an) :</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  C'est de très loin le programme le plus protecteur pour le budget familial direct : cantine 100% gratuite, fournitures gratuites, soins d'orthodontie remboursés à 100% par la Sécurité sociale, transports gratuits pour les ados, et garantie d'autonomie de 1 158 €/mois qui financera intégralement leurs études supérieures en 2033 et 2039 sans puiser dans son épargne.
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="font-bold text-rose-900 flex items-center gap-1 text-[11px]">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                  <span>Les Risques pour Nell'Immo & le Patrimoine :</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Suppression de la Flat Tax sur les dividendes (soumis à ~35% de cotisations sociales) si Nelly ne remplace pas ses dividendes par du foncier réel. Encadrement des loyers pouvant freiner 10% des investisseurs locatifs de l'agence. Hausse des taux d'emprunt si le déficit public inquiète les marchés européens.
                </p>
              </div>
            </div>

            {/* Colonne RN : Avantages & Risques */}
            <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b border-amber-100 pb-2">
                <span className="font-extrabold text-sm text-amber-950">Bilan RN pour Nelly</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">Fiscalité & Sécurité</span>
              </div>

              <div className="space-y-1.5">
                <div className="font-bold text-emerald-900 flex items-center gap-1 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Les Gains Majeurs pour Nell'Immo & Fiscalité :</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Maintien de la Flat Tax à 30% sur les dividendes, exonération d'IFI sur l'immobilier d'habitation, TVA à 5,5% sur l'énergie, et moratoire de 5 ans sur le DPE libérant des mandats de vente pour Nell'Immo.
                  Pour les filles : versement direct de <strong>+900 € à +1 320 € / an d'allocations universelles</strong> et <strong>part fiscale pleine dès le 2e enfant (+450 € IR)</strong>.
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="font-bold text-rose-900 flex items-center gap-1 text-[11px]">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                  <span>Les Risques pour les Filles & l'Agence :</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Aucune gratuité scolaire : cantine (777 €) et fournitures (220 €) restent à sa charge. Reste à charge orthodontie (~700 €) inchangé. Risque de flambée des cours de piano si les subventions culturelles sont réduites en mairie. Risque de spread OAT faisant monter les taux de crédit bancaire à 4,5%, bloquant les compromis de Nell'Immo.
                </p>
              </div>
            </div>

          </div>

          {/* Recommandation Stratégique Finale */}
          <div className="p-4 rounded-xl bg-slate-900 text-white text-xs space-y-2">
            <div className="font-bold text-indigo-300 flex items-center gap-2 text-xs uppercase tracking-wide">
              <BadgeCheck className="w-4 h-4 text-emerald-400" />
              <span>La Stratégie d'Immunité Totale pour Nelly Fernandez :</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              En signant le <strong>bail professionnel de 35 m² à 600 € / mois</strong> dans sa maison de 305 000 € (<LawBadge article="Art. 28 & 31 CGI" />), 
              en s'octroyant les <strong>2 591 € de CESU préfinancés</strong> par Nell'Immo (<LawBadge article="Art. 244 quater F CGI" /> & <LawBadge article="Art. L7233-4 C. trav." />) et en auditant les <strong>40 000 € de budget publicitaire</strong> :
              <br />
              👉 <strong>Nelly devient 100% gagnante quel que soit le vainqueur de 2027</strong>. Elle neutralise la hausse de fiscalité sur les dividendes sous LFI tout en profitant des services scolaires gratuits pour ses filles, ou elle maximise son cash net et ses allocations universelles sous le RN !
            </p>
          </div>

        </div>
      )}

    </div>
  );
};
