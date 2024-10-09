import React, { useContext, useState } from 'react'
import Logo from '../../resources/images/logo.png'
import Burger from '../../resources/images/burger.svg'
import Cross from '../../resources/images/cross.svg'
import {HashLink} from 'react-router-hash-link'
import { Button } from './Button'
import '../../resources/css/Header.css'
import { AppContext } from '../context/AppContext'
import { LoginFormModal } from './LoginFormModal'

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const context = useContext(AppContext);

    if (!context) {
        throw new Error('Card должен быть использован внутри AppContextProvider');
    }

    const {modalOpen, toggleModal} = context;
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <>
        <div className='container-header'>
            <div className='header-block'>
                <div className='logo-block'>
                    <a href="/">
                        <img src={Logo} alt="Logo" />
                    </a>
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
                    <Button />
                </div>
            </div>
            <div className='header-block-mobile'>
                <div className='logo-block'>
                    <a href="/">
                        <img src={Logo} alt="" />
                    </a>
                </div>
                <div onClick={toggleMenu}>
                    <img src={Burger} alt="Burger" />
                </div>
                <div className={`modal-overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
                <div className={`modal-menu ${menuOpen ? 'active' : ''}`}>
                    <div className='modal-content'>
                        <div className='cross-block'>
                            <img className='cross-img' src={Cross} alt="Cross" onClick={toggleMenu} />
                        </div>
                        <div className='links-mobile'>
                        <HashLink smooth to='#aboutus' onClick={toggleMenu}>
                            About us
                        </HashLink>
                        <HashLink smooth to='#howwehelp' onClick={toggleMenu}>
                            How we help
                        </HashLink>
                        <HashLink smooth to='#contact' onClick={toggleMenu}>
                            Contact
                        </HashLink>
                        </div>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
        <LoginFormModal />
        <div className={`login-modal-overlay ${modalOpen ? 'active' : ''}`} onClick={toggleModal}></div>
    </>
  )
}
