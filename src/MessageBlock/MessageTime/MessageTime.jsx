import React from 'react';
import styles from './MessageTime.module.css';


let date = new Date();
class MessageTime extends React.Component {
    render = () => {
        return (
            <div class={styles.messageBlockTime}>
                {date.getHours()}:{date.getMinutes()}
            </div>
        )
    }
}

export default MessageTime;