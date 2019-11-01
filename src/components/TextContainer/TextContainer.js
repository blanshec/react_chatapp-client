import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="text-container">
    <div>
      <h1>React Socket.io chat application</h1>
      <h2>Created with tears for your enjoyment</h2>
    </div>

    {console.log(users)}
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="active-container">
              <h2>
                {users.map(({ name }) => (
                  <div key={name} className="active-item">
                    <img alt="Online Icon" src={onlineIcon} />
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;