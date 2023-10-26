import React, { useState, useEffect } from 'react';
import DashboardNavBar from './DashboardNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faComment,
  faEye,
  faNewspaper
} from '@fortawesome/free-solid-svg-icons';

function Chart() {
  const [data, setData] = useState({
    users: 0,
    posts: 0,
    views: 0,
    comments: 0
  });

  useEffect(() => {
    // Make an API request to fetch the data
    fetch('https://my-first-blog-apis.onrender.com/api/Posts')
      .then((response) => response.json())
      .then((apiData) => {
        // Count the number of users, posts, views, and comments
        const users = apiData.length;
        const posts = users;
        const views = apiData.reduce((totalViews, post) => totalViews + post.views, 0);
        const comments = apiData.reduce((totalComments, post) => totalComments + post.comment.length, 0);

        // Update the state with the numbers
        setData({
          users,
          posts,
          views,
          comments
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <DashboardNavBar />
      <section className="section-two">
        <div className="main-container">
          <div className="main-title">
            <h2>VIEW DASHBOARD</h2>
          </div>

          <div className="main-cards">
            <div className="card">
              <div className="card-inner">
                <h2>User</h2>
                <h1>
                  <FontAwesomeIcon icon={faUser} />
                </h1>
              </div>
              <h1>{data.users}</h1>
            </div>

            <div className="card">
              <div className="card-inner">
                <h2>Post</h2>
                <h1>
                  <FontAwesomeIcon icon={faNewspaper} />
                </h1>
              </div>
              <h1>{data.posts}</h1>
            </div>

            <div className="card">
              <div className="card-inner">
                <h2>View</h2>
                <h1>
                  <FontAwesomeIcon icon={faEye} />
                </h1>
              </div>
              <h1>{data.views}</h1>
            </div>

            <div className="card">
              <div className="card-inner">
                <h2>Comment</h2>
                <h1>
                  <FontAwesomeIcon icon={faComment} />
                </h1>
              </div>
              <h1>{data.comments}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Chart;
