// UserProfile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaUser, FaEnvelope, FaCalendar, FaMapMarkerAlt, FaPhone, FaLock } from 'react-icons/fa';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [countryFlag, setCountryFlag] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api/?login.uuid=${userId}`);
        setUser(response.data.results[0]);

        // Fetch country flag using Rest Countries API
        const countryResponse = await axios.get(`https://restcountries.com/v3.1/alpha/${response.data.results[0].nat}`);
        setCountryFlag(countryResponse.data[0].flags.svg);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (!user) {
    return <p>Loading...</p>;
  }

  // Function to generate Google Maps URL based on latitude and longitude
  const getGoogleMapsUrl = (latitude, longitude) => {
    return `https://www.google.com/maps/place/${latitude},${longitude}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-wheat">
      <div className="w-2/3 bg-cream p-8 rounded-lg shadow-lg text-center">
        <div className="mb-6">
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
        </div>

        <div className="flex justify-center mb-6">
          {/* You can add additional styling for these icons */}
          <FaUser className="text-2xl mx-3 inline-block" />
          <FaEnvelope className="text-2xl mx-3 inline-block" />
          <FaCalendar className="text-2xl mx-3 inline-block" />
          <FaMapMarkerAlt className="text-2xl mx-3 inline-block" />
          <FaPhone className="text-2xl mx-3 inline-block" />
          <FaLock className="text-2xl mx-3 inline-block" />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
          <p className="text-gray-600 mb-2">{user.email}</p>

          {/* Display Google Maps link based on location */}
          <p className="mb-2">
            <a
              href={getGoogleMapsUrl(user.location.coordinates.latitude, user.location.coordinates.longitude)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View on Google Maps
            </a>
          </p>

          {/* Display nationality flag */}
          {countryFlag && <img src={countryFlag} alt={`${user.nat} flag`} className="w-16 h-16 rounded-full mx-auto mb-4" />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
