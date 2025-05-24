import type { FieldValues } from 'react-hook-form';
import type { InputProps } from '../../types/InputProps';

function Input<T extends FieldValues>({
  name,
  register,
  inputClassName,
  type,
  placeholder,
}: InputProps<T>) {
  return (
    <input
      className={inputClassName}
      type={type}
      placeholder={placeholder}
      {...register(name)}
    />
  );
}

export default Input;