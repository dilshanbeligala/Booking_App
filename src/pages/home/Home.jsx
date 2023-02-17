import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./home.css"

 const Home = () => {
  return (
    <div className='navbar'>
     <div className="navContainer">
        <span className="logo">lamabooking</span>
        <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
        </div>
     </div>
    </div>
  )
}

export default Home;
