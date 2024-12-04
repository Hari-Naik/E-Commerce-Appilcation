import React from "react";
import { ProductType } from "../../types/definations";
import Price from "../Price";
import { MdDelete } from "react-icons/md";
import Rating from "../Rating";
import { useAppDispatch } from "../../app/hooks";
import { removeFromWishlist } from "../../features/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

type PropTypes = {
  product: ProductType;
};

const WishlistItem: React.FC<PropTypes> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleRemoveFromWishlist = () => {
    // Remove from wishlist logic here
    dispatch(removeFromWishlist(product.id));
    toast.success("Removed from wishlist");
  };
  return (
    <li className="flex gap-3 p-3 border-b border-[#e0e0e0]">
      <Link to={`/products/${product.id}`} className="h-[100px] w-[100px]">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full"
        />
      </Link>
      <div className="flex-1 flex justify-between">
        <Link to={`/products/${product.id}`} className="flex flex-col group">
          <span className="text-[15px] text-[#212121] group-hover:text-[#2478f0] cursor-pointer">
            {product.title}
          </span>

          <Rating rating={product.rating} reviews={product.reviews.length} />
          <div className="mt-3">
            <Price
              price={product.price}
              discountPercentage={product.discountPercentage}
            />
          </div>
        </Link>
        <div onClick={handleRemoveFromWishlist} className="cursor-pointer">
          <MdDelete className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </li>
  );
};

export default WishlistItem;
