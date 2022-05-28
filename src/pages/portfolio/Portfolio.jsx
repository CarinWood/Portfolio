import './portfolio.css'
import {useState} from 'react';
import Card from '../../components/card/Card.jsx'
import portfolio2 from '../../assets/img/portfolio2.png'





const Projects = () => {
  const [showCard, setShowCard] = useState(false)



  return (
    <div className='projects-container' id="portfolio">
        <h1 className='portfolio-headline'>Portfolio</h1>
        <section className='first-row'>
              <div className='box'>
                <img src={portfolio2} alt="" />
              </div>
              <div className='box'>Fashion Store</div>
              <div className='box'>Blog</div>
        </section>
        {showCard && <Card />}
        
    </div>
  )
}

export default Projects