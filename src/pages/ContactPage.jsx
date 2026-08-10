import React from 'react'

function ContactPage() {

    const contactLinks = [
        {
            title: 'GITHUB',
            value: 'github.com/jyangco',
            link: 'https://github.com/jyangco',
            icon: 'fab fa-github'
        },
        {
            title: 'LINKEDIN',
            value: 'linkedin.com/in/jason-yangco',
            link: 'https://www.linkedin.com/in/jason-yangco-75554924b',
            icon: 'fab fa-linkedin-in'
        }
    ]

    return (
        <div className="content-box">
            {/* Contact Content */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-10">
                    <p className="text-lightblue text-sm tracking-widest mb-4">
                        04. CONTACT
                    </p>
                    <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
                        Let's build
                        <br />
                        something useful.
                    </h1>
                    <p className="mt-4 text-gray-300 leading-7 max-w-xl">
                        Have a system to build, a problem to solve,
                        or an idea worth exploring? Let's talk.
                    </p>
                </div>
                <a
                    href="mailto:jyangco22@gmail.com"
                    className="block border border-gray-700 p-5 md:p-6 hover:border-lightblue transition-all duration-300 group"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 border border-gray-700 flex items-center 
                                justify-center text-lightblue group-hover:border-lightblue"
                            >
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <p className="text-xs text-lightblue tracking-widest">
                                    EMAIL
                                </p>
                                <p className="mt-1 text-lg md:text-xl">
                                    jyangco22@gmail.com
                                </p>
                            </div>
                        </div>
                        <span className=" text-2xl text-lightblue group-hover:translate-x-2 transition-transform">
                            →
                        </span>
                    </div>
                </a>
                {/* Social Links */}
                <div className="grid grid-cols-1 md:!grid-cols-2 gap-4 mt-4">
                    {contactLinks.map((item) => (
                        <a
                            key={item.title}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="border border-gray-700 p-5 hover:border-lightblue transition-all duration-300 group"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 border border-gray-700 flex items-center justify-center
                                        text-lightblue group-hover:border-lightblue"
                                    >
                                        <i className={item.icon}></i>
                                    </div>
                                    <div>
                                        <p className="text-xs text-lightblue tracking-widest">
                                            {item.title}
                                        </p>
                                        <p className="mt-1 text-sm md:text-base">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-xl text-lightblue group-hover:translate-x-2 transition-transform">
                                    →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
                {/* Closing */}
                <div className="text-center mt-8">
                    <p className="text-gray-400 text-sm">
                        I'll get back to you as soon as I can.
                    </p>
                    <div className="text-lightblue text-2xl mt-5">
                        ♡
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage