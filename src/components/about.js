import React from 'react';
import { data, social } from '../data/data';
import { Card,Row } from "react-bootstrap";

function About() {
  const profileCard = (card, index) => {
    return (
       
        <div className="p-4">
          <a href={card.link} target="_blank">
            <Card style={{ width: '8em' }} className="bg_dark g-4 borderOrange">
                <div className="p-4">{card.icon}</div>
                <Card.Body>
                    <Card.Title className="whiteText">{card.title}</Card.Title>

                </Card.Body>

            </Card></a>


        </div>

    );
};
  return(
    <section id="contact" className=" whiteText p-4 mt-2">
        <div className="bg_dark  "> <h1 className="text-center section_header orangeText fw-bolder p-2">About Me</h1></div>
        
{/* icons for profils... linkedin, flutter , google dev etc */}
            <div className="p-4 items-center">
              <span>{data.bio}</span>
              <div className="p-4">
              <Row xs={1} md={5} className=" justify-content-evenly ">
                {social.map(profileCard)}
            </Row>
              </div>
        {/* certifications */}
        </div>
    </section>
  );
}

export default About;
