import React from 'react'

import GADISPic from '../assets/Proj1.png' 
import GADWeb from '../assets/Proj2.png'
import HRMUTKS from '../assets/Proj4.png' 
import Project1 from '../assets/Proj3.png'
import FeaturedProject2 from '../assets/EWRC.png'


function ProjectsPage() {

    const featuredProjects = [
        {
            number: '01',
            title: 'Dynamic Registration Form Builder',
            status: 'In Development',
            description:
                'A configurable registration platform designed to let event administrators create and manage registration forms without requiring code changes. Event configuration, dynamic URLs, field types, and registration workflows are handled through a centralized system.',
            technologies: [
                'Next.js',
                'React',
                'PostgreSQL',
                'Prisma'
            ],
            image: null,
            link: null
        },
        {
            number: '02',
            title: 'Eastwood Run Club',
            status: 'Live',
            description:
                'A production platform built to manage mall running events and participant activities end-to-end. The system connects registration, email verification, run submissions, approvals, rewards, event management, and partner notifications into a single workflow.',
            technologies: [
                'Next.js',
                'React',
                'PostgreSQL',
                'Prisma',
                'AWS',
                'Vercel',
                'HubSpot'
            ],
            image: FeaturedProject2,
            link: 'https://eastwoodrunclub.com/'
        }
    ]

    const otherProjects = [
        {
            title: "GADIS",
            description: [
                "Gender and Development Information System for data collection, monitoring and reporting.",
            ],
            technologies: [
                'Laravel',
                'React',
                'PostgreSQL'
            ],
            image: GADISPic
        },
        {
            title: "GAD Website",
            description: [
                "The DOST-SEI GAD Website aims to mainstream GAD within the Institute and inform clients about activities and initiatives.",
            ],
            technologies: [
                'React',
                'PostgreSQL'
            ],
            image: GADWeb
        },
        {
            title: "HR Management Unit Timekeeping System",
            description: [
                "Tracks DTR and manages employees during work-from-home arrangements.",
            ],
            technologies: [
                'Node.js',
                'Express',
                'React',
                'Firebase'
            ],
            image: HRMUTKS
        },
        {
            title: "Shopping App Project",
            description: [
                "A personal project to challenge myself and learn new technologies.",
            ],
            technologies: [
                'Node.js',
                'Express',
                'JQuery',
                'EJS',
                'Firebase'
            ],
            image: Project1
        },
        {
            title: "Megaworld Website",
            description: [
                "Support and enhancements on the main Megaworld Lifestyle Malls website running on AWS.",
            ],
            technologies: [
                'React',
                'AWS',
                'ContentStack'
            ],
            image: null,
            link: 'https://megaworld-lifestylemalls.com/'
        },
        {
            title: "Receipt Processing System",
            description: [
                "Automated receipt extraction system used by various Megaworld Malls during their Holiday Raffle Events.",
            ],
            technologies: [
                'Next.js',
                'AWS Textract',
                'HubSpot',
                'PostgreSQL',
            ],
            image: null
        },
    ]

    const hackathonProjects = [
        {
            title: "Metrobank Hackathon Project (Finisher)",
            description:
                "A fintech solution built during Metrobank's internal hackathon as part of a three-member team. I handled the frontend development, translating our concept into a functional and user-friendly application within 24 hours.",
            technologies: [
                "React",
                "Redux-Saga",
                "Material UI"
            ],
            image: null
        }
    ]

    return (
        <div className="content-box">
            {/* HEADER */}
            <div className="max-w-6xl mx-auto px-6 pt-10 pb-10">
                <p className="text-sm tracking-[0.3em] text-lightblue">
                    03. PROJECTS
                </p>
                <h1 className="text-2xl md:text-3xl font-bold mt-3">
                    Things I've built.
                </h1>
                <p className="max-w-2xl mt-5 text-gray-400 leading-7">
                    A selection of projects I've worked on across the stack,
                    from system design and database architecture to development
                    and deployment.
                </p>
            </div>
            {/* FEATURED PROJECTS */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:!grid-cols-2 gap-6">
                    {featuredProjects.map((project) => (
                        <div
                            key={project.number}
                            className="border border-gray-700 bg-[#061426] hover:border-blue-400 transition-colors duration-300"
                        >
                            <div className="h-56 bg-[#04101F] flex items-center justify-center border-b border-gray-700">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-blue-400 text-sm">
                                        {project.number}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {project.status}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold mt-4">
                                    {project.title}
                                </h2>
                                <p className="mt-4 text-gray-300 leading-7 text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="px-2 py-1 text-xs border border-gray-700 text-gray-400"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-block mt-6 text-sm text-blue-400 hover:text-white"
                                    >
                                        View Live Project →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* OTHER PROJECTS */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xl font-semibold">
                        Other Projects
                    </h2>
                    <div className="h-px bg-gray-700 flex-1" />
                </div>
                <div className="grid grid-cols-1 md:!grid-cols-3 gap-6">
                    {otherProjects.map((project) => (
                        <div
                            key={project.title}
                            className="flex flex-col gap-5 p-5 border border-gray-700 bg-[#04101F]"
                        >
                            <div>
                                <h3 className="text-lg font-semibold">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-6 mt-2">
                                    {project.description}
                                </p>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-block text-sm text-blue-500 hover:text-white"
                                    >
                                        Visit the site →
                                    </a>
                                )}
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="text-xs text-blue-400"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* HACKATHON PROJECTS */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xl font-semibold">
                        Special Event Projects
                    </h2>
                    <div className="h-px bg-gray-700 flex-1" />
                </div>
                <div className="grid grid-cols-1 md:!grid-cols-3 gap-6">
                    {hackathonProjects.map((project) => (
                        <div
                            key={project.title}
                            className="flex flex-col gap-5 p-5 border border-gray-700 bg-[#04101F]"
                        >
                            <div>
                                <h3 className="text-lg font-semibold">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-6 mt-2">
                                    {project.description}
                                </p>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-block text-sm text-blue-500 hover:text-white"
                                    >
                                        Visit the site →
                                    </a>
                                )}
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="text-xs text-blue-400"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* GITHUB */}
            <div className="max-w-6xl mx-auto px-6 pb-10 text-right">
                <a
                    href="https://github.com/jyangco"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                    View more on GitHub →
                </a>
            </div>
        </div>
    )
}

export default ProjectsPage