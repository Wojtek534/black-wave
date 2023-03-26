import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { classNames } from '../utilities';
import { ThemeSwitch } from './ThemeSwitch';
import { SiteHeaderProps } from '../interface';

export function SiteHeader({
  name,
  height = 'h-12',
  rightContent = <ThemeSwitch />,
  children,
}: SiteHeaderProps): JSX.Element {
  return (
    <Disclosure
      as="nav"
      className={classNames(
        ` bg-header dark:bg-dark-header text-header-text dark:text-dark-header-text border-b border-header-text dark:border-dark-header-text ${
          height ? height : ''
        }`,
      )}
    >
      {({ open }) => (
        <>
          <div className="flex items-center h-full">
            <div className="flex items-center justify-between h-full w-full">
              <div className="flex items-center">
                <a
                  key="h"
                  href="/"
                  className={classNames(
                    `flex-shrink-0 text-primary dark:text-dark-primary text-lg font-bold hover:underline `,
                  )}
                >
                  {name}
                </a>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-center space-x-3">{children}</div>
                </div>
              </div>
              <div className="items-center hidden md:flex">{rightContent}</div>
              <div className="flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-primary dark:bg-dark-primary inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-4 w-4" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel
            className={classNames(
              `md:hidden absolute top-auto left-5 right-5 h-fit z-20 bg-header dark:bg-dark-header`,
            )}
          >
            <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">{children}</div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
