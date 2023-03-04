import {defaultFormClasses} from "../../stories/classes"
import {InputTextAreaProps} from "../interface"

export function InputTextArea({
  id,
  name,
  value,
  rows = 3,
  placeholder,
  onChange,
}: InputTextAreaProps) {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault()
    const value: string = event.currentTarget.value
    onChange(value)
  }

  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      className={defaultFormClasses}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  )
}
