import React, { useRef, useState, useLayoutEffect } from 'react'

import HomePage from './pages/HomePage'
import AboutMePage from './pages/AboutMePage'
import ExperiencePage from './pages/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

import Header from './components/Header'
import Loader from './components/Loader'
import RightPanel from './components/RightPanel'
import LeftPanel from './components/LeftPanel'

function App() {
    const [loading, setLoading] = useState(true)
    const aboutmeRef  = useRef(null)
    const experienceRef = useRef(null)
    const projectsRef = useRef(null)
    const contactRef = useRef(null)

    const scrollDown = (ref) => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
        })
    }

    useLayoutEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3500)
    }, [])
    

    if(loading == true){
        return(
            <Loader />
        )
    }
    return (
        <div className="app">
            <Header>
                <button className="text-left hover:text-lightblue focus:text-lightblue"
                    onClick={() => scrollDown(aboutmeRef)}
                > 
                    <span className="text-lightblue"> 01.</span>About Me 
                </button>
                <button className="text-left hover:text-lightblue focus:text-lightblue"
                    onClick={() => scrollDown(experienceRef)}
                > 
                    <span className="text-lightblue"> 02.</span>Experience 
                </button>
                <button className="text-left hover:text-lightblue focus:text-lightblue"
                    onClick={() => scrollDown(projectsRef)}
                > 
                    <span className="text-lightblue"> 03.</span>Projects 
                </button>
                <button className="text-left hover:text-lightblue focus:text-lightblue"
                    onClick={() => scrollDown(contactRef)}
                > 
                    <span className="text-lightblue"> 04.</span>Contact 
                </button>
            </Header>
            <RightPanel/>
            <LeftPanel/>
            <div className="container">
                <HomePage />
            </div>
            <div className="container"  ref={aboutmeRef} >
                <AboutMePage />
            </div>
            <div className="container"  ref={experienceRef} >
                <ExperiencePage />
            </div>
            <div className="container"  ref={projectsRef} >
                <ProjectsPage />
            </div>
            <div className="container"  ref={contactRef} >
                <ContactPage />
            </div>
        </div>
    )
}

export default App