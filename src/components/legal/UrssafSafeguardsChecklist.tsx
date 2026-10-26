import React, { useState } from 'react';
import { ShieldCheck, CheckSquare, Square, FileCheck } from 'lucide-react';
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
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const items: ChecklistItem[] = [
    {
      id: 'item1',
      category: "Bail Professionnel Nell'Immo (400 €/m → 650 € + 100 €)",
      lawArticle: 'Art. 28 & 31 CGI',
      label: 'Nouveau bail écrit avec plan métré certifié des 35 m² pro dans la maison à 305 000 €',
      detail: "À l'entrée dans la nouvelle maison achetée 305 000 € (+23 500 € notaire), remplacer la sous-location actuelle de 400 €/m par un bail propriétaire de 35 m² (bureau réception + archivage Loi Hoguet 10 ans + stockage panneaux).",
      documentRequired: 'Bail professionnel enregistré + Plan côté annexé + Tableau amortissement prêt 260k€/25 ans',
    },
    {
      id: 'item2',
      category: "Bail Professionnel Nell'Immo",
      lawArticle: 'Loi Hoguet',
      label: 'Conformité du loyer (650 € HC) aux valeurs locatives réelles de Pélissanne',
      detail: "Le loyer (650 € HC pour 35 m² avec parking et stockage, soit ~18,50 €/m²) respecte strictement le marché local de Pélissanne (18-22 €/m²), écartant tout risque d'acte anormal de gestion.",
      documentRequired: 'Attestation de valeur locative de marché (base locale Pélissanne)',
    },
    {
      id: 'item3',
      category: 'CESU Préfinancé (2 591 €) & ANCV (540 €)',
      lawArticle: 'Art. L7233-4 C. trav.',
      label: 'Décision unilatérale formalisant le dispositif CESU & ANCV de la Présidente',
      detail: "Acter par décision unilatérale de la présidence de Nell'Immo SASU l'attribution des 2 591 € de CESU (crédit d'IS de 25 % = 648 €) et 540 € de Chèques-Vacances ANCV.",
      documentRequired: 'Décision unilatérale de la Présidente Nelly Fernandez + Factures émetteur',
    },
    {
      id: 'item4',
      category: 'Garde Alternée & Case T Parent Isolé',
      lawArticle: 'Art. 194-II & 195 CGI',
      label: "Maintien de la Case T sur l'avis d'imposition (1,50 part QF ; 1,75 sous RN)",
      detail: "Pour bénéficier de la majoration Parent Isolé avec ses 2 filles en garde alternée 50/50, Nelly doit vivre seule au 1er janvier de l'année d'imposition.",
      documentRequired: "Avis d'imposition avec Case T cochée + Convention parentale 50/50",
    },
    {
      id: 'item5',
      category: 'Démembrement Nue-Propriété Maison 305k€',
      lawArticle: 'Art. 669 CGI',
      label: 'Acte notarié de donation avant le 51e anniversaire de Nelly Fernandez',
      detail: 'Pour figer la valeur de la nue-propriété à 40% (122 000 € au total soit 61 000 € par fille < 100 000 € d’abattement), la donation doit être passée chez le notaire avant ses 51 ans.',
      documentRequired: "Acte authentique notarié de donation entre vifs avec réserve d'usufruit",
    },
    {
      id: 'item6',
      category: 'Déblocage PEE Achat Résidence Principale',
      lawArticle: 'Art. R3324-22 C. trav.',
      label: "Demande de déblocage anticipé dans les 6 mois suivant l'acte authentique (305 000 €)",
      detail: "Permet d'extraire les sommes abondées à 300 % par Nell'Immo à 0 % d'IR et 0 % de charges sociales pour rembourser une grande partie des 23 500 € de frais de notaire.",
      documentRequired: 'Attestation notariée de propriété + Plan de financement mentionnant l’apport PEE',
    },
  ];

  return (
    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
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
          <span>Dossier Expert-Comptable & Notaire</span>
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
                {isDone ? (
                  <CheckSquare className="w-4 h-4 fill-emerald-600 text-white" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400" />
                )}
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
