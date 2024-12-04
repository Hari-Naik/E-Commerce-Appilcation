import React from "react";
import { getDiscountPrice } from "../lib/utility";

type PropTyes = {
  price: number;
  discountPercentage: number;
  textStyle?: boolean;
};

const Price: React.FC<PropTyes> = ({
  price,
  discountPercentage,
  textStyle,
}) => {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`${
          textStyle ? "text-[28px]" : "text-base"
        } text-[#212121] font-medium`}>
        ${getDiscountPrice(price, discountPercentage)}
      </span>
      <span
        className={`${
          textStyle ? "text-base" : "text-sm"
        } text-[#878787] line-through`}>
        ${price}
      </span>
      <span
        className={`${
          textStyle ? "text-base" : "text-[13px]"
        } text-[#388e3c] font-medium`}>
        {discountPercentage}% off
      </span>
    </div>
  );
};

export default Price;
