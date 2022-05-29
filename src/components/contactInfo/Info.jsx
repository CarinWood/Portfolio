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
          <p className="_headline">Email</p>
          <p className="email-address">carin.wood.85@gmail.com</p>
        </article>
      </div>

      <div className="location-div">
        <FiYoutube className="youtube-icon" />
        <article className="youtube-text">
          <p className="_headline">Youtube</p>
          <p className="youtube-subtext">Watch my videos</p>
        </article>
      </div>
    </section>
    <section className={popup ? "connect-section dark" : "connect-section"}>
      <div className="email-div">
        <FiGithub className="email-icon" />
        <article className="email-text">
          <p className="_headline">Github</p>
          <p className="email-address">Check out my projects</p>
        </article>
      </div>

      <div className="location-div">
        <FiLinkedin className="linked-icon" />
        <article className="location-text">
          <p className="_headline">LinkedIn</p>
          <p className="linked-subtext">Let's connect!</p>
        </article>
      </div>
    </section> 
    </>
  );
};

export default Info;
