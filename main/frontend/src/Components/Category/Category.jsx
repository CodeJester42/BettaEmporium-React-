import React from 'react'
import male_betta from "../Assets/male.png";
import female_betta from "../Assets/female.png";
import live_plant from "../Assets/java-fern-594933.png";
import './Category.css'

const Category = () => {
  return (
    <div id="category-container">
        <div id="category-1">
            <div id="cat-1-img">
                <img id="male" src={male_betta} alt="male-betta" />
            </div>
            <div id="cat-1-text">
                <p id="cat-text">Male Betta</p>
                <button>Browse</button>
            </div>
            
        </div>
        <div id="category-2">
            <div id="cat-2-img">
                <img id="female" src={female_betta} alt="female-betta" />
            </div>
            <div id="cat-2-text">
                <p id="cat-text">Female Betta</p>
                <button>Browse</button>
            </div>
        </div>
        <div id="category-3">
            <div id="cat-3-img">
                <img id="live" src={live_plant} alt="live-plants" />
            </div>
            <div id="cat-3-text">
                <p id="cat-text">Live Plants</p>
                <button>Browse</button>
            </div> 
        </div>
    </div>
  )
}

export default Category