import { useState } from "react";
import "./search.css";
const SearchComponent = () => {
  // const [searchText, setSearchText] = useState < String > "";
  const searchText = "";

  return (
    <div className="searchContainer">
      <input
        type="text"
        className="searchInput"
        placeholder="Search..."
        value={searchText}
      />
      <button type="button" name="search" value="Search">
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
