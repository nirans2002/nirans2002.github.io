import React from 'react';
import Particle from './particles';
import Contact from './contact';
import Projects from './projects';
import Home from './home';
import About from './about';
import Skills from './skills';
import Experience from './experience';
import Testimonials from './testimonials';

function Main() {
    return (
        <>
            {/* <Particle /> */}
            <Home />
            <About/>
            <Skills/>
            <Experience/>
            <Projects />
            {/* <Testimonials/> */}
            <Contact />
        </>
    );
}

export default Main;
