import React, { useState } from 'react'
import './Navbar.css'
import betta_light from '../Assets/betta_light.jpg'
import cart_icon from '../Icons/shopping-cart.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={betta_light} alt="logo" />
        </div>
        <nav className='nav-links'>
            <ul>
                <li onClick={()=>{setMenu("home")}}><Link to = "/">Home</Link>{menu==="home"?<hr/>:""}</li>
                <li onClick={()=>{setMenu("about")}}><Link to = "/about">About</Link>{menu==="about"?<hr/>:""}</li>
                <li onClick={()=>{setMenu("contact")}}><Link to = "/contact">Contact</Link>{menu==="contact"?<hr/>:""}</li>
                <li onClick={()=>{setMenu("live-fish")}}><Link to = "/live-fish">Live Fish</Link>{menu==="live-fish"?<hr/>:""}</li>
                <li onClick={()=>{setMenu("live-plants")}}><Link to = "/live-plants">Live Plants</Link>{menu==="live-plants"?<hr/>:""}</li>
                <li onClick={()=>{setMenu("dry-goods")}}><Link to = "/dry-goods">Dry Goods</Link>{menu==="dry-goods"?<hr/>:""}</li>
            </ul>
        </nav>
        <div className="nav-login-cart">
          <Link to = "/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <img src={cart_icon} alt="cart" />
          </Link>
          <div className="nav-cart-count">
            0
          </div>
        </div>   
    </div>
  )
}

export default Navbar
