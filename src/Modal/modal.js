import React from 'react';
import "./modal.css";
import ReactDOM from 'react-dom';

export default function Modal( { children }) {
  return (

    ReactDOM.createPortal(
        <div className="modal-backdrop">
          <div className="modal-content">
            {/* modal content comes here */}
              { children }
          </div>
        </div>, document.querySelector("#modal") )
  )
}
