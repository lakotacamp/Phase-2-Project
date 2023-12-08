import React from "react";
import ProfileCard from "./ProfileCard";

function ProfileList({profiles,patchComment}) {
const filteredProfiles = profiles.filter((profiles)=>{
    return profiles.comment.toLowerCase().includes("".toLowerCase())
})

    const mappedProfiles = filteredProfiles.map((profiles)=>{
        return <ProfileCard key={profiles.id} profiles={profiles} patchComment={patchComment} />
      })

  return (
    <ul className="cards">
        {mappedProfiles}
    </ul>
  );
}

export default ProfileList;