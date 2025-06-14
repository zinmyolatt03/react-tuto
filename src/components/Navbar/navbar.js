import React from 'react'
import "./navbar.css"

export default function Navbar() {
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
      </nav>
    </div>
  )
}
