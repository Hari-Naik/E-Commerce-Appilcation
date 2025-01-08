import React from "react";
import { useQueryParams } from "../../../hooks/useQueryParams";
import RatingItem from "./RatingItem";

const ratings = [
  {
    id: "asc",
    title: "Low to High",
  },
  {
    id: "desc",
    title: "High to Low",
  },
];

interface PropType {
  activeRating: string;
  handleActiveRating: (rating: string) => void;
}

const CustomerRatings: React.FC<PropType> = ({
  activeRating,
  handleActiveRating,
}) => {
  const { updateQuery } = useQueryParams();

  const handleClickRating = (rating: string) => {
    updateQuery("sortBy", "rating");
    updateQuery("order", rating);
    handleActiveRating(rating);
  };

  return (
    <div className="w-full p-3">
      <h2 className="text-xs text-[#212121] font-sans font-medium uppercase">
        customer ratings
      </h2>
      <ul className="flex flex-col gap-1 mt-3">
        {ratings.map(rating => {
          const isActive = activeRating === rating.id;

          return (
            <RatingItem
              key={rating.id}
              rating={rating}
              isActive={isActive}
              handleRating={handleClickRating}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CustomerRatings;
