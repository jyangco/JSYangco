import React from 'react'

function ExperiencePage() {

    const experiences = [
        {
            year: '2021',
            company: 'DOST - Science Education Institute',
            role: 'Web Developer',
            duration: 'April 2021 — June 2024',

            story: [
                `Fresh out of university, I joined DOST-SEI as the primary developer
                responsible for building and maintaining both public-facing and
                internal systems.`,

                `Working directly with stakeholders, I translated business requirements
                into functional applications — from database design and API development
                to frontend implementation.`,

                `Being responsible for systems end-to-end taught me the importance of
                ownership, maintainability, and understanding the problem behind
                the software before writing the solution.`
            ],

            technologies: [
                'Laravel',
                'React',
                'Node.js',
                'Express',
                'PostgreSQL',
                'Firebase',
                'GitHub'
            ]
        },

        {
            year: '2024',
            company: 'Information Professionals Inc.',
            role: 'Full Stack Developer',
            duration: 'July 2024 — June 2025',

            story: [
                `I joined Information Professionals Inc. and was deployed to
                Metrobank, where I worked primarily on frontend development for
                enterprise fintech applications.`,

                `Working within a Micro-Frontend architecture, I developed reusable
                components and translated complex Figma designs into production-ready
                interfaces aligned with the customer journey.`,

                `The experience gave me a different perspective on software
                development — working alongside product managers, designers, and
                backend engineers while contributing to applications built within
                a larger engineering ecosystem.`
            ],

            technologies: [
                'React',
                'Redux-Saga',
                'Micro-Frontend',
                'Material UI',
                'Figma',
                'GitLab',
                'Agile'
            ]
        },

        {
            year: '2025',
            company: 'Megaworld Lifestyle Malls (LGMI)',
            role: 'Full Stack Developer',
            duration: 'June 2025 — Present',

            story: [
                `At Megaworld Lifestyle Malls, I returned to a more end-to-end role,
                building systems that support mall events and internal operations.`,

                `I started by developing event registration platforms with configurable
                forms, administrative workflows, and automated email notifications.
                I later worked on production systems running on AWS, including the
                main mall website and a receipt processing workflow using AWS Textract.`,

                `Over time, my role has expanded beyond feature development into greater 
                technical ownership. I contribute to system design and architectural decisions, 
                conduct code reviews, support deployments, and help maintain development standards 
                across our applications.`
            ],

            technologies: [
                'Next.js',
                'React',
                'PostgreSQL',
                'Prisma',
                'AWS',
                'Vercel',
                'GitHub',
                'HubSpot'
            ]
        }
    ]

    return (
        <div className="content-box">
            {/* ================================
                HEADER
            ================================= */}
            <section className="max-w-6xl mx-auto px-6 pt-16 pb-14">
                <p className="text-sm tracking-[0.3em] text-[#00BFFF]">
                    02. EXPERIENCE
                </p>
                <h1 className="text-2xl md:text-3xl mt-3">
                    My journey so far.
                </h1>
                <p className="max-w-2xl mt-5 text-[#8FA8BB] leading-7">
                    From building systems independently to working within
                    enterprise teams, each role has shaped how I approach
                    software development.
                </p>
            </section>
            {/* ================================
                TIMELINE
            ================================= */}
            <section className="max-w-6xl mx-auto px-6 pb-24">
                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute -left-[20px] top-3 bottom-0 w-px bg-[#163452]"/>
                    {experiences.map((experience, index) => (
                        <article
                            key={experience.company}
                            className="relative grid grid-cols-1 gap-6 md:gap-10 pb-20 last:pb-0">
                            {/* ================================
                                YEAR
                            ================================= */}
                            <div className="hidden md:!block text-left pt-1 font-mono text-sm text-[#00BFFF]">
                                {experience.year}
                            </div>
                            {/* ================================
                                TIMELINE DOT
                            ================================= */}
                            <div className=" absolute -left-[29px] top-[3px] w-[18px] h-[18px] rounded-full
                                border-2 border-[#00BFFF] bg-[#001C35] z-10
                            "/>
                            {/* ================================
                                MOBILE YEAR
                            ================================= */}
                            <div className="md:!hidden font-mono text-xs text-[#00BFFF]">
                                {experience.year}
                            </div>
                            {/* ================================
                                EXPERIENCE CONTENT
                            ================================= */}
                            <div className="">
                                <p className="text-xs font-mono tracking-wide text-[#6F8A9D]">
                                    {experience.duration}
                                </p>
                                <h2 className="text-2xl md:text-3xl font-bold mt-3 text-[#DFF6FF]">
                                    {experience.company}
                                </h2>
                                <p className="mt-2 font-mono text-sm text-[#00BFFF]">
                                    {experience.role}
                                </p>
                                <div className="max-w-3xl mt-7 space-y-5 text-[#AFC4D3] leading-7 text-sm md:text-base">
                                    {experience.story.map((paragraph, paragraphIndex) => (
                                        <p key={paragraphIndex}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2 mt-7">
                                    {experience.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="px-3 py-1.5 border border-[#163452] bg-[#061426] text-[#8FA8BB] text-xs 
                                            font-mono transition-colors duration-300 hover:border-[#00BFFF] hover:text-[#00BFFF]
                                        ">
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default ExperiencePage