import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import './info.css'

const Info = () => {
  return (
    <section className='info-section'>
        <div className='email-div'>
          <AiOutlineMail className='email-icon'/>
          <p className='email'> Get in touch with me</p>
          <p>carin.wood.85@gmail.com</p>
        </div>

        <div className='localtion-div'>
          <IoLocationOutline className='location-icon'/>
          <p className='email'> Get in touch with me</p>
          <p>carin.wood.85@gmail.com</p>
        </div>
    </section>
  )
}

export default Info