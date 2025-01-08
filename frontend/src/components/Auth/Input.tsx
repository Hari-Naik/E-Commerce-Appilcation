import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  type: string;
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  error?: FieldError;
};

const Input = <T extends FieldValues>({
  type,
  name,
  label,
  register,
  error,
}: InputProps<T>) => {
  return (
    <div className="mb-6">
      <label className="relative cursor-text">
        <input
          {...register(name)}
          type={type}
          className="input"
          placeholder=" "
        />
        <span className="text-base text-[#878787] absolute left-0 transition duration-200 input__text">
          {label}
        </span>
      </label>
      {error && (
        <span className="text-xs text-red-500 font-medium">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default Input;
