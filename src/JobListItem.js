import React from "react";

const JobListItem = (props) => {
  const {
    id,
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props.data;

  let details = [role, ...tools, level, ...languages];

  return (
    <div className={featured ? "job-list-item featured" : "job-list-item"}>
      <div className="job-left">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="job-info">
          <div className="company-section">
            <p className="company">{company}</p>
            <div className="new-featured">
              {props.data.new && <div className="new-div">NEW!</div>}
              {props.data.featured && (
                <div className="featured-div">FEATURED</div>
              )}
            </div>
          </div>
          <p className="position">{position}</p>
          <ul>
            <li>{postedAt} </li>
            <li>{contract}</li>
            <li>{location}</li>
          </ul>
        </div>
      </div>
      <div className="job-right">
        {details.map((detail, id) => (
          <button
            className="selected"
            key={id}
            onClick={() => props.handleFilter(detail)}
          >
            {detail}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobListItem;
