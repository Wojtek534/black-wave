import { Radius } from '../types';

export interface CheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
  /**
   * Input's html id property
   */
  id?: string;
  /**
   * Input's html name property
   */
  name?: string;
  /**
   * Set border radius
   */
  radius?: Radius;
}
