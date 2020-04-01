import React from 'react';
import ava from './ava.jpg'
import style from './Avatar.module.css'


class Avatar extends React.Component {
  render = () => {
    return (
      <div className = {style.user_ava}>
        <img alt="user_ava" src={ava}/>
      </div>
    );
  }
}

export default Avatar;
