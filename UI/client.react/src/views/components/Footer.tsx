import React from 'react'
import Geo from '../../resources/images/geowhite.svg'
import Mail from '../../resources/images/mailwhite.svg'
import '../../resources/css/Footer.css'
import { HashLink } from 'react-router-hash-link'


export const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-block'>
            <div className='footer-contact-info'>
                <span>United Kingdom, London</span>
                <div className='span-row'>
                    <img src={Geo} alt="Geo" />
                    <span>13 John Prince's Street, 2nd Floor, London, United Kingdom, W1G OJR</span>
                </div>
            </div>
            <div className='links'>
                <HashLink smooth to='#aboutus'>
                    About us
                </HashLink>
                <HashLink smooth to='#howwehelp'>
                    How we help
                </HashLink>
                <HashLink smooth to='#contact'>
                    Contact
                </HashLink>
            </div>
        </div>
    </div>
  )
}
