import React from 'react'
import hero_image from '../Assets/hero_longtail.png'
import './Hero.css'

const Hero = () => {
  return (
    <div id="hero-container">
        <div id="hero-text">
            <h1 id="hero1">Halfmoon Betta</h1>
            <button id="hero-button">Shop Now</button>
        </div>
        <div id="hero-img">
            <img id="hero-image" src={hero_image} alt="hero-betta" />
        </div>
    </div>
  )
}

export default Hero