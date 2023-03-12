import { IconList, IconSize, StrokeColor, Space } from '../types';

export interface IconProps {
  /**
   * Type of icon, value from static list
   */
  icon: IconList;
  /**
   * Icon sizee described as height and weght class
   */
  size?: IconSize;
  /**
   * Icon's color
   */
  stroke?: StrokeColor;
  /**
   *  Margin around button
   */
  space?: Space;
  /**
   * Extra styling for icon like tranform
   */
  extendedClass?: '';
}
