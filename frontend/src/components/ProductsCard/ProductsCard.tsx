import { FC } from "react";

import { ProductType } from "../../types/definations";
import ProductTitle from "../productsSlider/ProductTitle";
import SliderItem from "../productsSlider/SliderItem";

type PropTypes = {
  title: string;
  products: ProductType[];
  bgColor?: string;
};

const ProductsCard: FC<PropTypes> = ({ title, products, bgColor }) => {
  return (
    <div className={`h-fit shadow-md ${bgColor} md:bg-white p-4`}>
      <ProductTitle title={title} />
      <div className="grid grid-cols-2 gap-3 mt-4">
        {products?.slice(0, 4).map(product => (
          <SliderItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
