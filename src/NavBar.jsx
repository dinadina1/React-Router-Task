import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-sm-top">
      <div className="container-fluid">
        <img src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/guvi-logo.svg" alt="Logo" className="d-inline-block align-text-top pe-4" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <a class="navbar-brand">Blog</a>
          <ul className="navbar-nav">
            <li className="nav-item pe-2">
              <Link to={"/"} className='nav-link'>All</Link>
            </li>
            <li className="nav-item pe-2">
              <Link to={"/fsd"} className='nav-link'>Full Stack Development</Link>
            </li>
            <li className="nav-item pe-2">
              <Link to={"/datascience"} className='nav-link'>Data Science</Link>
            </li>
            <li className="nav-item pe-2">
              <Link to={"/cybersecurity"} className='nav-link'>Cyber Security</Link>
            </li>
            <li className="nav-item pe-2">
              <Link to={"/career"} className='nav-link'>Career</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar