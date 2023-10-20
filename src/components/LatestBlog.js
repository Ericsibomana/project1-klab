import React from 'react';
import VerticalBlog from './VerticalBlog';
import image1 from './image/recipes.jpg';
import image2 from './image/house.jpg';

const latestBlogData = [
  {
    id:1,
    title: 'Neutral Recipes',
    image:image1,
    description: "For many people, stretching exercises probably fall on the 'things I should do but don't' list...",
    author: 'Eric',
    date: 'Nov 01',
  },
  {
    id:2,
    title: 'House Update',
    image:image2,
    description: "Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...",
    author: 'John',
    date: 'Nov 02',
  }

];

function LatestBlog() {
  return (
    <section className='section-five'>
      <div className="latest-container">
        <div className="latest">
          <h1>// LATEST STORIES //</h1>
          <div className="latest-blog-container">
            {latestBlogData.map((blogData, index) => (
              <VerticalBlog key={index} cardData={blogData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestBlog;
