import React from 'react'
import "./Hero.css"
import dark_arrow from '../picture/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We ensure better education for a better world</h1>
        <p>Our cutting-edge curriculm is designed to empower students
          with the konwledge,skills,and experieces needed to excel in the dynamic field of education
        </p>
        <button className='btn'>Explore more<img src={dark_arrow} alt=''/></button>
      </div>
    </div>
  )
}

export default Hero