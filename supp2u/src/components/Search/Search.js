import React, { useState } from 'react';
import Axios from 'axios';

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
    window.location.href = `/search?query=${searchValue}`;

    // fetch(`${process.env.REACT_APP_BACKEND_URL}search?query=${searchValue}`
    // Axios.get(
    //   `${process.env.REACT_APP_BACKEND_URL}search?query=${searchValue}`
    // );
    // resetInputField();
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
