import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div className="navContainer">
            <span className='logo'>ahsbooking</span>
            <div className="navItems">
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar