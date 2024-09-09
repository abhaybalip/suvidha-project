

import { useEffect } from 'react'
import '../Asset/css-files/Testimonial/Testimonial.css'

const Testimonial = () => {
    const image = [
    ]

    useEffect(() => {

        const panel = document.querySelector('.panel-row')
        if (!panel) return

        const imgWidth = panel.children[0].clientWidth + 2
        let intervalId = null

        const scrollPanel = () => {
            // make copy of first child node / image
            const firstImgCopy = panel.firstElementChild.cloneNode(true)

            // insert copy at last
            panel.appendChild(firstImgCopy)

            // scroll to next image
            panel.scroll({ left: imgWidth, behavior: 'smooth' })

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
                {
                    Image.length > 0 ?
                        <div id='panel-row' className='panel-row'>
                            {image.map((value) => (
                                <div className='panel-row-box'>


                                </div>
                            ))}
                        </div>
                        : null
                }
            </div>
        </div>
    );
};

export default Testimonial;
