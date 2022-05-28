import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import "./info.css";

const Info = ({popup}) => {
  return (
    <>
    <section className={popup ? "info-section dark" : "info-section"}>
      <div className="email-div">
        <MdAlternateEmail className="email-icon" />
        <article className="email-text">
          <p className="email"> Get in touch with me</p>
          <p className="email-address">carin.wood.85@gmail.com</p>
        </article>
      </div>

      <div className="location-div">
        <FiYoutube className="youtube-icon" />
        <article className="youtube-text">
          <p className="location">Watch my videos</p>
          <p className="youtube-subtext">To my Youtube</p>
        </article>
      </div>
    </section>
    <section className="connect-section">
      <div className="email-div">
        <FiGithub className="email-icon" />
        <article className="email-text">
          <p className="email">Check out my projects</p>
          <p className="email-address">To my Github</p>
        </article>
      </div>

      <div className="location-div">
        <FiLinkedin className="linked-icon" />
        <article className="location-text">
          <p className="location">Let's connect!</p>
          <p className="linked-subtext">To my LinkedIn</p>
        </article>
      </div>
    </section> 
    </>
  );
};

export default Info;
