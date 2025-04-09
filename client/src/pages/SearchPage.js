import React, { useState } from 'react';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // API call to fetch search results
  };

  return (
    <div>
      <h1>Search Recipes</h1>
      <input
        type="text"
        placeholder="Search by ingredient or cuisine"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {/* Display search results */}
    </div>
  );
}

export default SearchPage;
