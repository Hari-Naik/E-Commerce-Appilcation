import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import Input from "./Input";
import TermsAndCondition from "./TermsAndCondition";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const loginSchema = z.object({
  email: z.string().email("Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export type LoginFormData = z.infer<typeof loginSchema>;

type LoginProps = {
  handleAuthChange: () => void;
};

const Login: FC<LoginProps> = ({ handleAuthChange }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginFormData> = async formData => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const token = await response.user.getIdToken();
      Cookies.set("token", token, { expires: 30 });
      toast.success("Login successful");
      navigate(-1);
    } catch (error: any) {
      let errorMessage;
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "No user found with this email.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address.";
          break;
        case "auth/invalid-credential":
          errorMessage = "Email or Password not matched";
          break;
        default:
          errorMessage = "An error occurred. Please try again.";
      }
      console.log("Error", error);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="mt-6 sm:mt-0 sm:p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          type="email"
          name="email"
          label="Enter Email"
          error={errors.email}
        />
        <Input
          register={register}
          type="password"
          name="password"
          label="Enter Password"
          error={errors.password}
        />
        <TermsAndCondition />
        <Button
          type="submit"
          name="Login"
          styles="bg-[#fb641b] text-white text-[15px] font-medium shadow-md"
        />
        <Button
          type="button"
          name="New to Flipkart? Create an account"
          onClick={handleAuthChange}
          styles="text-sm text-[#2874f0] font-medium"
        />
      </form>
    </div>
  );
};

export default Login;
