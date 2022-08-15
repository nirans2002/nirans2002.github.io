
import React from "react";
import { data } from '../data/data';
import ContactForm from './contactForm' 

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  
  return (
    <section id="contact" className=" whiteText p-4 mt-2">
      <div className="bg_dark  "> <h1 className="text-center section_header orangeText fw-bolder p-2">Get in Touch With Me</h1></div>

      <div className="flex justify-content-around">

        <div className="p-2 col-example text-center">
          <h3 className="orangeText p-4">Address</h3>
          <p className="mt-1">
            {data.address}
          </p>
          <h3 className="orangeText p-4">E-mail</h3>
          <p><a href="" className="email"> {data.email}</a></p>
          <h3 className="orangeText p-4">Phone</h3>

          <p className="leading-relaxed">{data.phone}</p>


        </div>

        <div className="p-2 col-example text-center contact-border">
          <h3 className="orangeText p-4">Contact Me</h3>
          {/* <div className="p-4">
            <form
              netlify
              name="contact"
              className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <div className="relative mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">

                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="w-full bg-gray-800 rounded border  focus:border-orange focus:ring-2 focus:ring-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="submit_button p-2 text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </form>
          </div> */}
          <ContactForm/>
        </div>
      </div>

    </section>
  );
}
