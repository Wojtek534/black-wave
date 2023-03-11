import {Popover, Transition} from "@headlessui/react"
import {Fragment, useState} from "react"
import {TooltipProps} from "../interface"
import {Trigger} from "../types"

export function Tooltip({
  trigger = "hover",
  target,
  children,
  isPanelHover = true,
}: TooltipProps): JSX.Element {
  const [isShowing, setIsShowing] = useState(false)
  let buttonProps = {}
  let transitionProps = {}
  let panelProps = {}
  if (trigger === Trigger.Click) {
    // skip
  } else {
    buttonProps = {
      onMouseEnter: () => setIsShowing(true),
      onMouseLeave: () => setIsShowing(false),
    }
    transitionProps = {
      show: isShowing,
    }
    if (isPanelHover) {
      panelProps = {
        onMouseEnter: () => setIsShowing(true),
        onMouseLeave: () => setIsShowing(false),
      }
    }
  }

  return (
    <Popover className="relative inline-block">
      {() => (
        <>
          <Popover.Button as="div" {...buttonProps}>
            {target}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            {...transitionProps}
          >
            <Popover.Panel
              {...panelProps}
              className="absolute z-10 text-xs hover:duration-300 mt-2 p-3 max-w-sm w-max rounded shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              {children}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
