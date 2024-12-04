interface SortByProps {
  order: string;
  onSortByChange: (order: string) => void;
}

const SortBy: React.FC<SortByProps> = ({ order, onSortByChange }) => {
  const activeStyles = "text-[#2478f0] font-medium border-b-2 border-[#2874f0]";
  const inActiveStyles = "text-[#212121] font-normal";

  return (
    <div className="flex items-center gap-3 mt-3 border-b border-gray-100">
      <h2 className="text-sm text-[#212121] font-medium">Sort By</h2>
      <span
        onClick={() => onSortByChange("asc")}
        className={`text-sm cursor-pointer ${
          order === "asc" ? activeStyles : inActiveStyles
        }`}>
        Price -- Low to High
      </span>
      <span
        onClick={() => onSortByChange("desc")}
        className={`text-sm cursor-pointer ${
          order === "desc" ? activeStyles : inActiveStyles
        }`}>
        Price -- High to Low
      </span>
    </div>
  );
};

export default SortBy;
