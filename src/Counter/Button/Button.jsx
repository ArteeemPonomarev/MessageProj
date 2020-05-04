import React from 'react';
import style from './Button.module.css';

class Button extends React.Component {
    render = () => {
        return (
            <button className={style.button}
                    onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;