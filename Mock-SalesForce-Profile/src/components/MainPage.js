import React, {useState,useEffect} from "react";
import BlogListSum from "./BlogListSum";
import SearchJobs from "./SearchJobs";
import ProfileList from "./ProfileList.js";

function MainPage({jobs,blogs,setSearchJobs}) {
    const [profiles,setProfiles] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3001/profiles')
        .then(r=>r.json())
        .then(data=>setProfiles(data))
      },[])
    
      function patchComment(newComment,id){
        fetch(`http://localhost:3001/profiles/${id}`,{
          method:"PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            comment: newComment
          })
        })
        .then(r=>r.json())
        .then(data=>{
          const newComment = profiles.map((profile)=>{
            if(profile.id===id){
              return data
            }
            return profile
          })
          setProfiles(newComment)
        })
      }

return (
<main>
    <SearchJobs jobs={jobs} setSearchJobs={setSearchJobs} />
    <BlogListSum blogs={blogs} />
    <ProfileList profiles={profiles} patchComment={patchComment}/>
</main>
);
}

export default MainPage;