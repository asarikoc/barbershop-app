import React, { useState, useEffect } from 'react';
import Review from './Review';

const BarberDetails = ({ barberId }) => {
  const [barberDetails, setBarberDetails] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch barber details and reviews based on `barberId` from your API or database.
    // Update the `barberDetails` and `reviews` state based on the fetched data.
  }, [barberId]);

  return (
    <div>
      {barberDetails ? (
        <div>
          <h2>{barberDetails.name}</h2>
          <p>Expertise: {barberDetails.expertise}</p>
          {/* Display other barber details here. */}
        </div>
      ) : (
        <p>Loading barber details...</p>
      )}

      <h3>Reviews</h3>
      {reviews.map((review) => (
        <Review
          key={review.id}
          customerName={review.customerName}
          rating={review.rating}
          comment={review.comment}
        />
      ))}
    </div>
  );
};

export default BarberDetails;
