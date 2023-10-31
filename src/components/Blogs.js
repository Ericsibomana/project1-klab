import React, { useState, useEffect } from "react";
import Card from "./Card";
<<<<<<< HEAD

function Blogs() {
  // Declaring useState
  // Declaring useState
=======
import { baseUrl } from "./config";

function Blogs() {
>>>>>>> ff35009 (chart)
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
<<<<<<< HEAD
    fetch("https://my-first-blog-apis.onrender.com/api/posts/read")
=======
    fetch(`${baseUrl}/posts/read`)
>>>>>>> ff35009 (chart)
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
  console.log("POSTS", posts);
  return (
    <section className="section-two">
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
