import { Link, NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons"

import skillsIco from '../../assets/images/skills png.png'
import './index.scss'

import LogoHP from '../../assets/images/logo-hp.png'
import LogoSubtitle from '../../assets/images/slogan-harshProgrammer.png'
import { faDev, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar =()=>{
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoHP} alt="Logo"/>
            </Link>
            <nav>
                <div className='nav-P1'>
                    <NavLink  exact= "true" activeclassname="active" to='/'>
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                    </NavLink>
                    <NavLink exact= "true" className="about-link" activeclassname="active" to='/about'>
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                    </NavLink>
                    <NavLink exact= "true" className="contact-Link" activeclassname="active" to='/skills'>
                        <img className='skillsIco' src={skillsIco} alt='skills'/>
                    </NavLink>
                    <NavLink exact= "true" className="contact-Link" activeclassname="active" to='/projects'>
                        <FontAwesomeIcon icon={faDev} color="#4d4d4e"/>
                    </NavLink>
                    <NavLink exact= "true" className="contact-Link" activeclassname="active" to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                    </NavLink>
                </div>
                <div className='nav-P2'>
                    <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/iharsh-mix">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/iHarshMix">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;