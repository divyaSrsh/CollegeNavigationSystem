import React from 'react'
import Logo from '../assets/pizzaLogo.png';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'></div>
            <img src={Logo}/>
        <div className='rightside'></div>
    </div>
  )
}

export default Navbar
