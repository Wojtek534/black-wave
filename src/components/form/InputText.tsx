import { InputClasses } from '../classes/Input';
import { InputTextProps } from '../interface';

// Text input
export function InputText({ id, name, value, onChange, ...props }: InputTextProps): JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      id={id}
      name={name}
      autoComplete="address-level2"
      className={InputClasses}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
}
