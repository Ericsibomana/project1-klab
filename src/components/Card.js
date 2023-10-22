import React from 'react';
import bruce from '../components/image/bruce.jpg';
import { Link } from "react-router-dom";

function Card({ cardData }) {
  const blogId = cardData._id; // Define and set the value of blogId
  return (
    <div className='card-content'>
      <div className="card-image">
        <img src={cardData.PostImage} alt="bruce image" />
      </div>
      <div className="card-right-side">
        <h3>{cardData.PostTitle}</h3>
        <div className="line">
          <hr />
        </div>
        <div className="card-description">
            <p>{cardData.PostContent.substring(0, 200)}...</p>
        </div>
        <div className="card-bottom">
          <div className="card-date">
            <p>
              {/* <img src={cardData.creatorprofile} alt="profile" className='creatorProfile'/> */}
              <span>By {cardData.creator}</span>
              <span> | </span>
              <span>{cardData.PostedDate.substring(0, 10)}</span>
            </p>
          </div>
          <div className="read-more">
            <Link to={`/Blog/${blogId}`}>
            <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;