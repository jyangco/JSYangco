import React from 'react'

import GADISPic from '../assets/Proj1.png'
import GADWeb from '../assets/Proj2.png'
import HRMUTKS from '../assets/Proj4.png'
import Project1 from '../assets/Proj3.png'
import Project2 from '../assets/Proj5.png'

function ProjectsPage() {
    return (
        <div className="content-box">
            <div className="text-5xl text-left">
                Projects
            </div>
            <div className="flex flex-wrap py-5">
                <div className="w-[100%] flex flex-wrap">
                    <div className="w-[50%] mobile-lg:!w-[100%] p-3 my-auto">
                        <img className="w-auto h-auto"
                            src={GADISPic} alt="JSY" 
                        />
                        <div className='text-xl text-justify'> DOST - SEI's Gender And Developement Information System(GADIS) </div>
                    </div>
                    <div className="w-[50%] mobile-lg:!w-[100%] p-3">
                        <p>
                            GADIS is created with the goal of building a broad overview of statistics on gender and development; 
                            and serve as a reliable resource in formulation and monitoring of policies that are beneficial for both women and men to facilitate decision making. 
                        </p>
                        <p>
                            GADIS is developed using Laravel, React, Tailwind CSS, and Postresql as the database
                        </p>
                    </div>
                </div>
                <hr className='my-4 w-[100%]'/>
                <div className="w-[100%] flex flex-wrap">
                    <div className="w-[50%] mobile-lg:!w-[100%] p-3 my-auto">
                        <img className="w-auto h-auto"
                            src={GADWeb} alt="JSY" 
                        />
                        <div className='text-xl text-justify'> DOST - SEI's Gender And Developement Website </div>
                    </div>
                    <div className="w-[50%] mobile-lg:!w-[100%] p-3">
                        <p>
                            The DOST - SEI's GAD Website is created with the goal of mainstreaming GAD within the Institute;
                            and informing our clients of the activities made by the Institute to mainstream Gender And Development.
                        </p>
                        <p>
                            The website is developed using React and Tailwind CSS 
                        </p>
                    </div>
                </div>
                <hr className='my-4 w-[100%]'/>
                <div className="w-[100%] flex flex-wrap">
                    <div className="w-[50%] mobile-lg:!w-[100%] p-3 my-auto">
                        <img className="w-auto h-auto"
                            src={HRMUTKS} alt="JSY" 
                        />
                        <div className='text-xl text-justify'> DOST - SEI's HR Management Unit's Timekeeping System  </div>
                    </div>
                    <div className="w-[50%] mobile-lg:!w-[100%] p-3">
                        <p>
                            The Timekeeping System is created for the DOST - SEI's HR Management Unit, to track DTR and manage employees during work-from-home arrangements.
                        </p>
                        <p>
                            The system is developed using Node, Express, React, Tailwind CSS, and Firebase 
                        </p>
                    </div>
                </div>
                <hr className='my-4 w-[100%]'/>
                <div className="w-[100%] flex flex-wrap">
                    <div className="w-[50%] mobile-lg:!w-[100%] p-3 my-auto">
                        <img className="w-auto h-auto"
                            src={Project2} alt="JSY" 
                        />
                        <div className='text-xl text-justify'> Menu CRUD App  </div>
                    </div>
                    <div className="w-[50%] mobile-lg:!w-[100%] p-3">
                        <p>
                            This menu CRUD app is a personal project, exploring Firebase and trying Vercel.
                        </p>
                        <p>
                            You can actually visit the app <span>  </span>
                            <a className='underline text-sky-500' href="https://menu-crud-app.vercel.app" target="_blank">here</a>
                        </p>
                        <p>
                            This is developed using React, Tailwind CSS, and Firebase
                        </p>
                    </div>
                </div>
                <hr className='my-4 w-[100%]'/>
                <div className="w-[100%] flex flex-wrap">
                    <div className="w-[50%] mobile-lg:!w-[100%] p-3 my-auto">
                        <img className="w-auto h-auto"
                            src={Project1} alt="JSY" 
                        />
                        <div className='text-xl text-justify'> Shopping App Project  </div>
                    </div>
                    <div className="w-[50%] mobile-lg:!w-[100%] p-3">
                        <p>
                            This shopping app is a personal project, challenging myself and learning new technologies.
                        </p>
                        <p>
                            This is developed using Node, Express, EJS, JQuery and Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-end w-[100%] hover:cursor-default py-5">
                <a className='hover:text-lightblue' href="https://github.com/jyangco" target='_blank' > 
                    GitHub<i className="fab fa-github fa-lg"></i>
                </a>
            </div>
        </div>
    )
}

export default ProjectsPage