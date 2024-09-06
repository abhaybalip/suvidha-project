

import '../Asset/css-files/Submission/Submission_1.css'
import '../Asset/css-files/Submission/Submission_2.css'
import '../Asset/css-files/Submission/Submission_3.css'


function Submission(params) {
    return (
        <div className="sub">

            {Submission_s1()}

            {Submission_s2()}

            {Submission_3()}

        </div>
    )
}
export default Submission;


const Submission_s1 = () => {
    return (
        <div className='sub-s1'>

            <div className='sub-s1-t1'>
                Guidelines for paper Submission
            </div>

            <div className='sub-s1-info'>

                <div className='s1-info-title'>
                    <div className='s1-info-title-t1'>IEEE Paper Submission Guidelines for Authors
                    </div>
                    <div className='s1-info-title-t2'>
                        Authors are invited to submit their manuscripts for the IEEE Conference. Below are the detailed guidelines for paper submission:
                    </div>
                </div>

                {/* Row Format */}
                {/* 
                <div className='info-panel-row'>
                    <div className='panel-row-title'>
                        Paper Length :
                    </div>
                    <div className='panel-row-text'>
                        The manuscript should be between 6 to 8 pages in length, including references, figures, and tables.
                    </div>
                </div>
             */}

                <div className='s1-info-panel'>

                    <div className='info-panel-row'>
                        <div className='panel-row-title'>
                            Paper Length :
                        </div>
                        <div className='panel-row-text'>
                            The manuscript should be between 6 to 8 pages in length, including references, figures, and tables.
                        </div>
                    </div>

                    <div className='info-panel-row'>
                        <div className='panel-row-title'>
                            Quality and Originality :
                        </div>
                        <div className='panel-row-text'>
                            Papers will be reviewed for quality and originality. Submissions must be free of plagiarism and should not exceed a similarity index of 15%.
                        </div>
                    </div>



                </div>

            </div>

        </div>
    )
}

const Submission_s2 = () => {
    return (
        <div className='sub-s2'>

            <img className='sub-s2-img' src={require('../Asset/Image/Submission/backImg_1.png')} alt={'back-img_1'}></img>

            <div className='sub-s2-panel'>

                <div className='s2-panel-row'>
                    <div className='panel-row-t1'>
                        Conference Website :
                    </div>
                    <div className='panel-row-t2'>
                        <a href='https://ghrcemn.raisoni.net/ICAIQSA-24/'>
                            Link
                        </a>
                    </div>
                </div>



                <div className='s2-panel-row'>
                    <div className='panel-row-t1'>
                        Submission Link :
                    </div>
                    <div className='panel-row-t2'>
                        <a href='https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICAIQSA2024%2FSubmission%2FIndex'>
                            Portal Link
                        </a>
                    </div>
                </div>


                <div className='s2-panel-row'>
                    <div className='panel-row-t1'>
                        Contact Email :
                    </div>
                    <div className='panel-row-t2'>
                        icaiqsa@ghrietn.raisoni.net
                    </div>
                </div>


                <div className='s2-panel-row'>
                    <div className='panel-row-t1'>
                        Conference Address :
                    </div>
                    <div className='panel-row-t2'>
                        G H Raisoni College of Engineering and Management, Nagpur (An Autonomous College affiliated to RTM Nagpur University), Shraddha Park, B-37-39/1, MIDC, Hingna-Wadi, Link Road, Nagpur-440016 (INDIA)
                    </div>
                </div>


                <div className='s2-panel-row'>
                    <div className='panel-row-t1'>
                        Phone No. :
                    </div>
                    <div className='panel-row-t2'>
                        Prof. Manish Motghare : (+91) 7972289701 , Dr. Sharda Chhabria: (+91) 9284701485
                    </div>
                </div>

            </div>
        </div>
    )
}



const Submission_3 = () => {
    return (
        <div className='sub-s3'>

            <div className='sub-s3-t1'>
                Manuscript Templates for Conference Proceedings
            </div>

            <div className='sub-s3-info'>

                <div className='s3-info-1'>

                    <div className='info-1-1'>
                        The purpose of a conference template is to provide a consistent format for papers appearing in the conference proceedings. IEEE strongly encourages use of the conference manuscript templates provided below.

                        IEEE conference templates contain guidance text for composing and formatting conference papers. Please ensure that all guidance text is removed from your conference paper prior to submission to the conference.
                    </div>

                    <div className='info-1-2'>
                        Failure to remove template text from your paper may result in your paper not being published.

                    </div>

                </div>

                <hr></hr>


                <div className='s3-info-2'>

                    <div className='info-2-1'>
                        Accessing the Template
                    </div>

                    <div className='info-2-2'>
                        Microsoft Word :
                    </div>

                    <div className='info-2-3'>

                        <div className='info-2-3-txt'>
                            US letter (DOC, 30 KB) Updated 2024
                        </div>

                        <div className='info-2-3-txt'>
                            A4 (DOC, 30 KB) Updated 2024 LaTeX Template Instructions (PDF, 63 KB) [Be sure to use the template's conference mode.]
                        </div>

                        <div className='info-2-3-txt'>
                            Template (ZIP, 700 KB) Updated 2024
                        </div>

                        <div className='info-2-3-txt'>
                            LaTeX Bibliography Files (ZIP, 309 KB)
                        </div>

                    </div>


                    <div className='info-2-4'>
                        Overleaf
                    </div>

                    <div className='info-2-5'>
                        <div className='info-2-5-txt'>
                            When working in Overleaf, the template is available at https://www.overleaf.com/gallery/tagged/ieee-official
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

