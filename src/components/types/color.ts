/**
 * Background color tailwind class set
 */
export const BackgroundColor = {
  Inherit: 'bg-inherit',
  Header: 'bg-header dark:bg-dark-header',
  Primary: 'bg-primary dark:dark-bg-primary',
  Black: 'bg-black dark:bg-white',
  White: 'bg-white dark:bg-black',
  LightGray: 'bg-gray-300 dark:bg-gray-700',
  Gray: 'bg-gray-600 dark:bg-gray-400',
  DarkGray: 'bg-gray-900 dark:bg-gray-100',
  Green: 'bg-green-600',
  Red: 'bg-red-600',
  Blue: 'bg-blue-600',
  Yellow: 'bg-yellow-600',
  Transparent: 'bg-transparent',
} as const;
// We need as const in line A so that the properties of Color don’t have the more general type string.

export type BackgroundColor = (typeof BackgroundColor)[keyof typeof BackgroundColor];

/**
 * Border color tailwind class set
 */
export const BorderColor = {
  Header: 'border-text-header dark:dark-text-header',
  Primary: 'border-primary dark:dark-border-primary',
  Black: 'border-black dark:border-white',
  White: 'border-white dark:border-black',
  LightGray: 'border-gray-300 dark:border-gray-700',
  Gray: 'border-gray-600 dark:border-gray-400',
  DarkGray: 'border-gray-900 dark:border-gray-100',
  Green: 'border-green-600',
  Red: 'border-red-600',
  Blue: 'border-blue-600',
  Yellow: 'border-yellow-600',
  Transparent: 'border-transparent',
} as const;

export type BorderColor = (typeof BorderColor)[keyof typeof BorderColor];

export const StrokeColor = {
  Inherit: 'stroke-inherit',
  Current: 'stroke-current',
  Primary: 'stroke-primay',
  Gray: 'strone-gray-600',
  Red: 'stroke-red-600',
  Green: 'stroke-green-600',
  Yellow: 'stroke-yellow-600',
} as const;

export type StrokeColor = (typeof StrokeColor)[keyof typeof StrokeColor];
