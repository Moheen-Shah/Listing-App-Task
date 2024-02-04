// GenderFilter.js
import React from 'react';

const GenderFilter = ({ handleGenderChange, genderFilter }) => {
  return (
    <div className="mb-6">
      <label className="text-gray-700 mr-4">Filter by Gender:</label>
      <select
        className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
        onChange={(e) => handleGenderChange(e.target.value)}
        value={genderFilter}
      >
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default GenderFilter;
