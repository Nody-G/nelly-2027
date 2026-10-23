import React, { useState } from 'react';
import { 
  Scale, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Sparkles, 
  Home, 
  TrendingUp, 
  Layers,
  Euro
} from 'lucide-react';
import { LawBadge } from '../common/LawBadge';
import { Tooltip } from '../common/Tooltip';

export const LeversPoliticalComparisonCard: React.FC = () => {
  const [selectedParty, setSelectedParty] = useState<'ALL' | 'CONTINUITE' | 'LFI' | 'RN' | 'DROITE'>('ALL');

  const leversComparison = [
    {
      id: 1,
      title: '1. Loyer Pro 600 € / Foncier Réel',
      lawRef: 'Art. 28 & 31 CGI',
      continuite: {
        status: 'Optimal (Statu Quo)',
        verdictColor: 'sky',
        netGain: '+4 800 € net / an',
        analysis: 'Déduction intégrale des intérêts d\'emprunt et de la taxe foncière au Régime Réel (formulaire 2044). Bénéfice foncier imposable à 0 €.'
      },
      lfi: {
        status: 'Bouclier Indispensable',
        verdictColor: 'emerald',
        netGain: '+7 500 € net / an préservés',
        analysis: 'Comme LFI supprime la Flat Tax sur les dividendes (~35% de cotisations), sortir 8 400 € via le bail professionnel protège Nelly de la surtaxe. Le bail professionnel commercial (Loi Hoguet) échappe à l\'encadrement des loyers d\'habitation.'
      },
      rn: {
        status: 'Sanctuarisé',
        verdictColor: 'amber',
        netGain: '+4 800 € net / an',
        analysis: 'Le remplacement de l\'IFI par l\'IFF (Impôt sur la Fortune Financière) exonère totalement la résidence principale et les locaux professionnels d\'entreprise.'
      },
      droite: {
        status: 'Très Favorable',
        verdictColor: 'indigo',
        netGain: '+4 800 € net / an',
        analysis: 'Sanctuarisation du statut du bailleur et préservation intégrale de la déductibilité des intérêts d\'emprunt.'
      }
    },
    {
      id: 2,
      title: '2. Déblocage PEE 12 500 € (Achat Maison)',
      lawRef: 'Art. R3324-22 C. trav.',
      continuite: {
        status: '100% Exonéré',
        verdictColor: 'sky',
        netGain: '12 500 € nets d\'IR',
        analysis: 'Déblocage anticipé légal dans les 6 mois de l\'acte authentique d\'achat. 0 € d\'IR, 0 € de cotisations sociales, seule la CSG de 9,7% s\'applique.'
      },
      lfi: {
        status: 'Urgence d\'Acter en 2026',
        verdictColor: 'emerald',
        netGain: '12 500 € préservés',
        analysis: 'LFI prévoit de soumettre les abondements d\'épargne salariale aux cotisations sociales ordinaires. Il faut impérativement débloquer ces 12 500 € dès la signature de l\'acte en 2026 avant l\'élection de 2027.'
      },
      rn: {
        status: 'Maintenu & Défiscalisé',
        verdictColor: 'amber',
        netGain: '12 500 € nets d\'IR',
        analysis: 'Le RN soutient le développement de l\'intéressement et de la participation dans les TPE pour récompenser les salariés.'
      },
      droite: {
        status: 'Plafonds Élargis',
        verdictColor: 'indigo',
        netGain: '12 500 € nets d\'IR',
        analysis: 'Relèvement des plafonds d\'abondement défiscalisé pour encourager l\'actionnariat et l\'épargne d\'entreprise.'
      }
    },
    {
      id: 3,
      title: '3. CESU Dirigeante 2 591 € & Crédit Impôt',
      lawRef: 'Art. 244 quater F CGI',
      continuite: {
        status: 'Plein Droit',
        verdictColor: 'sky',
        netGain: '+2 591 € nets + 648 € IS',
        analysis: 'Exonération totale d\'impôt et de charges sociales pour Nelly + Crédit d\'Impôt Famille de 25% déduit de l\'IS de Nell\'Immo.'
      },
      lfi: {
        status: 'Maintenu + Services Gratuits',
        verdictColor: 'emerald',
        netGain: '+2 591 € nets + Économies',
        analysis: 'Le CESU reste un droit d\'entreprise, et LFI y ajoute la gratuité des fournitures scolaires et de la cantine à Pélissanne.'
      },
      rn: {
        status: 'Sanctuarisé (Politique Familiale)',
        verdictColor: 'amber',
        netGain: '+2 591 € nets + 648 € IS',
        analysis: 'Le RN sanctuarise le crédit d\'impôt famille et propose d\'augmenter les plafonds pour soutenir les mères de famille actives.'
      },
      droite: {
        status: 'Pérennisé & Indexé',
        verdictColor: 'indigo',
        netGain: '+2 591 € nets + 648 € IS',
        analysis: 'Maintien du taux de 25% de crédit d\'impôt famille et indexation automatique sur l\'inflation.'
      }
    },
    {
      id: 4,
      title: '4. Travaux Bureau 4 500 € HT & Borne',
      lawRef: 'Art. 39-1 CGI',
      continuite: {
        status: 'TVA 20% Déductible',
        verdictColor: 'sky',
        netGain: '4 500 € HT + 900 € TVA',
        analysis: 'Prise en charge par Nell\'Immo des factures de climatisation, aménagement bureau et borne électrique à domicile (0 € d\'avantage en nature).'
      },
      lfi: {
        status: 'Déductible à l\'IS',
        verdictColor: 'emerald',
        netGain: '4 500 € HT passés en charge',
        analysis: 'Les dépenses professionnelles réelles d\'exploitation restent déductibles à l\'IS. TVA normale à 20% récupérée.'
      },
      rn: {
        status: 'Bonus Rénovation 5,5%',
        verdictColor: 'amber',
        netGain: 'Gain TVA supplémentaire',
        analysis: 'Proposition de TVA à 5,5% sur tous les travaux de rénovation énergétique et climatisation réversible, réduisant le coût de trésorerie.'
      },
      droite: {
        status: 'Suramortissement Pro',
        verdictColor: 'indigo',
        netGain: 'Amortissement accéléré',
        analysis: 'Mesures de suramortissement fiscal pour les équipements professionnels et de télétravail des dirigeants.'
      }
    },
    {
      id: 5,
      title: '5. Audit Budget Pub 40 000 € (SeLoger/LBC)',
      lawRef: 'EBITDA Marge Brute',
      continuite: {
        status: 'Gain de Marge Net',
        verdictColor: 'sky',
        netGain: '+4 800 € HT / an',
        analysis: 'Suppression des outils SaaS en doublon et diffusion premium ciblée sur les mandats exclusifs.'
      },
      lfi: {
        status: 'Vital (Compensation Marché)',
        verdictColor: 'emerald',
        netGain: '+4 800 € HT / an',
        analysis: 'Crucial pour compenser le repli des investisseurs locatifs privés en boostant la rentabilité interne de Nell\'Immo.'
      },
      rn: {
        status: 'Bouclier de Trésorerie',
        verdictColor: 'amber',
        netGain: '+4 800 € HT / an',
        analysis: 'Indispensable pour préserver les marges de l\'agence en cas de tension sur les crédits immobiliers des acquéreurs.'
      },
      droite: {
        status: 'Effet de Levier Maximal',
        verdictColor: 'indigo',
        netGain: '+4 800 € HT / an',
        analysis: 'Décuple les profits dans un marché immobilier stimulé par le retour en force des investisseurs locatifs.'
      }
    },
    {
      id: 6,
      title: '6. Transmission Nue-Propriété Maison (40%)',
      lawRef: 'Art. 669 & 779 CGI',
      continuite: {
        status: '0 € d\'Impôt Garanti',
        verdictColor: 'sky',
        netGain: '0 € de droits à vie',
        analysis: 'Valeur de la nue-propriété à 40% (61 000 € par fille) totalement absorbée par l\'abattement légal de 100 000 € (Art. 779 CGI).'
      },
      lfi: {
        status: '100% Exonéré (Sous le seuil)',
        verdictColor: 'emerald',
        netGain: '0 € de droits à vie',
        analysis: 'L\'abattement de 120 000 € tous les 15 ans protège intégralement la maison de 305 000 € de Nelly. La surtaxe LFI ne vise que les patrimoines > 12 M€.'
      },
      rn: {
        status: 'Renouvellement tous les 10 ans',
        verdictColor: 'amber',
        netGain: 'Exonération tous les 10 ans',
        analysis: 'Atout exceptionnel : le RN propose de réinitialiser l\'abattement de 100 000 € tous les 10 ans (au lieu de 15 ans) et exonère les dons des grands-parents jusqu\'à 50 000 €.'
      },
      droite: {
        status: 'Abattement à 150 000 €',
        verdictColor: 'indigo',
        netGain: 'Abattement porté à 150k€',
        analysis: 'Rehaussement de l\'abattement légal à 150 000 € par enfant tous les 10 ans.'
      }
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5 animate-in fade-in duration-200">
      
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700">
              <Scale className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              Analyse Croisée Politique & Patrimoniale
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1">
            Impact Comparé des 4 Blocs Politiques sur les 6 Leviers de la Maison (305k€)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Comment chaque mesure réagit selon que le pouvoir soit en <strong className="text-slate-700">Continuité</strong>, à <strong className="text-slate-700">Gauche (LFI)</strong>, au <strong className="text-slate-700">RN</strong> ou à <strong className="text-slate-700">Droite</strong>.
          </p>
        </div>

        {/* Sélecteur de parti */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => setSelectedParty('ALL')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedParty === 'ALL' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Vue Comparée Complète
          </button>
          <button
            onClick={() => setSelectedParty('CONTINUITE')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedParty === 'CONTINUITE' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Continuité
          </button>
          <button
            onClick={() => setSelectedParty('LFI')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedParty === 'LFI' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            LFI / NFP
          </button>
          <button
            onClick={() => setSelectedParty('RN')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedParty === 'RN' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            RN
          </button>
          <button
            onClick={() => setSelectedParty('DROITE')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedParty === 'DROITE' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Droite
          </button>
        </div>
      </div>

      {/* Grille comparative des 6 leviers */}
      <div className="space-y-4">
        {leversComparison.map((lever) => (
          <div key={lever.id} className="bg-slate-50/70 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-slate-900">{lever.title}</span>
                <LawBadge article={lever.lawRef} />
              </div>
              <span className="text-[11px] font-mono font-semibold text-slate-500">
                Maison 305 000 € • Pélissanne
              </span>
            </div>

            {/* Vue complète des 4 partis */}
            {selectedParty === 'ALL' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                {/* Continuité */}
                <div className="bg-white p-3 rounded-xl border border-sky-200 shadow-2xs space-y-1.5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sky-900 text-[10px] uppercase">Continuité</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-sky-100 text-sky-800">
                        {lever.continuite.status}
                      </span>
                    </div>
                    <div className="font-black text-sky-700 text-xs mt-1">{lever.continuite.netGain}</div>
                    <p className="text-[11px] text-slate-600 leading-relaxed mt-1">
                      {lever.continuite.analysis}
                    </p>
                  </div>
                </div>

                {/* LFI */}
                <div className="bg-white p-3 rounded-xl border border-emerald-300 shadow-2xs space-y-1.5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-950 text-[10px] uppercase">LFI / NFP</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">
                        {lever.lfi.status}
                      </span>
                    </div>
                    <div className="font-black text-emerald-700 text-xs mt-1">{lever.lfi.netGain}</div>
                    <p className="text-[11px] text-emerald-950 leading-relaxed mt-1">
                      {lever.lfi.analysis}
                    </p>
                  </div>
                </div>

                {/* RN */}
                <div className="bg-white p-3 rounded-xl border border-amber-300 shadow-2xs space-y-1.5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-950 text-[10px] uppercase">Rassemblement National</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800">
                        {lever.rn.status}
                      </span>
                    </div>
                    <div className="font-black text-amber-800 text-xs mt-1">{lever.rn.netGain}</div>
                    <p className="text-[11px] text-slate-700 leading-relaxed mt-1">
                      {lever.rn.analysis}
                    </p>
                  </div>
                </div>

                {/* Droite */}
                <div className="bg-white p-3 rounded-xl border border-indigo-200 shadow-2xs space-y-1.5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-indigo-900 text-[10px] uppercase">Droite Républicaine</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-800">
                        {lever.droite.status}
                      </span>
                    </div>
                    <div className="font-black text-indigo-700 text-xs mt-1">{lever.droite.netGain}</div>
                    <p className="text-[11px] text-slate-600 leading-relaxed mt-1">
                      {lever.droite.analysis}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Vue ciblée par parti unique */}
            {selectedParty !== 'ALL' && (
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                {selectedParty === 'CONTINUITE' && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                        Continuité : {lever.continuite.status}
                      </span>
                      <span className="font-black text-sky-700">{lever.continuite.netGain}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{lever.continuite.analysis}</p>
                  </div>
                )}
                {selectedParty === 'LFI' && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        LFI / NFP : {lever.lfi.status}
                      </span>
                      <span className="font-black text-emerald-700">{lever.lfi.netGain}</span>
                    </div>
                    <p className="text-emerald-950 leading-relaxed">{lever.lfi.analysis}</p>
                  </div>
                )}
                {selectedParty === 'RN' && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                        RN : {lever.rn.status}
                      </span>
                      <span className="font-black text-amber-800">{lever.rn.netGain}</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{lever.rn.analysis}</p>
                  </div>
                )}
                {selectedParty === 'DROITE' && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                        Droite : {lever.droite.status}
                      </span>
                      <span className="font-black text-indigo-700">{lever.droite.netGain}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{lever.droite.analysis}</p>
                  </div>
                )}
              </div>
            )}

          </div>
        ))}
      </div>

      {/* Synthèse stratégique */}
      <div className="p-3.5 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-950 flex items-start gap-2">
        <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
        <div>
          <strong>Conclusion politique pour Nelly Fernandez :</strong> Les 6 leviers de la maison de 305 000 € constituent un 
          <strong className="text-indigo-900"> bouclier tout-terrain universel</strong>. 
          Même si LFI surtaxe les dividendes à l'IR, le foncier réel neutralise l'impôt ; et si le RN allège les successions tous les 10 ans, le démembrement notarié avant 51 ans garantit déjà 0 € de droits pour les deux filles !
        </div>
      </div>

    </div>
  );
};
