import React from "react";

function JobsCard({jobs}) {
  return (
    <li className="card">
      <div>{jobs.name}</div>
      <div>{jobs.location}</div>
      <div>{jobs.tag}</div>
    </li>
  );
}

export default JobsCard;