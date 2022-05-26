import "./about.css";
import profilbild from "../../assets/img/profilbild.jpg";
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div id="about" className="about-wrapper">
     
      <div className="about-container">
       <section className="image-container">Image</section>
        <div className="main-content">
        <h1 className="about-headline">About me</h1>

            <p className="about-text">
              I'm a fullstack developer located in Gothenburg, Sweden. I'm very
              passionate about my work. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam nisi voluptate molestias eveniet velit
              suscipit. Aliquid nemo voluptatem eum quo inventore iure nisi
              veritatis quis ipsa illum. Distinctio, assumenda aspernatur.
            </p>

            <Link to="portfolio" 
                spy={true} 
                smooth="true"
                offset={0} 
                duration={500}  
            >
               <button  className="project-button">Projects</button>
             </Link>     
      
         
        </div>
      </div>
    </div>
  );
};

export default About;
