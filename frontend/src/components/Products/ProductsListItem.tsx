import { BsStarFill } from "react-icons/bs";
import { ProductType } from "../../types/definations";
import { Link } from "react-router-dom";
import Price from "../Price";

interface PropTypes {
  product: ProductType;
}

const ProductListItem: React.FC<PropTypes> = ({ product }) => {
  return (
    <li className="shadow-sm hover:shadow-lg cursor-pointer border border-gray-200 md:border-none group">
      <Link to={`/products/${product.id}`}>
        <div className="relative w-full h-[270px]">
          <img
            src={product.thumbnail || "default-image.jpg"}
            alt={product.title}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-[3px] p-3 bg-white group-hover:-translate-y-4 transition duration-[350ms] ease-in-expo">
          <span className="text-sm text-[#878787] font-medium">
            {product.brand}
          </span>
          <span className="text-sm text-[#212121] font-normal">
            {product.title.length > 15
              ? product.title.substring(0, 15) + "..."
              : product.title}
          </span>
          <div className="flex items-center gap-1">
            <div className="w-fit px-1 py-[1px] bg-[#388e3c] flex items-center gap-[1px] rounded text-[10px] text-white">
              <span className="font-semibold">{product.rating}</span>
              <BsStarFill className="h-2 w-2 " />
            </div>
          </div>
          <Price
            price={product.price}
            discountPercentage={product.discountPercentage}
          />
        </div>
      </Link>
    </li>
  );
};

export default ProductListItem;
