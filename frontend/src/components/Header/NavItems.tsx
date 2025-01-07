import { Link, useNavigate } from "react-router-dom";

import { PiDotsThreeVertical, PiStorefrontLight } from "react-icons/pi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";

import MoreLinksDropDown from "./MoreLinksDropDown";
import AccountDropDown from "./AccountDropDown";
import { useAppSelector } from "../../app/hooks";

// import { useAuth } from "../../hooks/useAuth";
import { useToken } from "../../hooks/useToken";

const NavItems = () => {
  const cart = useAppSelector(state => state.cart.cart);
  const navigate = useNavigate();
  const { token } = useToken();
  //   const { user } = useAuth();
  //   console.log("auth", user);

  const handleNaviageToLoginPage = () => {
    navigate("/account/login");
  };

  return (
    <div className="flex items-center gap-4 md:gap-8 cursor-pointer">
      {/* login */}
      <div className="relative group">
        <div className="flex items-center gap-2 md:group-hover:bg-[#2a55e5] md:group-hover:text-white p-2 rounded-lg">
          <RxAvatar className="w-6 h-6" />
          <span className="hidden md:block">{token ? "Account" : "Login"}</span>
          <span onClick={handleNaviageToLoginPage} className="md:hidden">
            {token ? "You" : "Login"}
          </span>
          <FaChevronDown className="w-3 h-3 hidden md:block group-hover:rotate-180 transition duration-500" />
        </div>
        <AccountDropDown />
      </div>

      {/* cart */}
      <Link to="/viewcart">
        <div className="relative flex items-center gap-2">
          <AiOutlineShoppingCart className="w-6 h-6" />
          <span className="hidden lg:block">Cart</span>
          {cart.length > 0 && (
            <div className="absolute left-2 bottom-3 h-[18px] w-[18px] rounded-[8px] bg-[#ff6161] text-[#f0f0f0] text-xs font-medium text-center">
              {cart.length}
            </div>
          )}
        </div>
      </Link>

      {/* Become a seller */}
      <div className="hidden md:flex items-center gap-2">
        <PiStorefrontLight className="w-6 h-6" />
        <span className="hidden lg:block">Become a Seller</span>
      </div>

      {/* More options */}
      <div className="relative group hidden md:flex h-10 w-10 items-center justify-center border border-transparent rounded-lg hover:border-gray-300 hover:bg-[#f9f9f9]">
        <PiDotsThreeVertical className="w-6 h-6" />
        <MoreLinksDropDown />
      </div>
    </div>
  );
};

export default NavItems;
