import {
  Appearance,
  FontWeight,
  Hover,
  Radius,
  ButtonIconSize,
  Space,
  ButtonSize,
} from "../types"

export interface DropdownProps extends DropdownCommonProps {
  /**
   * Button size
   */
  buttonSize?: ButtonSize
}

export interface DropdownIconProps extends DropdownCommonProps {
  /**
   * Button icon size
   */
  buttonIconSize?: ButtonIconSize
}

export interface DropdownCommonProps {
  /**
   * Toggle button color styling
   */
  appearance: Appearance
  /**
   * Button styling when param 'isActive' is true
   */
  active?: Appearance
  /**
   * Label displayed on button with toggle
   */
  label?: React.ReactNode
  /**
   * Clickable button name font weight
   */
  fontWeight?: FontWeight
  /**
   * Set border radius
   */
  radius?: Radius
  /**
   * Button size for normal
   */
  size?: ButtonSize | ButtonIconSize
  /**
   * On hover effect for button
   */
  hover?: Hover
  /**
   * Display button as icon
   */
  isIcon?: boolean
  /**
   *  Margin around button
   */
  space?: Space
  /**
   * Additional text displayed on hover
   */
  title?: string
  /**
   * Display arrow up/down for open/close widget
   */
  isArrow?: boolean
  /**
   * Is button active amont other html elements?
   */
  isActive?: boolean
  /**
   * Content displayed on toggle
   */
  children?: React.ReactNode
}
