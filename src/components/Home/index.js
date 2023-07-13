import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


import LogoTitle from '../../assets/images/logo-h.png'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const newArray = ['a', 'r', 's', 'h'];
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>

                        <span className={`${letterClass} _11`}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>

                        <br />

                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>

                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass} strArray={newArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
                        <br />
                    </h1>
                    <h2>Fullstack developer</h2>
                    <p>A curiousity-driven coder with a passion for designing and building user-centric, inclusive experiences on the web.</p>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>

            <Loader type='pacman' />
        </>
    )
}

export default Home;