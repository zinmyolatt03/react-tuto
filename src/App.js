import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Postlist from './Postlist/postlist';

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
    // this is react-fragment 
    <>
      <Navbar/>
      {/*  this is using props */}
      <Postlist posts={posts}/>
    </>
  );
}

export default App;
