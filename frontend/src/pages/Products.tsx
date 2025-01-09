import Filters from "../components/Filters/Filters";
import ProductsTitle from "../components/Products/ProductsTitle";
import SortBy from "../components/Products/SortBy";
import ProductsList from "../components/Products/ProductsList";

//custom hooks
import { useCategories } from "../hooks/useCategories";
import { useProducts } from "../hooks/useProducts";
import { useEffect } from "react";
import BreadCrumbs from "../components/Breadcrumbs/BreadCrumbs";
import Pagination from "../components/Pagination/Pagination";
import { ProductsSkelton } from "../components/Loading/Skeltons";
import { useQueryParams } from "../hooks/useQueryParams";
import Error from "../components/Error";

const Products = () => {
  const { searchParams, updateQuery, resetQuery } = useQueryParams();

  const skip = +(searchParams.get("skip") as string);
  const sortBy = searchParams.get("sortBy") || "price";
  const order = searchParams.get("order") || "asc";
  const category = searchParams.get("category") || "";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [skip, sortBy, category, order]);

  const { data: categories } = useCategories();
  const { isLoading, data, error, refetch } = useProducts(
    skip,
    sortBy,
    order,
    category
  );

  const handleSortBy = (sortBy: string, order: string) => {
    updateQuery("sortBy", sortBy);
    updateQuery("order", order);
  };

  const handleFilterByCategories = (category: string) => {
    updateQuery("category", category);
    updateQuery("skip", "0");
  };

  const handleClearFilters = () => {
    resetQuery();
  };

  if (isLoading) {
    return <ProductsSkelton />;
  }
  if (error) {
    return <Error errorMessage={error.message} refetch={refetch} />;
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
        <SortBy
          order={sortBy === "price" ? order : "asc"}
          onSortByChange={handleSortBy}
        />
        <ProductsList products={data.products} />
        <hr />
        {totalPages > 1 && (
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        )}
      </section>
    </main>
  );
};

export default Products;
