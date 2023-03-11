import {classNames} from "../utilities"
import {
  ButtonProps,
  ButtonIconProps,
  ButtonCommonProps,
} from "../interface/Button"
import {
  ButtonSize,
  ButtonIconSize,
  Appearance,
  FontWeight,
  Hover,
  Radius,
  Space,
} from "../types"

export function Button({buttonSize = ButtonSize.Base, ...props}: ButtonProps) {
  return ButtonCommon({...props}, buttonSize)
}

export function ButtonIcon({
  buttonIconSize = ButtonIconSize.Base,
  ...props
}: ButtonIconProps) {
  return ButtonCommon({...props}, buttonIconSize)
}

function ButtonCommon(
  {
    appearance = Appearance.GrayOutline,
    active = Appearance.GrayFill,
    fontWeight = FontWeight.Normal,
    hover = Hover.Brightness,
    radius = Radius.Medium,
    space = Space.None,
    onClick,
    title,
    isDisabled = false,
    isSubmit = false,
    isActive = false,
    children,
    ...props
  }: ButtonCommonProps,
  size?: ButtonSize | ButtonIconSize
): JSX.Element {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault
    if (onClick) {
      onClick()
    }
  }
  const styling = classNames(
    `${
      isActive ? active : appearance
    } ${fontWeight} ${hover} ${radius} ${space} ${size}`
  )
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      onClick={handleClick}
      disabled={isDisabled}
      title={title ? title : ""}
      // leading-none
      className={`inline-flex align-item justify-center items-center whitespace-nowrap border ${styling}`}
      tabIndex={0}
      role="button"
      {...props}
    >
      {children}
    </button>
  )
}
