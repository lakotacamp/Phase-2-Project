import React from "react";
import {useNavigate} from 'react-router-dom';

function BlogCardSum({blogs}) {
    const navigate = useNavigate()
  return (
    <li className="card" onClick={()=>navigate(`/bloglist/${blogs.id}`)}>
      <div>{blogs.title}</div>
      <img src={blogs.image[0]}/>
      <div>{blogs.author}</div>
      <div>{blogs.date}</div>
      <div>{blogs.opening}</div>
    </li>
  );
}

export default BlogCardSum;