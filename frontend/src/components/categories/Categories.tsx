import { CATEGORIES } from "../../assets/data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <ul className="w-full bg-white flex items-center justify-normal space-x-6 lg:space-x-11 overflow-x-auto xl:overflow-x-hidden py-3 px-[6%]">
      {CATEGORIES.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default Categories;
