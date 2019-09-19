import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

const Search = props => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
    window.location.href = `/search?query=${searchValue}`;
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Search Denver's best eateries"
      />

      <button
        className="searchButton"
        onClick={callSearchFunction}
        title="search"
        type="submit"
        value="Search"
        style={{ background: '#bb1535' }}
      >
        <MdSearch />
      </button>
      {/* <input onClick={callSearchFunction} type="submit" value="SEARCH" /> */}
    </form>
  );
};

export default Search;
