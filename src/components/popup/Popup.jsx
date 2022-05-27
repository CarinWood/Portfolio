import { GiCheckMark } from "react-icons/gi";
import './popup.css'



const Popup = ({popup, setPopup}) => {
  return (
    <div className={popup ? 'popup center activated' : 'popup center'}>
        <div className='icon'>
            <GiCheckMark className='check'/>
        </div>
        <div className='title'>Your message has successfully been sent
        </div>
        <div className='description'>
            Thank you for contacting me. I'll get back to you as soon as I can.
        </div>
        <div className='dismiss-btn'>
            <button id="dismiss-popup-btn" onClick={() =>setPopup(false)}>
                OK
            </button>
        </div>
    </div>
  )
}

export default Popup
