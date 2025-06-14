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

  return (
    <>
      <Navbar />
      <div>
          <h2> posts </h2>
          <ul> 
              { posts.map( post => (
                <li key={post.id}> { post.title } </li>
              ))}
          </ul>
      </div>
    </>
  );
}

export default App;
