import "./about.css";
import { Link } from 'react-scroll'
import css from '../../assets/img/css3.png'
import figma from '../../assets/img/figma.png'
import git from '../../assets/img/git.png'
import html from '../../assets/img/html5.png'
import js from '../../assets/img/js.png'
import node from '../../assets/img/nodejs.png'
import ts from '../../assets/img/typescript_original_logo_icon_146317.png'


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
               <button  className="portfolio-button">Portfolio</button>
             </Link>     
      
         
        </div>
      </div>

      <div className='about-footer'>
            <img className="brand" src={html} alt="" />
            <img className="brand" src={css} alt="" />
            <img className="brand" src={js} alt="" />
            <img className="ts-brand" src={ts} alt="" />
            <img className="brand" src={node} alt="" />
            <img className="brand" src={git} alt="" />   
        
      </div>

    </div>
  );
};

export default About;
