import React from "react";
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import "./info.css";

const Info = ({popup}) => {
  return (
    <>
    <section className={popup ? "info-section dark" : "info-section"}>
      <div className="email-div">
      <a className="atag" href="#form"><MdAlternateEmail className="email-icon" /></a>
        <article className="email-text">
        <a className="atag" href="#form"><p className="_headline">Email</p></a>
          <p className="email-subtext">carin.wood.85@gmail.com</p>
        </article>
      </div>

      <div className="location-div">
      <a className="atag" href="https://www.youtube.com/channel/UCTSlUc6-CsI08YtmULq6fng" target="_blank"><FiYoutube className="youtube-icon" /></a>
        <article className="youtube-text">
        <a className="atag" href="https://www.youtube.com/channel/UCTSlUc6-CsI08YtmULq6fng" target="_blank"><p className="_headline">Youtube</p></a>
          <p className="youtube-subtext">Watch my videos</p>
        </article>
      </div>
    </section>
    <section className={popup ? "connect-section dark" : "connect-section"}>
      <div className="email-div">
      <a className="atag" href="https://github.com/CarinWood" target="_blank"><FiGithub className="github-icon" /></a>
        <article className="github-text">
          <a className="atag" href="https://github.com/CarinWood" target="_blank"><p className="_headline">Github</p></a>
          <p className="github-subtext">Check out my projects</p>
        </article>
      </div>

      <div className="location-div">
      <a className="atag" href="https://www.linkedin.com/in/carin-wood/" target="_blank"><FiLinkedin className="linked-icon" /></a>
        <article className="linkedin-text">
        <a className="atag" href="https://www.linkedin.com/in/carin-wood/" target="_blank"><p className="_headline">LinkedIn</p></a>
          <p className="linked-subtext">Let's connect!</p>
        </article>
      </div>
    </section> 
    </>
  );
};

export default Info;
