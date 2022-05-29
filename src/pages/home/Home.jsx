import './home.css'
import TextAnimation from '../../components/TextAnimation';
import { Navbar } from '../../components/navbar/Navbar';
import MobileNav from '../../mobileNav/MobileNav';
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";
import { Link } from 'react-scroll'





const Home = () => {
  return (
    <main id="home"> 
            <header>
                <Navbar/>
                <MobileNav/>
                <div className='header-box'>
                  
                        <p className='hello'>Hello, I'm</p>
                        <h1 className='headline'><TextAnimation/></h1>
                        <p className='subtext'>A Creative Web Designer & Full Stack Developer</p>
                        <p className='subtext2'>Full Stack Developer</p>
                        
                        <div className='responsive-div'>
                        <a className=' _icon' href="https://github.com/CarinWood"><FiGithub /></a>
                        <a className='_icon' href="https://www.linkedin.com/in/carin-wood/"><FiLinkedin /></a>
                        <a className='_icon' href="https://www.youtube.com/channel/UCTSlUc6-CsI08YtmULq6fng"><FiYoutube /></a>
                        </div>
                </div>
                <button className='resp-btn'>   
                    <Link 
                    to="contact" 
                    spy={true} 
                    smooth="true"
                    offset={0} 
                    duration={500} 
                    > Contact me
                    </Link>
                </button>
            </header>
      

    </main>
  )
   
}

export default Home