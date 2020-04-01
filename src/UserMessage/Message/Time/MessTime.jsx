import React from 'react';
import style from './MessTime.module.css'

var date = new Date();
class MessTime extends React.Component {
  
  render = () => {
    return (
      <div className={style.message_time}>
        {date.getHours()}:
        {date.getMinutes()}
      </div>
    );
  }
}

export default MessTime;
