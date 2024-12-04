import { FC, ReactNode } from "react";

interface ButtonProps {
  icon?: ReactNode;
  label: string;
  onClick?: () => void;
  variant: "primary" | "secondary" | "hollow";
}

const btnStyles = {
  primary: "bg-[#ff9f00] text-white",
  secondary: "bg-[#fb641b] text-white",
  hollow: "border border-gray-300 text-[#212121] hover:border-[#212121]",
};

const Button: FC<ButtonProps> = ({ icon, label, onClick, variant }) => {
  const baseClasses =
    "flex items-center justify-center gap-1 uppercase text-sm font-bold rounded-sm py-3 cursor-pointer";
  //   const primaryClasses = "bg-[#ff9f00] text-white";
  //   const secondaryClasses =
  //     "border border-gray-300 text-[#212121] hover:border-[#212121]";

  //   const buttonClasses =
  //     variant === "primary" ? primaryClasses : secondaryClasses;

  return (
    <button
      className={`${btnStyles[variant]} ${baseClasses}`}
      onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default Button;
