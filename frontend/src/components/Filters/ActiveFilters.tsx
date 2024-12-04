import React from "react";
import { BsStarFill } from "react-icons/bs";

type PropTypes = {
  activeCategory: string;
  activeRating: number | null;
  handleClearFilters: () => void;
};

const ActiveFilters: React.FC<PropTypes> = ({
  activeCategory,
  activeRating,
  handleClearFilters,
}) => {
  return (
    <div className="flex flex-col gap-2 p-3 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-[#212121] font-medium">Filters</h2>
        <p
          onClick={handleClearFilters}
          className="uppercase text-xs text-[#2874f0] font-semibold cursor-pointer">
          Clear all
        </p>
      </div>
      {(activeCategory || activeRating) && (
        <div className="flex items-center gap-2">
          {activeCategory && (
            <div className="bg-[#e0e0e0] p-1 rounded-sm text-xs text-[#212121]">
              <span>{activeCategory}</span>
            </div>
          )}
          {activeRating && (
            <div className="flex items-center gap-1 bg-[#e0e0e0] p-1 rounded-sm text-xs text-[#212121]">
              <span>{activeRating}</span>
              <BsStarFill className="h-2" />
              <span>& above</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ActiveFilters;
