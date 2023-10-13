import React from 'react'
import profile from '../components/image/profile.jpg'
function AboutCard() {
  return (
    <div className="aboutContent">
        <div className='about-content'>
        <div className="about-image">
           <img src={profile} alt="profile" />
        </div>
        <div className="about-text">
            <h1>I am open for creative cooperation</h1>
            <p>
                I believe that everything happens for a reason. People change so that you can learn to let go, 
                things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, 
                and sometimes good things fall apart so better.
                </p>
        </div>
    </div>
    </div>
  )
}

export default AboutCard