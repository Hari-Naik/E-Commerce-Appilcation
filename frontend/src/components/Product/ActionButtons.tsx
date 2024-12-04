import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Button from "../Button";
import { FC } from "react";
import { FaHeart } from "react-icons/fa6";

type PropTypes = {
  handleAddToCart: () => void;
  handleAddToWishlist: () => void;
  isInCart?: boolean;
  isFavourite?: boolean;
};

const ActionButtons: FC<PropTypes> = ({
  handleAddToCart,
  handleAddToWishlist,
  isInCart,
  isFavourite,
}) => {
  const addToCart = () => {
    handleAddToCart();
  };

  const addToWishlist = () => {
    handleAddToWishlist();
  };

  return (
    <div className="grid grid-cols-2 gap-2 mt-2">
      <Button
        icon={<FaShoppingCart className="w-4 h-4" />}
        label={isInCart ? "go to cart" : "add to cart"}
        onClick={addToCart}
        variant="primary" // Add primary styling
      />
      <Button
        icon={
          isFavourite ? (
            <FaHeart className="w-4 h-4 text-[#ff5555]" />
          ) : (
            <CiHeart className="w-5 h-5" />
          )
        }
        label={isFavourite ? "wishlisted" : "wishlist"}
        onClick={addToWishlist}
        variant="hollow" // Add secondary styling
      />
    </div>
  );
};

export default ActionButtons;
