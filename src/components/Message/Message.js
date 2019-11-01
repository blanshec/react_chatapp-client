import React from 'react';

import './Message.css';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="message__container_current-user">
          <p className="sent-text">{trimmedName}</p>
          <div className="message__box_current-user">
            <p className="message__text_current-user">{text}</p>
            <p className="message__timestamp_current-user">{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
          </div>
        </div>
      )
      : (
        <div className="message__container_other-user">
          <div className="message__box_other-user">
            <p className="message__text_other-user">{text}</p>
            <p className="message__timestamp_other-user">{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
          </div>
          <p className="sent-text">{user}</p>
        </div>
      )
  );
};

export default Message;