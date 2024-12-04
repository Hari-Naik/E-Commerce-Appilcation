import { FC } from "react";

type AuthInfoProps = {
  isLogin: boolean;
};

const AuthInfo: FC<AuthInfoProps> = ({ isLogin }) => {
  return (
    <div className="w-full h-fit sm:h-full flex flex-col gap-3 sm:p-10 sm:bg-[#2874f0]">
      <span className="text-base sm:text-xl md:text-3xl text-[#212121] sm:text-white font-medium">
        {isLogin ? "Login" : "Looks like you're new here"}
      </span>
      <p className="text-base text-[#000]/60 sm:text-[#dbdbdb]">
        {isLogin
          ? "Get access to your Orders, Wishlist and Recommendations"
          : "Sign up to get started"}
      </p>
      <img
        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
        alt="login image"
        className="hidden sm:block mt-auto"
      />
    </div>
  );
};

export default AuthInfo;
