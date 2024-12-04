import { useQueries } from "@tanstack/react-query";

const CATEGORIES = [
  "laptops",
  "tablets",
  "smartphones",
  "womens-dresses",
  "womens-bags",
  "furniture",
];

const fetchProductsByCategory = async (category: string) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch products for category ${category}`);
  }

  return res.json();
};

export const useUseQueries = () => {
  return useQueries({
    queries: CATEGORIES.map(category => {
      return {
        queryKey: ["category", category],
        queryFn: () => fetchProductsByCategory(category),
      };
    }),
  });
};
