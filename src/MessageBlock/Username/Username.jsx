import React from 'react';
import style from './Username.module.css';


class Username extends React.Component {
    render = () => {
        return (
            <h3 className={style.messagerBlockUsername}>
                Артем Пономарев
            </h3>
        )
    }
}

export default Username;
