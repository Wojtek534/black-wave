import {Fragment} from "react"
import {Menu, Transition} from "@headlessui/react"
import {Icon} from "./Icon"
import {classNames} from "../utilities"

import {
  Appearance,
  FontWeight,
  Hover,
  Radius,
  ButtonIconSize,
  Space,
  ButtonSize,
  IconList,
} from "../types"
import {
  DropdownProps,
  DropdownCommonProps,
  DropdownIconProps,
} from "../interface"

export function Dropdown({
  buttonSize = ButtonSize.Base,
  ...props
}: DropdownProps) {
  return DropdownCommon({size: buttonSize, isIcon: false, ...props})
}

export function DropdownIcon({
  buttonIconSize = ButtonIconSize.Base,
  ...props
}: DropdownIconProps) {
  return DropdownCommon({size: buttonIconSize, isIcon: false, ...props})
}

/**
 * Dropdown
 */
function DropdownCommon({
  appearance = Appearance.GrayOutline,
  active = Appearance.GrayFill,
  fontWeight = FontWeight.Normal,
  hover = Hover.Brightness,
  radius = Radius.Medium,
  space = Space.None,
  size,
  label,
  title,
  isArrow = true,
  isActive = false,
  children,
  ...props
}: DropdownCommonProps) {
  const styling = classNames(
    `${
      isActive ? active : appearance
    } ${fontWeight} ${hover} ${radius} ${space} ${size}`
  )

  return (
    <Menu as="div" className={`relative inline-block text-left m-1`} {...props}>
      {({open}) => (
        <>
          <div>
            <Menu.Button
              title={title ? title : ""}
              className={classNames(
                `inline-flex justify-center items-center w-full whitespace-pre ${styling}`
              )}
            >
              {label}
              {isArrow ? (
                <Icon
                  extendedClass={classNames(
                    `${open ? "rotate-180 transform" : ""} ml-2`
                  )}
                  icon={IconList.CHEVRON_DOWN}
                />
              ) : (
                <></>
              )}
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className={classNames(
                `origin-top-right absolute right-0 z-10 text-xs hover:duration-300 mt-2 p-3 max-w-sm w-max rounded shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none`
              )}
            >
              {children}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
