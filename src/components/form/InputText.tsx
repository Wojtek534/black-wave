import {defaultFormClasses} from "../../stories/classes"
import {InputTextProps} from "../interface"

// Text input
export function InputText({
  id,
  name,
  value,
  onChange,
  ...props
}: InputTextProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    onChange(event.target.value)
  }

  return (
    <input
      type="text"
      id={id}
      name={name}
      autoComplete="address-level2"
      className={defaultFormClasses}
      value={value}
      onChange={handleChange}
      {...props}
    />
  )
}
