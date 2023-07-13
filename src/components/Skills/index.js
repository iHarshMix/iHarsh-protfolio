import { useState, useEffect } from 'react'

import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faCss3, faFigma, faGitAlt, faHtml5, faJsSquare, faNode, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


import c from '../../assets/images/skills/ISO_C++_Logo.svg'
import mongodb from '../../assets/images/skills/mongodb-svgrepo-com.svg'
import mysql from '../../assets/images/skills/MySQL-Logo.wine.svg'
import pyhton from '../../assets/images/skills/Python.svg.png'
import aws from '../../assets/images/skills/aws logo.png'


const Skills = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])

    return (
        <>
            <div className='container skills-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', 's']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Technologies & Tools I work with:
                    </p>
                </div>
                <div className='skills-desc'>
                    <div className='skill-box'>

                        <div className='grid-box'>
                            <div className='grid-item'>
                                <img className='skill-logo' src={c} alt='c/c++' />
                            </div>
                            <div className='grid-item'>
                                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            </div>
                            <div className='grid-item'>
                                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                            </div>
                            <div className='grid-item'>
                                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                            </div>
                            <div className='grid-item'>
                                <FontAwesomeIcon icon={faGitAlt} color="#EC4V28" />
                            </div>
                            <div className='grid-item'>
                                <FontAwesomeIcon icon={faSass} color="#cc6699" />
                            </div>
                            <div className='grid-item'>
                                <FontAwesomeIcon icon={faNode} color="#3c873a" />
                            </div>
                            <div className='grid-item'>
                                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            </div>
                            <div className='grid-item'>
                                <img className='skill-logo' src={mongodb} alt='mongoDB' />

                            </div>
                            <div className='grid-item'>
                                <img className='skill-logo-mysql' src={mysql} alt='mysql' />
                            </div>
                            <div className='grid-item'>
                                <img className='skill-logo' src={pyhton} alt='python' />
                            </div>
                            <div className='grid-item'>
                                <FontAwesomeIcon icon={faAws} color="#FF9900" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Skills;