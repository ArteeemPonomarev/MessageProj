import React from 'react';
import Message from './Message/Message';
import Avatar from './Avatar/Avatar';
import style from './UserMessage.module.css'


class UserMessage extends React.Component {
  render = () => {
    return (
      <div className={style.user_message}>
        <Avatar />
        <Message />
      </div>
    );
  }
}

export default UserMessage;
