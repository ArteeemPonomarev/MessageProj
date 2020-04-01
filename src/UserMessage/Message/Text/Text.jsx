import React from 'react';
import style from './Text.module.css'


class Text extends React.Component {
  render = () => {
    return (
      <div className={style.message_text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </div>
    );
  }
}

export default Text;
