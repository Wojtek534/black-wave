/**
 * Hover effect
 */
export const Hover = {
  Brightness:
    "brightness-100 hover:brightness-90 active:brightness-100 duration-300",
  Underline: "hover:underline duration-300 active:brightness-110",
  None: "",
} as const

export type Hover = (typeof Hover)[keyof typeof Hover]

/**
 * Component trigger action
 * TODO better const values ideas
 */
export const Trigger = {
  Click: "Click",
  Hover: "Hover",
}

export type Trigger = (typeof Trigger)[keyof typeof Trigger]
