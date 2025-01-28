import React from 'react'
import { Button } from './Button'
import Experience from '../../resources/images/experience.svg'
import Note from '../../resources/images/note.svg'
import Car from '../../resources/images/car.png'
import '../../resources/css/Banner.css'

export const Banner = () => {
  return (
    <div className='banner-container'>
        <div className='first-block-banner'>
            <div className='first-cont'>
                <h3>Automotive market research</h3>
                <p>Our work within the automotive sector is varied and extensive, with top brands entrusting us with their research. We have covered not only the major manufacturers but also the OE and aftermarket. Keel Market LLP has conducted UK and pan-European studies, as well as market exploration studies further afield.</p>
                <Button />
            </div>
        </div>
        <div className='second-block-banner'>
            <div className='experience-block'>
                <div className='experience-cont'>
                    <div>
                        <img src={Experience} alt="Experience" />
                    </div>
                    <h4>Extensive experience</h4>
                    <p>Our experience in the automotive sector helps to deliver a quality service, and we have a wealth of knowledge gained from an ever-evolving period of automotive history. </p>
                </div>
            </div>
            <div className='service-block'>
                <div className='image-banner-block'>
                    <img src={Car} alt="Car" />
                </div>
                <div className='quality-block'>
                    <div className='quality-cont'>
                        <div>
                            <img src={Note} alt="Note" />
                        </div>
                        <h4>Quality service</h4>
                        <p>We inform and inspire our clients through powerful data, empowering technology and high-impact consulting.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
