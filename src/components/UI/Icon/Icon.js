import React from 'react';

const icon = props => (
    <a href={props.link} className={props.className}>
        <ion-icon 
            name={props.name} 
            onClick={props.clicked}
            style={{color: props.color}}
        >
        </ion-icon>
    </a>
);

export default icon;