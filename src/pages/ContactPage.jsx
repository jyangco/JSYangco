import React from 'react'

function ContactPage() {
    return (
        <div className="content-box">
            <div className="text-5xl text-left">
                Contact
            </div>
            <div className="flex h-[70vh]">
                <div className="w-3/4 m-auto">
                    <p>
                        Interested in working together? 
                        I am always open for new projects and opportunities where I can contribute, learn, and grow.
                        I'll get back to you as soon as I can. 
                    </p>
                    <div className="flex">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jyangco22@gmail.com" target="_blank" className="m-auto p-3 rounded-lg text-xl border border-lightblue text-white font-bold hover:text-navy hover:bg-lightblue">
                            MESSAGE ME
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage