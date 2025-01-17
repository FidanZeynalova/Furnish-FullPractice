import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import { FaBars } from "react-icons/fa";
import { FurnishContext } from '../context/FurnishContext';

function Navbar() {
    let {fav} = useContext(FurnishContext)
  return (
    <div className='Navbar'>
      <div className="container">
        <div className="logo">
            <h1>Furnish</h1>
        </div>
        <div className="list">
            <ul>
                <li><NavLink to={"/"} style={{color:"black"}}>Home</NavLink></li>
                <li>About</li>
                <li>Collection</li>
                <li><NavLink to={"/add"} style={{color:"black"}}>Add</NavLink></li>
                <li><NavLink to={"/wishlist"} style={{color:"black"}}>Wishlist({fav.length})</NavLink></li>
            </ul>
            <div className="icon">
            <FaBars />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
