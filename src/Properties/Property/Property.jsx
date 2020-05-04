import React from 'react';
import styles from './Property.module.css';

class Property extends React.Component {

    render = () => {

      

        return (
            <p className={styles[this.props.nameClass]}>
                {this.props.property}
            </p>
        )
    }
}

export default Property;