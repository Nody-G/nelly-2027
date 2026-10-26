import React from 'react';
import { Calculator, Home, Compass, Vote } from 'lucide-react';
import { TabId, TabDefinition } from '../../types';

interface NavigationProps {
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
}

export const navigationTabs: TabDefinition[] = [
  {
    id: 'simulator',
    label: '1. Simulateur, Prêt 25 ans & Budget',
    icon: 'Calculator',
    description: 'Calculateur temps réel des 4 blocs politiques, mensualité du prêt de 260k€ sur 25 ans (3,7% - 4,0%) et 8 postes du budget à Pélissanne',
  },
  {
    id: 'optimization',
    label: '2. Maison 305k€, Bail (400€ → 650€) & Leviers',
    icon: 'Home',
    badge: '0 € IR',
    description: 'Calculateur du bail propriétaire au Foncier Réel (prêt 260k€ sur 25 ans), les 6 leviers SASU et la checklist URSSAF',
  },
  {
    id: 'daughters',
    label: '3. Filles (5 & 11 ans), Études 2033 & Nell\'Immo',
    icon: 'Compass',
    description: 'Trajectoire de vie 2027-2039 (école, études Aix 2033, retraite 60 vs 64 ans) et simulateur de chiffre d\'affaires Nell\'Immo',
  },
  {
    id: 'voting',
    label: '4. Pour qui voter en 2027 ?',
    icon: 'Vote',
    badge: 'Boussole & 18 Mesures',
    description: 'Boussole électorale interactive (6 curseurs), impact des 18 mesures sur ELLE, SES 2 FILLES et SA SOCIÉTÉ Nell\'Immo, et verdict 2027',
  },
];

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-4 h-4" />;
      case 'Home':
        return <Home className="w-4 h-4" />;
      case 'Compass':
        return <Compass className="w-4 h-4" />;
      case 'Vote':
        return <Vote className="w-4 h-4" />;
      default:
        return <Calculator className="w-4 h-4" />;
    }
  };

  return (
    <nav className="no-print bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-8 py-2 flex items-center gap-2 overflow-x-auto custom-scroll">
        {navigationTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
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
                      : 'bg-amber-100 text-amber-900'
                  }`}
                >
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
