

import '../Asset/css-files/ImpDate/ImpDate_1.css'
import '../Asset/css-files/ImpDate/ImpDate_2.css'
import '../Asset/css-files/ImpDate/ImpDate_3.css'

// Records for dates
const DateList = [
    {
        id: 1,
        name: 'Title',
        info: [
            { t1: 'Start', t2: '9th Aug 2024' },
            { t1: 'End', t2: '9th Aug 2024' },
            { t1: 'Contact', t2: 'myEmail@mail.com' }
        ],
        link: [
            { text: 'Link_1', href: 'https://reqbin.com/' },
            { text: 'Link_2', href: 'https://reqbin.com/' },

        ]
    },
    {
        id: 2,
        name: 'Registration',
        info: [
            { t1: 'Start', t2: '9th Aug 2024' },
            { t1: 'End', t2: '9th Aug 2024' },
            { t1: 'Contact', t2: 'myEmail@mail.com' }
        ],
        // link: [
        //     { text: 'Link_1', href: 'https://reqbin.com/' },
        //     { text: 'Link_2', href: 'https://reqbin.com/' },

        // ]
    },
    {
        id: 3,
        name: 'Result',
        info: [
            { t1: 'Start', t2: '9th Aug 2024' },
            { t1: 'End', t2: '9th Aug 2024' },
            { t1: 'Contact', t2: 'myEmail@mail.com' }
        ],
        link: [
            { text: 'Link_1', href: 'https://reqbin.com/' },
        ]
    },
]

function Detail(params) {
    return (
        <div className="date">

            <div className="date-t1">Important Details</div>

            <div className="date-s1">


                {/* Item List starts */}
                <div className='date-s1-list'>

                    {
                        DateList.map((value) => {
                            return (
                                // List item
                                <div key={value.id} className='list-item'>

                                    {/* item title */}
                                    {value.name ?
                                        <div className='list-item-title'>{value.name}</div>
                                        : null
                                    }

                                    {/* items info column */}
                                    {
                                        value.info ?
                                            <div className='list-item-col'>


                                                {/* column - row 1 */}
                                                <div className='col-row'>
                                                    {value.info.map((val) => {
                                                        return (
                                                            <div className='col-row-t1'>
                                                                {
                                                                    val.t1
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>

                                                <div className='col-row'>
                                                    {value.info.map(() => {
                                                        return (<div className='col-row-t1'> : </div>)
                                                    })}
                                                </div>

                                                {/* column - row 2 */}
                                                <div className='col-row'>
                                                    {value.info.map((val) => {
                                                        return (
                                                            <div className='col-row-t1'>
                                                                {
                                                                    val.t2
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>

                                            </div>
                                            : null
                                    }

                                    {/* Item Links list */}
                                    {
                                        value.link ?
                                            <div className='list-item-links'>
                                                {
                                                    value.link.map((val) => {
                                                        return (
                                                            <>
                                                                {/* Link */}
                                                                <a rel="noreferrer" target='_blank' href={val.href} className='item-links-link'>
                                                                    {val.text}
                                                                </a>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                            : null
                                    }

                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}
export default Detail;
