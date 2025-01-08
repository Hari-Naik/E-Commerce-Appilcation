import { keepPreviousData, useQuery } from "@tanstack/react-query";

const BASE_URL = "https://dummyjson.com/products";

export const useProducts = (
  skip: number,
  sortBy: string,
  order: string,
  category: string
) => {
  return useQuery({
    queryKey: ["products", skip, sortBy, order, category],
    queryFn: async () => {
      let url = `${BASE_URL}?limit=32&skip=${skip}&sortBy=${sortBy}&order=${order}`;
      if (category) {
        url = `${BASE_URL}/category/${category}?limit=32&skip=${skip}&sortBy=${sortBy}&order=${order}`;
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch products");
      return response.json();
    },
    placeholderData: keepPreviousData,
  });
};
