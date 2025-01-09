import { useEffect } from "react";
import { useSearch } from "../hooks/useSearch";
import Breadcrumbs from "../components/Breadcrumbs/BreadCrumbs";
import SortBy from "../components/Products/SortBy";
import ProductsList from "../components/Products/ProductsList";
import Pagination from "../components/Pagination/Pagination";
import { SearchSkelton } from "../components/Loading/Skeltons";
import { useQueryParams } from "../hooks/useQueryParams";
import Error from "../components/Error";

const Search = () => {
  const { searchParams, updateQuery } = useQueryParams();

  const skip = +(searchParams.get("skip") as string);
  const sortBy = searchParams.get("sortBy") || "price";
  const order = searchParams.get("order") || "asc";
  const query = searchParams.get("q")!;
  const { isLoading, error, data, refetch } = useSearch(
    query,
    skip,
    sortBy,
    order
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [skip, sortBy, order]);

  const handleSortBy = (order: string) => {
    updateQuery("order", order);
  };

  if (isLoading) {
    return <SearchSkelton />;
  }
  if (error) {
    return <Error errorMessage={error.message} refetch={refetch} />;
  }

  const totalPages = Math.ceil(data.total / 32);
  const currentPage = Math.ceil(skip / 32) + 1;

  return (
    <section className="w-full p-3">
      <div className="w-full bg-white p-3">
        <Breadcrumbs />
        <h2 className="text-base text-[#212121] font-medium">
          Showing results for "{query}"
        </h2>
        <SortBy order={order} onSortByChange={handleSortBy} />
        <ProductsList products={data.products} />
        <hr />
        {totalPages > 1 && (
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        )}
      </div>
    </section>
  );
};

export default Search;
