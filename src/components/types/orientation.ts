export const Orientation = {
  Vertical: "flex-col",
  Horizontal: "flex-row",
}

export type Orientation = (typeof Orientation)[keyof typeof Orientation]
