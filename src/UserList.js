// UserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genderFilter, setGenderFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api/?page=${currentPage}&results=10&gender=${genderFilter}`);
        setUsers(response.data.results);
        setTotalPages(10);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage, genderFilter]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleGenderChange = (selectedGender) => {
    setGenderFilter(selectedGender);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    `${user.name.title} ${user.name.first} ${user.name.last}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">User Listing</h1>

      {/* Gender Filter */}
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

      {/* Search Input */}
      <div className="mb-6">
        <label className="text-gray-700 mr-4">Search:</label>
        <input
          type="text"
          className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
          onChange={handleSearchChange}
          value={searchQuery}
        />
      </div>

      {/* Render User List */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <li key={user.login.uuid} className="mb-8">
            <Link to={`/profile/${user.login.uuid}`} className="no-underline">
              <div className="border p-4 rounded-md transition-transform transform hover:scale-105">
                <img src={user.picture.medium} alt={user.name.first} className="w-20 h-20 rounded-full mx-auto mb-4" />
                <div className="text-center">
                  <h2 className="text-lg font-semibold">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Render Pagination */}
      <Pagination className="mt-8 flex justify-center">
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
            className="mx-2 border px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default UserList;
