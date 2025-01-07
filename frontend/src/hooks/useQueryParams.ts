import { useSearchParams } from "react-router-dom";

const DEFAULT_PARAMS = {
  limit: "32",
  skip: "0",
  sortBy: "price",
  order: "asc",
};

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams(DEFAULT_PARAMS);

  const updateQuery = (key: string, value: string) => {
    setSearchParams(prev => {
      prev.set(key, value);
      return prev;
    });
  };

  const resetQuery = () => {
    setSearchParams(DEFAULT_PARAMS);
  };

  return { searchParams, updateQuery, resetQuery };
};
