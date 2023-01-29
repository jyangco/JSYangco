import logo from '../assets/logo.png'
import React from 'react'

function Loader() {
    return (
        <div className="w-screen h-screen bg-navy">
            <div className="flex h-screen w-screen">
                <div className="loaderBorder w-[285px] h-[285px] m-auto">
                    <img className="imageLoader w-64 h-64" src={logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Loader