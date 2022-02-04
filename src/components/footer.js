import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IoLogoLinkedin,IoLogoGithub,IoLogoTwitter,IoLogoInstagram} from 'react-icons/io';
export const Footer = () => {
    return <footer className="footer-dark p-5">
    <div className="container">
        <div className="row">
            <div className="col-sm-6 col-md-3 item">
               <ul><a href="#"><IoLogoLinkedin size="3em" color="grey"/></a></ul> 
            </div>
            <div className="col-sm-6 col-md-3 item">
               <ul><a href="#"><IoLogoGithub size="3em" color="grey"/></a></ul> 
            </div>
            <div className="col-sm-6 col-md-3 item">
               <ul><a href="#"><IoLogoTwitter size="3em" color="grey"/></a></ul> 
            </div>
            <div className="col-sm-6 col-md-3 item">
               <ul><a href="#"><IoLogoInstagram size="3em" color="grey"/></a></ul> 
            </div>
        </div>
        
        
    </div>
</footer>;
};
