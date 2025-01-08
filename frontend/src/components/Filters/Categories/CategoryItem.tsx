import React from "react";
import { CategoryType } from "../../../types/definations";

type CategoryItemProps = {
  category: CategoryType;
  isActive: boolean;
  handleClickCategory: (slug: string) => void;
};

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  isActive,
  handleClickCategory,
}) => {
  const onClickCategory = () => {
    handleClickCategory(category.slug);
  };
  return (
    <li onClick={onClickCategory} className="cursor-pointer">
      <span
        className={`text-[13px] ${
          isActive ? "text-[#212121] font-semibold" : "text-[#878787]"
        }`}>
        {category.name}
      </span>
    </li>
  );
};

export default CategoryItem;
