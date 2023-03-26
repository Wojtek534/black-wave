import { FontSize } from './typography';

/**
 * Generic size, for component interface
 */
const Size = {
  Small: `${FontSize.Small} px-1 py-0`,
  Base: `${FontSize.Base} px-2 py-1`,
  Large: `${FontSize.Large} px-3 py-2`,
  VeryLarge: `${FontSize.VeryLarge} px-4 py-3`,
} as const;

type Size = (typeof Size)[keyof typeof Size];
/**
 * Specific size for component use
 */
export const ButtonSize = Size;

export type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];

/**
 * Specific size for component use
 */
export const ButtonIconSize = {
  Small: `${FontSize.Small} p-1`,
  Base: `${FontSize.Base} p-2`,
  Large: `${FontSize.Large} p-3`,
  VeryLarge: `${FontSize.VeryLarge} p-4`,
} as const;

export type ButtonIconSize = (typeof ButtonIconSize)[keyof typeof ButtonIconSize];

/**
 * Specific size for component use
 */
export const NavigationSize = Size;

export type NavigationSize = (typeof NavigationSize)[keyof typeof NavigationSize];

export const ListItemSize = Size;

export type ListItemSize = (typeof ListItemSize)[keyof typeof ListItemSize];

export const IconSize = {
  Small: 'w-2 h-2',
  Base: 'w-4 h-4',
  Large: 'w-6 h-6',
  VeryLarge: 'w-8 h-8',
} as const;

export type IconSize = (typeof IconSize)[keyof typeof IconSize];

/**
 * Compoents height value
 */
export type Height =
  | 'h-4'
  | 'h-6'
  | 'h-12'
  | 'h-16'
  | 'h-18'
  | 'h-24'
  | 'h-36'
  | 'h-24'
  | 'h-48'
  | 'h-48'
  | 'h-96'
  | 'h-96'
  | 'h-3/6'
  | 'h-3/4'
  | 'h-full';

/**
 * Components width value
 */
export type Width =
  | 'w-4'
  | 'w-6'
  | 'w-12'
  | 'w-16'
  | 'w-18'
  | 'w-24'
  | 'w-36'
  | 'w-24'
  | 'w-48'
  | 'w-48'
  | 'w-96'
  | 'w-96'
  | 'w-3/6'
  | 'w-3/4'
  | 'w-full';
