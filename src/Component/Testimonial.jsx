

import { useEffect } from 'react'
import '../Asset/css-files/Testimonial/Testimonial.css'

const Testimonial = () => {
    const image = [
        { id: 0, src: require('../Asset/Image/menu-icon.png') },
        { id: 1, src: require('../Asset/Image/suvidha-logo.png') },
        { id: 2, src: require('../Asset/Image/top-icon.png') },
        { id: 3, src: require('../Asset/Image/HomePage/ieee-bombay.jpg') },
        { id: 4, src: require('../Asset/Image/HomePage/ieee-xplore.jpg') },
        { id: 5, src: require('../Asset/Image/HomePage/ieee.jpg') },
        { id: 6, src: require('../Asset/Image/HomePage/Button/NextButton.png') },
        { id: 7, src: require('../Asset/Image/HomePage/Button/PrevButton.png') },
    ]

    useEffect(() => {

        const panel = document.querySelector('.panel-row')
        if (!panel) return

        let imgWidth 
        let intervalId = null

        const scrollPanel = () => {
            
            imgWidth = panel.children[0].clientWidth + 2
            
            // make copy of first child node / image
            const firstImgCopy = panel.firstElementChild.cloneNode(true)

            // insert copy at last
            panel.appendChild(firstImgCopy)

            // scroll to next image
            panel.scroll({left: imgWidth, behavior: 'smooth'})

            // remove first child
            panel.removeChild(panel.firstElementChild)
        }

        intervalId = setInterval(scrollPanel, 1500); // Adjust interval time (3000ms) as needed

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        }
    }, [])

    return (
        <div className='home-s4'>
            <div className='home-s4-t1'>Testimonial Views</div>
            <div className='home-s4-panel'>
                <div id='panel-row' className='panel-row'>
                    {image.map((value) => (
                        <div className='panel-row-box'>

                            <img key={value.id} src={value.src} alt={value.id} className='panel-row-img' />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
