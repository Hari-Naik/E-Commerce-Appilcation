import React from "react";

type PropTypes = {
  title: string;
  skip: number;
  limit: number;
  totalProducts: number;
};

const ProductsTitle: React.FC<PropTypes> = ({
  title,
  skip,
  limit,
  totalProducts,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
      <h2 className="text-sm sm:text-base text-[#212121]">{title}</h2>
      <span className="text-xs text-[#878787]">
        (Showing {skip || 1} - {limit + skip} products of {totalProducts}{" "}
        products)
      </span>
    </div>
  );
};

export default ProductsTitle;
