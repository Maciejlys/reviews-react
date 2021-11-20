import React from "react";
import { SingleReview, ReviewFunctions } from "../Types/reviewsTypes";
import { FaQuoteRight } from "react-icons/fa";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

export const Review: React.FC<SingleReview & ReviewFunctions> = ({
  id,
  name,
  job,
  image,
  text,
  prevPerson,
  nextPerson,
}) => {
  return (
    <>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => prevPerson()}>
          <AiFillLeftCircle />
        </button>
        <button className="next-btn" onClick={() => nextPerson()}>
          <AiFillRightCircle />
        </button>
      </div>
    </>
  );
};
