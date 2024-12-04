import { FaSearch } from "react-icons/fa";
import Breadcrumbs from "../components/Breadcrumbs/BreadCrumbs";

const Orders = () => {
  return (
    <div className="w-full py-10">
      <div className="w-full sm:w-[80%] lg:w-[60%] mx-auto">
        <Breadcrumbs />
        <div className="w-full flex h-9 hover:shadow-md">
          <input
            className="h-full flex-1 px-3 rounded-s border border-gray-300 text-sm"
            type="text"
            placeholder="Search your orders here"
          />
          <button className="h-full flex items-center gap-2 bg-[#2874f0] text-xs text-white font-semibold px-3 rounded-e">
            <FaSearch className="w-3 h-3" />
            <span>Search Orders</span>
          </button>
        </div>

        <ul className="w-full flex flex-col gap-3 mt-3">
          <li className="w-full flex gap-8 bg-white px-10 py-4 border border-gray-300 hover:shadow-md cursor-pointer rounded">
            {/* image */}
            <div className="h-[65px] w-[65px]">
              <img
                src="https://rukminim2.flixcart.com/image/200/200/kic17rk0-0/headphone/k/u/9/242-rockerzz-boat-original-imafy5azmzd3hrvt.jpeg?q=90"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[#212121]">
                boAt Bassheads 242 Wired Headset
              </span>
              <span className="text-sm text-[#212121]">$5</span>
              {/* price */}
            </div>
          </li>
          <li className="w-full flex gap-8 bg-white px-10 py-4 border border-gray-300 hover:shadow-md cursor-pointer rounded">
            {/* image */}
            <div className="h-[65px] w-[65px]">
              <img
                src="https://rukminim2.flixcart.com/image/200/200/kic17rk0-0/headphone/k/u/9/242-rockerzz-boat-original-imafy5azmzd3hrvt.jpeg?q=90"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[#212121]">
                boAt Bassheads 242 Wired Headset
              </span>
              <span className="text-sm text-[#212121]">$5</span>
              {/* price */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Orders;
