// UserProfileCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const UserProfileCard = ({ user }) => {
  return (
    <Link to={`/profile/${user.login.uuid}`} className="no-underline">
      <div className="border p-4 rounded-md transition-transform transform hover:scale-105">
        <img src={user.picture.medium} alt={user.name.first} className="w-20 h-20 rounded-full mx-auto mb-4" />
        <div className="text-center">
          <h2 className="text-lg font-semibold">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserProfileCard;
