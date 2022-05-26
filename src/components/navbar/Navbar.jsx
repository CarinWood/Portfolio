import './navbar.css';
import { Link } from 'react-scroll'
import Socials from '../socials/Socials';






export const Navbar = () => {
  return (
    <nav>
      
          <ul className='list'>
              <li>
                <Link to="home" 
                spy={true} 
                smooth="true"
                offset={-50} 
                duration={500} 
                className='list-item'
                > Home </Link>
                </li>
              <li>
                <Link to="about" 
                spy={true} 
                smooth="true"
                offset={0} 
                duration={500} 
                className='list-item'
                > About </Link>
                </li>
              <li>
                <Link to="portfolio" 
                spy={true} 
                smooth="true"
                offset={0} 
                duration={500} 
                className='list-item'
                > Portfolio </Link>
                </li>
              <li>
                <Link to="contact" 
                spy={true} 
                smooth="true"
                offset={0} 
                duration={500} 
                className='list-item'
                > Contact </Link>
                </li>                       
           </ul> 

        

    </nav>
  )
}
