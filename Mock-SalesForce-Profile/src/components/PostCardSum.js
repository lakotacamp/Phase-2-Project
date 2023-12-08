import React from "react";
import {useNavigate} from 'react-router-dom';

function PostCardSum({posts}) {
    const navigate = useNavigate()
  return (
    <li className="card" onClick={()=>navigate(`/bloglist/${posts.id}`)}>
      <div>{posts.title}</div>
      <img src={posts.image}/>
      {/* <div>Your Post</div>
      <div>Now</div> */}
      <div>{posts.opening}</div>
    </li>
  );
}

export default PostCardSum;