import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div id="navbar">
            <div className="navbar__container flex">
                <ul className='navbar__menu flex'>
                    <li className='menu-item'><Link to='/'>Home</Link></li>
                    <li className='menu-item'><Link to='/blog'>Blog</Link></li>
                    <li className='menu-item'><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar