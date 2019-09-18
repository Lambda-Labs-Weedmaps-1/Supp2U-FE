import React, { useState } from 'react';
// import { MdSearch } from 'react-icons/md';

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
    resetInputField();
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Search Denver's best eateries"
      />

      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
