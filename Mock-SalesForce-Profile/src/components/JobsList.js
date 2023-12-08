import React from "react";
import JobsCard from "./JobsCard";

function JobsList({jobs,searchJobs}){
    const filteredJobs = jobs.filter((jobs)=>{
        console.log(jobs)
        console.log(searchJobs)
        return jobs.name.toLowerCase().includes(searchJobs.toLowerCase())
    })
    console.log(searchJobs)
    const mappedJobs = filteredJobs.map((jobs)=>{
        return <JobsCard key={jobs.id} jobs={jobs} />
    })

    return (
        <ul className="cards">
            {mappedJobs}
        </ul>
    );
}

export default JobsList;