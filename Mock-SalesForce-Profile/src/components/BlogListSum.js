import {useState,useEffect} from "react";
import React from "react";
import BlogCardSum from "./BlogCardSum";
import NewPostForm from "./NewPostForm";
import PostCardSum from "./PostCardSum";

function BlogListSum(){
    const [posts,setPosts] = useState([])
    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3001/posts')
        .then(r=>r.json())
        .then(data=>setPosts(data))
    },[])

    useEffect(()=>{
        fetch('http://localhost:3001/Blogs')
        .then(r=>r.json())
        .then(data=>setBlogs(data))
    },[])

    function addPost(newPost){
        fetch('http://localhost:3001/posts',{
          method:"POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newPost)
        })
        .then(r=>r.json())
        .then(data=>setPosts([...posts,data]))
      }

    const mappedPosts = posts.map((posts)=>{
        return <PostCardSum key={posts.id} posts={posts} />

    }) 
    const mappedBlogs = blogs.map((blogs)=>{
        return <BlogCardSum key={blogs.id} blogs={blogs} />
    })

    return (
        <ul className="cards">
            <NewPostForm addPost={addPost}/>
            {mappedPosts}
            {mappedBlogs}
        </ul>
    );
}

export default BlogListSum;