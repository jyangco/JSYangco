import React from 'react'

function ExperiencePage() {
    return (
        <div className="content-box">
            <div className="text-5xl text-left">
                Experience
            </div>
            <div className="block py-5">
                <div className="w-100">
                    <div className="p-2 border-l"> 
                        Department Of Science and Technology (April 2021 - June 2024)
                    </div>
                    <ul className="p-3 list-disc mobile-lg:!text-sm">
                        <li className='p-2 hover:ps-4 hover:text-lightblue hover:cursor-pointer hover:bg-lightnavy'>
                            Discussed website and system requirements with the TWG to produce actionable development plans
                        </li>
                        <li className='p-2 hover:ps-4 hover:text-lightblue hover:cursor-pointer hover:bg-lightnavy'>
                            Discussed project progress with the users, collected feedback on different stages and directly addressed concerns.
                        </li>
                        <li className='p-2 hover:ps-4 hover:text-lightblue hover:cursor-pointer hover:bg-lightnavy'>
                            Developed an efficient and maintainable Information System for the DOST - SEI GAD Unit using Laravel and React with PostgreSQL as the database.
                        </li>
                        <li className='p-2 hover:ps-4 hover:text-lightblue hover:cursor-pointer hover:bg-lightnavy'>
                            Coded a website for the GAD Unit using React.js and TailwindCSS.
                        </li>
                        <li className='p-2 hover:ps-4 hover:text-lightblue hover:cursor-pointer hover:bg-lightnavy'>
                            Developed an effective and maintainable Timekeeping System for the HR Management Unit for the employee’s work-from-home setup using Node, Express, and React with Firebase.
                        </li>
                        <li className='p-2 hover:ps-4 hover:text-lightblue hover:cursor-pointer hover:bg-lightnavy'>
                            Written System documentation and user guide for the systems.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExperiencePage