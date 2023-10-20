// import React from 'react';
// import { useParams } from 'react-router-dom';
// import image1 from './image/bruce.jpg';
// import image2 from './image/instrument.jpg';
// import image3 from './image/healthy.png';
// import Navbar from './NavBar/NavBar';
// import Comment from './Dashboard/Comment';

// const cardDataArray = [
//   {
//     id: 1,
//     image:image1,
//     title: 'Woman stretching',
//     description: "For many people, stretching exercises probably fall on the 'things I should do but don't' list...For many people, stretching exercises probably fall on the 'things I should do but don't' list...For many people, stretching exercises probably fall on the 'things I should do but don't' list...For many people, stretching exercises probably fall on the 'things I should do but don't' list...For many people, stretching exercises probably fall on the 'things I should do but don't' list...For many people, stretching exercises probably fall on the 'things I should do but don't' list...For many people, stretching exercises probably fall on the 'things I should do but don't' list...For many people, stretching exercises probably fall on the 'things I should do but don't' list...For many people, stretching exercises probably fall on the 'things I should do but don't' list...For many people, stretching exercises probably fall on the 'things I should do but don't' list...",
//     author: 'Eric',
//     date: 'Nov 01',
//   },
//   {
//     id: 2,
//     image:image2,
//     title: 'Learn to Play an Instrument',
//     description: "Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...Whether you want to join your school's band, learning to play an instrument is a rewarding and stimulating activity...",
//     author: 'John',
//     date: 'Nov 02',
//   },
//   {
//     id: 3,
//     image:image3,
//     title: 'Healthy & Tasty',
//     description: "You've gotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurtgotta dance like there's nobody watching, love like you'll never be hurt...",
//     author: 'Alice',
//     date: 'Nov 03',
//   }
// ];

// function SingleBlog() {
//   const { id } = useParams();
//   const blogData = cardDataArray.find((blog) => blog.id === parseInt(id));

//   if (!blogData) {
//     return <div>Blog not found.</div>;
//   }

//   return (
//    <>
//         <Navbar />
//         <div className="single-blog">
//         <div className="single-card">
//         <div className="card-image">
//             <img src={blogData.image} alt="image" />
//         </div>
//       <h2>{blogData.title}</h2>
//       <p>{blogData.description}</p>
//       <p>By {blogData.author} | {blogData.date}</p>
//         </div>
//     </div>
//     <Comment />
//    </>
//   );
// }

// export default SingleBlog;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './NavBar/NavBar';
import Comment from './Dashboard/Comment';

function SingleBlog() {
  const { _id } = useParams();
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    fetch(`https://my-first-blog-apis.onrender.com/api/myblog/blog/read/${_id}`)
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
