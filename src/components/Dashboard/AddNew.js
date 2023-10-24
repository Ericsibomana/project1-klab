<<<<<<< HEAD

=======
>>>>>>> f2c2622 (change)
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// import Toast component

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddNew({ setOpenModal }) {

<<<<<<< HEAD
  const [PostImage, setPostImage] = useState(null);
    const [PostTitle, setPostTitle] = useState();
    const [PostContent, setPostContent] = useState('');
=======
  const [PostTitle, setTitle] = useState("");
  const [PostImage, setIfoto] = useState("");
  const [PostContent, setContent] = useState("");
>>>>>>> cdbd02f (fix on create new posts)

  console.log(PostImage);

  const token = localStorage.getItem('token');

  console.log("Token =", token);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  const createBlog = async (e) => {
    e.preventDefault();

    // Assuming you have the file input element with the ID "imageInput" in your HTML
    const imageInput = document.getElementById("imageInput");
    const PostImage = imageInput.files[0]; // Get the selected image file

    // Create a new FormData object
    const formData = new FormData();
    formData.append("PostTitle", PostTitle);
    formData.append("PostImage", PostImage);
    formData.append("PostContent", PostContent);

    try {
      const make = await axios.post(
        "https://my-first-blog-apis.onrender.com/api/posts/create",
        formData,
        config
      );

      console.log(make);
      if (make.status === 200) {
        toast("Blog are created successfully!")
      }

<<<<<<< HEAD
        if (response.ok) {
            const data = await response.json();
            console.log('Response:', data);
            toast("Blog are created successfully!")
            setPostImage(null)
            setPostTitle('')
            setPostContent('')
        } else {
          toast("Failed to create a Blog ")
        }
=======
      window.location.reload();
>>>>>>> cdbd02f (fix on create new posts)
    } catch (error) {
      console.log(error);
      toast("Failed to create a Blog ")
    }
  };


    
  return (
    <div className="modalBackground">
      <div className="modalContainer">
      <div className="add-new-container">
          <div className="add-new-blog">
            <div className="add-new-header">
              <h1>Add new blog</h1>
              <div className="CloseBtn">
          <FontAwesomeIcon icon={faTimes} className="close-icon edit-close" onClick={() => {setOpenModal(false);}} />
        </div>
            </div>
            <div className="add-new-form">
              <form >
                <div className="input-image">
<<<<<<< HEAD
                <input type="file" name="image" onChange={(e) => setPostImage(e.target.files[0])} />
=======
                  <input type="file" name="image"  id="imageInput" accept="image/*" value={PostImage} onChange={(e) => setIfoto(e.target.value)}/>
>>>>>>> cdbd02f (fix on create new posts)
                </div>
                <div className="input-title">
                  <input type="text" name="title" placeholder='Title' value={PostTitle} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="input-content">
                  <textarea name="content" placeholder='Content' value={PostContent} onChange={(e) => setContent(e.target.value)}/>
                </div>
                <div className="add-new-btn add">
                  <button type="submit" onClick={createBlog}> <p>Add New</p> <FontAwesomeIcon icon={faPlus} className='plus-icon' /></button>
                </div>
              </form>
            </div>
          </div>
        </div> 
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddNew;