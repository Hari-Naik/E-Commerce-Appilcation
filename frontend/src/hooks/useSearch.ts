import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useSearch = (
  query: string,
  skip: number,
  sortBy: string,
  order: string
) => {
  return useQuery({
    queryKey: ["search", query, skip, sortBy, order],
    queryFn: async () => {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}&limit=32&skip=${skip}&sortBy=${sortBy}&order=${order}`
      );
      if (!response.ok) throw new Error("Failed to fetch products");
      return response.json();
    },
    placeholderData: keepPreviousData,
  });
};
