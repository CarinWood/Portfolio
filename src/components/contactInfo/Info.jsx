import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import "./info.css";

const Info = () => {
  return (
    <section className="info-section">
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
  );
};

export default Info;
