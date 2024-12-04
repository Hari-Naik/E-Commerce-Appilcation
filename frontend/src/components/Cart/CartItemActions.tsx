import React from "react";

type CartItemActionsProps = {
  removeFromCart: () => void;
};

const CartItemActions: React.FC<CartItemActionsProps> = ({
  removeFromCart,
}) => {
  const btnStyle =
    "uppercase text-sm md:text-base text-[#212121] hover:text-[rgb(40,71,240)] font-medium";
  return (
    <div className="flex items-center gap-6">
      <button className={btnStyle}>Save for later</button>
      <button onClick={removeFromCart} className={btnStyle}>
        Remove
      </button>
    </div>
  );
};

export default CartItemActions;
