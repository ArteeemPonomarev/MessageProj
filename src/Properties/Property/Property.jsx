import React from 'react';
import './Property.css';

class Property extends React.Component {

    render = () => {

      

        return (
            <p className={this.props.nameClass}>
                {this.props.property}
            </p>
        )
    }
}

export default Property;