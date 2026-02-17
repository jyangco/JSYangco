import React from 'react'

import GADISPic from '../assets/Proj1.png' 
import GADWeb from '../assets/Proj2.png'
import HRMUTKS from '../assets/Proj4.png' 
import Project1 from '../assets/Proj3.png'
import FeaturedProject2 from '../assets/EWRC.png'

function ProjectsPage() {
    const projects = [
        {
            title: "Featured Project: Eastood City Run Club",
            description: [
                "Eastwood Run Club is built to manage mall running events end-to-end. Participants can register and verify their emails, upload run records, redeem rewards, and easily join activities with a single click thanks to the efficient state management provided by Context API with automated emails via cron jobs to notify other mall partners about registration activities. Admins can approve participant run activity, redemption requests, and manage events. This platform streamlines event management for both organizers and participants, reducing manual work and improving overall engagement.",
                "Developed using Next.js 13, React, Context API, PostgreSQL, HubSpot, Prisma, AWS SES, Vercel, GitHub"
            ],
            img: FeaturedProject2,
            live: true,
            liveLink: "https://eastwoodrunclub.com/"
        },
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
        <div className="content-box px-4 py-10 max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-10 text-[#DFF6FF]">Projects</h1>
            <div className="flex flex-col space-y-16">
                {projects.map((proj, index) => (
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
                            {proj.live && (
                                <a
                                    href={proj.liveLink}
                                    target="_blank"
                                    className="text-green-400 font-semibold flex items-center w-fit"
                                >
                                    <div className="w-3 h-3 me-1 rounded-full bg-red-600 border-2 border-[#001C35]"/>Live Project
                                </a>
                            )}

                        </div>
                        <div className="w-1/2 mobile-lg:!w-full p-3 text-[#DFF6FF]">
                            {proj.description.map((para, i) => (
                                <p key={i} className="mb-2">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-end w-full hover:cursor-default py-5">
                <a
                    className="hover:text-lightblue"
                    href="https://github.com/jyangco"
                    target="_blank"
                >
                    GitHub <i className="fab fa-github fa-lg ms-1"></i>
                </a>
            </div>
        </div>
    )
}

export default ProjectsPage
