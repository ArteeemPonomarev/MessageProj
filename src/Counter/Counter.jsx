import React from 'react';
import style from './Counter.module.css';
import Input from "./Input/Input";
import Button from "./Button/Button";
import Name from "./Name/Name";
import Display from "./Display/Display";


class Counter extends React.Component {
    state = {
        value: 0,
        inputValue: '',
        names: [],
        error: false
    }

    onButtonClick = () => {
        this.setState({value: this.state.value + 1})
        if (this.state.inputValue) {
            alert(`Hello, ${this.state.inputValue}`)
            this.setState({
                names: [...this.state.names, this.state.inputValue],
                inputValue: '',
            })
        } else {
            this.setState({
                error: true
            })
        }
    }

    onChangeInput = (e) => {
        let newValue = e.currentTarget.value;
        this.setState({
            error: false,
            inputValue: newValue
        })
    }
    onResetClick = () => {
        this.setState({
            value: 0,
            names: [],
            error: false
        })
    }

    onKeyPressAction = (e) => {
        if (e.key === 'Enter') {
            this.onButtonClick();
        }
    }

    render = () => {

        const names = this.state.names.map(name => <Name name={name}/>)
        const classError = this.state.error === true ? 'error' : '';
        return (

            <div className={style.counter}>
                <Display value={this.state.value}/>

                <Input type={'text'}
                       value={this.state.inputValue}
                       placeholder={'Enter your message'}
                       onChange={this.onChangeInput}
                       errorClass={classError}
                       onKeyPressAction={this.onKeyPressAction}/>

                <div className={style.buttons}>
                    <Button onClick={this.onButtonClick}>
                        Press
                    </Button>
                    <Button onClick={this.onResetClick}>
                        Reset
                    </Button>
                </div>
                {names}
            </div>
        );
    }
}

export default Counter;