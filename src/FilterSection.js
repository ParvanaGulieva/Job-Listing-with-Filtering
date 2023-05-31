import React from "react";

const FilterSection = ({ filterList, clearFilterList, removeFilter }) => {
  return (
    <div className="filter-section">
      <div className="btn-container">
        <div className="selected-btns">
          {filterList.map((filterItem) => {
            return (
              <div className="selected-btn" key={filterItem}>
                <button className="selected">{filterItem}</button>
                <button
                  className="remove"
                  onClick={() => removeFilter(filterItem)}
                >
                  <img src="./images/icon-remove.svg" alt="" />
                </button>
              </div>
            );
          })}
        </div>
        <button className="clear" onClick={clearFilterList}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
