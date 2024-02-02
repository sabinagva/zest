import React from 'react'
import './Hero.css'
// import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
// import hero_image from '../Assets/hero_image.png'
import logo from '../Assets/zest1-removebg-preview.png'
import { useHistory } from 'react-router-dom';



const Hero = () => {
    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/newcollections');
    }
  return (
    <div className='hero'>
      <div className="hero-left">
       
        <div>
            <div className="hero-hand-icon">
               
                {/* <img src={hand_icon} alt="" /> */}
            </div>
            <p>New</p>
            <p>Arrivals</p>
            <p>For Everyone</p>
        </div>
        <button className="hero-latest-btn" onClick={handleButtonClick}>
            
            <img className="arrow_icon" src={arrow_icon} alt="" /> 
        </button>
      </div>
      <div className="hero-right">
        <img className="hero_img" src={logo} alt="" />
      </div>
    </div>
  )
}

export default Hero