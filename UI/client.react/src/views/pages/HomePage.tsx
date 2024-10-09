import React, { useEffect } from 'react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { Quote } from '../components/Quote'
import { HelpBlock } from '../components/HelpBlock'
import { AboutUs } from '../components/AboutUs'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import '../../resources/css/HomePage.css'
import axios from 'axios'

export const HomePage = () => {
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(process.env.REACT_APP_SERVER_URL + '/api/ping');
            console.log(response.data)
        }
        fetchData()
    }, [])
  return (
    <div>
        <Header />
        <div className='content-container'>
            <Banner />
        </div>
        <div style={{backgroundColor: 'var(--grey)'}}>
            <Quote />
        </div>
        <div className='content-container'  id='howwehelp'>
            <HelpBlock />
            <AboutUs />
        </div>
        <div style={{backgroundColor: 'var(--backgreen)'}}>
            <Contact />
        </div>
        <div style={{backgroundColor: 'var(--black)'}}>
            <Footer />
        </div>
    </div>
  )
}
