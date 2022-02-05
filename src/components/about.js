import React from 'react';
import { data } from '../data/data';

function About() {
  return(
    <section id="contact" className=" whiteText p-4 mt-2">
        <div className="bg_dark  "> <h1 className="text-center section_header orangeText fw-bolder p-2">About Me</h1></div>
        
{/* icons for profils... linkedin, flutter , google dev etc */}
            <div className="p-4 items-center">
              <span>{data.bio}</span>
        {/* certifications */}
        </div>
    </section>
  );
}

export default About;
