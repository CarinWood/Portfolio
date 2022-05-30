import React from "react";
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import "./info.css";

const Info = ({popup}) => {
  return (
    <>
    <div className="contact-icons">
        <div className="top-row">
           
            <div className="email-div">
            
        <article className="email-text">
        <a className="atag" href="#form"><MdAlternateEmail className="email-icon" /></a>
        <a className="atag" href="#form"><p className="_headline">Email</p></a>
          <p className="email-subtext">carin.wood.85@gmail.com</p>
        </article>
        </div>

          <div className="youtube-div">
          <a className="atag" href="https://www.youtube.com/channel/UCTSlUc6-CsI08YtmULq6fng" target="_blank"><FiYoutube className="youtube-icon" /></a>
        <article className="youtube-text">
        <a className="atag" href="https://www.youtube.com/channel/UCTSlUc6-CsI08YtmULq6fng" target="_blank"><p className="_headline">Youtube</p></a>
          <p className="youtube-subtext">Watch my videos</p>
        </article>
          </div>

           
        </div>
        <div className="bottom-row">
        
        <div className="email-div">
            <a className="atag" href="https://github.com/CarinWood" target="_blank"><FiGithub className="email-icon" /></a>
        <article className="email-text">
        <a className="atag" href="https://github.com/CarinWood" target="_blank"><p className="_headline">Github</p></a>
          <p className="email-subtext">Check out my projects!</p>
        </article>
        </div>

          <div className="youtube-div">
          <a className="atag" href="https://www.linkedin.com/in/carin-wood/" target="_blank"><FiLinkedin className="youtube-icon" /></a>
        <article className="youtube-text">
        <a className="atag" href="https://www.linkedin.com/in/carin-wood/" target="_blank"><p className="_headline">LinkedIn</p></a>
          <p className="youtube-subtext">Let's connect!</p>
        </article>
          </div>
       
        </div>
    </div>
    </>
  );
};

export default Info;
