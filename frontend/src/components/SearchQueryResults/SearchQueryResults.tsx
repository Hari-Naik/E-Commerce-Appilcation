import React from "react";
import { useSearch } from "../../hooks/useSearch";
import { ProductType } from "../../types/definations";

import QueryResultItem from "./QueryResultItem";

type SearchQueryResultsProps = {
  query: string;
  handleSearchQueryResults: () => void;
};

const SearchQueryResults: React.FC<SearchQueryResultsProps> = ({
  query,
  handleSearchQueryResults,
}) => {
  const { data } = useSearch(query, 0, "price", "asc");
  return (
    <ul className="w-full h-[264px] absolute top-[37px] z-10 bg-white shadow rounded-b overflow-hidden overflow-y-auto">
      {data?.products.map((product: ProductType) => (
        <QueryResultItem
          key={product.id}
          product={product}
          handleSearchQueryResults={handleSearchQueryResults}
        />
      ))}
    </ul>
  );
};

export default SearchQueryResults;
