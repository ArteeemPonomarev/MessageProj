import React from 'react';
import Property from './Property/Property';
import styles from './Properties.module.css';


class Properties extends React.Component {

    state = {
        properties: [
            { property: 'рационалист', id: 0 },
            { property: 'коммунист', id: 1 },
            { property: 'анимэшник', id: 2 }
        ]
    };



    render = () => {

        let claas = 'property';
        let sec = 'propertyOther';

        let propertiesList = this.state.properties.map(p =>
            <Property key={p.id}
                property={p.property}
                nameclass={p.id === 1 ? sec : claas} />)

        return (
            <div className={styles.properties}>
                {propertiesList}
            </div>
        )
    }

}
export default Properties;