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
                            Hi! My name Jason — a Full Stack Web Developer passionate about turning complex problems into seamless web applications.
                        </p>
                        <img className="hidden mobile-lg:!block mobile-lg:!h-[120px] mobile-lg:!w-[100px] mobile-lg:!mx-2"
                            src={pic} alt="JSY" 
                        />
                    </div>
                    <p className='mobile-lg:!text-base'>
                        Over the past several years, I’ve designed and built systems for organizations like the Department of Science and Technology and Metrobank, as well as luxury lifestyle platforms for Megaworld Malls. From internal tools to public-facing platforms, I enjoy taking projects from concept to deployment, crafting scalable solutions, and improving user experiences along the way.
                    </p>
                    <p className="mobile-lg:!text-base">
                        I thrive on learning new technologies, solving challenging problems, and continuously refining my craft—whether it’s designing dynamic databases, developing intuitive front-end interfaces, or automating workflows for efficiency.
                    </p>
                    <p className='mobile-lg:!text-base'>
                        Let`s build something meaningful together.
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