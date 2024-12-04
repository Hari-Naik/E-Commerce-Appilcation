import { FC } from "react";
import { ProductType } from "../../types/definations";
import CartProductInfo from "./CartProductInfo";
import QuantityControls from "./QuantityControls";
import CartItemActions from "./CartItemActions";
import { useAppDispatch } from "../../app/hooks";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../features/cart/cartSlice";
import { toast } from "react-toastify";

type CartItemProps = {
  product: ProductType;
};

const CartItem: FC<CartItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleIncrementQunatity = () => {
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrementQunatity = () => {
    dispatch(decrementQuantity(product.id));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
    toast.success(`Successfully removed ${product.title} from your cart`);
  };

  return (
    <li className="p-[14px] sm:p-6 border-b-8 md:border-b-2 border-[#f0f0f0]">
      <CartProductInfo product={product} />
      <div className="flex items-center gap-8 pt-[10px]">
        <QuantityControls
          quantity={product.quantity!}
          onIncrement={handleIncrementQunatity}
          onDecrement={handleDecrementQunatity}
        />
        <CartItemActions removeFromCart={handleRemoveFromCart} />
      </div>
    </li>
  );
};

export default CartItem;
