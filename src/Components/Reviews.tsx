import React, { useState } from "react";
import { Review } from "./Review";
import { ReviewsProps } from "../Types/reviewsTypes";

export const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const [index, SetIndex] = useState(0);

  const checkIndex = (index: number) => {
    if (index > reviews.length - 1) {
      return 0;
    }
    if (index < 0) {
      return reviews.length - 1;
    }
    return index;
  };

  const nextPerson = () => {
    SetIndex(checkIndex(index + 1));
  };

  const prevPerson = () => {
    SetIndex(checkIndex(index - 1));
  };

  return (
    <article className="review">
      <Review
        prevPerson={prevPerson}
        nextPerson={nextPerson}
        {...reviews[index]}
      />
    </article>
  );
};
