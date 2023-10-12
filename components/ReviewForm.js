import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [customerName, setCustomerName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the review data and call the onSubmit function to submit the review
    const reviewData = {
      customerName,
      rating,
      comment,
    };
    onSubmit(reviewData);
    // Reset the form
    setCustomerName('');
    setRating(0);
    setComment('');
  };

  return (
    <div className="review-form">
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            min="1"
            max="5"
            onChange={(e) => setRating(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
