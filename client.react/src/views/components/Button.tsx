import React, { useContext } from 'react'
import ArrowUp from '../../resources/images/ArrowUpRight.svg'
import { AppContext } from '../context/AppContext';

export const Button = () => {
  const context = useContext(AppContext);

    if (!context) {
        throw new Error('Card должен быть использован внутри AppContextProvider');
    }

    const {toggleModal} = context;
  return (
    <button className='button-get' onClick={toggleModal}>
        <p>Get in touch</p>
        <div>
            {/* <img src={ArrowUp} alt="ArrowUp" /> */}
        </div>
    </button>
  )
}
