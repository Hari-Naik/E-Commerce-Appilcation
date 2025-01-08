import { FaSearch } from "react-icons/fa";

const SearchOrders = () => {
  return (
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
  );
};

export default SearchOrders;
