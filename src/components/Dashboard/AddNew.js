import React, { useState } from 'react';
import DashboardNavBar from './DashboardNavBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddNew({ addNewBlogPost }) {
  const [newBlogPost, setNewBlogPost] = useState({
    image: '', // You can set this to the image file or URL
    title: '',
    content: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlogPost({
      ...newBlogPost,
      [name]: value,
    });
  };

  const handleAddNew = () => {
    // Check if the required fields are not empty
    if (newBlogPost.title && newBlogPost.content) {
      // Call the addNewBlogPost function to add the new post
      addNewBlogPost(newBlogPost);
      // Clear the form
      setNewBlogPost({
        image: '',
        title: '',
        content: '',
      });
    } else {
      // Handle validation or show an error message
    }
  };

  return (
    <div>
      <DashboardNavBar />
      <section className='section-two'>
        <div className="add-new-container">
          <div className="add-new-content">
            <div className="add-new-header">
              <h1>Add new blog</h1>
            </div>
            <div className="add-new-form">
              <form action="">
                <div className="input-image">
                  <input
                    type="file"
                    name="image"
                    placeholder='upload image'
                    value={newBlogPost.image}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-title">
                  <input
                    type="text"
                    name="title"
                    placeholder='Title'
                    value={newBlogPost.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-content">
                  <textarea
                    name="content"
                    placeholder='Content'
                    value={newBlogPost.content}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="add-new-btn add">
                  <button onClick={handleAddNew}>
                    <p>Add New</p>
                    <FontAwesomeIcon icon={faPlus} className='plus-icon' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddNew;
