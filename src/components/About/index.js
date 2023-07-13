import {useState, useEffect} from 'react'

import Friends from '../../assets/images/friends.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About=()=>{

    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])


    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['A','b','o','u','t',' ', ' M','e']}  
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm very ambitious full stack developer looking for a role in IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
                    </p>
                    <p>
                        I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                    </p>
                    <p>
                        If i need to define myself in one sentence after trying and excelling different field of works throughout my engineering, i found backend & cloud Engineering to be as a passion which i want to do as a whole.
                    </p>

                    <div>
                        <h2>What I've been up to:</h2>
                        <ul>
                            <li>Building this page!</li>
                            <li>Getting deeper into SASS and ReactJS</li>
                            <li>Learing Socket.io and NextJS</li>
                            <li>Coding Competitively!</li>
                            <li>And Re-Watching <img className="friends-img" src={Friends} alt='Friends'/> </li>
                        </ul>
                    </div>
                </div>
                
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faNode} color="#3c873a" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4V28" />
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
export default About;


