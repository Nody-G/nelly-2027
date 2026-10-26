export type TabId =
  | 'simulator'
  | 'optimization'
  | 'daughters'
  | 'voting';

export type PoliticalBlocId = 'continuite' | 'nfp_lfi' | 'rn' | 'droite';

export type CompanyForm = 'SASU' | 'SARL';

export interface TabDefinition {
  id: TabId;
  label: string;
  icon: string;
  badge?: string;
  description: string;
}
