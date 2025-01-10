const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const TextSkelton = ({ styles }: { styles: string }) => {
  return <div className={`${styles} bg-[#f9f9f9]`}></div>;
};

const ProductCardSkelton = () => {
  return (
    <div className="w-[270px] h-fit flex flex-col gap-1">
      <div className="w-full h-[370px] bg-[#f9f9f9]"></div>
      <div className="px-2">
        <TextSkelton styles="w-full h-4" />
        <TextSkelton styles="w-[95%] h-5 mt-1" />
        <TextSkelton styles="w-[85%] h-4 mt-2" />
      </div>
    </div>
  );
};

export const ProductsSkelton = () => {
  return (
    <div
      className={`${shimmer} w-full h-[calc(100vh-120px)] md:h-[calc(100vh-70px)] flex gap-2 md:p-2`}>
      <div className="hidden md:flex flex-col gap-5 w-[270px] h-full bg-white shadow-md p-3">
        <TextSkelton styles="w-[50%] h-5" />
        <div className="py-3 border-y border-[#f9f9f9] flex flex-col gap-2">
          <TextSkelton styles="w-full h-4" />
          <TextSkelton styles="w-[50%] h-4" />
          <div className="flex gap-3 pl-2">
            <TextSkelton styles="w-[50%] h-4" />
            <TextSkelton styles="w-[30%] h-4" />
          </div>
        </div>
      </div>
      <div className="w-full md:flex-1 h-full flex flex-col gap-3 shadow-md p-3 bg-white">
        <TextSkelton styles="w-[25%] sm:w-[15%] h-4" />
        <TextSkelton styles="w-[50%] sm:w-[25%] h-5" />
        <TextSkelton styles="w-[75%] sm:w-[35%] h-4" />
        <ProductCardSkelton />
      </div>
    </div>
  );
};

export const SearchSkelton = () => {
  return (
    <div className="w-full h-full p-3">
      <div className="w-full h-full flex flex-col gap-3 shadow-md bg-white p-3">
        <TextSkelton styles="w-[25%] sm:w-[15%] h-4" />
        <TextSkelton styles="w-[50%] sm:w-[25%] h-5" />
        <TextSkelton styles="w-[75%] sm:w-[35%] h-4" />
        <ProductCardSkelton />
      </div>
    </div>
  );
};

export const ProductDetailsSkelton = () => {
  return (
    <div
      className={`${shimmer} container h-[calc(100vh-120px)] md:h-[calc(100vh-90px)] mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-2 bg-white shadow-sm md:mt-3`}>
      <div className="flex flex-col md:flex-row gap-2 p-3">
        <div className="order-2 md:order-1 w-[74px] h-[74px] bg-[#f9f9f9] p-1"></div>
        <div className="w-full h-[448px] order-1 md:order-2 bg-[#f9f9f9]"></div>
      </div>
      <div className="h-2 bg-[#f1f2f4] md:hidden"></div>
      <div className="flex flex-col gap-2 p-3">
        <TextSkelton styles="w-[25%] sm:w-[15%] h-4" />
        <TextSkelton styles="w-[50%] sm:w-[25%] h-5" />
        <TextSkelton styles="w-[75%] sm:w-[35%] h-4" />
      </div>
    </div>
  );
};
