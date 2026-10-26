export type TabId =
  | 'simulator'
  | 'daughters'
  | 'optimization'
  | 'duel'
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
