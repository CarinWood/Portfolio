import "./portfolio.css";
import { FiGithub } from "react-icons/fi";



const Projects = () => {
 
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

       <div className="github-container">
       <FiGithub className="githubcat"/>
       <p className="github-text">Psst! See my <br/> <span className="github-span">Github</span> page</p>
       </div>
      
      
    </div>
  );
};

export default Projects;
