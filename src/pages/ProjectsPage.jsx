import React from 'react'

import GADISPic from '../assets/Proj1.png' 
import GADWeb from '../assets/Proj2.png'
import HRMUTKS from '../assets/Proj4.png' 
import Project1 from '../assets/Proj3.png'
import FeaturedProject2 from '../assets/EWRC.png'

function ProjectsPage() {
    const featured = [
        {
            title: "Featured Project: Eastwood City Run Club",
            description: [
                "A production-ready event management platform for mall running communities.",
                "Managing mall running events involves coordinating registrations, verifying participants, reviewing activity submissions, approving rewards, and syncing updates with multiple mall partners — often through manual and fragmented processes.",
                "I designed and built Eastwood Run Club as a centralized system to streamline the entire event lifecycle.",
                "The platform models participants, activities, approvals, and reward redemptions in a structured relational database, enabling clear workflows for both users and administrators. Role-based access ensures participants and admins operate within defined boundaries, while automated background jobs handle notification flows and partner updates without blocking user interactions.",
                "Admins can oversee events and approvals through a dedicated dashboard, while participants register, verify their accounts, and submit activities seamlessly. Integration with HubSpot and AWS SES ensures reliable communication and partner coordination.",
                "By automating repetitive processes and structuring the system around scalable workflows, the platform reduces administrative overhead and ensures events operate efficiently even as participation grows.",
                "Tech Stack: Next.js 13, Tailwindcss, PostgreSQL (Prisma ORM), AWS SES, HubSpot API, Vercel",
            ],
            img: FeaturedProject2,
            live: true,
            liveLink: "https://eastwoodrunclub.com/"
        },
    ]
    const projects = [
        {
            title: "GADIS - Gender And Development Information System",
            description: [
                "GADIS is created to provide a broad overview of gender and development statistics and serve as a reliable resource for policy formulation and monitoring.",
                "Developed using Laravel, React, Tailwind CSS, and PostgreSQL."
            ],
            img: GADISPic
        },
        {
            title: "GAD Website",
            description: [
                "The DOST-SEI GAD Website aims to mainstream GAD within the Institute and inform clients about activities and initiatives.",
                "Developed using React and Tailwind CSS."
            ],
            img: GADWeb
        },
        {
            title: "HR Management Unit Timekeeping System",
            description: [
                "Tracks DTR and manages employees during work-from-home arrangements.",
                "Developed using Node, Express, React, Tailwind CSS, and Firebase."
            ],
            img: HRMUTKS
        },
        {
            title: "Shopping App Project",
            description: [
                "A personal project to challenge myself and learn new technologies.",
                "Built using Node, Express, EJS, JQuery, and Tailwind CSS."
            ],
            img: Project1
        },
    ]

    return (
        <div className="content-box">
            <h1 className="text-5xl font-bold mb-10 text-[#DFF6FF]">Projects</h1>
            <div className="flex flex-col space-y-16">  
                {featured.map((proj, index) => 
                    <div
                        key={index}
                        className="w-full flex flex-wrap items-center">
                        <div className="mobile-lg:!w-full p-3">
                            <img
                                src={proj.img}
                                alt={proj.title}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                            <h2 className="text-xl text-[#DFF6FF] mt-2">{proj.title}</h2>
                            <div className="text-green-400 text-base font-semibold flex items-center w-fit">
                                <div className="w-3 h-3 me-1 rounded-full bg-red-600 border-2 border-[#001C35]"/>Live Project 
                            </div>
                            <a
                                href={proj.liveLink}
                                target="_blank"
                                className="text-blue-400 text-base font-semibold flex items-center w-fit"
                            >
                                <i className="fas fa-external-link fa-xs me-1"></i> Demo here
                            </a>
                        </div>
                        <div className="mobile-lg:!w-full p-3 text-[#DFF6FF]">
                            {proj.description.map((para, i) => (
                                <p key={i} className="mb-2">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                )}
                {/* {projects.map((proj, index) => 
                    <div
                        key={index}
                        className={`w-full flex flex-wrap items-center ${
                            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                        }`}
                    >
                        <div className="w-1/2 mobile-lg:!w-full p-3">
                            <img
                                src={proj.img}
                                alt={proj.title}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                            <h2 className="text-xl text-[#DFF6FF] mt-2">{proj.title}</h2>
                        </div>
                        <div className="w-1/2 mobile-lg:!w-full p-3 text-[#DFF6FF]">
                            {proj.description.map((para, i) => (
                                <p key={i} className="mb-2">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                )} */}
            </div>
            <div className="flex justify-between items-center hover:cursor-default py-5">
                <h2 className="text-[#DFF6FF]">I also have some small personal projects in my GitHub account <i className="fal fa-hand-point-right"></i></h2>

                <a
                    className="hover:text-lightblue"
                    href="https://github.com/jyangco"
                    target="_blank"
                >
                    GitHub <i className="fab fa-github fa-lg"></i>
                </a>
            </div>
        </div>
    )
}

export default ProjectsPage
