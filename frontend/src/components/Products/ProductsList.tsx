import { ProductType } from "../../types/definations";
import ProductListItem from "./ProductsListItem";

interface ProductListProps {
  products: ProductType[];
}

const ProductsList: React.FC<ProductListProps> = ({ products }) => {
  if (products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 md:gap-3">
      {products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
