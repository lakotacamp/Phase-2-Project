import React from "react";
import {useNavigate} from 'react-router-dom';

function SearchJobs({setSearchJobs}) {
    const navigate = useNavigate()
  return (
    <>
    <div className="searchbar">
      <label htmlFor="search">Search Jobs:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a Job to search..."
        onChange={(e) => setSearchJobs(e.target.value)}
      />
    </div>
    <button onClick={()=>navigate('/joblist')}>Search</button>
    </>
  );
}

export default SearchJobs;