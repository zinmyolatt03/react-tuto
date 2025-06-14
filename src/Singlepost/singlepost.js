import React from 'react'
import './singlepost.css';

export default function Singlepost({ post }) {
  return (
    <div className='single-post'> { post.title} </div>
  )
}
