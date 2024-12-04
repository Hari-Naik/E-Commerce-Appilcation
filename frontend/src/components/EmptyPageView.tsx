import React from "react";
import { Link } from "react-router-dom";

type PropTypes = {
  title: string;
  description: string;
};

const EmptyPageView: React.FC<PropTypes> = ({ title, description }) => {
  return (
    <div className="w-full sm:w-[80%] h-[calc(100vh-120px)] mx-auto bg-white shadow-sm flex flex-col items-center p-6">
      <img
        className="h-48"
        src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        alt=""
      />
      <span className="capitalize text-lg text-[#212121] mt-6">
        {/* Your cart is empty! */}
        {title}
      </span>
      <span className="text-xs text-[#212121] mt-2">{description}</span>
      <Link to="/">
        <button className="bg-[#2874f0] shadow-[0px_2px_4px_rgba(0,0,0,0.2)] py-2 px-[72px] mt-5 text-sm text-white font-normal rounded-sm">
          Shop now
        </button>
      </Link>
    </div>
  );
};

export default EmptyPageView;
