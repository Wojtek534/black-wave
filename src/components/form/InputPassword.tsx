import {defaultFormClasses} from "../../stories/classes"
import {InputPasswordProps} from "../interface"

// Password input
export const InputPassword = ({
  id,
  name,
  value,
  onChange,
  ...props
}: InputPasswordProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const value: string = event.currentTarget.value
    onChange(value)
  }

  return (
    <input
      type="password"
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
