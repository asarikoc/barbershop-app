import React from 'react';
import Link from 'next/link';

const BarberList = () => {
  return (
    <div>
      <h2>Barber Listings</h2>
      {barbers.map((barber) => (
        <div key={barber.id}>
          <h2>{barber.name}</h2>
          <p>{barber.expertise}</p>
          <Link href={`/barber/${barber.id}`}>
            <a>View Details</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BarberList;
