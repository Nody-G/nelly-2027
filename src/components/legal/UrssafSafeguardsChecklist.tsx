import React, { useState } from 'react';
import { ShieldCheck, CheckSquare, Square, AlertCircle, FileCheck } from 'lucide-react';
import { LawBadge } from '../common/LawBadge';

interface ChecklistItem {
  id: string;
  category: string;
  lawArticle: string;
  label: string;
  detail: string;
  documentRequired: string;
}

export const UrssafSafeguardsChecklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    item1: true,
    item2: true,
  });

  const toggle = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const items: ChecklistItem[] = [
    {
      id: 'item1',
      category: 'Bail Professionnel Nell\'Immo (600 € / mois)',
      lawArticle: 'Art. 28 & 31 CGI',
      label: 'Bail écrit séparé avec plan métré certifié des locaux pro (35 m²)',
      detail: 'Le bail doit spécifier la surface du bureau d\'accueil, la pièce fermée d\'archivage obligatoire Loi Hoguet, l\'espace de garage pour les panneaux « À Vendre » et le stationnement du véhicule de fonction.',
      documentRequired: 'Bail professionnel enregistré + Plan côté annexé + Photos des locaux'
    },
    {
      id: 'item2',
      category: 'Bail Professionnel Nell\'Immo',
      lawArticle: 'Loi Hoguet',
      label: 'Conformité du loyer aux valeurs locatives réelles de Pélissanne',
      detail: 'Le loyer (600 € HC soit ~17 €/m² charges et parking inclus) est parfaitement conforme au marché local de Pélissanne (18-22 €/m²), ce qui écarte tout risque d\'« acte anormal de gestion ».',
      documentRequired: 'Attestation de valeur locative de marché (2 confrères ou base DVF)'
    },
    {
      id: 'item3',
      category: 'CESU Préfinancé (2 591 € en 2026)',
      lawArticle: 'Art. L7233-4 C. trav.',
      label: 'Décision unilatérale formalisant le dispositif CESU de la Présidente',
      detail: 'Le code du travail exige que le bénéfice du CESU soit acté dans une décision unilatérale de la présidence de Nell\'Immo SASU (Art. L. 7233-4 C. trav. et Art. 244 quater F CGI).',
      documentRequired: 'Décision unilatérale de la Présidente Nelly Fernandez + Factures CESU émetteur'
    },
    {
      id: 'item4',
      category: 'Garde Alternée & Case T Parent Isolé',
      lawArticle: 'Art. 194-II & 195 CGI',
      label: 'Attestation sur l\'honneur de vie isolée au 1er janvier',
      detail: 'Pour cocher la Case T (1,75 parts fiscales), Nelly doit vivre seule sans concubin ni PACS sous le même toit au 1er janvier de l\'année d\'imposition.',
      documentRequired: 'Avis d\'imposition avec Case T cochée + Jugement JAF ou convention parentale'
    },
    {
      id: 'item5',
      category: 'Démembrement Nue-Propriété Maison 305k€',
      lawArticle: 'Art. 669 CGI',
      label: 'Acte notarié de donation avant le 51e anniversaire de Nelly Fernandez',
      detail: 'Pour figer la valeur de la nue-propriété à 40% (122 000 € au total soit 61 000 € par fille), la donation doit impérativement être régularisée par acte authentique chez le notaire avant ses 51 ans.',
      documentRequired: 'Acte authentique notarié de donation entre vifs avec réserve d\'usufruit'
    },
    {
      id: 'item6',
      category: 'Véhicule de Fonction en Leasing',
      lawArticle: 'Avantages en Nature BOSS',
      label: 'Contrat de leasing et attestation de restitution de la borne en cas de vente',
      detail: 'Si le leasing est électrique, la borne installée à domicile reste inscrite à l\'actif de Nell\'Immo pour justifier l\'absence totale d\'avantage en nature taxable.',
      documentRequired: 'Facture d\'installation de la borne au nom de Nell\'Immo + Certificat d\'immatriculation pro'
    }
  ];

  return (
    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
              Checklist Anti-Redressement Fiscale & Sociale (URSSAF / DGFiP)
            </h3>
          </div>
          <p className="text-xs text-slate-600 mt-0.5">
            Les 6 garde-fous obligatoires pour sécuriser l'audit comptable de Nell'Immo SASU à 100%.
          </p>
        </div>
        <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg flex items-center gap-1">
          <FileCheck className="w-3.5 h-3.5 text-emerald-700" />
          <span>Dossier Expert-Comptable</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        {items.map((item) => {
          const isDone = checkedItems[item.id];
          return (
            <div 
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                isDone 
                  ? 'bg-emerald-50/70 border-emerald-300 text-slate-800' 
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <div className="mt-0.5 shrink-0 text-emerald-600">
                {isDone ? <CheckSquare className="w-4 h-4 fill-emerald-600 text-white" /> : <Square className="w-4 h-4 text-slate-400" />}
              </div>

              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[10px] font-bold text-indigo-700 uppercase truncate">{item.category}</span>
                  <LawBadge article={item.lawArticle} />
                </div>
                <div className="font-extrabold text-slate-900 text-xs">{item.label}</div>
                <p className="text-[11px] text-slate-600 leading-snug">{item.detail}</p>
                <div className="text-[10px] font-medium text-emerald-900 bg-white/80 p-1.5 rounded border border-emerald-200 mt-1">
                  <strong>Justificatif exigé :</strong> {item.documentRequired}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
