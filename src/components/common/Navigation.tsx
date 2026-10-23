import React from 'react';
import { 
  Calculator, 
  Home, 
  Users, 
  Scale, 
  Gavel, 
  CalendarClock, 
  FileDown 
} from 'lucide-react';
import { TabId, TabDefinition } from '../../types';

interface NavigationProps {
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
}

export const navigationTabs: TabDefinition[] = [
  {
    id: 'simulator',
    label: '1. Simulateur & Scénarios',
    icon: 'Calculator',
    description: 'Calculateur interactif des 4 scénarios politiques avec curseurs temps réel'
  },
  {
    id: 'optimization',
    label: '2. Optimisation Fiscale 360°',
    icon: 'Home',
    badge: 'Tous Domaines',
    description: 'Plan d\'optimisation 360° : Maison 305k€, Statut SASU, CESU, Holding et pub 40k€'
  },
  {
    id: 'daughters',
    label: '3. Filles & Bien Commun',
    icon: 'Users',
    badge: 'Priorité #1',
    description: 'Escalade 400€, piano 400€, cantine, santé, garde alternée et cadre de vie à Pélissanne'
  },
  {
    id: 'duel',
    label: '4. Duel LFI vs RN : Agence & Faits',
    icon: 'Scale',
    badge: 'Duel 2027',
    description: 'Comparaison mesure par mesure, impact agence Nell\'Immo et villes réelles'
  },
  {
    id: 'legal',
    label: '5. Lois & Garde-Fous URSSAF',
    icon: 'Gavel',
    badge: '100% SOURCÉ',
    description: 'Articles du CGI, Code du travail et règles anti-redressement fiscal'
  },
  {
    id: 'timeline',
    label: '6. Chrono 2026-2039 & Retraite',
    icon: 'CalendarClock',
    description: 'Calendrier constitutionnel, étapes clés et retraite 60 vs 64 ans'
  },
  {
    id: 'export',
    label: '7. Dossier Synthèse & Matrice',
    icon: 'FileDown',
    badge: 'Export PDF',
    description: 'Rapport récapitulatif complet prêt à imprimer pour Nelly Fernandez et son expert-comptable'
  }
];

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator': return <Calculator className="w-4 h-4" />;
      case 'Home': return <Home className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'Scale': return <Scale className="w-4 h-4" />;
      case 'Gavel': return <Gavel className="w-4 h-4" />;
      case 'CalendarClock': return <CalendarClock className="w-4 h-4" />;
      case 'FileDown': return <FileDown className="w-4 h-4" />;
      default: return <Calculator className="w-4 h-4" />;
    }
  };

  return (
    <nav className="no-print bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 py-2 flex items-center gap-1.5 overflow-x-auto custom-scroll">
        {navigationTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-all shrink-0 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title={tab.description}
            >
              {getIcon(tab.icon)}
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold uppercase tracking-wider ${
                  isActive 
                    ? 'bg-indigo-800 text-indigo-100' 
                    : 'bg-indigo-50 text-indigo-600 border border-indigo-200'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
