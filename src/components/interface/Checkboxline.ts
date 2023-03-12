export interface CheckboxlineProps {
  /**
   * Checkbox input
   */
  checkbox: React.ReactNode;
  /**
   * Widget's content such as input or expression
   */
  isVertical?: boolean;
  /**
   * Display widget as vertical? value 'true' will place label above children otherwise label will be placed left from content
   */
  children: React.ReactNode;
}
