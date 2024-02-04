// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from 'react-bootstrap';
import GenderFilter from './GenderFilter';
import SearchInput from './SearchInput';
import UserProfileCard from './UserProfileCard';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genderFilter, setGenderFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://randomuser.me/api/?page=${currentPage}&results=10&gender=${genderFilter}`
        );
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

      <GenderFilter handleGenderChange={handleGenderChange} genderFilter={genderFilter} />

      <SearchInput handleSearchChange={handleSearchChange} searchQuery={searchQuery} />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <li key={user.login.uuid} className="mb-8">
            <UserProfileCard user={user} />
          </li>
        ))}
      </ul>

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
