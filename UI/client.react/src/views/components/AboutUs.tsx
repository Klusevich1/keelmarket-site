import React from 'react'
import Office from '../../resources/images/office.png'
import '../../resources/css/AboutUs.css'

export const AboutUs = () => {
  return (
    <div className='about-us-container' id='aboutus'>
        <h3>About us</h3>
        <div className='about-us-content'>
            <div className='about-us-image-block'>
                <img src={Office} alt="Office" />
            </div>
            <div className='about-us-text-block'>
                <h5>Keel Market LLP's products are a tool for assessing market conditions, determining the company's position in the market, forecasting demand and choosing the direction of development.</h5>
                <div className='about-us-line'></div>
                <div className='about-us-par-block'>
                    <p>Do you really want to make a difference in ensuring that the future of the automotive industry is profitable and sustainable? Then it's essential to understand changing consumer needs and accelerate opportunities for manufacturers, dealers and other automotive stakeholders. We have extensive experience in the automotive industry, based on tracking customer experience for manufacturers and dealers.</p>
                    <p>We work directly with the brands, their holding companies and suppliers, as well as with specialist automotive consultants on various programmes and initiatives.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
