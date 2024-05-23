import React from 'react'

import pic from '../assets/JSY.png'

function AboutMePage() {
    return (
        <div className="content-box">
            <div className="text-5xl text-left">
                About Me
            </div>
            <div className="flex mobile-lg:!block gap-5">
                <div className="w-3/5 mobile-lg:!w-[100%] mt-10 mobile-lg:!mt-5">
                    <div className="block mobile-lg:!flex">
                        <p className='mobile-lg:!text-sm mobile-lg:!w-[50%] mobile-lg:!my-auto'>
                            Hi! My name is Jason, and I am a passionate Full Stack Developer. 
                        </p>
                        <img className="hidden mobile-lg:!block mobile-lg:!h-[120px] mobile-lg:!w-[100px] mobile-lg:!mx-2"
                            src={pic} alt="JSY" 
                        />
                    </div>
                    <p className='mobile-lg:!text-sm'>
                        My experience in web development has given me a strong foundation in both front-end and back-end technologies.
                        During my career, I have had the chance to work on multiple projects from start to finish. 
                        One project that stands out is the DOST - SEI's GAD Information System, known as GADIS, which is currently in use within the institute. 
                        As the only developer and a recent graduate at the time, it was a challenging experience but ultimately rewarding as I acquired new knowledge and improved my skills.
                    </p>
                    <p className='mobile-lg:!text-sm'>
                        I am adept at problem-solving and is always eager to learn and adapt to new technologies 
                    </p>
                </div>
                <div className="w-2/5 mobile-lg:!hidden">
                    <img src={pic} alt="JSY" />
                </div>      
            </div>
        </div>
    )
}

export default AboutMePage