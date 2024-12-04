import React from "react";
import { Link } from "react-router-dom";

type PropTypes = {
  category: {
    id: number;
    text: string;
    image: string;
  };
};

const CategoryItem: React.FC<PropTypes> = ({ category }) => {
  return (
    <Link to="/products">
      <li className="min-w-max flex flex-col items-center cursor-pointer group">
        <img src={category.image} alt={category.text} className="w-16 h-16" />
        <span className="text-xs md:text-sm text-[#111112] group-hover:text-[#2847f0] transition duration-300 md:font-semibold font-sans">
          {category.text}
        </span>
      </li>
    </Link>
  );
};

export default CategoryItem;
