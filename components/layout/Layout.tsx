import { FontSize } from '../types';
import { classNames } from '../utilities';

interface LayoutProps {
  /**
   * Placeholder for SiteHeader widget
   */
  header: React.ReactNode;
  /**
   * Default font size for children content
   */
  globalFontSize?: FontSize;
  /**
   * Default font color for children content
   */
  globalFontColor?:
    | 'text-gray-700 dark:text-gray-300'
    | 'text-gray-800 dark:text-gray-200'
    | 'text-gray-900 dark:text-gray-100';
  /**
   * Main layout content
   */
  children: React.ReactNode;
}

export function Layout({
  header,
  globalFontSize = 'text-base',
  globalFontColor = 'text-gray-900 dark:text-gray-100',
  children,
}: LayoutProps): JSX.Element {
  const grid = 'grid gap-2 auto-rows-auto mx-5 md:ml-40 md:mr-40';
  return (
    <div
      className={classNames(
        `layout h-screen ${globalFontSize} ${globalFontColor} bg-background dark:bg-dark-background overflow-auto scroll-smooth scroll-p-2 focus:outline-none focus:ring-1 focus:brightness-90 focus:border-transparent`,
      )}
    >
      <div className={classNames(`${grid}`)}>
        {header}
        <main className={`h-full min-h-full`}>{children}</main>
      </div>
    </div>
  );
}
