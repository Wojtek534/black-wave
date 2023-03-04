import {
  Appearance,
  NavigationSize,
  FontSize,
  FontWeight,
  Space,
  Hover,
  Radius,
} from "../types"

export interface NavigateProps {
  /**
   * Link styling appearance
   */
  appearance: Appearance
  /**
   * Button styling when param 'isActive' is true
   */
  active?: Appearance
  /**
   * Navigation destination
   */
  href?: string
  /**
   * Link size
   */
  navigationSize?: NavigationSize
  /**
   * Set font size of link
   */
  fontSize?: FontSize
  /**
   * Clickable link name font weight
   */
  fontWeight?: FontWeight
  /**
   *  Margin around link
   */
  space?: Space
  /**
   * On hover effect for link
   */
  hover?: Hover
  /**
   * Set border radius
   */
  radius?: Radius
  /**
   * Is link active amont other html elements?
   */
  isActive?: boolean
  /**
   * Clickable content displayed inside link
   */
  children: React.ReactNode
}
