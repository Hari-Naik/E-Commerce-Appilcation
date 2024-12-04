import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import Breadcrumbs from "../components/Breadcrumbs/BreadCrumbs";
import SortBy from "../components/Products/SortBy";
import ProductsList from "../components/Products/ProductsList";
import Pagination from "../components/Pagination/Pagination";
import { SearchSkelton } from "../components/Loading/Skeltons";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    limit: "32",
    skip: "0",
    sortBy: "price",
    order: "asc",
  });

  const skip = +(searchParams.get("skip") as string);
  const sortBy = searchParams.get("sortBy") || "price";
  const order = searchParams.get("order") || "asc";
  const query = searchParams.get("q")!;
  const { isLoading, error, data } = useSearch(query, skip, sortBy, order);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // window.scrollTo(0, 0);
  }, [skip, sortBy, order]);

  const handleSortBy = useCallback(
    (order: string) => {
      setSearchParams(prev => {
        prev.set("order", order);
        return prev;
      });
    },
    [setSearchParams]
  );

  if (isLoading) {
    return <SearchSkelton />;
  }
  if (error) {
    return <div>{error.message}</div>;
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
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setSearchParams={setSearchParams}
          />
        )}
      </div>
    </section>
  );
};

export default Search;
