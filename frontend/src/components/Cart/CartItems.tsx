import React from "react";
import { ProductType } from "../../types/definations";
import CartItem from "./CartItem";

type CartitemsProps = {
  cart: ProductType[];
  handleCheckout: () => void;
};

const CartItems: React.FC<CartitemsProps> = ({ cart, handleCheckout }) => {
  return (
    <div className="w-full flex-grow h-fit border rounded-t-[5px] rounded-b-[5px]">
      <div className="w-full h-[58px] bg-white mb-2 rounded-t-[5px] px-3 sm:px-6 flex items-center">
        <h2 className="text-base text-[#2a55e5] font-medium">
          My Cart ({cart.length})
        </h2>
      </div>
      <ul className="w-full bg-white shadow-sm rounded-b-[5px]">
        {cart.map(product => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <div className="bg-white py-2 px-6 flex justify-end shadow-[0_-2px_10px_0_rgba(0,0,0,0.1)]">
        <button
          onClick={handleCheckout}
          className="w-[250px] py-2 bg-[#fb641b] uppercase text-base text-white">
          place order
        </button>
      </div>
    </div>
  );
};

export default CartItems;
