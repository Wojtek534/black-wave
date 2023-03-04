import {LabelProps} from "../interface"

export function Label({htmlFor, children}: LabelProps): JSX.Element {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
    >
      {children}
    </label>
  )
}
