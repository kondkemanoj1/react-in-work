import { useState } from "react";
import "./search.css";
const SearchComponent = (props) => {
  const [searchText, setSearchText] = useState("");
  const { handleSearchTextChange, handleSearchClicked } = props;
  return (
    <div className="searchContainer">
      <input
        type="text"
        className="searchInput"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          handleSearchTextChange(e.target.value);
        }}
      />
      <button
        type="button"
        name="search"
        value="Search"
        onClick={(e) => {
          handleSearchClicked(e.target.value);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
