import { useQuery } from "@tanstack/react-query";

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ["productsByCategory", category],
    queryFn: async () => {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      if (!response.ok) throw new Error("Failed to fetch products");
      return response.json();
    },
  });
};
