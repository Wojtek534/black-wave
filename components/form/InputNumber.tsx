import { InputClasses } from '../classes/Input';
import { InputNumberProps } from '../interface';

export function InputNumber({
  id,
  name,
  value,
  min = 0,
  max = 1000,
  onChange,
}: InputNumberProps): JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const value: number = parseInt(event.target.value, 10);
    onChange(value);
  };

  return (
    <input
      type="number"
      id={id}
      name={name}
      autoComplete="address-level2"
      className={InputClasses}
      value={value}
      min={min}
      max={max}
      onChange={handleChange}
    />
  );
}
