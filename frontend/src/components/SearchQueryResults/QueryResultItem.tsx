import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../types/definations";

type QueryResultItemProps = {
  product: ProductType;
  handleSearchQueryResults: () => void;
};

const QueryResultItem: React.FC<QueryResultItemProps> = ({
  product,
  handleSearchQueryResults,
}) => {
  return (
    <li
      onClick={handleSearchQueryResults}
      key={product.id}
      className="px-3 py-[2px] hover:bg-[#2847f0]/5 cursor-pointer">
      <Link to={`/products/${product.id}`} className="flex items-center gap-2">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-12 h-12"
        />
        <div className="flex flex-col">
          <span className="text-[13px] font-medium">{product.title}</span>
          <span className="text-xs text-[#2847f0] font-medium">
            in {product.category}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default QueryResultItem;
