import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={props.sortBy === "Alphabetically"}
          onChange={(e) => props.handleSort(e)}
        />
        Alphabetically
      </label>

      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={props.sortBy === "Price"}
          onChange={(e) => props.handleSort(e)}
        />
        Price
      </label>

      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.handleFilter(e)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
