import { useState } from "react";

import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import AuthInfo from "../components/Auth/AuthInfo";

export type FormData = {
  username?: string;
  email: string;
  password: string;
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleAuthChange = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-full h-[calc(100vh-120px)] md:h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="w-full md:w-[80vw] lg:w-[70vw] xl:w-[60vw] h-full sm:h-[80vh] sm:grid sm:grid-cols-[1.2fr_2fr] bg-white shadow-sm p-3 md:p-0">
        <AuthInfo isLogin={isLogin} />
        {isLogin ? (
          <Login handleAuthChange={handleAuthChange} />
        ) : (
          <SignUp handleAuthChange={handleAuthChange} setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
};

export default Auth;
