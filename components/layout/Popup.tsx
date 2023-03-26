/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Button } from '../common/Button';
import { classNames } from '../utilities';
import { Appearance, ButtonSize } from '../types';

export interface PopupProps {
  header?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

//Popup
export function Popup({ header, action, children, isOpen, onClose }: PopupProps): JSX.Element {
  const cancelButtonRef = useRef(null);

  const closePopup = (): void => {
    onClose();
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => closePopup()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={classNames(`bg-gray-500 bg-opacity-75 transition-opacity fixed inset-0`)}
          />
        </Transition.Child>

        <div
          className={classNames(
            `text-xs text-gray-700 dark:text-gray-200 fixed z-10 inset-0 overflow-y-auto`,
          )}
        >
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white dark:bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white dark:bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-semibold text-primary dark:text-dark-primary"
                      >
                        {header}
                      </Dialog.Title>
                      <div className="mt-2">{children}</div>
                    </div>
                  </div>
                </div>
                <div
                  className={classNames(
                    `bg-gray-50 dark:bg-gray-800 px-4 py-1 sm:px-6 sm:flex sm:flex-row-reverse`,
                  )}
                >
                  <Button
                    appearance={Appearance.GrayOutline}
                    buttonSize={ButtonSize.Base}
                    onClick={() => closePopup()}
                  >
                    Cancel
                  </Button>
                  {action}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
