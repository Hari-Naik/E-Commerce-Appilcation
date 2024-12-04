import { FC } from "react";
import { ProductType } from "../../types/definations";
import Rating from "../Rating";
import { Link } from "react-router-dom";
import Price from "../Price";

type CardProductInfoProps = {
  product: ProductType;
};

const CartProductInfo: FC<CardProductInfoProps> = ({ product }) => {
  return (
    <div className="flex gap-8">
      <Link to={`/products/${product.id}`} className="w-[120px] h-[120px]">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full"
        />
      </Link>
      <div className="flex flex-col">
        <Link
          to={`/products/${product.id}`}
          className="text-base text-[#212121] hover:text-[#2847f0]">
          <span>{product.title}</span>
        </Link>
        <span className="text-sm text-[#878787]">
          {product.tags.join(", ")}
        </span>
        <div className="flex items-center gap-1 mt-3">
          <Rating rating={product.rating} reviews={product.reviews.length} />
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            alt="flipkart assured"
            className="w-[55px] h-[15px]"
          />
        </div>
        <div className="mt-auto">
          <Price
            price={product.price * (product.quantity || 1)}
            discountPercentage={
              product.discountPercentage + (product.quantity! - 1)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CartProductInfo;
