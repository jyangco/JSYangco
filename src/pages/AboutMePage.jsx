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
                    <div className="block mobile-lg:!flex w-full gap-2 mobile-lg:!mb-[10px]">
                        <p className='mobile-lg:!text-base mobile-lg:!w-auto mobile-lg:!my-auto'>
                            Hi, I`m Jason — a Full Stack Web Developer with growing expertise in backend systems and scalable application design.
                        </p>
                        <img className="hidden mobile-lg:!block mobile-lg:!h-[120px] mobile-lg:!w-[100px] mobile-lg:!mx-2"
                            src={pic} alt="JSY" 
                        />
                    </div>
                    <p className='mobile-lg:!text-base'>
                        Over the past several years, I`ve designed and delivered production-grade systems for organizations such as the Department of Science and Technology and Metrobank, as well as public-facing platforms for Megaworld Malls. My work spans internal operational tools and customer-facing applications, with a strong emphasis on data modeling, workflow design, and long-term maintainability.
                    </p>
                    <p className="mobile-lg:!text-base">
                        I enjoy taking projects from concept to deployment — translating business requirements into structured systems with clear boundaries, reliable integrations, and efficient data flows. Whether designing relational databases, building robust APIs, or deploying applications to the cloud, I focus on creating solutions that remain stable and adaptable as they scale.
                    </p>
                    <p className='mobile-lg:!text-base'>
                        I`m particularly interested in system design and scalability, with a continuous focus on improving how software performs behind the scenes — ensuring performance, reliability, and maintainability are built in from the start.
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