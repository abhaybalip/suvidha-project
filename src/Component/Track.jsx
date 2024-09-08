
import '../Asset/css-files/Track/Track_01.css'
import '../Asset/css-files/Track/Track_02.css'

const TrackData = [
    {
        id: 1,
        title: 'Responsible AI',
        text: [
            'Opportunities and Challenges for Responsible Generative AI',
            'Ethics and AI: From Discourse to Practice',
            'Deliberative Governance and Social Acceptability: Promoting Responsible Innovation in AI',
        ]
    },
    {
        id: 2,
        title: ' Robotics Science and Engineering',
        text: [
            'Design and Fabrication of Robotic Mechanisms',
            'Human-Robot Interaction & Interfaces',
            'Machine Learning and AI Integration in Robotics',
            'Robotic Applications in Healthcare, Agriculture, and Defense',
            'Tele-Robotics and Remote Operations',
        ]
    },
    {
        id: 3,
        title: ' Generative AI',
        text: [
            'Use of Generative AI in Practice',
            'The Ethical Use of Generative AI',
            'Generative Adversarial Networks (GANs)',
            'Advanced Tools: Stable Diffusion, ChatGPT, DALL-E, and More',
            'Deep Learning Models for Generative AI Development',
            'Business Models & Use Cases for Generative AI'
        ]
    }
]

function Track(params) {
    return (
        <div className="trk">

            <div className='trk-s1'>
                <div className='trk-s1-t1'>
                    We warmly invite submissions from all fields to explore a wide range of exciting topics,
                    including but not limited to the following: :-
                </div>
            </div>

            <div className='trk-s1-panel'>

                {
                    TrackData.map((value) => {
                        return (
                            <div className='panel-item'>

                                <div className='item-title'>
                                    Track : {value.id} : {value.title}
                                </div>

                                <div className='item-text'>
                                    {
                                        value.text.map((val) => {
                                            return (
                                                <div className='text-line'>
                                                    &bull;  {val}
                                                </div>
                                            )
                                        })
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
export default Track;

