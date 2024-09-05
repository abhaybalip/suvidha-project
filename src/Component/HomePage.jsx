
import { useEffect, useState } from 'react'
import Testimonial from './Testimonial'

import '../Asset/css-files/HomePage/HomePage_1.css'
import '../Asset/css-files/HomePage/HomePage_2.css'
import '../Asset/css-files/HomePage/HomePage_3.css'


// Image
const img1 = require('../Asset/Image/HomePage/ieee.jpg'),
    img2 = require('../Asset/Image/HomePage/ieee-xplore.jpg'),
    img3 = require('../Asset/Image/HomePage/ieee-bombay.jpg')

function HomePage(params) {

    return (
        <>
            <div className="home">

                <div className='home-s1'>
                    <div className='home-s1-t1'>
                        Paper Publishing Site
                    </div>

                    <pre className='home-s1-t2'>
                        This site is there for publishing research paper
                    </pre>

                    <div className='home-s1-img-row'>
                        <img className='home-s1-img1' src={img1} alt=''></img>
                        <img className='home-s1-img1' src={img2} alt=''></img>
                        <img className='home-s1-img1' src={img3} alt=''></img>
                    </div>

                </div>


                <div className='home-s2'>

                    <div className='home-s2-t1'>About Suvidha Mandal</div>

                    <div className='home-s2-row'>

                        <pre className='home-s2-t2'>
                            Organisation info
                        </pre>

                        <img className='home-s2-img1' alt='project-related-img' src={null}></img>

                    </div>

                </div>

                {Collaborators()}


                {Testimonial()}

            </div>
        </>
    )
}
export default HomePage;


const Collaborators = () => {

    const PrevButton_icon = require('../Asset/Image/HomePage/Button/PrevButton.png'),
        NextButton_icon = require('../Asset/Image/HomePage/Button/NextButton.png')

    const [ImageIndex, setImageIndex] = useState(0)
    const Images = [
        { id: 0, src: require('../Asset/Image/HomePage/Collaborator/c1.png') },
        { id: 1, src: require('../Asset/Image/HomePage/Collaborator/c2.png') },
        { id: 2, src: require('../Asset/Image/HomePage/Collaborator/c3.png') },
        { id: 3, src: require('../Asset/Image/HomePage/Collaborator/c4.png') },
        { id: 4, src: require('../Asset/Image/HomePage/Collaborator/c5.png') },

    ]

    useEffect(() => {

        const IntervalId = setInterval(() => {
            setImageIndex((ImageIndex + 1) % Images.length)
        }, 1500);

        return () => {
            clearInterval(IntervalId)
        }
    }, [ImageIndex, Images.length])

    return (
        <div className='home-s3'>

            <div className='home-s3-t1'>Our Collaborators</div>

            <div className='home-s3-slider'>

                <img className='home-s3-slider-b1' src={PrevButton_icon} alt='' onClick={(event) => {
                    setImageIndex((ImageIndex - 1 + Images.length) % Images.length)
                }}></img>

                <img className='home-s3-slider-img' src={Images[ImageIndex].src} alt={Images[ImageIndex].id} ></img>

                <img className='home-s3-slider-b2' src={NextButton_icon} alt='' onClick={(event) => {
                    setImageIndex((ImageIndex + 1 + Images.length) % Images.length)
                }}></img>

            </div>

        </div>

    )
}

