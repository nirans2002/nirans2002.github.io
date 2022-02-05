import React from "react";
import { Button } from "react-bootstrap";
// import {Typing} from './components/typing';
// import Typing from './components/typing';
import ReactTypingEffect from 'react-typing-effect';


export default function Main() {
    return (
        <section id="about">
            <div className="whiteText container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, Niran S Narayanan

                    </h1>
                    <div className="flex justify-center">
                        <span><h1>I work on {Typing()}</h1></span>
                    </div>
                    <div className="flex justify-center">
                        
                       <Button variant="outline-warning" className="buttonMain"   href="#contact">
                            Connect With Me
                        
                        </Button>
                        <Button variant="outline-warning" className="buttonMain"  href="#projects"> 
                            See My works
                        </Button>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

function Typing() {
    return <ReactTypingEffect
        text={["Flutter", "Web", "IoT", "Arduino", "React"]}
        speed={100}
        eraseSpeed={50}
        typingDelay={1000}
        eraseDelay={1000}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
            return (
                <h1>
                    {text.split('').map((char, i) => {
                        const key = `${i}`;
                        return (
                            <span
                                key={key}
                                style={i % 2 === 0 ? { color: 'orange' } : {}}
                            >{char}</span>
                        );
                    })}
                </h1>
            );
        } } />;
}
