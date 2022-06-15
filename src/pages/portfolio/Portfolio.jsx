import "./portfolio.css"
import { GiJapaneseBridge, GiAmpleDress } from "react-icons/gi";
import { GiEightBall } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";
import { useState } from "react";



const Projects = () => {
  const [fall, setFall] = useState(false);

  const githubFall = () => {
    console.log(window.scrollY)
      if (window.scrollY > 1000) {
        setFall(true)
      } else {
        setFall(false)
      }
  }

  window.addEventListener('scroll', githubFall)

 
  return (
    <div className="projects-container" id="portfolio">
      <h1 className="portfolio-headline">Portfolio</h1>
      <section className="first-row">
        <div className="box1">
        <h1 className="project-title">Fashion Store</h1>
          <GiAmpleDress className="fashion-icon"/>
          <p className="sub">React, JavaScript</p>
          <a href="https://clothes4you.netlify.app/" target="_blank">
          <button className="view-button">View</button>
          </a>
        </div>
        <div className="divider"></div>
        <div className="box2">
        <h1 className="project-title">Pizza Shop</h1>
          <FaPizzaSlice className="japan-icon"/>
          <p className="sub">
            React, JavaScript
          </p>
            <a href="https://carins-pizza-shop.netlify.app/" target="_blank">
              <button className="view-button">View</button>
            </a>
        </div>
        <div className="divider"></div>
        <div className="box3">
          <h1 className="project-title">Magic 8-ball</h1>
          <GiEightBall className="todo-icon"/>
          <p className="sub">React, TypeScript</p>
          <a href="https://magic-8-ball-carinwood.netlify.app/" target="_blank">
          <button className="view-button">View</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
