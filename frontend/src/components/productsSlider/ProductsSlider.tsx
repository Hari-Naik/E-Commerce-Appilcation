import { FaChevronRight } from "react-icons/fa6";
// import Swiper from "swiper";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductType } from "../../types/definations";
import SlidePrevButton from "../banner/SlidePrevButton";
import SlideNextButton from "../banner/SlideNextButton";
import SliderItem from "./SliderItem";

type PropTypes = {
  text: string;
  products: ProductType[] | undefined;
  slidesPerView?: number;
};

const ProductsSlider: React.FC<PropTypes> = ({
  text,
  products,
  slidesPerView,
}) => {
  const breakpoints = {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: slidesPerView || 6,
    },
  };
  return (
    <section className="w-full flex flex-col gap-4 bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#212121]">{text}</h2>
        <div className="h-5 w-5 rounded-full bg-[#2478f0] text-white flex items-center justify-center">
          <FaChevronRight className="w-3 h-3" />
        </div>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        breakpoints={breakpoints}
        className="relative w-full h-full">
        {products?.map(product => (
          <SwiperSlide key={product.id}>
            <SliderItem product={product} />
          </SwiperSlide>
        ))}

        <div className="hidden absolute top-0 z-10 h-full w-full md:flex items-center justify-between">
          <SlidePrevButton />
          <SlideNextButton />
        </div>
      </Swiper>
    </section>
  );
};

export default ProductsSlider;
