
import '../Asset/css-files/Comittee/Comittee_1.css'
import '../Asset/css-files/Comittee/Comittee_2.css'


const MemberData = [
    {
        id: 1,
        name: 'abhay balip',
        post: 'my post',
        img: require('../Asset/Image/suvidha-logo.png'),
        socialLink: [
            { icon: require('../Asset/Image/Comittee/socialLink/Linkedin.png'), link: 'https://linkedin.com/in/abhaybalip/' },

            { icon: require('../Asset/Image/Comittee/socialLink/Instagram.png'), link: 'https://Instagram.com/abhaybalip/' },

            { icon: require('../Asset/Image/Comittee/socialLink/Github.png'), link: 'https://Github.com/abhaybalip/' },

        ]
    },
    {
        id: 1,
        name: 'abhay balip',
        post: 'panel 2',
        img: require('../Asset/Image/suvidha-logo.png'),
        socialLink: [
            { icon: require('../Asset/Image/Comittee/socialLink/Linkedin.png'), link: 'https://linkedin.com/in/abhaybalip/' },

            { icon: require('../Asset/Image/Comittee/socialLink/Instagram.png'), link: 'https://Instagram.com/abhaybalip/' },

        ]
    },
]


function Comittee(params) {
    return (
        <div className="com">

            <div className="com-t1">
                Suvidha Foundation
            </div>

            <div className='com-panel'>

                {
                    MemberData.map((value) => {
                        return (
                            <div className='com-panel-item' key={value.id}>

                                <img src={value.img} className='panel-item-img' alt='panel-item-img'></img>

                                <div className='panel-item-info'>
                                    <div className='panel-item-name'>
                                        {value.name}
                                    </div>


                                    {value.post ?
                                        <div className='panel-item-post'>
                                            {value.post}
                                        </div>
                                        : null
                                    }

                                    {
                                        value.socialLink ? <div className='panel-item-links'>

                                            {
                                                value.socialLink.map((val) => {
                                                    return (
                                                        <a rel="noreferrer" target='_blank' className='links-link' href={val.link}>
                                                            <img className='link-img' src={val.icon} alt={''}></img>
                                                        </a>
                                                    )
                                                })
                                            }
                                        </div>
                                            : null
                                    }
                                </div>

                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}
export default Comittee;

