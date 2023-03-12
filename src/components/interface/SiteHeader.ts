import { Height } from '../types';

export interface SiteHeaderProps {
  /**
   * Application name and icon
   */
  name: React.ReactNode;
  /**
   * Header height
   */
  height?: Height;
  /**
   * Content displayed on right side of the header
   */
  rightContent?: React.ReactNode;
  /**
   * Header's navigation items
   */
  children?: React.ReactNode;
}
