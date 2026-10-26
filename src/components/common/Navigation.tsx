import React from 'react';
import {
  Calculator,
  Home,
  Users,
  Scale,
  FileDown,
} from 'lucide-react';
import { TabId, TabDefinition } from '../../types';

interface NavigationProps {
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
}

export const navigationTabs: TabDefinition[] = [
  {
    id: 'simulator',
    label: '1. Simulateur & Prêt 260k€',
    icon: 'Calculator',
    description: 'Calculateur temps réel (40k€ + 20k€ div, prêt 260k€ à 3,7-4%, loyer 400€ → 650€) et Coût de la vie',
  },
  {
    id: 'daughters',
    label: '2. Vie & Filles (2027-2039)',
    icon: 'Users',
    badge: 'Priorité',
    description: 'Prévision de vie à 12 ans pour Nelly et ses 2 filles (5 & 11 ans), études (2033) et retraite',
  },
  {
    id: 'optimization',
    label: '3. Maison 305k€ & Leviers SASU',
    icon: 'Home',
    badge: 'Loyer 400→650€',
    description: 'Passage du loyer 400€ (locataire) au bail réel propriétaire, déduction intérêts prêt 260k€ et garde-fous URSSAF',
  },
  {
    id: 'duel',
    label: '4. Duel LFI vs RN & Agence',
    icon: 'Scale',
    description: 'Croisements profonds, impact sur le chiffre d\'affaires de Nell\'Immo et preuves dans les mairies',
  },
  {
    id: 'export',
    label: '5. Synthèse & PDF',
    icon: 'FileDown',
    description: 'Feuille exécutive prête à imprimer pour l\'expert-comptable et le notaire',
  },
];

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-4 h-4" />;
      case 'Home':
        return <Home className="w-4 h-4" />;
      case 'Users':
        return <Users className="w-4 h-4" />;
      case 'Scale':
        return <Scale className="w-4 h-4" />;
      case 'FileDown':
        return <FileDown className="w-4 h-4" />;
      default:
        return <Calculator className="w-4 h-4" />;
    }
  };

  return (
    <nav className="no-print bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-8 py-2 flex items-center justify-between gap-2 overflow-x-auto custom-scroll">
        <div className="flex items-center gap-1.5">
          {navigationTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
                title={tab.description}
              >
                {getIcon(tab.icon)}
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive
                        ? 'bg-indigo-800 text-indigo-100'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
