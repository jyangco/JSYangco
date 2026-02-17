import React from 'react'

function ExperiencePage() {
    const experiences = [
        {
            company: "DOST - Science Education Institute",
            role: "Web Developer",
            duration: "April 2021 - June 2024",
            story: [
                "Fresh out of university, I joined DOST-SEI as the primary developer responsible for both public-facing and internal systems. One of my first major projects was GADIS, a platform used to streamline gender and development data collection and reporting.",
                "Handling end-to-end development, I gathered requirements directly from stakeholders, designed relational databases, built APIs, and developed front-end interfaces. I also created HR timekeeping and internal tools to improve administrative efficiency.",
                "This experience taught me the importance of ownership, scalability, and translating user needs into functional software."
            ],
            tech: ["Laravel", "React.js", "Express", "Node.js", "PostgreSQL", "Firebase", "GitHub"]
        },
        {
            company: "Information Professionals Inc. – deployed to Metrobank",
            role: "Full Stack Developer (Primary Frontend Engineer)",
            duration: "July 2024 - June 2025",
            story: [
                "At Information Professionals Inc., I translated complex fintech Figma designs into seamless, production-ready interfaces for Metrobank customers.",
                "Working within a micro-frontend architecture, I developed reusable components to improve consistency and efficiency across multiple applications. Collaborating with product managers, designers, and backend engineers in Agile sprints, I balanced design precision with scalability.",
                "I also participated in an internal hackathon, achieving Finisher Status as the frontend lead in a 3-member team."
            ],
            tech: ["React", "Redux-Saga", "Micro-Frontend Architecture", "Figma", "GitLab", "Agile"]
        },
        {
            company: "Megaworld Lifestyle Malls (LGMI)",
            role: "Full Stack Developer",
            duration: "June 2025 - Present",
            story: [
                "When I joined Megaworld, my first task was to build registration systems for mall events with admin panels and automated email notifications via AWS SES, reducing manual work for event organizers.",
                "I then maintained the main mall website on AWS EC2, ensuring stability and performance during campaigns.",
                "Next, I developed a receipt scanning system for raffle events using AWS Textract, automating prize validation.",
                "Currently, I am architecting the Eastwood Run Club platform end-to-end, handling dynamic forms and large-scale participant registrations."
            ],
            tech: ["Next.js 13", "React", "Context API", "PostgreSQL", "Prisma", "AWS (EC2, SES, Textract)", "Vercel", "GitHub"]
        },
    ]

    return (
        <div className="content-box px-4 py-10 max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold mb-10 text-[#DFF6FF]">Experience</h1>
            <div className="relative">
                <div className="absolute left-5 top-0 w-1 bg-[#3399FF] h-full"></div>
                <div className="flex flex-col space-y-16 ml-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative mobile-lg:!text-base">
                            <div className="absolute left-[-28px] top-2 w-6 h-6 rounded-full bg-[#00BFFF] border-2 border-[#001C35]"></div>
                            <div className="bg-[#012040] shadow-md rounded-lg p-6 mobile-lg:!p-4">
                                <div className="flex flex-col justify-between items-start mb-3">
                                    <div>
                                        <h2 className="text-2xl mobile-lg:!text-xl font-semibold text-[#DFF6FF]">{exp.role}</h2>
                                        <h3 className="text-lg text-[#A0CFEF]">{exp.company}</h3>
                                    </div>
                                    <span className="text-base text-gray-400">{exp.duration}</span>
                                </div>
                                <div className="space-y-3 text-[#DFF6FF]">
                                    {exp.story.map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {exp.tech.map((tech, i) => (
                                        <span key={i} className="bg-black text-[#00BFFF] text-xs px-2 py-1 rounded-full">{tech}</span>
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
