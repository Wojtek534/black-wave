import {CheckboxlineProps} from "../interface/Checkboxline"

export function Checkboxline({
  checkbox,
  isVertical,
  children,
  ...props
}: CheckboxlineProps): JSX.Element {
  const orientation = isVertical ? "flex-col" : "flex-col md:flex-row"
  return (
    <div className={`flex mb-2 ${orientation}`} {...props}>
      <div>{checkbox}</div>
      <div>{children}</div>
    </div>
  )
}
