import { ProductType } from "../types/definations";

export const fetchProducts = async (): Promise<ProductType[]> => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};

export function generatePages(currentPage: number, totalPages: number) {
  let startPage = currentPage - 2; //7-2 = 5
  let endPage = currentPage + 2; //7+2=9

  const currPage = Math.min(Math.max(currentPage, 1), totalPages); //7

  if (currPage <= 3) {
    startPage = 1;
    endPage = 5;
  } else if (currPage >= totalPages - 2) {
    //7-2 = 5
    startPage = totalPages - 4; //3
    endPage = totalPages; //7
  }

  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
}

export const getDiscountPrice = (price: number, discount: number): number => {
  return +(price - price * (discount / 100)).toFixed(2);
};
