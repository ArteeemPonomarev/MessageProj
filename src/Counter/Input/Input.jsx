import React from 'react';
import style from './Input.module.css';


class Input extends React.Component {
    render = () => {
        return (
            <div>
                <input className={style.input}
                       type={this.props.type}
                       placeholder={this.props.placeholder}
                       value={this.props.value}
                       onChange={this.props.onChange} />
            </div>

        );
    }
}

export default Input;