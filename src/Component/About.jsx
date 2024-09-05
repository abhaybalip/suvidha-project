
import '../Asset/css-files/About/About_1.css'
import '../Asset/css-files/About/About_2.css'
import '../Asset/css-files/About/About_3.css'
import '../Asset/css-files/About/About_4.css'
import '../Asset/css-files/About/About_5.css'

function About(params) {
    return (
        <div className="about">

            {/*  */}

            <div className="about-s1">

                <p className='about-s1-txt'>

                    <div className='about-s1-txt-t1'>
                        About Suvidha Foundation
                    </div>

                    <div className='about-s1-txt-t2'>
                        Info about suvidha foundation
                    </div>

                </p>

                <img className='about-s1-img' src={require('../Asset/Image/About/Foundation.png')} alt='foundation-img'></img>

            </div>

            {/*  */}

            <div className='about-s2'>
                <img className='about-s2-img' src={require('../Asset/Image/About/BackImg_2.png')} alt='back-image'></img>
            </div>

            <div className='about-s3'>

                <img className='about-s3-img' src={require('../Asset/Image/About/BackImg_3.png')} alt='foundation-img'></img>

                <div className='about-s3-txt'>
                    Information about Internship in suvidha foundation
                </div>

            </div>

            {/*  */}
            <div className='about-s4'>

                <div className='about-s4-t1'>
                    Foundation Details
                </div>

                <div className='about-s4-info'>

                    <div className='info-1'>

                        <div className='info-1-title'>
                            Suvidha Foundation
                        </div>


                        <div className='info-1-info' style={{
                            padding: '0.5em'
                        }}>
                            Office Headquarters
                        </div>

                        <div className='info-1-info' style={{
                            padding: '0.5em'
                        }}>
                            <div>
                                Nagpur Headquarater :
                            </div>

                            <div>
                                Suvidha Foundation, Walni Ward No. 1, Jai Bhole Nagar, Walni, <br></br> Saoner Nagpur, Maharashtra 441102
                            </div>
                        </div>

                        <div className='info-1-info' style={{
                            padding: '0.5em'
                        }}>
                            <div>
                                Hyderabad Headquarter :
                            </div>

                            <div>
                                Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad
                            </div>
                        </div>

                    </div>

                    <div className='info-2'>
                        <div className='info-2-title'>
                            Certificates
                        </div>

                        <div className='info-2-info'>
                            <a rel="noreferrer"  target='_blank' className='info-2-info-link' href='https://suvidhafoundationedutech.org/Themes/doc/80G_APROVAL.pdf'>80G Certificate</a>
                            <a rel="noreferrer" target='_blank' className='info-2-info-link' href='https://suvidhafoundationedutech.org/Themes/doc/12A_APPROVAL.pdf'>12A Certificate</a>
                            <a rel="noreferrer" target='_blank' className='info-2-info-link' href='https://suvidhafoundationedutech.org/Themes/doc/CSR.PDF'>CSR Certificate</a>
                            <a rel="noreferrer" target='_blank' className='info-2-info-link' href='https://suvidhafoundationedutech.org/Themes/doc/suvidha_darpan_portal_registration.pdf'>Darpan Reg</a>
                            <a rel="noreferrer" target='_blank' className='info-2-info-link' href='https://suvidhafoundationedutech.org/Themes/doc/suvidha_pan_card.pdf'>Suvidha pan-card</a>
                        </div>

                    </div>

                    <div className='info-3'>
                        <div className='info-3-title'>
                            Imp Links
                        </div>

                        <div className='info-3-info'>
                            <a rel="noreferrer" target='_blank' className='info-3-info-link' href='https://suvidhafoundationedutech.org/verify.php'>Verify Certificate</a>
                            <a rel="noreferrer" target='_blank' className='info-3-info-link' href='https://suvidhafoundationedutech.org/privacypolicy.php'>Privacy Policy</a>
                        </div>

                    </div>

                </div>


                {/* bottom Link row */}
                <div className='about-s4-links'>

                    <a rel="noreferrer" target='_blank' href='https://Instagram.com/'>
                        <img className='s4-links-link' src={require('../Asset/Image/About/Link/Instagram.png')} alt='Insta'></img>
                    </a>

                    <a rel="noreferrer" target='_blank' href='https://Facebook.com/'>
                        <img className='s4-links-link' src={require('../Asset/Image/About/Link/Facebook.png')} alt='Facebook'></img>
                    </a>

                    <a rel="noreferrer" target='_blank' href='https://Linkedin.com/'>
                        <img className='s4-links-link' src={require('../Asset/Image/About/Link/Linkedin.png')} alt='Linkedin'></img>
                    </a>

                </div>

            </div>

        </div>
    )
}
export default About;



