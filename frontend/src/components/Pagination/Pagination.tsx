import React from "react";
import { SetURLSearchParams } from "react-router-dom";
import { generatePages } from "../../lib/utility";

type PropTypes = {
  currentPage: number;
  totalPages: number;
  setSearchParams: SetURLSearchParams;
};

const Pagination: React.FC<PropTypes> = ({
  currentPage,
  totalPages,
  setSearchParams,
}) => {
  const handlePagination = (page: number) => {
    setSearchParams(prev => {
      prev.set("skip", (32 * (page - 1)).toString());
      return prev;
    });
  };

  const handlePrevButton = () => {
    setSearchParams(prev => {
      prev.set("skip", (32 * (currentPage - 2)).toString());
      return prev;
    });
  };
  const handleNextButton = () => {
    setSearchParams(prev => {
      prev.set("skip", (32 * currentPage).toString());
      return prev;
    });
  };

  const activeStyles = "bg-[#2874f0] text-white";
  const inActiveStyles = "text-[#212121]";

  const pages = generatePages(currentPage, totalPages);

  return (
    <div className="flex items-center p-3">
      <span className="capitalize text-sm text-[#212121]">
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
              onClick={() => handlePagination(page)}
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
