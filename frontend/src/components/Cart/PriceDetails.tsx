import React from "react";
import { ProductType } from "../../types/definations";
import { getDiscountPrice } from "../../lib/utility";

type PriceDetailsProps = {
  cart: ProductType[];
};
const PriceDetails: React.FC<PriceDetailsProps> = ({ cart }) => {
  const price = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  //calculating price after discount
  const totalAmount = cart.reduce((acc, item) => {
    if (item.quantity) {
      return (
        acc +
        getDiscountPrice(
          item.price * item.quantity,
          item.discountPercentage + (item.quantity - 1)
        )
      );
    }
    return 0;
  }, 0);

  const discount = (price - totalAmount).toFixed(2);
  return (
    <div className="w-full md:w-[50%] h-fit bg-white rounded-[5px] md:sticky md:top-[78px]">
      <h2 className="py-[13px] px-3 md:px-6 border-b border-gray-200 uppercase text-base text-[#878787] font-medium">
        Price Details
      </h2>
      <div className="flex flex-col gap-3 px-3 md:px-6 py-3">
        <div className="flex justify-between items-center text-base text-[#212121]">
          <span>
            Price ({cart.length} {cart.length === 1 ? "item" : "items"})
          </span>
          <span>${price}</span>
        </div>
        <div className="flex justify-between items-center text-base text-[#212121]">
          <span>Discount</span>
          <span className="text-[#388e3c]">- ${discount}</span>
        </div>
        <div className="flex justify-between items-center text-base text-[#212121]">
          <span>Delivery Charges</span>
          <span className="text-[#388e3c]">Free</span>
        </div>
        <div className="flex justify-between items-center text-base text-[#212121] font-medium border-t border-b border-dashed py-3">
          <span className="capitalize">Total Amount</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <p className="text-[#388e3c] font-medium">
          You will save ${discount} on this order
        </p>
      </div>
    </div>
  );
};

export default PriceDetails;
