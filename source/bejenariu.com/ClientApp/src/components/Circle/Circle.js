import React from 'react';
import './Circle.css';

export default props => (
  <div className="front__circle">
    {props.children}
    <div className="circle -outter"></div>
    <div className="circle -inner"></div>
    <div className="circle -big"></div>
    <div className="circle -small"></div>
  </div>
);
