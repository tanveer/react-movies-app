import React from 'react'
import Input from './input'

const Navbar = ({ handleFetchRequest }) => {
  return (
    <nav className="navbar fixed-top">
      <a className="navbar-brand">Movies</a>
      <ul className="nav">
        <li className="nav-item">
          <a href="#" className="nav-link active" onClick={() => handleFetchRequest('popular')}>Popular</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => handleFetchRequest('upcoming')}>Upcoming</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => handleFetchRequest('now_playing')}>Now Playing</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;