import React from 'react';

class Display extends React.Component {
    render = () => {
        return (
            <div>
                <span>{this.props.value}</span>
            </div>

        );
    }
}

export default Display;