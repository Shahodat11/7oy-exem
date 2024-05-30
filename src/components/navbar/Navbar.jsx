import React from 'react'
import '../navbar/navbar.css'
import { NavLink } from 'react-router-dom';
import icon from '../../assets/Header → Link → icon-compare.svg.svg'
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

function Navbar() {

    return (
        <header className='navbar__wrapper'>
            <div className='container'>
                <nav className="navbar">
                    <div className="navbar1">
                        <select name="EN" id="EN">
                            <option value="EN">EN</option>
                            <option value="EN">EN</option>
                        </select>
                        <select name="USD" id="USD">
                            <option value="USD">USD</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                    <div className="navbar__collection">
                        <NavLink to={'/login'} className="navbar__item">
                            <img src={icon} alt="" />
                        </NavLink>
                        <NavLink className="navbar__item">
                            <IoPersonOutline />
                        </NavLink >
                        <NavLink className="navbar__item" to={"/wishlist"}>
                            <FaRegHeart />
                        </NavLink>
                        <NavLink className="navbar__item">
                            <IoCartOutline />
                        </NavLink>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
// import React from 'react'
// import { useSelector } from 'react-redux'
// import { FaRegHeart } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//     const count = useSelector(state => state.counter.value)
//   return (
//     <div className='navbar'>
//         <NavLink className="navbar__logo" to={"/"}>
//           <span>Logo</span>
//         </NavLink>
//         <NavLink to={"/wishlist"}>
//           <FaRegHeart/>
//         </NavLink>
//         <NavLink to={"/cart"}>
//           <IoCartOutline/>
//         </NavLink>
//     </div>
//   )
// }

// export default Navbar