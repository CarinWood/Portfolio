import './contact.css';
import Info from '../../components/contactInfo/Info';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Popup from '../../components/popup/Popup';
import Footer from '../../components/footer/Footer';
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";


const Contact = () => {
  const [popup, setPopup] = useState(false)
  const form = useRef();



  const sendEmail = (e) => {
    e.preventDefault();
    setPopup(true)
    

    emailjs.sendForm('service_08ctk5i', 'template_sbnwfvh', form.current, '17cXuSlvrGbzTCUK_')
      .then((result) => { 
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='contact-container' id="contact">
     
        <h1 className={popup ? 'contact-headline dark': 'contact-headline'}>Contact</h1>
       
     <Info popup={popup}/>
     <form className={popup ? "form dark": "form"} ref={form} onSubmit={sendEmail}>
    
              <label>Name</label>
              <input required type="text" name="user_name" placeholder='Your name' className='name-input' />
              <label>Email</label>
              <input required type="email" name="user_email" placeholder='Your email'  className='email-input'/>
              <input required type="text" name="subject" placeholder="Subject" className='subject-input' />
      <label>Message</label>
      <textarea name="message" placeholder='Your message' className='message-input'/>
      <input type="submit" value="Send" className='send-btn' />
    </form>
    {popup && <Popup popup={popup} setPopup={setPopup}/>}
    <section className={popup ? 'social-media dark': "social-media"}>
    <a href="https://github.com/CarinWood" target="_blank"><FiGithub className='icon1'/></a>
    <a href="https://www.linkedin.com/in/carin-wood/" target="_blank"><FiLinkedin className='icon1'/></a>
    <a href="https://www.youtube.com/channel/UCTSlUc6-CsI08YtmULq6fng" target="_blank"><FiYoutube className='icon1'/></a>
    </section>
    <Footer popup={popup}/>
    </div>
  )
}

export default Contact