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
                    <span>Ormond House, 26/27 Boswell Street Suite 2, London, England, United Kingdom, WC1N 3JZ</span>
                </div>
            </div>
            <div className='links'>
                <HashLink smooth to='#aboutus' style={{whiteSpace: 'nowrap', height: 'fit-content'}}>
                    About us
                </HashLink>
                <HashLink smooth to='#howwehelp' style={{whiteSpace: 'nowrap', height: 'fit-content'}}>
                    How we help
                </HashLink>
                <HashLink smooth to='#contact' style={{whiteSpace: 'nowrap', height: 'fit-content'}}>
                    Contact
                </HashLink>
            </div>
        </div>
    </div>
  )
}
