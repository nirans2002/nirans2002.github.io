import React from "react";
import { Button } from "react-bootstrap";
// import {Typing} from './components/typing';
// import Typing from './components/typing';
import ReactTypingEffect from 'react-typing-effect';


export default function Home() {
    return (
        <section id="home">
            <div className="whiteText h-100 items-center">
                <div className=" flex items-center text-center">
                    <h1 className=" mb-4 font-medium text-white">
                        Hi, I am <span className="font-bold ">Niran S Narayanan</span>

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
