import {classNames} from "../utilities"
import {
  Appearance,
  FontSize,
  FontWeight,
  Space,
  Radius,
  Hover,
  NavigationSize,
} from "../types"
import {NavigateProps} from "../interface"

export function Navigate({
  appearance = Appearance.PrimaryText,
  active = Appearance.PrimaryFill,
  href,
  navigationSize = NavigationSize.Base,
  fontSize = FontSize.Base,
  fontWeight = FontWeight.Normal,
  space = Space.None,
  hover = Hover.Underline,
  radius = Radius.Medium,
  isActive = false,
  children,
  ...props
}: NavigateProps) {
  const styling = classNames(
    ` ${
      isActive ? active : appearance
    } ${appearance} ${fontSize} ${fontWeight} ${space} ${navigationSize} ${radius} ${hover}`
  )
  return (
    <a
      className={classNames(`inline-flex ${styling}`)}
      href={href ? href : ""}
      {...props}
    >
      {children}
    </a>
  )
}
