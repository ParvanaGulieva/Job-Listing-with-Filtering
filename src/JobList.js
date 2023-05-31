import React, { useEffect, useState } from "react";
import JobListItem from "./JobListItem";

const JobList = ({ data, handleFilter, filterList }) => {
  const [filteredJobs, setFilteredJobs] = useState([]);

  const newList = () => {
    if (filterList.length > 0) {
      const newFilteredJobs = data.filter((item) =>
        filterList.every(
          (filterItem) =>
            item.languages.includes(filterItem) ||
            item.tools.includes(filterItem) ||
            item.role === filterItem ||
            item.level === filterItem
        )
      );
      setFilteredJobs(newFilteredJobs);
    } else {
      setFilteredJobs(data);
    }
  };

  useEffect(() => {
    newList();
  }, [filterList]);

  return (
    <div className="job-list">
      {filteredJobs.map((job) => {
        return (
          <JobListItem key={job.id} data={job} handleFilter={handleFilter} />
        );
      })}
    </div>
  );
};

export default JobList;
