import { InputClasses } from '../classes/Input';
import { InputTextAreaProps } from '../interface';

export function InputTextArea({
  id,
  name,
  value,
  rows = 3,
  placeholder,
  onChange,
}: InputTextAreaProps): JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    event.preventDefault();
    const value: string = event.currentTarget.value;
    onChange(value);
  };

  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      className={InputClasses}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}
