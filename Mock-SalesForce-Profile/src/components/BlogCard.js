import React from "react";

function BlogCard({blogs}) {
  return (
    <li className="card">
      <div>{blogs.title}</div>
      <div>{blogs.author}</div>
      <div>{blogs.date}</div>
      <div>{blogs.video}</div>
      <div>{blogs.divider}</div>
    </li>
  );
}

export default BlogCard;