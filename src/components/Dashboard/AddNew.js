import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

// import Toast component

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddNew({ setOpenModal }) {
  const [PostImage, setPostImage] = useState(null);
  const [PostTitle, setPostTitle] = useState();
  const [PostContent, setPostContent] = useState("");

  const NewData = {
    PostImage,
    PostTitle,
    PostContent,
  };

  const handlenewBlog = async (data) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast("You are not authenticated. Please log in.");
        return;
      }
      const response = await fetch(
        "https://my-first-blog-apis.onrender.com/api/posts/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data), // Use FormData directly without wrapping it in an object
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Response:", data);
        toast("Blog are created successfully!");
        setPostImage(null);
        setPostTitle("");
        setPostContent("");
      } else {
        toast("Failed to create a Blog ");
      }
    } catch (error) {
      console.error("Error:", error);
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
                <FontAwesomeIcon
                  icon={faTimes}
                  className="close-icon edit-close"
                  onClick={() => {
                    setOpenModal(false);
                  }}
                />
              </div>
            </div>
            <div className="add-new-form">
              <form>
                <div className="input-image">
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => setPostImage(e.target.files[0])}
                  />
                </div>
                <div className="input-title">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={PostTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                  />
                </div>
                <div className="input-content">
                  <textarea
                    name="content"
                    placeholder="Content"
                    value={PostContent}
                    onChange={(e) => setPostContent(e.target.value)}
                  />
                </div>
                <div className="add-new-btn add">
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      handlenewBlog(NewData);
                    }}
                  >
                    {" "}
                    <p>Add New</p>{" "}
                    <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                  </button>
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
