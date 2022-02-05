import { SiFlutter} from "react-icons/si";
import React from "react";
import { Card, Col, Row,Button } from "react-bootstrap";

import { skills } from '../data/data';


export default function Skills() {
    const skillCard = (card, index) => {
        return (
            <div className="p-4">
                <Card style={{ width: '8em' }}className="bg_dark g-4">
                <div className="p-4">{card.icon}</div>
                    <Card.Body>
                        <Card.Title className="whiteText">{card.title}</Card.Title>
                                                    
                    </Card.Body>
                    
                </Card>
                
                
            </div>

        );
    };
  return (
    <section id="skills">
     <div className="bg_dark  "> <h1 className="text-center section_header orangeText fw-bolder p-2"> Skills &amp; Technologies</h1></div>
     <Row xs={1} md={5} className=" justify-content-evenly ">
                {skills.map(skillCard)}
            </Row>
    </section>
  );
}