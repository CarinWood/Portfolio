import "./portfolio.css";
import { FiGithub } from "react-icons/fi";
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
          <h1 className="project-title">The Japan Blog</h1>
          <p className="sub">
            Html, CSS, JavaScript
          </p>
          <button className="view-button">View</button>
        </div>
        <div className="divider"></div>
        <div className="box2">
          <h1 className="project-title">Fashion Store</h1>
          <p className="sub">React, JavaScript</p>
          <button className="view-button">View</button>
        </div>
        <div className="divider"></div>
        <div className="box3">
          <h1 className="project-title">Todo list</h1>
          <p className="sub">React, TypeScript</p>
          <button className="view-button">View</button>
        </div>
      </section>

      {/* { fall && <div className="github-container">
       <FiGithub className="githubcat"/>
       <p className="github-text">Psst! See my <br/><a className="a-tag" target="_blank" href="https://github.com/CarinWood">Github</a> page</p>
       </div>}
      
       */}
    </div>
  );
};

export default Projects;
