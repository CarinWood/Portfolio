import './contact.css';
import Info from '../../components/contactInfo/Info';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Popup from '../../components/popup/Popup';

const Contact = () => {
  const [popup, setPopup] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_08ctk5i', 'template_sbnwfvh', form.current, '17cXuSlvrGbzTCUK_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const openPopup = () => {
    setPopup(true)
  }
  return (
    <div className='contact-container' id="contact">
     
        <h1 className='contact-headline'>Contact</h1>
     <Info/>
     <form className="form" ref={form} onSubmit={sendEmail}>
          
              <label>Name</label>
              <input type="text" name="user_name" placeholder='Your name' className='name-input' />
              <label>Email</label>
              <input type="email" name="user_email" placeholder='Your email'  className='email-input'/>
              <input type="text" name="subject" placeholder="Subject" className='subject-input' />
      <label>Message</label>
      <textarea name="message" placeholder='Your message' className='message-input'/>
      <input type="submit" value="Send" className='send-btn' onClick={() => openPopup()}/>
    </form>
    {popup && <Popup popup={popup} setPopup={setPopup}/>}
    </div>
  )
}

export default Contact