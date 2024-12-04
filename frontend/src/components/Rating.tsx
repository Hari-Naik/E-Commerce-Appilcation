import React from "react";
import { BsStarFill } from "react-icons/bs";

type PropTypes = {
  rating: number;
  reviews?: number;
};

const Rating: React.FC<PropTypes> = ({ rating, reviews }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="w-fit px-1 py-[1px] bg-[#388e3c] flex items-center gap-[1px] rounded text-[10px] text-white">
        <span className="font-semibold">{rating}</span>
        <BsStarFill className="h-2 w-2 " />
      </div>
      {reviews && (
        <span className="text-xs text-[#878787] font-medium">
          ({reviews} reviews)
        </span>
      )}
    </div>
  );
};

export default Rating;
