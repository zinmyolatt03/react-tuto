import React from 'react'
import Singlepost from '../Singlepost/singlepost'

export default function Postlist( { posts }) {
  return (
    <div className='post-list'>
        { posts.map( post => (
            <Singlepost key={post.id} post={post}/>
        ))}
    </div>
  )
}
