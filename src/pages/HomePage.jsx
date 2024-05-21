import React from 'react'

import keyboard from '../assets/keyboard.png'

function HomePage() {
    return (
        <div className="content-box flex flex-col justify-center">
            <div className="text-center ">
                <p className="text-lightblue text-lg"> Hi, my name is </p>
                <p className="text-7xl"> Jason </p>
                <p className="text-lg"> I'm a full stack web developer. </p>
                <div className="flex justify-center">
                    <img className="w-[50%] my-auto" src={keyboard} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default HomePage