import React, { useState } from "react";
import JobList from "./JobList";
import FilterSection from "./FilterSection";
import data from "./data.json";

function App() {
  const [filterList, setFilterList] = useState([]);

  const handleFilter = (item) => {
    if (!filterList.includes(item)) {
      setFilterList([...filterList, item]);
    }
  };

  const removeFilter = (item) => {
    const newFilter = filterList.filter((key) => key != item);
    setFilterList(newFilter);
  };

  const clearFilterList = () => {
    setFilterList([]);
  };

  return (
    <>
      <div className="header">
        <img src="./images/bg-header-desktop.svg" alt="header-img" />
      </div>

      <div className="main">
        {filterList.length > 0 && (
          <FilterSection
            filterList={filterList}
            clearFilterList={clearFilterList}
            removeFilter={removeFilter}
          />
        )}
        <JobList
          data={data}
          handleFilter={handleFilter}
          filterList={filterList}
        />
      </div>
    </>
  );
}

export default App;
