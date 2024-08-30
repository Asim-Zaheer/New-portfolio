import React from 'react'
import { NavLink } from 'react-router-dom'
import DarkMode from "../DarkMode";
import "../Sun.svg"
import "../Moon.svg"




function NAvbar() {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <NavLink className="navbar-brand fw-bolder  fs-4 " to="/">Asim's Portfolio </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact activeClassName="menu_active"  className="nav-link active me-2 fs-12 text-uppercase " aria-current="page" to="/">Home</NavLink>
        </li>


        <li className="nav-item">
          <NavLink  activeclassName="menu_active" className="nav-link active me-2 text-uppercase" aria-current="page" to="/work">my Work</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeclassName="menu_active" className="nav-link active me- 2 text-uppercase  " aria-current="page" to="/about">About Me</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeclassName="menu_active" className="nav-link active me-2 text-uppercase" aria-current="page" to="/contact">Contact</NavLink>
        </li>
        <DarkMode/>

      </ul>
   
    </div>
  </div>
</nav>
    </>
  )
}

export default NAvbar