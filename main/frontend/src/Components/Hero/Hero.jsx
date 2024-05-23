import React from 'react'
import hero_image from '../Assets/hero_longtail.png'
import arrow from '../Icons/right-arrow.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Bi-Weekly</h2>
            <div>
                <p>new</p>
                <p>selections</p>
                <p>for everyone</p>
            </div>
            <div className='hero-button'>
                <div>Latetest Selection</div>
                <img src={arrow} alt="hero" />
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt="hero" />
        </div>
    </div>
  )
}

export default Hero