/**
 * Object radius value
 */
export const Radius = {
  None: "rounded-none",
  Small: "rounded-sm",
  Medium: "rounded",
  Large: "rounded-lg",
  Full: "rounded-full",
} as const

export type Radius = (typeof Radius)[keyof typeof Radius]
