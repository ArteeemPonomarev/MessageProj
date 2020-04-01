import React from 'react';
import Name from './Name/Name';
import Text from './Text/Text';
import Time from './Time/MessTime';
import style from './Message.module.css'


class Message extends React.Component {
  render = () => {
    return (
      <div className={style.message_block}>
        <Name />
        <Text />
        <Time />
      </div>
    );
  }
}

export default Message;
