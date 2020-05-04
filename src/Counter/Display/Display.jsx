import React from 'react';
import style from './Display.module.css'

class Display extends React.Component {
    render = () => {
        return (
            <div className={style.display}>
                <span>{this.props.value}</span>
            </div>

        );
    }
}

export default Display;