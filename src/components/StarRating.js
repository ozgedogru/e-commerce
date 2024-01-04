import React from "react";

const StarRating = ({ rating }) => {
  const maxRating = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex justify-start">
      {Array.from({ length: fullStars }, (_, index) => (
        <i key={index} className="fa-solid fa-star text-yellow"></i>
      ))}

      {halfStar && <i className="fa-solid fa-star-half-stroke text-yellow"></i>}

      {Array.from(
        { length: maxRating - fullStars - (halfStar ? 1 : 0) },
        (_, index) => (
          <i
            key={index + fullStars}
            className="fa-regular fa-star text-yellow"
          ></i>
        )
      )}
    </div>
  );
};

export default StarRating;
