// components/Home.js
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to BarberShop</h1>
      {/* Add content for the homepage */}
      <Link href="/barbers">View Barbers</Link>
      <Link href="/make-appointment"> <br/>Make an Appointment</Link>
    </div>
  );
};

export default Home;
