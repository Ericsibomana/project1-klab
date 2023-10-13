import React from 'react'
import bruce from '../components/image/bruce.jpg'

function VerticalBlog() {
  return (
    <div className='vertical-content'>
        <div className="vertical-card-image">
           <img src={bruce} alt="bruce image" />
        </div>
        <div className="vertical-right-side">
            <h3>Woman stretching</h3>
            <p className='description'>For many people, stretching exercises probably fall<br/> on the “things I should do but don't” list...</p>
            <div className="vertical-card-bottom">
                <div className="vertical-card-date">
                    <p className=''>
                        <span>By Eric</span>
                        <span> | </span>
                        <span>Nov 01</span>
                    </p>
                </div>
                <div className="vertical-read-more">
                    <p>Read More </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default VerticalBlog