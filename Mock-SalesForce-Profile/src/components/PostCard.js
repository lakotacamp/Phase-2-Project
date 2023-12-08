import React from "react";

function PostCard({posts}) {
  return (
    <li className="card">
      <div>{posts.title}</div>
      <div>Your Post</div>
      <div>Now</div>
      <img src={posts.image}/>
      <div>{posts.body}</div>
      <div>{posts.opening}</div>
    </li>
  );
}

export default PostCard;