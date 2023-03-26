import { Appearance } from '../types';

export interface TabProps {
  /**
   * Tab items
   */
  tabs: Array<TabSingle>;
  /**
   * Button styling type
   */
  appearance: Appearance;
  /**
   * Button styling when param 'isActive' is true
   */
  active?: Appearance;
}

export interface TabSingle {
  name: string;
  content: React.ReactNode;
}
