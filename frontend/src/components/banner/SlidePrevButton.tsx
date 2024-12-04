import { FaChevronLeft } from "react-icons/fa";
import { useSwiper } from "swiper/react";

const SlidePrevButton = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => {
        swiper?.slidePrev();
      }}
      className="w-10 h-[88px] rounded-r-md bg-white flex items-center justify-center">
      <FaChevronLeft className="h-3 w-3" />
    </button>
  );
};

export default SlidePrevButton;
