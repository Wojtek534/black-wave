import {CheckboxProps} from "../interface"
import {classNames} from "../utilities"

// Checkbox form input
export function Checkbox({
  value,
  onChange,
  id,
  name,
  radius = "rounded",
}: CheckboxProps) {
  const onHandleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value: boolean = event.currentTarget.checked
    onChange(value)
  }
  return (
    <input
      data-checkbox
      type="checkbox"
      id={id}
      name={name}
      checked={value}
      onChange={onHandleInputChange}
      className={classNames(
        `text-primary dark:text-dark-secondary h-8 w-8 border-gray-300 dark:border-gray-600 ${radius} shadow focus:ring-0 focus:ring-gray-600 dark:focus:ring-gray-200 cursor-pointer`
      )}
    ></input>
  )
}
