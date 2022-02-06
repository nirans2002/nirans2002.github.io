import React from "react";
import { Card, Row } from "react-bootstrap";

import { skills } from '../data/data';


export default function Skills() {
    const skillCard = (card, index) => {
        return (
            <div className="p-4 d-flex justify-content-center">
                <Card style={{ width: '8em' }} className="bg_dark g-4 borderOrange">
                    <div className="p-4">{card.icon}</div>
                    <Card.Body>
                        <Card.Title className="whiteText">{card.title}</Card.Title>

                    </Card.Body>

                </Card>


            </div>

        );
    };
    return (
        <section id="skills" className="p-4 mt-2 ">
            <div className="bg_dark "> <h1 className="text-center section_header orangeText fw-bolder p-2"> Skills &amp; Technologies</h1></div>

            <Row xs={1} md={5} className="flex justify-content-evenly ">
                {skills.map(skillCard)}
            </Row>
        </section>
    );
}
