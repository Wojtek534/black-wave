export interface InputNumberProps {
  /**
   * Input's value state
   */
  value: number
  /**
   * Action run after input change
   */
  onChange: (value: number) => void
  /**
   * Input's html id property
   */
  id?: string
  /**
   * Input's html name property
   */
  name?: string
  /**
   * Minimum value that is allowed to type in
   */
  min?: number
  /**
   * Maximum value that is allowed to type in
   */
  max?: number
}
