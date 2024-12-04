import { FC } from "react";
import { ProductType } from "../../types/definations";
import Rating from "../Rating";
import Price from "../Price";

interface ProductInfoProps {
  product: ProductType;
}

const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  const {
    brand,
    title,
    rating,
    price,
    discountPercentage,
    description,
    reviews,
    availabilityStatus,
    warrantyInformation,
    returnPolicy,
  } = product;

  return (
    <div className="flex flex-col gap-2">
      {brand && (
        <span className="text-base text-[#878787] font-medium">{brand}</span>
      )}
      <span className="text-lg text-[#212121] -mt-2">{title}</span>
      <Rating rating={rating} reviews={reviews.length} />
      <div>
        <span className="text-sm text-[#388e3c] font-medium">
          Special price
        </span>
        <Price
          price={price}
          discountPercentage={discountPercentage}
          textStyle={true}
        />
      </div>
      <p className="text-sm text-[#212121] max-w-lg">{description}</p>
      <hr className="bg-gray-200" />
      <p className="capitalize text-sm text-[#878787] font-medium">
        availability status:{" "}
        <span className="text-[#388e3c]">{availabilityStatus}</span>
      </p>
      <p className="capitalize text-sm text-[#878787] font-medium">
        Warranty Information:{" "}
        <span className="text-[#388e3c]">{warrantyInformation}</span>
      </p>
      <p className="capitalize text-sm text-[#878787] font-medium">
        return policy: <span className="text-[#388e3c]">{returnPolicy}</span>
      </p>
    </div>
  );
};

export default ProductInfo;
