

import { useEffect, useRef } from 'react';

import '../Asset/css-files/Testimonial/Testimonial.css'

const ImageData = [
    { id: 1, src: require('../Asset/Image/Testimonial/01.png') },
    { id: 2, src: require('../Asset/Image/Testimonial/02.png') },
    { id: 3, src: require('../Asset/Image/Testimonial/03.png') },
    { id: 4, src: require('../Asset/Image/Testimonial/04.png') },
    { id: 5, src: require('../Asset/Image/Testimonial/05.png') },
    { id: 6, src: require('../Asset/Image/Testimonial/06.png') },
]

const Testimonial = () => {

    const panelRef = useRef(null)

    useEffect(() => {
        const panel = panelRef.current

        if (ImageData.length > 0 && panel) {

            let imgWidth

            const scrollPanel = () => {
                imgWidth = panel.children[0].clientWidth + 2

                // Create a copy of the first child node/image
                const firstImgCopy = panel.firstElementChild.cloneNode(true)

                // Append the copy to the end
                panel.appendChild(firstImgCopy)

                // Scroll to the next image with smooth animation
                panel.scroll({ left: imgWidth, behavior: 'smooth' })

                // Remove the original first child
                panel.removeChild(panel.firstElementChild)
            }

            const intervalId = setInterval(scrollPanel, 1500)

            return () => clearInterval(intervalId)
        }
    }, [])

    return (
        <div className='home-s4'>
            <div className='home-s4-t1'>Testimonial Views</div>
            <div className='home-s4-panel'>
                {ImageData.length > 0 && (
                    <div id='panel-row' className='panel-row' ref={panelRef}>
                        {ImageData.map((value) => (
                            <div className='panel-row-box' key={value.id}>
                                <img
                                    key={value.id}
                                    src={value.src}
                                    alt={value.id}
                                    className='panel-row-img'
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Testimonial


