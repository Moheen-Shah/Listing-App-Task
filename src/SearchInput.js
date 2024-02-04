// SearchInput.js
import React from 'react';

const SearchInput = ({ handleSearchChange, searchQuery }) => {
  return (
    <div className="mb-6">
      <label className="text-gray-700 mr-4">Search:</label>
      <input
        type="text"
        className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
        onChange={handleSearchChange}
        value={searchQuery}
      />
    </div>
  );
};

export default SearchInput;
