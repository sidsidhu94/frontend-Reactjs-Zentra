import React, { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <>
    <div className="relative flex items-center bg-teal-500 p-4">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <HiSearch className="text-xl ml-3 text-gray-600" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="pl-10 bg-gray-300 text-white p-2 rounded-3xl w-full"
        value={query}
        onChange={handleChange}
      />
    </div>
       
    </>
    
    
  );
};

export default SearchBar;
