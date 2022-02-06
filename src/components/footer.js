import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data, social } from '../data/data';

import {IoLogoLinkedin,IoLogoGithub,IoLogoTwitter,IoLogoInstagram} from 'react-icons/io';
export const Footer = () => {
    return <footer className="footer-dark p-5">
    <div className="container">
        <div className="row">
            <div className="col-sm-6 col-md-3 item">
               <ul><a href={data.linkedin}><IoLogoLinkedin size="3em" color="grey"/></a></ul> 
            </div>
            <div className="col-sm-6 col-md-3 item">
               <ul><a href={data.github}><IoLogoGithub size="3em" color="grey"/></a></ul> 
            </div>
            <div className="col-sm-6 col-md-3 item">
               <ul><a href={data.twitter}><IoLogoTwitter size="3em" color="grey"/></a></ul> 
            </div>
            <div className="col-sm-6 col-md-3 item">
               <ul><a href={data.instagram}><IoLogoInstagram size="3em" color="grey"/></a></ul> 
            </div>
        </div>
        <p className="copyright footerText p-4">Designed by <a href="" className="name p"> Niran S Narayanan</a></p>
        
    </div>
</footer>;
};
