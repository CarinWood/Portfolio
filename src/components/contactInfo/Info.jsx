import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";
import "./info.css";

const Info = ({popup}) => {
  return (
    <>
    <section className={popup ? "info-section dark" : "info-section"}>
      <div className="email-div">
        <AiOutlineMail className="email-icon" />
        <article className="email-text">
          <p className="email"> Get in touch with me</p>
          <p className="email-address">carin.wood.85@gmail.com</p>
        </article>
      </div>

      <div className="location-div">
        <IoLocationOutline className="location-icon" />
        <article className="location-text">
          <p className="location"> Current location</p>
          <p className="location-goth">Gothenburg, Sweden</p>
        </article>
      </div>
    </section>
    {/* <section className="connect-section">
      <div className="email-div">
        <FiGithub className="email-icon" />
        <article className="email-text">
          <p className="email">Check out my projects</p>
          <p className="email-address">Go to my Github</p>
        </article>
      </div>

      <div className="location-div">
        <FiLinkedin className="location-icon" />
        <article className="location-text">
          <p className="location">Let's connect!</p>
          <p className="location-goth">Visit me on LinkedIn</p>
        </article>
      </div>
    </section> */}
    </>
  );
};

export default Info;
