import React from 'react'
import './footer.css'

const Footer = ({popup}) => {
  return (
    <div className='footer'>

        <p className={popup ? 'carin dark' : 'carin'}>&copy; 2022 Created and built by Carin Wood</p>
    </div>
  )
}

export default Footer