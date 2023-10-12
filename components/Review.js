import React from 'react';

const Review = ({ customerName, rating, comment }) => {
  return (
    <div className="review">
      <h3>{customerName}</h3>
      <div className="rating">Rating: {rating} stars</div>
      <p>{comment}</p>
    </div>
  );
};

export default Review;
