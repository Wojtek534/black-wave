import {Space, Radius, Height, Width} from "../types"

export interface ImageProps {
  /**
   * Image source like jpg/png or svg
   */
  src?: string
  /**
   * Image alt, for accesabilities
   */
  alt?: string
  /**
   *  Margin around button
   */
  space?: Space
  /**
   * Image height size
   */
  height?: Height
  /**
   * Image width size
   */
  width?: Width
  /**
   * Image radius
   */
  radius?: Radius
}
