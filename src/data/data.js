import { SiFlutter,SiHtml5,SiCss3,SiPython,SiDart} from "react-icons/si";
import { ImGithub,ImLinkedin,ImTwitter,ImFacebook} from "react-icons/im";

/*--------------------SKILLS-----------------------*/

export const skills = [
  {
    title: "HTML",
    icon:<SiHtml5 color="orange" size="2em"/> ,
  },
  {
    title: "CSS",
    icon:<SiCss3 color="orange" size="2em"/> ,

  },
  {
    title: "Python",
    icon:<SiPython color="orange" size="2em"/> ,

  },
  {
    title: "Dart",
    icon:<SiDart color="orange" size="2em"/> ,

  },
  {
    title: "Flutter",
    icon:<SiFlutter color="orange" size="2em"/> ,

  }
];
/*-------------------------------------------*/

/*--------------------PROJECTS-----------------------*/
export const projects = [
  {
    title: "Learn.edu",
    subtitle: "static web landing page",
    description:
      "A static web landing page for a learning platform. The landing page is designed to be a simple and easy to use interface for users to learn about the platform and its features.", 
    image: "https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg",
    github_link: "https://reactbootcamp.com",
    live_link: "/",
  },
  {
    title: " Quiz App",
    subtitle: "Quiz app using flutter",
    description:"A quiz app using flutter. The quiz app is designed to be a simple and easy to use interface for users to test their knowledge in various fields. Made with quizapi.io", 
    image: "https://user-images.githubusercontent.com/42601162/150957101-d6dedeb9-4409-4659-8ef2-09a890d4c05d.jpg",
    github_link: "https://reactbootcamp.com",
    live_link: "/",
  },
  {
    title: " Chat App UI",
    subtitle: "Chat App UI using flutter",
    description:"A chat app UI using flutter. The chat app UI is designed to be a simple and easy to use interface for users to chat with other users. Made with flutter.io",
    image: "https://user-images.githubusercontent.com/42601162/137598095-3731d2d8-370b-4087-98c3-4743d77cd6df.jpg",
    github_link: "https://reactbootcamp.com",
    live_link: "/",
  },

  
];

/*-------------------------------------------*/

/*--------------------DATA-----------------------*/
export const data = {
  name: "Niran S Narayanan",
  profession: "Student",
  college: "College of Engineering, Trivandrum, Kerala",
  address: "Calicut, Kerala, India",
  linkedin: "www.linkedin.com/in/niran-s-narayanan",
  github: "https://www.github.com/nirans2002",
  email: "nirans2002@gmail.com",
  phone: "+918289831638",
  website: "https://www.niransnarayanan.com",
  medium: " ",
  twitter: " ",
  facebook: " ",
  instagram: " ",
  youtube: " ",
  bio:<h4>Electrical Engineering Undergradute student at <span className="orangeText">College of Engineering Trivandrum</span>. <br/>
  Flutter and Web developer.<br/>
  Interested in IoT, Robotics, microcontrollers, Programming and designing, Machine learning and AI.
  Equipped with basic knowledge and actively learning Python, C Programming, Dart, HTML, CSS. React, Arduino and Raspberry pi.</h4> ,

};
/*-------------------------------------------*/

/*-----------------------EXPERIENCE--------------*/
export const experience = [ 
  {
    id: 1,
    title: "Web Developer",
    location: "AstroCET",
    description:
      "Member of the Web Dev team of AstroCET. Develop and maintain the official website of the Club",
    buttonText: "Visit Website",
    date: "December 2021 - present",
    icon: "work",
  },
  {
    id: 2,
    title: " Webmaster",
    location: "The Institution of Engineering and Technology (IET)- On Campus CET",
    description:
      "Maintain and develop the official website of the IET-On Campus CET",
    buttonText: "Vist webpage",
    date: "November 2021 - Present",
    icon: "work",
  },
  {
    id: 3,
    title: " EEE Representative of ISTE SC CET",
    location: "ISTE SC CET",
    description:
      "Promote, organize and conduct different events and activities of the club",
    buttonText: "visit Website",
    date: "August 2021 - Present",
    icon: "work",
  },
  {
    id: 4,
    title: "Campus Ambassador",
    location: "E-Cell, IIT Guwahati",
    description:
      "Promte events of E-CELL IIT Guwahati",
    buttonText: "Course Certificate",
    date: "November 2021 - January 2022",
    icon: "school",
  },
];
/*-------------------------------------------*/


/*--------------------Testimonials--------------*/
export const testimonials =[
  {
    name:"name",
    company:"company",
    quote:"quote",
    image:"image",
  },
];
/*-------------------------------------------*/


/*----------------------SOCIAL---------------------*/
export const social=[
  {
    title:"GitHub",
    icon:<ImGithub color="orange" size="3em"/>,
    link:"https://www.github.com/nirans2002",
  },
  {
    title:"LinkedIn",
    icon:<ImLinkedin color="orange" size="3em"/>,

    link:"https://www.linkedin.com/in/niran-s-narayanan",
  },
  {
    title:"Twitter",
    icon:<ImTwitter color="orange" size="3em"/>,
    link:"https://www.twitter.com",
  },
  {
    title:"Facebook",
    icon:<ImFacebook color="orange" size="3em"/>,
    link:"https://www.facebook.com",
  },
  
];
/*-------------------------------------------*/
