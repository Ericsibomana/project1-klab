import React, { useState, useEffect } from 'react';
import Card from './Card';

function Blogs() {
  // Declaring useState 
  // Declaring useState 
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch("https://my-first-blog-apis.onrender.com/api/posts/read")
<<<<<<< HEAD
          .then((response) => response.json())
          .then((res) => {
              if (res.data) {
                  setPosts(res.data)
              }
          })
  }, [])
=======
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        if (res.data) {
          setPosts(res.data);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
>>>>>>> f2c2622 (change)
  console.log("POSTS", posts)
  return (
    <section className='section-two'>
      <div className="vertical-container">
      {loading ? (
          <p>Loading posts...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : posts.length > 0 ? (
          posts.map((blog) => <Card key={blog.id} cardData={blog} />)
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </section>
  );
}

export default Blogs;

