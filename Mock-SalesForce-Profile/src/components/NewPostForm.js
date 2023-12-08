import React from "react";

function NewPostForm({addPost}) {
  function submit(e){
    e.preventDefault()
    const newPost = {
      title: e.target.title.value,
      body: e.target.body.value,
      image: e.target.image.value,
      opening: e.target.opening.value
    }

    addPost(newPost)
    
  }
  return (
    <div className="new-blog-form">
      <h2>New Post</h2>
      <form onSubmit={(e)=>submit(e)}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="body" placeholder="Body" />
        <input type="text" name="image" placeholder="Cover Image URL" />
        <input type="text" name="opening" placeholder="Abstract" />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default NewPostForm;