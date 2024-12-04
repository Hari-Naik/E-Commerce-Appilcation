import { FC } from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  name: string;
  styles: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ type, name, styles, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-full h-[48px] rounded my-2 ${styles}`}>
      {name}
    </button>
  );
};

export default Button;
