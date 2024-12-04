import { useSearchParams } from "react-router-dom";

import Filters from "../components/Filters/Filters";
import ProductsTitle from "../components/Products/ProductsTitle";
import SortBy from "../components/Products/SortBy";
import ProductsList from "../components/Products/ProductsList";

//custom hooks
import { useCategories } from "../hooks/useCategories";
import { useProducts } from "../hooks/useProducts";
import { useCallback, useEffect } from "react";
import BreadCrumbs from "../components/Breadcrumbs/BreadCrumbs";
import Pagination from "../components/Pagination/Pagination";
import { ProductsSkelton } from "../components/Loading/Skeltons";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    limit: "32",
    skip: "0",
    sortBy: "price",
    order: "asc",
  });

  const skip = +(searchParams.get("skip") as string);
  const sortBy = searchParams.get("sortBy") || "price";
  const order = searchParams.get("order") || "asc";
  const category = searchParams.get("category") || "";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [skip, sortBy, category, order]);

  const { data: categories } = useCategories();
  const { isLoading, data, error } = useProducts(skip, sortBy, order, category);

  const handleSortBy = useCallback(
    (order: string) => {
      setSearchParams(prev => {
        prev.set("order", order);
        return prev;
      });
    },
    [setSearchParams]
  );

  const handleFilterByCategories = (category: string) => {
    setSearchParams(prev => {
      prev.set("category", category);
      prev.set("skip", "0");
      return prev;
    });
  };

  const handleClearFilters = () => {
    setSearchParams(prev => {
      prev.set("limit", "32");
      prev.set("skip", "0");
      prev.set("sortBy", "price");
      prev.set("order", "asc");
      prev.delete("category");
      return prev;
    });
  };

  if (isLoading) {
    return <ProductsSkelton />;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  const totalPages = Math.ceil(data.total / 32);
  const currentPage = Math.ceil(skip / 32) + 1;

  return (
    <main className="flex gap-2 md:p-2">
      <Filters
        categories={categories}
        onFilterByCategory={handleFilterByCategories}
        onClearFilters={handleClearFilters}
      />
      <section className="w-full md:flex-1 h-full bg-white shadow-md p-3">
        <BreadCrumbs />
        <ProductsTitle
          title="All Products"
          skip={skip}
          limit={data.limit}
          totalProducts={data.total}
        />
        <SortBy order={order} onSortByChange={handleSortBy} />
        <ProductsList products={data.products} />
        <hr />
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setSearchParams={setSearchParams}
          />
        )}
      </section>
    </main>
  );
};

export default Products;
