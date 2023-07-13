import { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders';
// import emailjs from '@emailjs/browser'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import { clear } from '@testing-library/user-event/dist/clear';
import linkedIn from '../../assets/images/icons8-linkedin-480.svg'
import github from '../../assets/images/github.svg'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])

    // const sendEmail=(e)=>{
    //     e.preventDefault();
    //     emailjs
    //         .sendForm(
    //             'gmail',
    //             'template_lyy922w',
    //             refForm.current,
    //             'service_iHarshMix'
    //         )
    //         .then(()=>{
    //             alert('Message successfully sent')
    //             window.location.reload(false);
    //             },
    //             ()=>{
    //                 alert('Failed to send the message, please try again!')
    //             }
    //         )
    // }


    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={11}
                        />
                    </h1>
                    <p>
                        I'm currently open to freelance and actively looking for full-time opportunties, so if you like what you've seen please don't hesitate to get in touch!
                    </p>
                    <p>
                        If you have any questions or would just like to say hi, my inbox is always open and I'll endeavour to get back to you as soon as I can.
                    </p>
                    <div className='contact-form'>
                        <form action="mailto:iharsh.mix@gmail.com" method="post" enctype="text/plain">
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' />
                                </li>
                                <li className='half'>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email'

                                    />
                                </li>
                                <li>
                                    <input
                                        type='text'
                                        name='subject'
                                        placeholder='Subject'

                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder='Message'
                                        name='message'

                                    />
                                </li>
                                <li>

                                    <button type='submit' className='flat-button'
                                    >Get In Touch</button>
                                    <a href='https://drive.google.com/file/d/1VWGh66RVShWwge93qIgLZMTfSKy9v8RR/view?usp=drive_link'>
                                        <button className='resume-button' type='button'>Resume</button>
                                    </a>
                                </li>
                            </ul>
                        </form>

                        <div className='social-links'>
                            <a href='https://linkedin.com/in/iharsh-mix'><img src={linkedIn} alt='LinkedIn profile'/></a>
                            <a href='https://github.com/iHarshMix'><img src={github} alt='github profile'/></a>
                        </div>

                    </div>
                </div>
                <div className='info-map'>
                    Harsh Yadav,
                    <br />
                    India,
                    <br />
                    171, Shiva Kunj, K.K nagar,Sikandra<br />
                    Agra-282007<br />
                    <span>iharsh.mix@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[27.220441, 77.956205]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[27.220441, 77.956205]}>
                            <Popup>Harsh lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}
export default Contact;