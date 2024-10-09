import React from 'react'
import World from '../../resources/images/world.svg'
import { LoginForm } from './LoginForm'
import Geo from '../../resources/images/geo.svg'
import Mail from '../../resources/images/mail.svg'
import '../../resources/css/Contact.css'

export const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
        <div className='world-block'>
            <img src={World} alt="" />
            <div className='contact-blur-block'>
                <h4>Contact</h4>
                <div className='contact-blur-info'>
                    <span>United Kingdom, London</span>
                    <div className='span-row'>
                        <img src={Geo} alt="Geo" />
                        <span>Suite 13092 43 Bedford Street</span>
                    </div>
                </div>
            </div>
        </div>
        <LoginForm />
    </div>
  )
}
