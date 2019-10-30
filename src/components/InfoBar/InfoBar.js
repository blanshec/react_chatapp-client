import React from 'react';

import './InfoBar.css';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

const InfoBar = ({ room }) => (
  <div className="infobar">
    <div className="infobar__inner-container_left">
      <img className="online-icon" src={onlineIcon} alt="online"></img>
      <h3> {room} </h3>
    </div>
    <div className="infobar__inner-container_right">
      <a href="/"><img src={closeIcon} alt=" close"></img></a>
    </div>
  </div>
)

export default InfoBar;