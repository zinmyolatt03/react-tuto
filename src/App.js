import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';

function App() {

  let [ posts, setPosts ] = useState([
                          {
                            id : 1, 
                            title : 'post one',
                          },
                          {
                            id : 2, 
                            title : 'post two',
                          },
                          {
                            id : 3, 
                            title : 'post three',
                          },
                        ]);

  const deletePost = ( id ) => {
    setPosts( (prevState) => prevState.filter( post => post.id !== id ))
  }

  return (
    <>
      <Navbar />
      <div>
          <h2> posts </h2>

          <ul> 
              { posts && posts.map( post => (
                <div key={post.id}>
                    <li> { post.title } 
                      <button onClick={() => deletePost(post.id)}> delete </button> 
                    </li>
                </div>
              )) }
          </ul>

          { !posts.length && 
          <p> no posts avaiable here </p>
          }
      </div>
    </>
  );
}

export default App;
