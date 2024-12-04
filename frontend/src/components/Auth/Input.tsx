import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type FormState = {
  username: string;
  email: string;
  password: string;
};

type InputProps = {
  type: string;
  name: "username" | "email" | "password";
  label: string;
  register: UseFormRegister<FormState>;
  error: FieldError | undefined;
};

const Input: FC<InputProps> = ({ type, name, label, register, error }) => {
  return (
    <div className="mb-6">
      <label className="relative cursor-text">
        <input
          {...register(name)}
          type={type}
          name={name}
          className="input"
          placeholder=" "
        />
        <span className="text-base text-[#878787] absolute left-0 transition duration-200 input__text">
          {label}
        </span>
      </label>
      <span className="text-xs text-red-500 font-medium">{error?.message}</span>
    </div>
  );
};

export default Input;
