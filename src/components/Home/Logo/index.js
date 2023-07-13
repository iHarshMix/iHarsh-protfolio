import './index.scss'
import LogoH from '../../../assets/images/logo-h.png'
import { useEffect, useRef } from 'react';

import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial'

const Logo = () => {
    // const bgRef = useRef();
    // const outlineLogoRef = useRef();
    // const solidLogoRef = useRef();

    // useEffect(() => {
    //     gsap.registerPlugin(DrawSVGPlugin)

    //     gsap
    //         .timeline()
    //         .to(bgRef.current, {
    //             duration: 1,
    //             opacity: 1,
    //         })
    //         .from(outlineLogoRef.current, {
    //             drawSVG: 0,
    //             duration: 20,
    //         })

    //     gsap.fromTo(
    //         solidLogoRef.current,
    //         {
    //             opacity: 0
    //         },
    //         {
    //             opacity: 1,
    //             delay: 4,
    //             duration: 4
    //         }
    //     )
    // }, []);

    return (
        <div className='logo-container'>
            <img  className='solid-logo' src={LogoH} alt='H' />

            {/* <svg width="144" height="169" viewBox="0 0 144 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g
                    className='svg-container'
                    transform='translate(0 457) scale(.1 -.1)'
                    fill="none"
                >

                    <path
                        d="M123.3 17.5V165H96.9V93L108.8 102H27.4L39.3 93.2V165H12.9V17.5H39.3V90.2L27.4 81H108.8L96.9 90.1V17.5H123.3Z"
                        fill="#FFF700" />
                    <path d="M20 10.5L13 17.5H20V10.5Z" fill="#FFF700" />
                    <path
                        d="M130.3 10.5V158H103.9V86L115.8 95H34.4L46.3 86.2V158H19.9V10.5H46.3V83.2L34.4 74H115.8L103.9 83.1V10.5H130.3Z"
                        fill="#124669" />
                    <path d="M104 10.5L97 17.5H104V10.5Z" fill="#FFF700" />
                    <path d="M123.5 158H130L123.5 165H123V158H123.5Z" fill="#FFF700" />
                    <path d="M46 158H39V165L46 158Z" fill="#FFF700" />
                </g>
            </svg> */}

            {/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="576.000000pt" height="676.000000pt" viewBox="0 0 576.000000 676.000000"
                preserveAspectRatio="xMidYMid meet">

                <g
                    className='svg-container'
                    transform="translate(0.000000,676) scale(.1,-.1)"
                    fill="none"

                >
                    <path
                        
                        d="M800 3390 l0 -2950 525 0 525 0 0 1260 0 1260 1155 0 1155 0 0 -1260
0 -1260 525 0 525 0 0 2950 0 2950 -525 0 -525 0 0 -1270 0 -1270 -1155 0
-1155 0 0 1270 0 1270 -525 0 -525 0 0 -2950z" />
                </g>
            </svg> */}
        </div>
    )
}

export default Logo;