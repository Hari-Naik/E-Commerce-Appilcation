import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import SearchQueryResults from "../SearchQueryResults/SearchQueryResults";

type SearchBarProps = {
  hidden?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ hidden }) => {
  const [query, setQuery] = useState<string>("");
  const [showQueryResults, setShowQueryResults] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setShowQueryResults(true);
  };

  const handleSearchQueryResults = () => {
    setShowQueryResults(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?q=${query}`);
      setShowQueryResults(false);
    }
  };

  return (
    <div
      className={`${hidden} relative flex-1 h-10 bg-[#f0f5ff] rounded-lg text-xs md:text-[17px] text-[#44413f]`}>
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex items-center gap-2">
        <CiSearch className="w-4 h-4 md:w-6 md:h-6 ml-3 " />
        <input
          type="text"
          value={query}
          onChange={handleOnChange}
          onFocus={() => setShowQueryResults(true)}
          className="flex-1 h-full outline-none bg-transparent"
          placeholder="Search for Products, Brands and More"
        />
      </form>

      {/* search query results */}
      {query && showQueryResults && (
        <SearchQueryResults
          query={query}
          handleSearchQueryResults={handleSearchQueryResults}
        />
      )}
    </div>
  );
};

export default SearchBar;
