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
  const { searchParams } = useQueryParams();

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

  if (isLoading) {
    return <SearchSkelton />;
  }

  if (error) {
    return <Error errorMessage={error.message} refetch={refetch} />;
  }

  if (data?.products.length === 0) {
    return (
      <div className="sm:p-3">
        <div className="w-full h-[calc(100vh-120px)] bg-white shadow-md flex flex-col items-center justify-center gap-3">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-no-search-results_2353c5.png"
            alt="error-no-search-results"
          />
          <span className="text-base md:text-xl text-[#212121] font-medium">
            Sorry, no results found!
          </span>
          <span className="text-sm md:text-base text-[#878787]">
            Please check the spelling or try searching for something else
          </span>
        </div>
      </div>
    );
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
        <SortBy activeOrder={order} />
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
