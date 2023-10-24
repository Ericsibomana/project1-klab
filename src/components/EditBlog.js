import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Modal({ setOpenModal, _id }) {
  const [PostTitle, setPostTitle] = useState("");
  const [PostImage, setPostImage] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    // Fetch the existing blog post data when the modal is opened
    axios.get(`https://my-first-blog-apis.onrender.com/api/posts/update/${_id}`)
      .then((response) => {
        const { PostTitle, content } = response.data;
        setPostTitle(PostTitle);
        setContent(content);
        // You can set the image field as well if it's a file input.
      })
      .catch((error) => {
        console.error("Error fetching post data:", error);
      });
  }, [_id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      // Handle unauthenticated user
      console.error("User is not authenticated.");
      return;
    }

    const formData = new FormData();
    formData.append("PostTitle", PostTitle);
    formData.append("PostImage", setPostImage); // Assuming image is a File object
    formData.append("content", content);

    axios
      .put(`https://my-first-blog-apis.onrender.com/api/posts/update//${_id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          // Handle success, e.g., close the modal
          setOpenModal(false);
        } else {
          console.error("Failed to update the blog post.");
        }
      })
      .catch((error) => {
        console.error("Error updating the blog post:", error);
      });
  };

  return (
    <div className="modalBackgroundEdit">
      <div className="modalContainer">
        <div className="edit-container">
          <div className="edit-content">
            <div className="add-new-header">
              <h4>Edit Blog</h4>
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
              <form onSubmit={handleUpdate}>
                <div className="input-image">
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
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
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>
                <div className="add-new-btn add">
                  <button>
                    <p>Save</p>
                    <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
