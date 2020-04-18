import React from 'react';
import style from './MessageText.module.css';

class MessageText extends React.Component {
    render = () => {
        return (
            <p class={style.messageBlockText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        )
    }
}

export default MessageText;