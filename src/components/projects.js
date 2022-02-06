
import React from "react";
import { projects } from '../data/data';
import { Card,Row } from "react-bootstrap";
import {IoLogoGithub, IoMdCodeWorking} from 'react-icons/io';

export default function Projects() {
    const renderCard = (card, index) => {
        return (
            <div className="p-4 items-center">
                {/* <Card style={{ width: '18rem'}} className="bg_dark g-4"> */}
                <Card  className="bg_dark g-4 p-4 m-4 borderOrange"  >
                    <Card.Img variant="top" src={card.image} />
                    <Card.Body>
                        <Card.Title className="orangeText">{card.title}</Card.Title>
                        <Card.Text className="text-grey">
                        {card.description}
                        </Card.Text>
                        <div>
                            <span className="p-2"><a href={card.github_link}><IoLogoGithub size="2em" color="grey"/></a></span>
                            
                            <span className="p-2"><a href={card.live_link}><IoMdCodeWorking size="2em" color="grey"/></a></span>
                        </div>
                    </Card.Body>
                </Card>
                
            </div>

        );
    };

    return (
        <section id="projects" className="whiteText p-4 items-center">
           <div className="bg_dark  "> <h1 className="text-center section_header orangeText fw-bolder p-2">Projects</h1>
           </div>
           
            <Row xs={1} md={3} className="justify-content-evenly">
                {projects.map(renderCard)}
                
            </Row>
        </section>
    );
}