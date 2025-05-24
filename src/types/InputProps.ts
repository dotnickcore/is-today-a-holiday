import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

export type InputProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  inputClassName?: string;
  type?: string;
  placeholder?: string;
}