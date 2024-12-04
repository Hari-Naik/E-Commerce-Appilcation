import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

const BackToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 700) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      onClick={handleClick}
      className={`fixed left-[calc(50%-60px)] top-[132px] md:top-[72px] z-[90] w-[120px] h-[40px] bg-white shadow-[0_3px_16px_0_rgba(0,0,0,.11)] border border-[#e0e0e0] rounded flex items-center justify-center gap-1 ${
        showBackToTop ? "translate-y-0" : "-translate-y-[60px]"
      } transition duration-300 ease-in-out cursor-pointer`}>
      <FaChevronUp className="w-3 h-3 text-[#2847f0]" />
      <span className="text-[#2847f0] text-sm font-medium">Back to top</span>
    </div>
  );
};

export default BackToTop;
