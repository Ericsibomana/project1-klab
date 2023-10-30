import React from 'react'
import CardDashboard from './CardDashboard';
import { useState, useEffect } from 'react';


function BlogDashboard() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://my-first-blog-apis.onrender.com/api/posts/read")
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                setPosts(res.data)
            }
        })
}, [])
  return (

<section className='section-two'>
      <div className="vertical-container">
        {posts.length > 0 ? posts.map((blog) => (
          <CardDashboard key={blog.id} cardData={blog} />
        )): <p>Loading posts...</p>}
      </div>
    </section>
  );
}

export default BlogDashboard