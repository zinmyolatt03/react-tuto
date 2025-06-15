import React from 'react';
import "./modal.css";
import ReactDOM from 'react-dom';

export default function Modal( { children, setShowModal }) {

  const closeModal = () => {
    setShowModal( false);
  }
  return (
    ReactDOM.createPortal(
        <div className="modal-backdrop">
          <div className="modal-content">
            {/* modal content comes here */}
              { children }
              <button type='button' onClick={closeModal}> close </button>
          </div>
        </div>, document.querySelector("#modal") )
  )
}
