import React from 'react'
import { useState } from 'react';
import EditBlog from '../EditBlog';

function CardDashboard({ cardData }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  
  return (
   <>
   {modalOpen && <EditBlog setOpenModal={setModalOpen} />}
   <div>
     <div className='vertical-content'>
    <div className="vertical-card-image">
      <img src={cardData.PostImage} alt="bruce image" />
    </div>
    <div className="vertical-right-side">
      <h3>{cardData.PostTitle}</h3>

      <p className='description'>{cardData.PostContent.substring(0, 50)}...</p>
      <div className="card-bottom-dashboard">
        <div className="vertical-card-date">
          <p>
            <span>By {cardData.creator}</span>
            <span> | </span>
            <span>{cardData.PostedDate.substring(0, 10)}</span>
          </p>
        </div>
        <div className="vertical-read-more">
         <button className='action-btn edit' onClick={() => {setModalOpen(true);}}>Edit</button>
         <button className='action-btn'>Delete</button>
         
           </div>
        </div>
      </div>
    </div>
    </div>
   </>
  );
}

export default CardDashboard; 