import React from "react";
import { BsStarFill } from "react-icons/bs";

const ratings = [
  {
    id: 4,
    rating: 4,
  },
  {
    id: 3,
    rating: 3,
  },
];

interface PropType {
  activeRating: number | null;
  handleActiveRating: (rating: number) => void;
  sortProductsByRating?: (rating: number) => void;
}

const CustomerRatings: React.FC<PropType> = ({
  activeRating,
  handleActiveRating,
  sortProductsByRating,
}) => {
  const handleClickRating = (rating: number) => {
    // sortProductsByRating(rating);
    handleActiveRating(rating);
  };

  return (
    <div className="w-full p-3">
      <h2 className="text-xs text-[#212121] font-sans font-medium uppercase">
        customer ratings
      </h2>
      <ul className="mt-3">
        {ratings.map(item => (
          <li
            onClick={() => handleClickRating(item.rating)}
            key={item.id}
            className={`flex items-center gap-1 text-[13px] text-[#212121] my-1 outline-none ${
              activeRating === item.rating && "font-semibold"
            } cursor-pointer`}>
            <span>{item.rating}</span>
            <BsStarFill className="h-3" />
            <span>& above</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerRatings;
