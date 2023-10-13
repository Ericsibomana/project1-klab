import React from 'react'
import SocialIcons from './SocialIcons'

function Footer() {
  return (
    <div className='Footer-container'>
        <div className="footer">
            <div className="footer-content">
            <h1>Contact Me</h1>
        <p className='footer-paragraph'>Phone number: +250 7838 40688</p>
        <p className='footer-paragraph'>Whatsapp: +250 7838 40688</p>
        <div className='contact-icon'>
           <SocialIcons />
        </div>
        <p className='footer-paragraph'>ericsibomana433@gmail.com</p>
        
            </div>
            <hr />
        <hr />
        <div className="copyright">
            <p>
                <span>Copyright © 2023</span>
                <span>  </span>
                <span> Designed by Eric</span>
            </p>
        </div>
        </div>
    </div>
  )
}

export default Footer