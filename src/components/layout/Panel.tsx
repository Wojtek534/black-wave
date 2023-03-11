import {PanelProps} from "../interface"
import {Appearance} from "../types"
import {Space} from "../types/space"

import {classNames} from "../utilities"

// Panel
export function Panel({
  name,
  action,
  appearance = Appearance.GrayTransparent,
  margin = Space.Base,
  showHeader = true,
  children,
}: PanelProps): JSX.Element {
  // border-b border-gray-300 dark:border-gray-600 color-primary dark:color-dark-primary
  return (
    <div
      className={classNames(
        `flex flex-col p-5 ${appearance} rounded-lg  ${margin}`
      )}
    >
      {showHeader ? (
        <div className="flex flex-row mb-2 ">
          <div
            className={classNames(
              `${
                action ? "w-3/4" : "w-full"
              } flex flex-wrap items-center font-bold text-xl`
            )}
          >
            {name}
          </div>
          {action ? (
            <div className="w-auto flex flex-wrap justify-end items-center">
              {action}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      <div>{children}</div>
    </div>
  )
}
