import { use, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Postlist from './Postlist/postlist';
import Modal from './Modal/modal';
import Createpostform from './components/Createpostform/createpostform';

function App() {

  let [ showModal, setShowModal ] = useState( false);

     const closeModal = () => {
        setShowModal( false );
    }

  let [ posts, setPosts ] = useState([
                          {
                            id : 1, 
                            title : 'post one',
                          },
                          {
                            id : 2, 
                            title : 'post two',
                          },
                        ]);


  const addPost = ( post ) => {
    setPosts( (prevState) => [ ...posts, post]);
  }

  return (
    // this is react-fragment 
    <>
      <Navbar setShowModal={setShowModal}/>
      <Postlist posts={posts}/>
      {/* using default children prop in modal section */}
      { showModal && <Modal setShowModal={setShowModal}> 
          <Createpostform posts={posts} addPost={addPost} setShowModal={setShowModal}/>
        </Modal>}
    </>
  );
}

export default App;
