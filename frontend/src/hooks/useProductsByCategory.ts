import { useQueries } from "@tanstack/react-query";

const fetchProductsByCategory = async (category: string) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  } catch (error: any) {
    throw new Error(error);
  }
};

export const useProductsByCategory = (categories: string[]) => {
  return useQueries({
    queries: categories.map(category => {
      return {
        queryKey: ["products", category],
        queryFn: () => fetchProductsByCategory(category),
      };
    }),
  });
};
