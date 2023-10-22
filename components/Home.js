import React, { useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [nearbyBarbers, setNearbyBarbers] = useState([]);

  const handleSearch = async () => {
    try {
    
      //const response = await fetch(`https://maps.googleapis.com/maps/api/nearbysearch?latitude=${latitude}&longitude=${longitude}`);
      console.log('Before fetch');
      const response = await fetch('https://localhost:7282/api/nearbysearch?latitude=37&longitude=-112');
      console.log('After fetch');
      if (response.ok) {
        const data = await response.json();
        setNearbyBarbers(data);

      } else {
        // Handle error responses here
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Welcome to BarberShop</h1>
      <form>
        <div>
          <label>Latitude:</label>
          <input
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <div>
          <label>Longitude:</label>
          <input
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
        <button onClick={handleSearch}>Search Nearby Barbers</button>
      </form>

      {/* Display the list of nearby barbers */}
      {nearbyBarbers.length > 0 && (
        <div>
          <h2>Nearby Barbers</h2>
          <ul>
            {nearbyBarbers.map((barber, index) => (
              <li key={index}>{barber.name}</li>
              // You can display more information about each barber here
            ))}
          </ul>
        </div>
      )}

      <Link href="/barbers">View Barbers</Link>
      <Link href="/make-appointment">
        <br />
        Make an Appointment
      </Link>
    </div>
  );
};

export default Home;
