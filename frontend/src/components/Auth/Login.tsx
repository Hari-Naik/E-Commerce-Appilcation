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
import { FirebaseError } from "firebase/app";
import { loginSchema } from "../../schemas/login";

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
    } catch (error: unknown) {
      let errorMessage;
      if (error instanceof FirebaseError) {
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
      }

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
      <div>
        <h1 className="text-sm text-[#212121] font-medium">Credentials</h1>
        <p className="text-sm text-[#212121] font-medium">
          email:{" "}
          <span className="text-xs text-[#878787]">john.doe@gmail.com</span>
        </p>
        <p className="text-sm text-[#212121] font-medium">
          Password: <span className="text-xs text-[#878787]">John@123</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
