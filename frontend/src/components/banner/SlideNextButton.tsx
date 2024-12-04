import { FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className="w-10 h-[88px] rounded-l-md bg-white flex items-center justify-center">
      <FaChevronRight className="h-3 w-3" />
    </button>
  );
};

export default SlideNextButton;
