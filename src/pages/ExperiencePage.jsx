import React from 'react'

function ExperiencePage() {
    const experiences = [
        {
            company: "DOST - Science Education Institute",
            role: "Web Developer",
            duration: "April 2021 – June 2024",
            story: [
                "Fresh out of university, I stepped into DOST-SEI as the sole developer for both internal tools and public-facing systems. I quickly learned to take full ownership of projects — gathering requirements directly from stakeholders, designing databases, building APIs, and crafting front-end interfaces.",
                "Along the way, I built systems that streamlined workflows and made internal operations more efficient. This experience taught me how to turn user needs into functional, scalable software — and the value of seeing a project through from start to finish."
            ],
            tech: ["Laravel", "React.js", "Express", "Node.js", "PostgreSQL", "Firebase", "GitHub"]
        },
        {
            company: "Information Professionals Inc. – Metrobank",
            role: "Full Stack Developer (Primary Frontend Engineer)",
            duration: "July 2024 – June 2025",
            story: [
                "At Information Professionals Inc., I dove into the world of fintech, turning complex Figma designs into polished, production-ready interfaces for Metrobank. Working within a micro-frontend architecture, I developed reusable components that improved consistency across multiple applications.",
                "Collaborating closely with designers, product managers, and backend engineers in Agile sprints, I learned how to balance design precision with scalability. Participating in an internal hackathon as the frontend lead further strengthened my problem-solving skills and ability to deliver under tight deadlines."
            ],
            tech: ["React", "Redux-Saga", "Micro-Frontend Architecture", "Figma", "GitLab", "Agile"]
        },
        {
            company: "Megaworld Lifestyle Malls (LGMI)",
            role: "Full Stack Developer",
            duration: "June 2025 – Present",
            story: [
                "Joining Megaworld, I was immediately tasked with building a registration system for mall events, complete with admin panels and automated email notifications.",
                "From there, I maintained the main mall website on AWS EC2 and developed a receipt scanning system to streamline raffle events. Currently, I’m architecting the Eastwood Run Club platform, handling dynamic forms, large-scale participant registration, and automated communications across multiple mall partners.",
                "This role has sharpened my ability to design end-to-end systems that are both scalable and user-friendly, while managing complex workflows independently."
            ],
            tech: ["Next.js 13", "React", "Context API", "PostgreSQL", "Prisma", "AWS (EC2, SES, Textract)", "Vercel", "GitHub"]
        }
    ]

    return (
        <div className="content-box">
            <h1 className="text-5xl font-bold mb-10">Experience</h1>
            <div className="relative">
                <div className="absolute left-5 top-0 w-1 bg-[#3399FF] h-full"></div>
                <div className="flex flex-col space-y-16 ml-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative">
                            <div className="absolute left-[-28px] top-2 w-6 h-6 rounded-full bg-[#00BFFF] border-2 border-[#001C35]"></div>
                            <div className="bg-[#012040] shadow-md rounded-lg p-6 mobile-lg:!p-4">
                                <div className="flex flex-col items-start mb-3">
                                    <div>
                                        <h2 className="text-2xl font-semibold text-[#DFF6FF]">{exp.role}</h2>
                                        <h3 className="text-lg text-[#A0CFEF]">{exp.company}</h3>
                                    </div>
                                    <span className="text-sm text-gray-400">{exp.duration}</span>
                                </div>
                                <div className="space-y-3 text-[#DFF6FF]">
                                    {exp.story.map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {exp.tech.map((tech, i) => (
                                        <span key={i} className="bg-[#000000] text-[#00BFFF] text-xs px-2 py-1 rounded-full">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExperiencePage
