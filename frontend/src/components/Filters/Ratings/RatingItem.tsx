import React from "react";

type RatingItemProps = {
  rating: {
    id: string;
    title: string;
  };
  isActive: boolean;
  handleRating: (rating: string) => void;
};

const RatingItem: React.FC<RatingItemProps> = ({
  rating,
  isActive,
  handleRating,
}) => {
  const activeStyles =
    "text-[#212121] font-semibold text-[13px] cursor-pointer";
  const inActiveStyles =
    "text-[#878787] font-normal text-[13px] cursor-pointer";

  const onClickRating = () => {
    handleRating(rating.id);
  };

  return (
    <li
      onClick={onClickRating}
      className={isActive ? activeStyles : inActiveStyles}>
      {rating.title}
    </li>
  );
};

export default RatingItem;
