import React from 'react';

import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      className="form__input"
      type="text"
      placeholder="Type a message"
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
    <button className="form__button_send" onClick={(event) => sendMessage(event)}>Send</button>
  </form>
)

export default Input;