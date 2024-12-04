import { BsBoxSeam } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdCardGiftcard, MdLogout, MdOutlineLocalOffer } from "react-icons/md";
import { PiGiftLight, PiStarFourBold } from "react-icons/pi";

import { RxAvatar } from "react-icons/rx";
import DropDownItem from "./DropDownItem";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

import { useAuth } from "../../hooks/useAuth";

const AccountDropDown = () => {
  const { user } = useAuth();

  const handleLogout = () => {
    auth.signOut();
    toast.success("Logged out");
  };

  return (
    <div className="hidden md:group-hover:block absolute top-10 z-[999] shadow-3xl rounded-b-lg bg-white min-w-fit h-fit text-sm">
      {!user && (
        <Link to="/account/login">
          <div className="w-[256px] flex items-center justify-between py-2 px-4 border-b text-base">
            <span>New customer?</span>
            <span className="text-[#2a55e5] font-semibold">Sign Up</span>
          </div>
        </Link>
      )}
      <DropDownItem Icon={RxAvatar} text="My Profile" link="/account" />
      {user && <DropDownItem Icon={TbCoinRupeeFilled} text="SuperCoin Zone" />}
      <DropDownItem Icon={PiStarFourBold} text="Flipkart Plus zone" />
      <DropDownItem Icon={BsBoxSeam} text="Orders" link="/account/orders" />
      <DropDownItem Icon={CiHeart} text="Wishlist" link="/wishlist" />
      <DropDownItem
        Icon={user ? MdOutlineLocalOffer : PiGiftLight}
        text={user ? "Coupons" : "Rewards"}
      />
      <DropDownItem Icon={MdCardGiftcard} text="Gift cards" />
      {user && (
        <DropDownItem Icon={IoNotificationsOutline} text="Notifications" />
      )}
      {user && (
        <DropDownItem onClick={handleLogout} Icon={MdLogout} text="Logout" />
      )}
    </div>
  );
};

export default AccountDropDown;
