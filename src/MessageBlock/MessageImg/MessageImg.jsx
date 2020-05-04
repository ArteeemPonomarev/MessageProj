import React from 'react';
import style from './MessageImg.module.css';
import logo from '../ava.jpg';



class MessageImg extends React.Component {
    render = () => {
        return (
            <div className={style.messageImg}>
                <img src={logo} alt="avatar" className={style.messageImgAvatar}/>
            </div>
        )
    }
}

export default MessageImg;