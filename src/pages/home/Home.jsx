import './home.css'
import TextAnimation from '../../components/TextAnimation';
import { Navbar } from '../../components/navbar/Navbar';
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";




const Home = () => {
  return (
    <main id="home"> 
            <header   >
                <Navbar/>
                <div className='header-box'>
                  
                        <p className='hello'>Hello, I'm</p>
                        <h1 className='headline'><TextAnimation/></h1>
                        <p className='subtext'>A Creative Web Designer & Full Stack Developer</p>
                        {/* <Link to="contact" spy={true} smooth="true" offset={50} duration={500}>
                          <button type="submit" className="contact-btn">
                            Contact Me
                          </button>
                        </Link> */}
                        {/* <FaGithub className='_icon kitty'/>
                        <FaLinkedin className='_icon'/>
                        <FaYoutube className='_icon'/>
                       */}
                </div>
            </header>
      

    </main>
  )
   
}

export default Home