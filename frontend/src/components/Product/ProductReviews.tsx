import { FC } from "react";
import { ReviewsType } from "../../types/definations";
import Rating from "../Rating";

interface ProductReviewsProps {
  overallRating: number;
  reviews: ReviewsType[];
}

const ProductReviews: FC<ProductReviewsProps> = ({
  overallRating,
  reviews,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6 mt-4">
        <h2 className="text-xl font-medium text-[#212121]">
          Ratings & Reviews
        </h2>
        <Rating rating={overallRating} reviews={reviews.length} />
      </div>
      <ul className="flex flex-col gap-4">
        {reviews.map((review, index) => (
          <li
            key={review.reviewerName}
            className={`flex flex-col gap-2 ${
              index !== reviews.length - 1 && "border-b-2 border-gray-200"
            } pb-4`}>
            <div className="flex items-center gap-3">
              <Rating rating={review.rating} />
              <span className="text-sm text-[#212121]">{review.comment}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#878787] ">
              <span className="font-medium">{review.reviewerName}</span>
              <span>{review.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductReviews;
