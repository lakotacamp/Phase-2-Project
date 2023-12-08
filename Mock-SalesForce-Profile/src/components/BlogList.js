import React from "react";
import BlogCard from "./BlogCard";
import PostCard from "./PostCard";

function BlogList({blogs,posts}){
    const mappedPosts = posts.map((posts)=>{
        return <PostCard key={posts.id} posts={posts} />
    })    
    const mappedBlogs = blogs.map((blogs)=>{
        return <BlogCard key={blogs.id} blogs={blogs} />
    })

    return (
        <ul className="cards">
            {mappedPosts}
            {mappedBlogs}
        </ul>
    );
}

export default BlogList;