import React from 'react'
import "./navbar.css"

export default function Navbar( { setShowModal }) {

  const showModal = () => {
    setShowModal( true )
  }
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <h2 className="logo">Logo</h2>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>
        <button className="create-post-btn" onClick={showModal}>
          Create Post
        </button>
      </nav>
    </div>
  )
}
