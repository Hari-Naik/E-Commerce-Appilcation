import { useQueryParams } from "../../hooks/useQueryParams";

interface SortByProps {
  activeOrder: string;
  //   onSortByChange?: (sortBy: string, order: string) => void;
}

const SortBy: React.FC<SortByProps> = ({ activeOrder }) => {
  const { updateQuery } = useQueryParams();

  const activeStyles = "text-[#2478f0] font-medium border-b-2 border-[#2874f0]";
  const inActiveStyles = "text-[#212121] font-normal";

  const handleSortByPrice = (order: string) => {
    updateQuery("sortBy", "price");
    updateQuery("order", order);
  };

  //   const handleSortBy = (
  //     order: string
  //   ): ((sortBy: string, order: string) => void) => {
  //     return onSortByChange("price", order);
  //   };

  return (
    <div className="flex items-center gap-3 mt-3 border-b border-gray-100">
      <h2 className="text-sm text-[#212121] font-medium">Sort By</h2>
      <span
        onClick={() => handleSortByPrice("asc")}
        className={`text-sm cursor-pointer ${
          activeOrder === "asc" ? activeStyles : inActiveStyles
        }`}>
        Price -- Low to High
      </span>
      <span
        onClick={() => handleSortByPrice("desc")}
        className={`text-sm cursor-pointer ${
          activeOrder === "desc" ? activeStyles : inActiveStyles
        }`}>
        Price -- High to Low
      </span>
    </div>
  );
};

export default SortBy;
