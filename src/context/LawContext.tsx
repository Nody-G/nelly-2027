import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LawReference } from '../types/fiscal';
import { legalReferencesDatabase, findLegalReference } from '../data/legalArticles';
import { LawModal } from '../components/common/LawModal';

interface LawContextType {
  selectedLaw: LawReference | null;
  openLaw: (lawOrQuery: LawReference | string) => void;
  closeLaw: () => void;
}

const LawContext = createContext<LawContextType | undefined>(undefined);

export const LawProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedLaw, setSelectedLaw] = useState<LawReference | null>(null);

  const openLaw = (lawOrQuery: LawReference | string) => {
    if (typeof lawOrQuery === 'object' && lawOrQuery !== null) {
      setSelectedLaw(lawOrQuery);
      return;
    }

    const found = findLegalReference(lawOrQuery);
    if (found) {
      setSelectedLaw(found);
    } else {
      // Fallback si non trouvé
      setSelectedLaw({
        code: 'Référence Législative',
        article: lawOrQuery,
        title: `Texte officiel : ${lawOrQuery}`,
        summary: `Dispositif légal ou réglementaire applicable à la gestion de l'agence Nell'Immo et du patrimoine de Nelly Fernandez.`,
        fullQuote: `Texte officiel issu des publications du Journal Officiel de la République Française et des codes consolidés sur Légifrance (CGI, Code du travail, Code de commerce, BOSS).`,
        officialSourceUrl: 'https://www.legifrance.gouv.fr',
        practicalApplication: `Ce texte encadre les droits et obligations de Nelly Fernandez à Pélissanne dans la conduite de sa stratégie financière et familiale.`,
        urssafSafeguard: `Vérifier la conformité de l'acte et conserver l'ensemble des pièces justificatives probantes en cas de contrôle de l'administration fiscale ou de l'URSSAF.`
      });
    }
  };

  const closeLaw = () => {
    setSelectedLaw(null);
  };

  return (
    <LawContext.Provider value={{ selectedLaw, openLaw, closeLaw }}>
      {children}
      <LawModal law={selectedLaw} onClose={closeLaw} />
    </LawContext.Provider>
  );
};

export const useLawModal = (): LawContextType => {
  const context = useContext(LawContext);
  if (!context) {
    throw new Error('useLawModal must be used within a LawProvider');
  }
  return context;
};
