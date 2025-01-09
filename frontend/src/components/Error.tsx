import React from "react";

type ErrorProps = {
  errorMessage: string;
  refetch?: () => void;
};

const Error: React.FC<ErrorProps> = ({
  errorMessage = "Something Went Wrong",
  refetch = () => {},
}) => {
  return (
    <div className="w-full h-[calc(100vh-124px)] md:h-[calc(100vh-66px)] flex justify-center">
      <div className=" flex flex-col items-center gap-2">
        <img
          src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png"
          className="mt-10"
          alt="not-found"
        />
        <p className="text-base text-[#212121]">{errorMessage}</p>
        <p className="text-sm text-[#878787]">Please try again.</p>
        <button
          onClick={() => refetch()}
          className="bg-[#2847f0] text-sm text-white font-medium px-5 py-2 rounded shadow-md">
          Retry
        </button>
      </div>
    </div>
  );
};

export default Error;
