import React from 'react';
import Particle from './particles';
import Contact from './contact';
import Projects from './projects';
import Home from './home';
import About from './about';
import Skills from './skills';

function Main() {
    return (
        <>
            {/* <Particle /> */}
            <Home />
            {/* <About/> */}
            <Skills/>
            <Projects />
            <Contact />
        </>
    );
}

export default Main;
