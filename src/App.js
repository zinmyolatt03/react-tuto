import { use, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Postlist from './Postlist/postlist';
import Modal from './Modal/modal';
import Postform from './components/Postform/postform';

function App() {

  let [ showModal, setShowModal ] = useState( false);

     const closeModal = () => {
        setShowModal( false );
    }

  let [ posts, setPosts ] = useState([
                          {
                            id : 1, 
                            title : 'post one',
                            status : 'ongoing',
                          },
                          {
                            id : 2, 
                            title : 'post two',
                            status : "dropped",
                          },
                        ]);

  const addPost = ( post ) => {
    setPosts( (prevState) => [ ...posts,  post ]);
  }

  return (
    <>
      <Navbar setShowModal={setShowModal}/>
      <Postlist posts={posts}/>

      { showModal && <Modal setShowModal={setShowModal}> 
          <Postform addPost={addPost} setShowModal={setShowModal} closeModal={closeModal}/>

        </Modal>}
    </>
  );
}

export default App;
