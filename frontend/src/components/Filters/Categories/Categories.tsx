import React, { useState } from "react";
import { CategoryType } from "../../../types/definations";
import CategoryItem from "./CategoryItem";

type CategoriesPropTypes = {
  categories: CategoryType[];
  activeCategory: string;
  handleActiveCategory: (category: string) => void;
};

const Categories: React.FC<CategoriesPropTypes> = ({
  categories,
  activeCategory,
  handleActiveCategory,
}) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleShowMore = () => {
    setShowMore(prevState => !prevState);
  };

  const handleClickCategory = (category: string) => {
    handleActiveCategory(category);
  };

  const lastIndex = showMore ? categories.length : 15;
  return (
    <div className="p-3 border-b border-gray-200">
      <h2 className="uppercase text-xs text-[#212121] font-medium">
        Categories
      </h2>
      <ul className="mt-2">
        {categories?.slice(0, lastIndex).map(category => {
          const isActive = activeCategory === category.slug;
          return (
            <CategoryItem
              category={category}
              isActive={isActive}
              handleClickCategory={handleClickCategory}
            />
          );
        })}
      </ul>
      <button
        type="button"
        onClick={handleShowMore}
        className="text-xs text-[#2478f0] outline-none cursor-pointer">
        {showMore ? "Show less" : "Show 12 more"}
      </button>
    </div>
  );
};

export default Categories;
