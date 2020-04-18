import React from 'react';
import style from './MessageBlock.module.css';
import Username from './Username/Username';
import MessageText from './MessageText/MessageText';
import MessageTime from './MessageTime/MessageTime';

class MessageBlock extends React.Component {
    render = () => {
        return (
            <div class={style.messageBlock}>
                <Username />
                <MessageText />
                <MessageTime />
            </div>
        )
    }
}

export default MessageBlock;