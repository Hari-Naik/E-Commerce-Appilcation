import React from "react";
import { FaChevronRight } from "react-icons/fa6";

type PropTypes = {
  title: string;
};

const ProductTitle: React.FC<PropTypes> = ({ title }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-[#212121]">{title}</h2>
      <div className="h-5 w-5 rounded-full bg-[#2478f0] text-white flex items-center justify-center">
        <FaChevronRight className="w-3 h-3" />
      </div>
    </div>
  );
};

export default ProductTitle;
