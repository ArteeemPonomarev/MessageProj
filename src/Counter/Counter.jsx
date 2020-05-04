import React from 'react';
import style from './Counter.module.css';
import Input from "./Input/Input";
import Button from "./Button/Button";
import Name from "./Name/Name";


class Counter extends React.Component {
    state = {
        value: 0,
        inputValue:'',
        names: []
    }

    onButtonClick = () => {
        this.setState({value: this.state.value + 1})
        if (this.state.inputValue) {
            alert(`Hello, ${this.state.inputValue}`)
            this.setState({
                names: [...this.state.names, this.state.inputValue],
                inputValue: '',
            })
        }
    }

    onChangeInput = (e) => {
        let newValue = e.currentTarget.value;
        this.setState({
            inputValue: newValue
        })
    }
    onResetClick = () => {
        this.setState({
            value: 0,
            names: []
        })
    }

    render = () => {

        let names = this.state.names.map(name => <Name name={name}/>)

        return (
            <div className={style.counter}>
                <div>
                    <span>{this.state.value}</span>
                </div>
                <div>
                    <Input type={'text'}
                           value={this.state.inputValue}
                           placeholder={'Enter your message'}
                           onChange={this.onChangeInput} />
                </div>
                <div>
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