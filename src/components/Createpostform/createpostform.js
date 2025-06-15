import React, { useState } from 'react'
import "./createpostform.css"

export default function Createpostform( { addPost, setShowModal }) {
    
    let [ postName, setPostName ] = useState("");

    const resetForm = () => {
        setPostName("");
    }

    const createPost = (e) => {
        e.preventDefault();
        let post = {
            id : Math.ceil(Math.random() * 1000),
            title : postName,
        }
        resetForm();
        addPost( post );
        setShowModal(false)
    } 

  return (
    <div className="container">
        <form className="post-form" onSubmit={createPost}>
            <h1>Create Post</h1>

            <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={postName} onChange={(e) => setPostName(e.target.value)} placeholder="Enter your post title..." />
            </div>

            <div className="form-control">
                <button type='submit'>Create Post</button>
            </div>
            <div className={`form-control`}>
                <button type='button' onClick={resetForm}> reset form </button>
            </div>
        </form>
    </div>
  )
}
