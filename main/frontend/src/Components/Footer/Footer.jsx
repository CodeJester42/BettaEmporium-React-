import React from 'react'
import betta_light from '../Assets/betta_light.jpg'
import Facebook from '../Assets/facebook.png'
import Instagram from '../Assets/instagram.png'
import Twitter from '../Assets/twitter.png'
import './Footer.css'

const Footer = () => {
  return (
    <div id="footer-container">
        <div id="footer">
            <div className='footer-1'>
                <img src={betta_light} alt="betta" />
                <p>Made by Neal Fernandez</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="product.html">Product</a></li>
                        <li><a href="shipping.html">Shipping</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="blog.html">Blog</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h3>Quick Links</h3>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="product.html">Product</a></li>
                        <li><a href="shipping.html">Shipping</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="blog.html">Blog</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h3>Address</h3>
                <p>1045 Saint James Street</p>
                <p>+1 204 999 9999</p>
                <p>
                    <img src={Facebook} alt="facebook" height="30px" />
                    <img src={Twitter} alt="twitter" height="30px" />
                    <img src={Instagram} alt="icons/instagram" height="30px" />
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer