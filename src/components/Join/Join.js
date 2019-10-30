import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="join__outer-container">
      <div className="join__inner-container">
        <h1 className="join__heading">Welcome to the Internet</h1>
        <div>
          <input placeholder="Name"
            className="join__input"
            type="text"
            onChange={(event) => setName(event.target.value)} />
        </div>
        <div><input placeholder="Room"
          className="join__input"
          type="text"
          onChange={(event) => setRoom(event.target.value)} /></div>
        <Link
          onClick={event => (!name || !room) ? event.preventDefault() : null}
          to={`/chat?name=${name}&room=${room}`}>

          <button className="join__button" type="submit">Sign In</button>

        </Link>
      </div>
    </div>
  )
}

export default Join;