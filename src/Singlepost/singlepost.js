import React from 'react'
import './singlepost.css';
import styles from './singlepost.module.css';

export default function Singlepost({ post, danger = false }) {
  let new_class = danger ? "border-red" : "border-blue";
  return (
    <div className  ={`single-post ${new_class} ${styles.card}`}> 
     <h3> { post.title} </h3>
     <p> {post.status} </p>
     </div>
  )
}
