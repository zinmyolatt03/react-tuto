import React, { useRef, useState } from 'react'
import './postform.css'

export default function Postform( { closeModal, addPost, setShowModal }) {

    let [ title, setTitle ] = useState("");
    let [ status , setStatus ] = useState("upcoming");

    const createPost = (e) => {
        e.preventDefault();
        let post = {
            id :  10,
            title : title,
            status : status,
        }
        addPost( post );
        setShowModal(false)
        
    }
  return (
    <div className="container">
        <form className="post-form" onSubmit={createPost}>
            <h1>Create Post</h1>
            <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} id="title" placeholder="Enter your post title..." />
            </div>

            <div className="form-control">
                <label htmlFor=""> Status </label>
                <select name='status' id='' value={status} onChange={ (e) => setStatus(e.target.value)}>
                    <option value='dropped'> Dropped </option>
                    <option value='ongoing'> Ongoing </option>
                    <option value='upcoming'> Upcoming </option>
                 </select>
            </div>

            <div className="form-control">
                <button type="submit">Create Post</button>
            </div>

            <button type='button' onClick={closeModal}> close </button>
        </form>
    </div>
  )
}
