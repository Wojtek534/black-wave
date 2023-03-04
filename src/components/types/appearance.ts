import {BackgroundColor, BorderColor} from "./color"
import {TextColor} from "./typography"

/**
 * Appearance style set
 */
export const Appearance = {
  Header: `${TextColor.Header} ${BackgroundColor.Header} border ${BorderColor.Transparent}`,
  PrimaryFill: `${TextColor.White} ${BackgroundColor.Primary} border ${BorderColor.Primary} shadow-sm`,
  PrimaryOutline: `${TextColor.Primary} ${BackgroundColor.White} border ${BorderColor.Primary} shadow-sm`,
  PrimaryText: `${TextColor.Primary} ${BackgroundColor.White} border ${BorderColor.Transparent} `,
  PrimaryTransparent: `${TextColor.Primary} border ${BorderColor.Transparent} `,
  GrayFill: `${TextColor.White} ${BackgroundColor.Gray} border ${BorderColor.Gray} shadow-sm`,
  GrayOutline: `${TextColor.Gray} ${BackgroundColor.White} border ${BorderColor.Gray} shadow-sm`,
  GrayText: `${TextColor.Gray} ${BackgroundColor.White} border ${BorderColor.Transparent}`,
  GrayTransparent: `${TextColor.Gray} border ${BorderColor.Transparent}`,
} as const

export type Appearance = (typeof Appearance)[keyof typeof Appearance]
