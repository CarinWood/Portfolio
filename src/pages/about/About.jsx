import "./about.css";
import css from '../../assets/img/css3.png'
import git from '../../assets/img/git.png'
import html from '../../assets/img/html5.png'
import js from '../../assets/img/js.png'
import node from '../../assets/img/nodejs.png'
import ts from '../../assets/img/typescript_original_logo_icon_146317.png'
import profilepic from '../../assets/img/profilbild.jpg'
import { Link } from 'react-scroll'


const About = () => {
  return (
    <div id="about" className="about-wrapper">
          <h1 className="about-headline">About me</h1>
     
      <div className="about-container">
      

            <img className="profile-image" src={profilepic} alt="" />      
            <p className="about-text">
              I'm a full stack developer located in Gothenburg, Sweden. 
              I design and build web sites using Javascript and Typescript. 
              <br/>
              <br/>
              I’ve always been someone who has both a creative and a logical side. 
              When I discovered web development, I realized it would be the perfect fit for me. 
              I can use my creative side to design and my logical side to code.
              <br/>
              <br/>
              I'm interested in the entire full stack spectrum and working on ambitious projects together with positive people.
              <br/> 
              <br/>
              <Link to="contact" 
                spy={true} 
                smooth="true"
                offset={0} 
                duration={500} 
                className='list-item shakeme'
                ><button className="work-together shakeme">Work with me</button> 
                </Link>
            </p>

          
      
         
      
      </div>

       {/* <div className='about-footer'>
            <img className="brand" src={html} alt="" />
            <img className="brand" src={css} alt="" />
            <img className="brand" src={js} alt="" />
            <img className="ts-brand" src={ts} alt="" />
            <img className="brand" src={node} alt="" />
            <img className="brand" src={git} alt="" />   
        
      </div>  */}

    </div>
  );
};

export default About;
