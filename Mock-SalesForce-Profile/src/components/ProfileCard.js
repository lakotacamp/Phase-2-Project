import React from "react";

function ProfileCard({profiles,patchComment}) {
    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target.comment)
        patchComment(e.target.comment.value,profiles.id)
    }
    
  return (
    <li className="card">
     <h5>{profiles.header}</h5>
     <form onSubmit={(e)=>handleSubmit(e)}>
        <input name="comment"placeholder="New comment"></input>
      </form>
    </li>
  );
}

export default ProfileCard;