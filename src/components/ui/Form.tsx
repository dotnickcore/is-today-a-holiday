import type { FieldValues } from "react-hook-form";
import type { FormProps } from "../../types/FormProps";

export function Form<T extends FieldValues>({ 
  formMethods, 
  onSubmit, 
  children 
}: FormProps<T>) {
  return (
    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
      {children}
    </form>
  );
}