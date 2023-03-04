import {FormlineProps} from "../interface"

/**
 * Primary UI component for form line
 */
export const Formline = ({
  label,
  labelWeight = "font-semibold",
  isVertical = false,
  children,
  ...props
}: FormlineProps) => {
  const orientation = isVertical ? "flex-col" : "flex-col md:flex-row"
  const titleWidth = isVertical ? "w-full" : "w-1/4"
  const contentWidth = isVertical ? "w-full" : "w-3/4"

  return (
    <div className={`flex mb-2 ${orientation}`} {...props}>
      <div className={`${titleWidth} ${labelWeight}`}>{label}</div>
      <div className={`${contentWidth}`}>{children}</div>
    </div>
  )
}
