// import React from 'react';
// import Card from './Card';
// import { cardDataArray } from './api';

// function Blogs() {
//   return (
//     <section className='section-two'>
//       <div className="card-container">
//         {cardDataArray.map((cardData) => (
//           <Card key={cardData.id} cardData={cardData} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Blogs;

import React, { useState, useEffect } from 'react';
import Card from './Card';

function Blogs() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
      fetch("https://my-first-blog-apis.onrender.com/api/myblog/blog/read")
          .then((response) => response.json())
          .then((res) => {
              if (res.data) {
                  setPosts(res.data)
              }
          })
  }, [])
  console.log("POSTS", posts)
  return (
    <section className='section-two'>
      <div className="card-container">
        {posts.length > 0 ? posts.map((blog) => (
          <Card key={blog.id} cardData={blog} />
        )): <p>Loading posts...</p>}
      </div>
    </section>
  );
}

export default Blogs;

