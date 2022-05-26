import React from 'react'
import './socials.css'
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";


const Socials = () => {
  return (
    <section className='socials-section'>
        <a href="https://github.com/CarinWood" className='github'>
          <FiGithub/>
        </a>
        <a href="https://www.linkedin.com/in/carin-wood/" className='linkedin'>
          <FiLinkedin/>
        </a>
        <a href="https://www.youtube.com/channel/UCTSlUc6-CsI08YtmULq6fng" className='youtube'>
          <FiYoutube/>
        </a>

    
    </section>
  )
}

export default Socials