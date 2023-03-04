import {Orientation} from "../types"

interface LabelValueProps {
  label: React.ReactNode
  children: React.ReactNode
  orientation?: Orientation
}
export function LabelValue({
  label,
  children,
  orientation = Orientation.Vertical,
}: LabelValueProps) {
  return (
    <div className={`inline-flex ${orientation}`}>
      <div
        className={`${orientation === Orientation.Horizontal ? "mr-1" : ""}`}
      >
        {label}
      </div>
      <div className="text-gray-900">{children}</div>
    </div>
  )
}
