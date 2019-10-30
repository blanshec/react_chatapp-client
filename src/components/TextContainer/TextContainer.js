import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="text-container">
    <div>
      <h1>React Socket.io chat application</h1>
      <h2>Created with tears</h2>
      <h2>Try it out!</h2>
    </div>

    {
      users
        ? (
          <div>
            <h1>
              People currently in the room:
          </h1>
            <div className="text-container_active">
              <h2>
                {users.map(({ name }) => (
                  <div key={name} className="active-item">
                    {name}
                    <image alt="online icon" src={onlineIcon} />
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