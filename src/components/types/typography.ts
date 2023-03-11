/**
 * Font size
 */
export const FontSize = {
  VerySmall: 'text-xs',
  Small: 'text-sm',
  Base: 'text-base',
  Large: 'text-lg',
  VeryLarge: 'text-xl',
} as const;

export type FontSize = (typeof FontSize)[keyof typeof FontSize];

/**
 * Font weight
 */
export const FontWeight = {
  Normal: 'font-normal',
  SemiBold: 'font-semibold',
  Bold: 'font-bold',
} as const;

export type FontWeight = (typeof FontWeight)[keyof typeof FontWeight];

/**
 * Text color tailwind class set
 */
export const TextColor = {
  Header: 'text-primary dark:text-dark-primary',
  Primary: 'text-primary dark:dark-text-primary',
  Black: 'text-black dark:text-white',
  White: 'text-white dark:text-black',
  LightGray: 'text-gray-300 dark:text-gray-700',
  Gray: 'text-gray-600 dark:text-gray-400',
  DarkGray: 'text-gray-900 dark:text-gray-100',
  Green: 'text-green-600',
  Red: 'text-red-600',
  Blue: 'text-blue-600',
  Yellow: 'text-yellow-600',
} as const;

export type TextColor = (typeof TextColor)[keyof typeof TextColor];
