import { response } from 'express';
import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import Toast component

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Comment() {
  const { _id } = useParams();
  // const [post, setPost] = useState({});
  const [comment, setComments] = useState([]);
  const [commentMessage, setcommentMessage] = useState("");
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');

  console.log("Token =", token);
  console.log("comment message: ",commentMessage)

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://my-first-blog-apis.onrender.com/api/posts/read/${_id}`
        );

        if (response.ok) {
          const data = await response.json();
          // setPost(data.data);
          setComments(data.data.comment || []);
        } else {
          setError("Failed to fetch post data");
        }
      } catch (error) {
        setError("Error fetching post data: " + error.message);
      }
    };

    fetchData();
  }, [_id]);

  // const handleSubmit = (e)=>{
  // e.preventDefault();

  // const FormData = new FormData();
  // FormData.append = ("commentMessage", commentMessage);

  // const token = localStorage.getItem("token");
  // console.log("token", token);

  // if(token){
  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //   };

  //   fetch(`https://my-first-blog-apis.onrender.com/api/posts/comment/send/${_id}`, 
  //   {
  //     method: "POST",
  //     headers: headers,
  //     body: FormData,
  //   })
  //   .then((response) => {
  //     if(response.ok){
  //       alert("comment added");
  //       return response.json();
  //     }
  //     else{
  //       alert("failed add");
  //     }

  //   })
  //   .catch((error) => {
  //     console.error("fetch error = ", error)
  //   })
  // }
  // else{
  //   alert("No token found");
  // }

  // }

  return (
    <div className='contactForm-container'>
      <div className="contactForm-content">
      {/* <form onSubmit={handleSubmit}>
          <h2>// LEAVE COMMENT //</h2>
          <textarea   
          type="text"
           value={commentMessage}
           onChange={(e) =>{setcommentMessage(e.target.value)}}
           placeholder="Add your comment..." 
          />
          <div className="send-button">
            <button type='submit'>POST COMMENT</button>
          </div>
        </form> */}
        <h2>// COMMENTS //</h2>
        <div className="comment-container">
          {comment.map((comments, index) => (
            <div key={index} className="comment">
              <div className="comment-header">
                <div className="comment-name">
                  <h3>{comments.username}</h3>
                </div>
              
              </div>
              <div className="comment-date">
                <p className='date'>{comments.date}</p>
              </div>
              <div className="comment-content">
                <p>{comments.commentMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Comment;

