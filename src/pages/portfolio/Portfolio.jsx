
import './portfolio.css'
import {useState} from 'react';
import Card from '../../components/card/Card.jsx'
const Projects = () => {
  const [showCard, setShowCard] = useState(false)

function cardSwitch() {
  setShowCard(!false);
  console.log(showCard);
  
}

  return (
    <div className='projects-container' id="portfolio">
      
        <section className='first-row'>
              <div className='box' onClick={cardSwitch}>Todo-list</div>
              <div className='box'>Fashion Store</div>
              <div className='box'>Blog</div>
        </section>
        {showCard && <Card />}
        
    </div>
  )
}

export default Projects