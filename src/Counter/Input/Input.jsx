import React from 'react';

class Input extends React.Component {
    render = () => {
        return (
            <div>
                <input type={this.props.type}
                       placeholder={this.props.placeholder}
                       value={this.props.value}
                       onChange={this.props.onChange} />
            </div>

        );
    }
}

export default Input;