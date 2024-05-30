import React from 'react'
import '../header/header.css'
import logo from '../../assets/FOOTER (8).svg'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='container'>
        <div className="header__nav-links">
            <NavLink to={'/'} className="navbar__logo">
                <img className='logo' src={logo} alt="" />
            </NavLink>
            <ul className="nav-items" id="navbar-responsive">
                <NavLink to={'/'} >
                    <a className='navbar-a' href="#">HOME</a>
                </NavLink>
                <li>
                    <a className='navbar-aa' href="#">BAGS</a>
                </li>
                <li>
                    <a className='navbar-aa' href="#">BELT</a>
                </li>
                <NavLink to={'/admin'} >
                    <a className='navbar-a' href="#">ADMIN</a>
                </NavLink>
                <NavLink to={'/contact'} >
                    <a className='navbar-a' href="#">CONTACT</a>
                </NavLink>
          </ul>
        </div>
    </div>
  )
}

export default Header