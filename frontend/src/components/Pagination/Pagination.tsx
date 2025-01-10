import React from "react";
import { generatePages } from "../../lib/utility";
import { useQueryParams } from "../../hooks/useQueryParams";

type PropTypes = {
  currentPage: number;
  totalPages: number;
};

const Pagination: React.FC<PropTypes> = ({ currentPage, totalPages }) => {
  const { updateQuery } = useQueryParams();

  const handlePagination = (page: number) => {
    return function () {
      updateQuery("skip", (32 * (page - 1)).toString());
    };
  };

  const handlePrevButton = () => {
    updateQuery("skip", (32 * (currentPage - 2)).toString());
  };
  const handleNextButton = () => {
    updateQuery("skip", (32 * currentPage).toString());
  };

  const activeStyles = "bg-[#2874f0] text-white";
  const inActiveStyles = "text-[#212121]";

  const pages = generatePages(currentPage, totalPages);

  return (
    <div className="flex items-center p-3">
      <span className="hidden sm:block capitalize text-sm text-[#212121]">
        page {currentPage} of {totalPages}
      </span>
      <nav className="flex-1 flex items-center justify-center gap-2">
        {currentPage !== 1 && (
          <button
            type="button"
            onClick={handlePrevButton}
            className="uppercase text-xs text-[#2874f0] font-semibold outline-none">
            previous
          </button>
        )}
        {pages.map(page => {
          const isActive = currentPage === page;
          return (
            <button
              type="button"
              key={page}
              //   onClick={() => handlePagination(page)}
              onClick={handlePagination(page)}
              className={`w-8 h-8 rounded-full text-sm font-medium outline-none ${
                isActive ? activeStyles : inActiveStyles
              }`}>
              {page}
            </button>
          );
        })}
        {currentPage !== totalPages && (
          <button
            type="button"
            onClick={handleNextButton}
            className="uppercase text-xs text-[#2874f0] font-semibold outline-none">
            next
          </button>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
