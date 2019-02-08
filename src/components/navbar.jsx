import React from 'react'
import Input from './input'

const Navbar = ({ handleFetchRequest }) => {
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <a className="navbar-brand">Movies</a>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" >Comedy</a>
        </li>
        <li className="nav-item">
          <button className="nav-link">Action</button>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Horor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Drama</a>
        </li>
      </ul>
      <Input handleFetchRequest={handleFetchRequest} />
    </nav>
  )
}

export default Navbar;