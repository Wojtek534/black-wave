export interface InputTextProps {
  /**
   * Input's value state
   */
  value: string;
  /**
   * Action run after input change
   */
  onChange: (value: string) => void;
  /**
   * Input's html id property
   */
  id?: string;
  /**
   * Input's html name property
   */
  name?: string;
}
