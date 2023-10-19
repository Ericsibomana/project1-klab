import React from 'react'
import CardDashboard from './CardDashboard';
import { cardDataArray } from '../api';
import { VerticalDataArray } from '../api';

function BlogDashboard() {
  return (
   <>
    <section className='section-two'>
    <div className="vertical-container">
    {cardDataArray.map((cardData) => (
          <CardDashboard key={cardData.id} cardData={cardData} />
        ))}
        {VerticalDataArray.map((cardData) => (
          <CardDashboard key={cardData.id} cardData={cardData} />
        ))}
      </div>
    </section>
   </>
  );
}

export default BlogDashboard