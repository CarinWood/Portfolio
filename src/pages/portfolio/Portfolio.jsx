import "./portfolio.css"
import { GiJapaneseBridge, GiAmpleDress } from "react-icons/gi";
import { RiTodoLine } from "react-icons/ri";
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
          <h1 className="project-title">Japan Blog</h1>
          <GiJapaneseBridge className="japan-icon"/>
          <p className="sub">
            Html, CSS, JavaScript
          </p>
          <a href="https://carinwood.netlify.app/" target="_blank">
            <button className="view-button">View</button>
          </a>
        </div>
        <div className="divider"></div>
        <div className="box2">
          <h1 className="project-title">Fashion Store</h1>
          <GiAmpleDress className="fashion-icon"/>
          <p className="sub">React, JavaScript</p>
          <a href="https://github.com/CarinWood/fashion-store" target="_blank">
          <button className="view-button">View</button>
          </a>
        </div>
        <div className="divider"></div>
        <div className="box3">
          <h1 className="project-title">BookFaze</h1>
          <RiTodoLine className="todo-icon"/>
          <p className="sub">React.ts, MongoDB</p>
          <a href="https://github.com/CarinWood/BookFaze-project" target="_blank">
          <button className="view-button">View</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
