import React from 'react';
import style from './Name.module.css'


class Name extends React.Component {
  render = () => {
    return (
      <div className={style.user_name}>
        Artem
      </div>
    );
  }
}

export default Name;
