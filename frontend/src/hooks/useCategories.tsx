import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://dummyjson.com/products";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/categories`);
      if (!response.ok) throw new Error("Failed to fetch categories");
      return response.json();
    },
  });
};
