import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../types/definations";

export const useProductById = (productId: string) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: async (): Promise<ProductType> => {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      if (!response.ok) throw new Error("Failed to fetch product");
      return response.json();
    },
  });
};
