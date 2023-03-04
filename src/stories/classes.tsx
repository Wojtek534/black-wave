/**
 * Default :focus effect
 */
export const defaultFocus = `focus:ring-1 focus:outline-2 focus:outline-offset-2 focus:ring-focus-color dark:focus:ring-dark-focus-color`

/**
 * Default :focus-visible effect
 */
export const defaultFocusVisible = `focus-visible:ring-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:ring-focus-color dark:focus-visible:ring-dark-focus-color`

export const defaultFormClasses = `block w-full px-2 py-1 bg-white dark:bg-gray-900 text-inherit sm:text-sm border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent`

/**
 * Get button styling classes based on 'Type' and 'Frame' type
 */
/*
export function getButtonClass(
  type: Type,
  frame: Frame,
  isActive: boolean,
  active: Active
): string {
  switch (type) {
    case "primary": {
      if (frame === "fill")
        return classNames(
          `${
            isActive && active === "fill"
              ? `text-white dark:text-gray-900 bg-primary dark:bg-dark-primary`
              : `text-white dark:text-gray-900 bg-primary dark:bg-dark-primary`
          } border-primary dark:border-dark-primary shadow-sm`
        )
      if (frame === "outline")
        return classNames(
          `${
            isActive && active === "fill"
              ? `dark:text-primary text-dark-primary dark:bg-white bg-gray-900`
              : `text-primary dark:text-dark-primary bg-white dark:bg-gray-900`
          } border-primary dark:border-dark-primary shadow-sm`
        )
      if (frame === "text")
        return classNames(
          `${
            isActive && active === "fill"
              ? `dark:text-primary text-dark-primary dark:bg-white bg-gray-900`
              : `text-primary dark:text-dark-primary bg-white dark:bg-gray-900`
          } border-transparent rounded`
        )
      if (frame === "transparent")
        return classNames(
          `${
            isActive && active === "fill"
              ? `dark:text-primary text-dark-primary bg-transparent`
              : `text-primary dark:text-dark-primary bg-transparent`
          } border-transparent rounded`
        )
    }
    case "gray": {
      if (frame === "fill")
        return classNames(
          `${
            isActive && active === "fill"
              ? `text-white dark:text-gray-900 dark:text-gray-900 bg-gray-700 dark:bg-gray-200`
              : `text-white dark:text-gray-900 dark:text-gray-900 bg-gray-700 dark:bg-gray-200`
          } border-gray-700 dark:border-gray-200 shadow-sm`
        )
      if (frame === "outline")
        return classNames(
          `${
            isActive && active === "fill"
              ? `darktext-gray-900 text-white dark:bg-white bg-gray-900`
              : `text-gray-900 dark:text-white bg-white dark:bg-gray-900`
          } border-gray-300 dark:border-gray-600 shadow-sm`
        )
      if (frame === "text")
        return classNames(
          `${
            isActive && active === "fill"
              ? `dark:text-gray-900 text-white dark:bg-white bg-gray-900`
              : `text-gray-900 dark:text-white bg-white dark:bg-gray-900`
          } border-transparent rounded`
        )
      if (frame === "transparent")
        return classNames(
          `${
            isActive && active === "fill"
              ? `dark:text-gray-900 text-white bg-transparent`
              : `text-gray-900 dark:text-white bg-transparent`
          } border-transparent rounded`
        )
    }
    default: {
      return ""
    }
  }
}
*/
