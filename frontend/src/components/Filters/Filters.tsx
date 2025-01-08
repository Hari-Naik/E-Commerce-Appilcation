import React, { useState } from "react";

import ActiveFilters from "./ActiveFilters";
import { CategoryType } from "../../types/definations";

import CustomerRatings from "./Ratings/CustomerRatings";
import Categories from "./Categories/Categories";

type PropTypes = {
  categories: CategoryType[];
  onFilterByCategory: (category: string) => void;
  onClearFilters: () => void;
};

const Filters: React.FC<PropTypes> = ({
  categories,
  onFilterByCategory,
  onClearFilters,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [activeRating, setActiveRating] = useState<string>("");

  const handleActiveRating = (rating: string) => {
    setActiveRating(rating);
  };

  const handleActiveCategory = (category: string) => {
    setActiveCategory(category);
    onFilterByCategory(category);
  };

  const handleClearFilters = () => {
    setActiveCategory("");
    setActiveRating("");
    onClearFilters();
  };

  return (
    <aside className="hidden md:block w-[270px] h-full bg-white shadow-md">
      <ActiveFilters
        activeCategory={activeCategory}
        activeRating={activeRating}
        handleClearFilters={handleClearFilters}
      />
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        handleActiveCategory={handleActiveCategory}
      />
      <CustomerRatings
        activeRating={activeRating}
        handleActiveRating={handleActiveRating}
      />
    </aside>
  );
};

export default Filters;
