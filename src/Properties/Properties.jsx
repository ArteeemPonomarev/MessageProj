import React from 'react';
import Property from './Property/Property';
import styles from './Properties.module.css';


class Properties extends React.Component {

    state = {
        properties: [
            { property: 'рационалист', id: 0 },
            { property: 'коммунист', id: 1 },
            { property: 'анимэшник', id: 2 }
        ],

        claas: 'property',
        sec: 'propertyOther',
    };



    render = () => {

        let propertiesList = this.state.properties.map(p =>
            <Property key={p.id}
                property={p.property}
                nameClass={p.id === 1 ? this.state.sec : this.state.claas} />)

        return (
            <div className={styles.properties}>
                {propertiesList}
            </div>
        )
    }

}
export default Properties;