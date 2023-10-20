import React from 'react';

function Comment() {
  const staticComments = [
    {
      name: 'Kendal James',
      date: 'NOV 10',
      text: "I can never read all the books I want; I can never be all the people I want and live all the lives I want. I can never train myself in all the skills I want.",
    },
    {
      name: 'Kendal James',
      date: 'NOV 10',
      text: "I can never read all the books I want; I can never be all the people I want and live all the lives I want. I can never train myself in all the skills I want.",
    },
    {
        name: 'Alice',
        date: 'NOV 15',
        text: "I can never read all the books I want; I can never be all the people I want and live all the lives I want. I can never train myself in all the skills I want.",
      }
  ];

  return (
    <div className='contactForm-container'>
      <div className="contactForm-content">
        <h2>// COMMENTS //</h2>
        <div className="comment-container">
          {staticComments.map((comment, index) => (
            <div key={index} className="comment">
              <div className="comment-header">
                <div className="comment-name">
                  <h3>{comment.name}</h3>
                </div>
                <div className="reply-btn">
                  <button>Reply</button>
                </div>
              </div>
              <div className="comment-date">
                <p className='date'>{comment.date}</p>
              </div>
              <div className="comment-content">
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
        <form action="">
          <h2>// LEAVE COMMENT //</h2>
          <div className="subject">
            <input type="text" placeholder='Name' className='subject' />
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder='Message' />
          <div className="send-button">
            <button type='submit'>POST COMMENT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comment;
