import {
  ButtonSize,
  ButtonIconSize,
  Appearance,
  FontWeight,
  Hover,
  Radius,
  Space,
} from "../types"

export interface ButtonProps extends ButtonCommonProps {
  /**
   * Button size
   */
  buttonSize?: ButtonSize
}

export interface ButtonIconProps extends ButtonCommonProps {
  /**
   * Button icon size
   */
  buttonIconSize?: ButtonIconSize
}

export interface ButtonCommonProps {
  /**
   * Button styling appearance
   */
  appearance: Appearance
  /**
   * Button styling when param 'isActive' is true
   */
  active?: Appearance
  /**
   * Clickable button name font weight
   */
  fontWeight?: FontWeight
  /**
   * On hover effect for button
   */
  hover?: Hover
  /**
   * Set border radius
   */
  radius?: Radius
  /**
   *  Margin around button
   */
  space?: Space
  /**
   * Display button as icon
   */
  isIcon?: boolean
  /**
   * Action fired on button click
   */
  onClick?: () => void
  /**
   * Additional text displayed on hover
   */
  title?: string
  /**
   * Set button property for disabled
   */
  isDisabled?: boolean
  /**
   * Set button property for submit
   */
  isSubmit?: boolean
  /**
   * Is button active amont other html elements?
   */
  isActive?: boolean
  /**
   * Clickable content displayed inside button
   */
  children?: React.ReactNode
}
