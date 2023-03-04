import {defaultFormClasses} from "../../stories/classes"
import {InputNumberProps} from "../interface"

export function InputNumber({
  id,
  name,
  value,
  min = 0,
  max = 1000,
  onChange,
}: InputNumberProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const value: number = parseInt(event.target.value, 10)
    onChange(value)
  }

  return (
    <input
      type="number"
      id={id}
      name={name}
      autoComplete="address-level2"
      className={defaultFormClasses}
      value={value}
      min={min}
      max={max}
      onChange={handleChange}
    />
  )
}
