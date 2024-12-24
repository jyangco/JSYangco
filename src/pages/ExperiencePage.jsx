import React, { useState } from 'react'

function ExperiencePage() {
    const [activeTab, setActiveTab] = useState(0)
    const workExperiences = [
        {
            company: "Information Professionals Inc.",
            role: "Full Stack Developer",
            duration: "July 2024 - Present",
            description: [
                "Currently deployed to Metropolitan Bank and Trust Company (Metrobank).",
                "Collaborated on building reusable micro-components for a Micro-Frontend (MFE) Architecture. Integrated Material UI for a more consistent and user-friendly design.",
                "Frontend focused development using React and Redux-Saga for state management and side effects handling. Focusing on alignment with the customer journey document to improve user experience.",
                "Regularly used Gitlab for version control.",
                "Utilized Jira to track and manage tasks, user stories, and bugs.",
            ]
        },
        {
            company: "DOST - Science Education Institute",
            role: "Web Developer",
            duration: "April 2021 - June 2024",
            description: [
                "Discussed website and system requirements with the TWG to produce actionable development plans.",
                "Discussed project progress with the users, collected feedback on different stages, and directly addressed concerns.",
                "Developed an efficient and maintainable Information System for the DOST - SEI GAD Unit using Laravel and React with PostgreSQL as the database.",
                "Coded a website for the GAD Unit using React.js and TailwindCSS.",
                "Developed an effective and maintainable Timekeeping System for the HR Management Unit for the employee’s work-from-home setup using Node, Express, and React with Firebase.",
                "Written System documentation and user guide for the systems.",
            ]
        },
    ]
    return (
        <div className="content-box">
            <div className="text-5xl text-left">
                Experience
            </div>
            <div className="block py-5">
                <div className="w-100">
                    <div className="flex flex-wrap space-x-8">
                        <div className="flex flex-col mobile-lg:![w-100%] space-y-4">
                            {workExperiences.map((experience, index) => 
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`py-2 px-4 text-lg text-left font-semibold ${activeTab === index ? 'border-l-4 border-blue-500 text-blue-500' : 'text-gray-500 hover:text-blue-500'}`}
                                >
                                    {experience.company}
                                </button>
                            )}
                        </div>
                        <div className="flex-1">
                            <div className="p-6 border-l-2">
                                <p className="text-xl font-semibold">{workExperiences[activeTab].role}</p>
                                <p className="text-sm text-gray-500">{workExperiences[activeTab].duration}</p>
                                <ul className="mt-4 list-disc pl-5">
                                    {workExperiences[activeTab].description.map((item, index) => 
                                        <li key={index} className="p-1">{item}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperiencePage


