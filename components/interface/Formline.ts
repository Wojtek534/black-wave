export interface FormlineProps {
  /**
   * Short text describing children content such as input or expression
   */
  label?: string;
  /**
   * Set labels font weight
   */
  labelWeight?: 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold';
  /**
   * Widget's content such as input or expression
   */
  isVertical?: boolean;
  /**
   * Display widget as vertical? value 'true' will place label above children otherwise label will be placed left from content
   */
  children: React.ReactNode;
}
