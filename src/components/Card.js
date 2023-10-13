import React from 'react'
import bruce from '../components/image/bruce.jpg'
function Card() {
  return (
    <div className='card-content'>
        <div className="card-image">
           <img src={bruce} alt="bruce image" />
        </div>
        <div className="card-right-side">
            <h3>Woman stretching</h3>
            <div className="line">
                <hr />
            </div>
            <p>For many people, stretching exercises probably fall<br/> on the “things I should do but don't” list...</p>
            <p>For many people, stretching exercises probably fall<br/> on the “things I should do but don't” list...</p>
            <div className="card-bottom">
                <div className="card-date">
                    <p>
                        <span>By Eric</span>
                        <span> | </span>
                        <span>Nov 01</span>
                    </p>
                </div>
                <div className="read-more">
                    <button>Read More </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card