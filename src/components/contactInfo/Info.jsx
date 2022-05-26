import React from 'react'
import { AiOutlineMail } from "react-icons/ai";

const Info = () => {
  return (
    <section className='info-section'>
        <div className='email-me'>
        <p>Email me</p>
        <AiOutlineMail className='email-icon'/>
        </div>
    </section>
  )
}

export default Info