import { useState, useEffect } from 'react';

import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import project1 from '../../assets/projects/portofolio website project.png'
import project2 from '../../assets/projects/continental food ordering app.png'
import project3 from '../../assets/projects/Events Scheduling project.png'

const Projects = () => {


    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])
    return (
        <>
            <div className='projects-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>
                </div>
                <div className='project-desc'>
                    <div className='project-box'>
                        <div className='project-items'>
                            <div className='project-item'>
                                <img className='p-img' src={project1} alt='portofolio Projects' />
                                <div className='p-desc'>
                                    <h2>Portofolio Website</h2>
                                    <ul>
                                        <li>Built with React and vanilla scss.</li>
                                        <p>Future plans:-</p>
                                        <li>Make full stack dynamic content. </li>
                                        <li>Migrate project to NextJS framwork</li>
                                    </ul>
                                    <div className='p-button'>
                                        <a href=''>
                                            <button type='button' className='flat-button'>Github Repo</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='project-item'>
                                <img className='p-img' src={project2} alt='portofolio Projects' />
                                <div className='p-desc'>
                                    <h2>Continental Meals Ecommerce Web app</h2>
                                    <ul>
                                        <li>Full stack Web App</li>
                                        <li>Built with React: redux</li>
                                        <li>Built with Firebase API</li>
                                    </ul>
                                    <div className='p-buttons'>
                                        <a href='https://github.com/iHarshMix/Food_Ordering_FullStackEcommerce'>
                                            <button type='button' className='flat-button'
                                            >Github Repo</button>
                                        </a>
                                        <a href='https://react-meal-api.web.app/'>
                                            <button type='button' className='flat-button'
                                            >Live Site</button>

                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='project-item'>
                                <img className='p-img' src={project3} alt='Events scheduling App' />
                                <div className='p-desc'>
                                    <h2>Event Scheduling Web app</h2>
                                    <ul>
                                        <li>Full stack Web App</li>
                                        <li>Built with React: redux, react-router</li>
                                        <li>For backend: Nodejs RESTful API</li>
                                        <p>Future plans:-</p>
                                        <li>Migrate project to NextJS framwork</li>
                                    </ul>
                                    <div className='p-button'>
                                        <a href='https://github.com/iHarshMix/Events_Scheduling_FullStack.git'>
                                            <button type='button' className='flat-button'>Github Repo</button>
                                        </a>
                                    </div>

                                </div>
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
        </>
    )
}

export default Projects;