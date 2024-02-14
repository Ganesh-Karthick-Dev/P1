import React, { useState } from 'react'
import '../styles/style.css'


const Navbar = () => {

    const [toggle,setToggle] = useState(false);


    const handleToggle = () => {
        setToggle(!toggle)
    }

  return (
    <>
    <div id='navbar'>
        <div id='logo' style={{display:"flex",alignItems:"baseline"}}>
            <span style={{color:"red",fontWeight:"900",fontSize:"30px"}}>iQ</span>
            <span style={{fontWeight:"thin"}}>TechWay</span>
        </div>

        <div id='toggle'>
        
        <div id='toggle-phase'>
        <div id='navigations'>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Service</a></li>
            </ul>
        </div>
        <div id='register'>
            <button>Login</button>
            <button>Sign up</button>
        </div>
        </div>
       
        <button onClick={handleToggle} id='toggle-button'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
        </button>
 
        </div>
    </div>

    <div id={toggle ? "mobile-nav" : ""}>
    <div id='toggle-phase1'>
        <div id='navigations1'>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Service</a></li>
            </ul>
        </div>
        <div id='register1'>
            <button>Login</button>
            <button>Signup</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Navbar ;