import { use, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Postlist from './Postlist/postlist';
import Modal from './Modal/modal';

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
                          {
                            id : 3, 
                            title : 'post three',
                          },
                        ]);


  return (
    // this is react-fragment 
    <>
    {/*  this is navar setion  */}
      <Navbar setShowModal={setShowModal}/>
      {/*  this is using props */}
      <Postlist posts={posts}/>

      {/* using default children prop in modal section */}
      { showModal && <Modal setShowModal={setShowModal}> 
          <div className="modal-header">
            <h2 className="modal-title"> zoom class is avaiable <a> here </a> </h2>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
          </div>
        </Modal>}
    </>
  );
}

export default App;
