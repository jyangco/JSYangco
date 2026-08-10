import React from 'react'
import ProfilePic from '../assets/JSY1.png'

function AboutPage() {
    const focusAreas = [
        {
            number: '01',
            title: 'System Design',
            description:
                'Designing application structure, data flows, and workflows around real business requirements.'
        },
        {
            number: '02',
            title: 'Backend & Data',
            description:
                'Building APIs, relational databases, integrations, and reliable data flows behind the application.'
        },
        {
            number: '03',
            title: 'Full Stack Development',
            description:
                'Taking applications from database and backend logic all the way to the user interface.'
        },
        {
            number: '04',
            title: 'Deployment & Cloud',
            description:
                'Deploying and maintaining applications across cloud and hosting environments.'
        }
    ]

    const approach = [
        {
            number: '01',
            title: 'Understand',
            description: 'Understand the business problem, requirements, and users.'
        },
        {
            number: '02',
            title: 'Design',
            description: 'Plan the data model, system flow, and application structure.'
        },
        {
            number: '03',
            title: 'Build',
            description: 'Develop the backend, integrations, and user-facing experience.'
        },
        {
            number: '04',
            title: 'Deploy',
            description: 'Ship, maintain, monitor, and continuously improve the system.'
        }
    ]

    const technologies = {
        Frontend: ['Next.js', 'React', 'Tailwind CSS'],
        Backend: ['Node.js', 'Express', 'Laravel', 'NestJS'],
        Database: ['PostgreSQL', 'Prisma', 'Firebase'],
        'Cloud & Tools': ['AWS', 'Vercel', 'Git', 'GitHub']
    }

    return (
        <div className="content-box">
            <div className="min-h-screen text-[#E6F7FF]">
                {/* About hero */}
                <section className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:!grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Profile Image */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative h-[500px]">
                                <img
                                    src={ProfilePic}
                                    alt="Jason Yangco"
                                    className="w-full h-full object-cover grayscale-[15%] rounded-xl border-2 border-[#00BFFF]"
                                />
                                {/* Floating label */}
                                <div className="absolute bottom-2 left-5
                                    bg-[#061426] border border-[#163452]
                                    p-4 font-mono rounded-xl"
                                >
                                    <p className="text-xs !mb-0">
                                        <span className='text-[#00BFFF]'> 5+ Years </span> of Experience <br/>
                                        Building Web Applications
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-mono tracking-[0.3em] text-[#00BFFF] mb-5">
                                01. ABOUT ME
                            </p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                                Hi, I'm Jason.
                            </h1>
                            <h2 className="mt-4 text-xl md:text-2xl font-semibold leading-relaxed 
                                bg-gradient-to-r from-white to-[#00BFFF] bg-clip-text text-transparent 
                                inline-block
                            ">
                                I build reliable, scalable web systems from backend to interface.
                            </h2>
                            <div className="mt-8 space-y-5 text-[#E6F7FF] text-base md:text-lg leading-relaxed max-w-2xl">
                                <p>
                                    I enjoy taking applications from concept to
                                    deployment — translating business requirements
                                    into well-structured systems, from database
                                    design and APIs to the user interface.
                                </p>
                                <p>
                                    I'm particularly interested in system design,
                                    backend architecture, and scalability. I like
                                    understanding how the pieces fit together and
                                    building solutions that remain maintainable as
                                    requirements grow and change.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================
                    WHAT I DO
                ========================== */}
                <section className="max-w-6xl mx-auto px-6 py-10 bg-[#071c35] border border-[#0c3769] shadow-2xl rounded-xl mt-10">
                    <div className="mb-10">
                        <p className="text-sm text-center font-mono tracking-[0.3em] text-[#00BFFF]">
                            WHAT I DO
                        </p>
                        <h2 className="text-2xl md:text-3xl text-center mt-3">
                            From architecture to deployment, I build with the bigger picture in mind.
                        </h2>
                        <p className="text-[#8FA8BB] mt-4 text-center">
                            I enjoy working across the stack while paying close
                            attention to how the individual pieces work together.
                        </p>
                    </div>
                    {/* Cards */}
                    <div className="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 gap-4">
                        {focusAreas.map((item) => (
                            <div
                                key={item.number}
                                className="group bg-[#061426] border border-[#163452]
                                p-6 hover:border-[#00BFFF]
                                transition-all duration-300 cursor-pointer"
                            >
                                <span className="font-mono text-sm text-[#00BFFF]">
                                    {item.number}
                                </span>
                                <h3 className="text-xl font-semibold mt-8">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-[#8FA8BB] leading-relaxed mt-4">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>


                {/* =========================
                    MY APPROACH
                ========================== */}
                <section className="max-w-6xl mx-auto px-6 py-10 bg-[#061426] border border-gray-800 shadow-2xl rounded-xl mt-10">
                    <div className="mb-12">
                        <p className="text-sm font-mono tracking-[0.3em] text-[#00BFFF]">
                            MY APPROACH
                        </p>
                        <h2 className="text-2xl md:text-3xl mt-3">
                            I like solving problems from the inside out.
                        </h2>
                    </div>
                    {/* Desktop flow */}
                    <div className="hidden lg:!grid grid-cols-4">
                        {approach.map((item, index) => (
                            <div
                                key={item.number}
                                className="relative border-t border-[#163452] pt-6 pr-8 cursor-pointer"
                            >
                                <span className="font-mono text-sm text-[#00BFFF]">
                                    {item.number}
                                </span>
                                <h3 className="text-2xl font-semibold mt-4">
                                    {item.title}
                                </h3>
                                <p className="text-[#8FA8BB] text-sm leading-relaxed mt-3">
                                    {item.description}
                                </p>
                                {index < approach.length - 1 && (
                                    <span className="absolute right-4 top-[-10px] text-[#00BFFF]">
                                        →
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile flow */}
                    <div className="lg:hidden space-y-0">
                        {approach.map((item, index) => (
                            <div key={item.number}>
                                <div className="border-l border-[#163452] pl-6 py-6">
                                    <span className="font-mono text-sm text-[#00BFFF]">
                                        {item.number}
                                    </span>
                                    <h3 className="text-xl font-semibold mt-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#8FA8BB] text-sm leading-relaxed mt-2">
                                        {item.description}
                                    </p>
                                </div>
                                {index < approach.length - 1 && (
                                    <div className="text-[#00BFFF] ml-6">
                                        ↓
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* =========================
                    TECHNOLOGIES
                ========================== */}
                <section className="max-w-6xl mx-auto px-6 py-10 bg-[#040d18] border border-gray-700 shadow-2xl rounded-xl mt-10">
                    <div className="mb-10">
                        <p className="text-sm font-mono tracking-[0.3em] text-[#00BFFF]">
                            TECHNOLOGIES
                        </p>
                        <h2 className="text-2xl md:text-3xl mt-3">
                            Tools I work with.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:!grid-cols-2 gap-4">
                        {Object.entries(technologies).map(([category, tools]) => (
                            <div
                                key={category}
                                className="bg-[#061426] border border-[#163452] p-6"
                            >
                                <h3 className="font-mono text-sm text-[#00BFFF] mb-5">
                                    {category.toUpperCase()}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="px-3 py-2 text-sm
                                            bg-[#081A2E]
                                            border border-[#163452]
                                            text-[#AFC4D3] cursor-pointer 
                                            hover:bg-[#163452] hover:border-gray-500"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutPage