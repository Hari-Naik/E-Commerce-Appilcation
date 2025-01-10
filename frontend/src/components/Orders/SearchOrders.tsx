import { FaSearch } from "react-icons/fa";

const SearchOrders = () => {
  return (
    <div className="w-full h-10 flex items-center hover:shadow-md bg-white border border-gray-300 md:border-none rounded-s">
      <input
        className="h-full flex-1 md:px-3 rounded-s md:border md:border-gray-300 text-sm order-2 md:order-1 outline-none"
        type="text"
        placeholder="Search your order here"
      />
      <button className="h-full flex items-center gap-2 md:bg-[#2874f0] text-xs text-white font-semibold px-3 rounded-e order-1 md:order-2">
        <FaSearch className="w-3 h-3 text-[#878787] md:text-white" />
        <span className="hidden md:block">Search Orders</span>
      </button>
    </div>
  );
};

export default SearchOrders;
