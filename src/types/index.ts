export type TabId = 
  | 'simulator'
  | 'optimization'
  | 'daughters'
  | 'duel'
  | 'legal'
  | 'timeline'
  | 'export';

export type CompanyForm = 'SASU' | 'SARL';

export type PoliticalBlocId = 'continuite' | 'nfp_lfi' | 'rn' | 'droite';

export interface TabDefinition {
  id: TabId;
  label: string;
  icon: string;
  badge?: string;
  description: string;
}
