import type { LabelProps } from "../../types/LabelProps";

function Label({ htmlFor, labelClassName, children }: LabelProps) {
    return (
    <label
      htmlFor={htmlFor}
      className={labelClassName}
    >
      {children}
    </label>
  );
}

export default Label