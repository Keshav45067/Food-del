import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = ({setShowLogin}) => {
    const [menu,steMenu]= useState('home')
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className="navbar-menu">
        <li onClick={()=>steMenu('home')} className={menu=='home'?"active":""}>Home</li>
        <li onClick={()=>steMenu('menu')} className={menu=='menu'?"active":""}>Menu</li>
        <li onClick={()=>steMenu('mobile')} className={menu=='mobile'?"active":""}>Mobile-app</li>
        <li onClick={()=>steMenu('contact')} className={menu=='contact'?"active":""}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="nav-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
