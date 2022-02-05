import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdComputer as WorkIcon, MdSchool as SchoolIcon} from 'react-icons/md';
import {experience} from '../data/data';
import './timeline.css';
function Experience() {
  return (
    <section id="experience" className="p-4 mt-2">
      <div className="bg_dark  "> <h1 className="text-center section_header orangeText fw-bolder p-2">Experience</h1></div>

      <VerticalTimeline>
        {experience.map(element => {
          let isWorkIcon = element.icon === "work"
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== ""

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              icon={isWorkIcon ? <WorkIcon color="orange"/> : <SchoolIcon color="orange"/>}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }
`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
