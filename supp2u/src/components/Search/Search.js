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
    <form
      className="search"
      style={{
        borderTop: 'solid black',
        borderBottom: 'solid black',
        borderWidth: 'thin',
        borderRadius: '0px'
      }}
    >
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Search Denver's best eateries"
        style={{ borderBottom: 'none' }}
      />
      <button
        className="search-button"
        onClick={callSearchFunction}
        title="search"
        type="submit"
        value="Search"
        style={{
          background: '#bb1535',
          cursor: 'pointer',
          height: '5.5vh'
        }}
      >
        <MdSearch
          style={{
            verticalAlign: 'center'
          }}
        />
      </button>
    </form>
  );
};

export default Search;
