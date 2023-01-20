import React, { useRef } from 'react'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutMePage from './pages/AboutMePage'
import ExperiencePage from './pages/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

function App() {
    const aboutmeRef  = useRef(null)
    const experienceRef = useRef(null)
    const projectsRef = useRef(null)
    const contactRef = useRef(null)

    const scrollDown = (ref) => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
        })
    }

    return (
        <div className="app">
            <Header>
                <button className="text-left hover:text-lightblue"
                    onClick={() => scrollDown(aboutmeRef)}
                > 
                    <span className="text-lightblue"> 01. </span> About Me 
                </button>
                <button className="text-left hover:text-lightblue"
                    onClick={() => scrollDown(experienceRef)}
                > 
                    <span className="text-lightblue"> 02. </span> Experience 
                </button>
                <button className="text-left hover:text-lightblue"
                    onClick={() => scrollDown(projectsRef)}
                > 
                    <span className="text-lightblue"> 03. </span> Projects 
                </button>
                <button className="text-left hover:text-lightblue"
                    onClick={() => scrollDown(contactRef)}
                > 
                    <span className="text-lightblue"> 04. </span> Contact 
                </button>
            </Header>
            <HomePage />
            <hr className="my-5"/>
            <div className="aboutMeContainer"  ref={aboutmeRef} >
                <AboutMePage />
            </div>
            <div className="experienceContainer"  ref={experienceRef} >
                <ExperiencePage />
            </div>
            <div className="projectsContainer"  ref={projectsRef} >
                <ProjectsPage />
            </div>
            <div className="contactContainer"  ref={contactRef} >
                <ContactPage />
            </div>
        </div>
    )
}

export default App