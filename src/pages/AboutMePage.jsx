import React from 'react'

import pic from '../assets/JSY.png'

function AboutMePage() {
    return (
        <div className="content-box">
            <div className="text-5xl text-left">
                About Me
            </div>
            <div className="flex gap-5">
                <div className="w-3/5 mt-10">
                    <p>
                        Hi! My name is Jason, and I received a degree in Information Technology from Technological University of the Philippines in 2020.
                        Although I am capable of developing both frontend and backend (React and Node.js or React and Laravel). I prefer UI/UX development more.
                    </p>
                    <p>
                        As a Web Developer, I presently work at the Department of Science and Technology's Science Education Institute.
                        I am passionate about making websites work well and make them look beautiful.
                        The web is also the only place where I can express my creativity in ways that are hard to find elsewhere.
                    </p>
                    <p>
                        Here are few of the technologies I've been working with:
                    </p>
                    <ul className="columns-2">
                        <li> JavaScript(ES6) </li>
                        <li> React </li>
                        <li> Laravel </li>
                        <li> Node.js </li>
                        <li> Express.js </li>
                        <li> Tailwind CSS </li>
                        <li> Bootstrap 5 </li>
                    </ul>
                </div>
                <div className="w-2/5">
                    <img src={pic} alt="JSY" />
                </div>      
            </div>
        </div>
    )
}

export default AboutMePage