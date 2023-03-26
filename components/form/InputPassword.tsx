import { InputClasses } from '../classes/Input';
import { InputPasswordProps } from '../interface';

// Password input
export const InputPassword = ({
  id,
  name,
  value,
  onChange,
  ...props
}: InputPasswordProps): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const value: string = event.currentTarget.value;
    onChange(value);
  };

  return (
    <input
      type="password"
      id={id}
      name={name}
      autoComplete="address-level2"
      className={InputClasses}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};
