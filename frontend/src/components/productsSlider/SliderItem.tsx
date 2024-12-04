import React from "react";
import { ProductType } from "../../types/definations";

type SliderItemProps = {
  product: ProductType;
};

const SliderItem: React.FC<SliderItemProps> = ({ product }) => {
  return (
    <div className="bg-white h-[252px] flex flex-col items-center justify-center gap-2 border border-gray-300 rounded-md pb-3">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-[180px] hover:scale-110 transition duration-200 cursor-pointer"
      />
      <div className="flex flex-col items-center">
        <span className="text-sm text-[#212121] text-center">
          {product.title}
        </span>
        <span className="text-sm text-[#212121] font-semibold">
          From ${product.price}
        </span>
      </div>
    </div>
  );
};

export default SliderItem;
