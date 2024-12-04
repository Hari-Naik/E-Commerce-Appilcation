import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { BANNER_IMAGES as images } from "../../assets/data";
import SlideNextButton from "./SlideNextButton";
import SlidePrevButton from "./SlidePrevButton";

const Banner = () => {
  return (
    <div className="px-1">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ type: "bullets" }}
        autoplay={{ delay: 3000 }}
        className="relative group cursor-pointer">
        {images.map(({ imageUrl, id }) => (
          <SwiperSlide key={id}>
            <img
              src={imageUrl}
              alt="banner"
              className="w-full h-[170px] sm:h-[230px] rounded-lg md:rounded-none"
            />
          </SwiperSlide>
        ))}

        <div className="hidden absolute top-0 z-10 h-full w-full md:flex items-center justify-between">
          <SlidePrevButton />
          <SlideNextButton />
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
