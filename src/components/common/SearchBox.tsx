import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ handleOnChange }: any) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div data-testid="search-box" className="search-box">
      <input
        className={`${searchActive ? 'active' : 'inactive'}`}
        placeholder="Search"
        onChange={(event: any) => handleOnChange(event)}
      />

      <FaSearch
        data-testid="search-icon"
        className="icon"
        onClick={() => {
          setSearchActive(!searchActive);
        }}
      />
    </div>
  );
};

export default SearchBox;
