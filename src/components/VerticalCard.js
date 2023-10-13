import React from 'react'
import VerticalBlog from './VerticalBlog'

function VerticalCard() {
  return (
      <section className='section-three'>
           <div className="vertical-container">
              <VerticalBlog />
              <VerticalBlog />
              <VerticalBlog />
           </div>
      </section>
  )
}

export default VerticalCard