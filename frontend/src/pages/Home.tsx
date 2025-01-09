import Categories from "../components/categories/Categories";
import Banner from "../components/banner/Banner";
import ProductsSlider from "../components/productsSlider/ProductsSlider";
import ProductsCard from "../components/ProductsCard/ProductsCard";
import Loading from "../components/Loading/Loading";

import { useProductsByCategory } from "../hooks/useProductsByCategory";

import { ProductType } from "../types/definations";
import Error from "../components/Error";

const categories = [
  "laptops",
  "tablets",
  "smartphones",
  "womes-dresses",
  "womens-bags",
  "womens-jewellery",
  "mens-shirts",
  "furniture",
];

type Products = {
  [key: string]: ProductType[];
};

const Home = () => {
  const queries = useProductsByCategory(categories);
  const isLoading = queries.some(query => query.isLoading);
  const error = queries.find(query => query.error)?.error;

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error.message} />;
  }

  const products = categories.reduce((acc, category, index) => {
    acc[category] = queries[index]?.data?.products || [];
    return acc;
  }, {} as Products);

  return (
    <main className="flex flex-col md:gap-4 md:px-3 md:pt-2 pb-10">
      <Categories />
      <Banner />

      {/* top slider */}
      <div className="w-full h-fit flex gap-2">
        <div className="w-full xl:w-[80%]">
          <ProductsSlider
            text="Top Deals on Laptops & Tablets"
            products={[...products["laptops"], ...products["tablets"]]}
            slidesPerView={5}
          />
        </div>

        <div className="hidden lg:block flex-1 h-[326px]">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/32e8514665f65267.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_2fr] sm:gap-1 md:gap-2">
        <ProductsCard
          title="Furniture Deals"
          products={products["furniture"]}
          bgColor="bg-[#bceefe]"
        />
        <div className="hidden lg:block relative flex-1 h-[590px]">
          <img
            src="https://rukminim1.flixcart.com/www/2140/1500/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=60"
            alt="default image"
            className="w-full h-full"
          />
        </div>
        <div className="lg:hidden">
          <ProductsCard
            title="Men's Fashion"
            products={products["mens-shirts"]}
            bgColor="bg-[#fc88a4] md:bg-white"
          />
        </div>
      </div>

      <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2">
        <ProductsCard
          title="Men's Fashion"
          products={products["mens-shirts"]}
          bgColor="bg-[#fff0a8]"
        />
        <ProductsCard
          title="Explore New Styles"
          products={products["mens-shirts"]}
          bgColor="bg-[#fc88a4]"
        />
        <div className="hidden lg:block relative flex-1 h-[590px]">
          <img
            src="https://rukminim1.flixcart.com/www/530/750/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=80"
            alt="default image"
            className="w-full h-full"
          />
        </div>
      </div>

      <ProductsSlider
        text="Best Deals on Smartphones"
        products={products["smartphones"]}
      />
      <ProductsSlider
        text="Fashion Top Deals"
        products={[
          ...products["womes-dresses"],
          ...products["womens-bags"],
          ...products["womens-jewellery"],
        ]}
      />
    </main>
  );
};

export default Home;
