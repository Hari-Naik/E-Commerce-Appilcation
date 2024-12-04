import React, { useState } from "react";

import AllCategories from "./AllCategories";
import CustomerRatings from "./CustomerRatings";
import ActiveFilters from "./ActiveFilters";
import { CategoryType } from "../../types/definations";

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
  const [activeRating, setActiveRating] = useState<number | null>(null);

  const handleActiveRating = (rating: number) => {
    // sortProductsByRating(rating);
    setActiveRating(rating);
  };

  const handleActiveCategory = (category: string) => {
    setActiveCategory(category);
    onFilterByCategory(category);
  };

  const handleClearFilters = () => {
    setActiveCategory("");
    setActiveRating(null);
    onClearFilters();
  };

  return (
    <aside className="hidden md:block w-[270px] h-full bg-white shadow-md">
      <ActiveFilters
        activeCategory={activeCategory}
        activeRating={activeRating}
        handleClearFilters={handleClearFilters}
      />
      <AllCategories
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
