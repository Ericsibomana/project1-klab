import React from 'react'
// import Latest from './Latest'
import VerticalBlog from './VerticalBlog'

function LatestBlog() {
  return (
        <section className='section-five'>
            <div className="latest-container">
                    <div className="latest">
                    <h1>// LATEST STORIES //</h1>
                    <div className="latest-blog-container">
                <VerticalBlog />
                <VerticalBlog />
             </div>
                    </div>
            </div>
        </section>
  )
}

export default LatestBlog