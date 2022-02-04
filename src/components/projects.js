
import React from "react";
import { projects } from '../data/data';
import { BsCodeSlash } from 'react-icons/bs';
import { Card, Col, Row,Button } from "react-bootstrap";
import {IoLogoGithub, IoMdCodeWorking} from 'react-icons/io';

export default function Projects() {
    const renderCard = (card, index) => {
        return (
            <div className="p-4">
                <Card style={{ width: '18rem'}} className="bg_dark">
                    <Card.Img variant="top" src={card.image} />
                    <Card.Body>
                        <Card.Title className="orangeText">Card Title</Card.Title>
                        <Card.Text className="text-grey">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
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
        <section id="projects" className="whiteText">
           <div className="bg_dark p-2"> <h1 className="text-center orangeText fw-bolder p-2">Projects</h1>
           </div>
            <Row xs={1} md={3} className=" justify-content-between">
                {projects.map(renderCard)}
            </Row>
        </section>
    );
}