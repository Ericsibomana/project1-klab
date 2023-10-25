import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './NavBar/NavBar';
import Comment from './Dashboard/Comment';

function SingleBlog() {
  const { _id } = useParams();
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    fetch(`https://my-first-blog-apis.onrender.com/api/posts/read/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [_id]);

  console.log("POSTS", blogData);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="single-blog">
        <div className="single-card">
          <div className="card-image">
            <img src={blogData.PostImage} alt="image" />
          </div>
          <h2>{blogData.PostTitle}</h2>
          <p>{blogData.PostContent}</p>
          <p>By {blogData.creator} | {blogData.PostedDate}</p>
        </div>
      </div>
      <Comment />
    </>
  );
}

export default SingleBlog;
