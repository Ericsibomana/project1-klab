import React from 'react'
import { useState } from 'react';
import EditBlog from '../EditBlog';

function CardDashboard({ cardData }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
   <>
   {modalOpen && <EditBlog setOpenModal={setModalOpen} />}
     <div className='vertical-content'>
    <div className="vertical-card-image">
      <img src={cardData.image} alt="bruce image" />
    </div>
    <div className="vertical-right-side">
      <h3>{cardData.title}</h3>

      <p className='description'>{cardData.description}</p>
      <div className="card-bottom-dashboard">
        <div className="vertical-card-date">
          <p>
            <span>By {cardData.author}</span>
            <span> | </span>
            <span>{cardData.date}</span>
          </p>
        </div>
        <div className="vertical-read-more">
         <button className='action-btn edit' onClick={() => {setModalOpen(true);}}>Edit</button>
         <button className='action-btn'>Delete</button>
         
           </div>
        </div>
      </div>
    </div>
   </>
  );
}

export default CardDashboard; 