import { useState } from "react";
import "./search.css";
const SearchComponent = (props) => {
  const [searchText, setSearchText] = useState("");
  const { handleSearchTextChange, handleSearchClicked } = props;
  return (
    <div className="searchContainer">
      <input
        type="text"
        className="searchInput shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          handleSearchTextChange(e.target.value);
        }}
      />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
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
