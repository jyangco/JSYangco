import React from 'react'

import keyboard from '../assets/keyboard.png'

function HomePage() {
    return (
        <div className="content-box flex flex-col justify-center">
            <div className="text-center ">
                <p className="text-lightblue text-lg"> Hi, my name is </p>
                <p className="text-7xl"> Jason </p>
                <p className="text-lg"> A Full Stack Developer who builds production-grade web systems for government, fintech, and enterprise companies — with cloud deployment experience. </p>
                <div className="flex justify-center">
                    <img className="w-[50%] my-auto" src={keyboard} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default HomePage