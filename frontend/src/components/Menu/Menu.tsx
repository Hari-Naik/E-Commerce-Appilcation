import { FC } from "react";
import { useNavigate } from "react-router-dom";

//icons
import { FaUser } from "react-icons/fa6";
import { PiDotsThreeCircleFill, PiStarFourBold } from "react-icons/pi";
import { TbCoinRupeeFilled, TbLanguage } from "react-icons/tb";
import { IoMdBriefcase } from "react-icons/io";
import { BsBoxSeamFill } from "react-icons/bs";
import { BiSolidCategory, BiSolidDiscount } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { FaBell, FaShoppingCart } from "react-icons/fa";

import MenuItem from "./MenuItem";
import MenuHeader from "./MenuHeader";

type MenuProps = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: FC<MenuProps> = ({ showMenu, setShowMenu }) => {
  const navigate = useNavigate();

  const handleCloseMenu = () => setShowMenu(false);
  const handleNaviageToLoginPage = () => {
    navigate("/account/login");
    setShowMenu(false);
  };

  return (
    <aside
      onClick={handleCloseMenu}
      className={`md:hidden absolute top-0 z-[9999] w-screen h-screen flex ${
        showMenu
          ? "left-0 transition-all duration-300 bg-black/40"
          : "left-[-100%] transition-all duration-500"
      } `}>
      <div
        onClick={e => e.stopPropagation()}
        className={`w-3/4 max-w-sm h-full bg-white`}>
        {/* menu header */}
        <MenuHeader handleNaviageToLoginPage={handleNaviageToLoginPage} />

        {/* menu items */}
        <MenuItem Icon={TbCoinRupeeFilled} text="SuperCoin Zone" />
        <MenuItem Icon={PiStarFourBold} text="Flipkart Plus Zone" />
        <hr />
        <MenuItem Icon={BiSolidCategory} text="All Categories" />
        <MenuItem Icon={PiDotsThreeCircleFill} text="More on Flipkart" />
        <hr className="h-[2px] bg-gray-300" />
        <MenuItem Icon={TbLanguage} text="Choose Language" />
        <hr className="h-[2px] bg-gray-300" />
        <MenuItem Icon={BiSolidDiscount} text="Offer Zone" />
        <MenuItem Icon={IoMdBriefcase} text="Sell on Flipkart" />
        <hr />
        <MenuItem
          Icon={BsBoxSeamFill}
          text="My Orders"
          link="/account/orders"
        />
        <MenuItem Icon={FaShoppingCart} text="My Cart" link="/viewcart" />
        <MenuItem Icon={MdFavorite} text="My Wishlist" link="/wishlist" />
        <MenuItem Icon={FaUser} text="My Account" />
        <MenuItem Icon={FaBell} text="My Notifications" />
        <hr />
        <div className="flex flex-col gap-3 p-2 text-[15px] text-[#353535]/65 font-medium">
          <span>Notification Preferences</span>
          <span>Help Centre</span>
          <span>Legal</span>
        </div>
      </div>
    </aside>
  );
};

export default Menu;
