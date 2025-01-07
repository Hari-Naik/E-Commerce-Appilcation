import { FC } from "react";

import Button from "./Button";
import Input from "./Input";
import TermsAndCondition from "./TermsAndCondition";
import { toast } from "react-toastify";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const signupSchema = z
  .object({
    username: z
      .string()
      .min(4, "Username must be at least 4 characters long")
      .max(20, "Username must be at most 20 characters long")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ),
    email: z.string().email("Email is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  })
  .required();

export type SignUpFormData = z.infer<typeof signupSchema>;

type SignUpProps = {
  handleAuthChange: () => void;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUp: FC<SignUpProps> = ({ handleAuthChange, setIsLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({ resolver: zodResolver(signupSchema) });

  const onSubmit: SubmitHandler<SignUpFormData> = async formData => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;
      console.log("user cred", userCredential);
      console.log("user", user.uid);
      await setDoc(doc(db, "users", user.uid), {
        userId: user.uid,
        username: formData.username,
        email: formData.email,
        createdAt: new Date(),
      });
      setIsLogin(true);
      toast.success("User created successfully. Please login!");
    } catch (error: any) {
      let errorMessage;
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = "Please enter a valid email.";
          break;
        case "auth/missing-password":
          errorMessage = "Please enter a password.";
          break;
        case "auth/email-already-in-use":
          errorMessage = "This email is already in use. Try another email.";
          break;
        default:
          errorMessage = "An error occurred. Please try again.";
      }
      toast.error(errorMessage);
    }
  };

  return (
    <div className="mt-6 sm:mt-0 sm:p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          type="text"
          name="username"
          label="Enter Username"
          error={errors["username"]}
        />
        <Input
          register={register}
          type="email"
          name="email"
          label="Enter Email"
          error={errors["email"]}
        />
        <Input
          register={register}
          type="password"
          name="password"
          label="Enter Password"
          error={errors["password"]}
        />
        <TermsAndCondition />
        <Button
          type="submit"
          name="continue"
          styles="bg-[#fb641b] uppercase text-white text-sm font-medium shadow-md"
        />
        <Button
          type="button"
          onClick={handleAuthChange}
          name=" Existing User? Log in"
          styles="bg-white text-sm text-[#2874f0] font-medium shadow-lg hover:shadow-md"
        />
      </form>
    </div>
  );
};

export default SignUp;
