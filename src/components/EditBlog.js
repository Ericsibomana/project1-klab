import React from "react";
// import "../components/NavBar/";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";


function Modal({ setOpenModal }) {
    
  return (
    <div className="modalBackgroundEdit">
      <div className="modalContainer">
      <div className="edit-container">
          <div className="edit-content">
            <div className="add-new-header">
              <h4>Edit Blog</h4>
              <div className="CloseBtn">
          <FontAwesomeIcon icon={faTimes} className="close-icon edit-close" onClick={() => {setOpenModal(false);}} />
        </div>
            </div>
            <div className="add-new-form">
              <form action="">
                <div className="input-image">
                  <input
                    type="file"
                    name="image"
                    placeholder='upload image'
                  />
                </div>
                <div className="input-title">
                  <input
                    type="text"
                    name="title"
                    placeholder='Title'
                  />
                </div>
                <div className="input-content">
                  <textarea
                    name="content"
                    placeholder='Content'
                  ></textarea>
                </div>
                <div className="add-new-btn add">
                  <button>
                    <p>Save</p>
                    <FontAwesomeIcon icon={faPlus} className='plus-icon' />
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