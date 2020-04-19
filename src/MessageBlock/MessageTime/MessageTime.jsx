import React from 'react';
import styles from './MessageTime.module.css';


let date = new Date();
class MessageTime extends React.Component {
    render = () => {
        return (
            <div className={styles.messageBlockTime}>
                {date.getHours()+1}:{date.getMinutes()}
            </div>
        )
    }
}

export default MessageTime;