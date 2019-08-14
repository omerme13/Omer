import React from 'react';

import './Button.scss';

const button = props => (
    <button
        className="button" 
        onClick={props.clicked}
        disabled={props.disabled}
    >
        {props.children}
    </button>
);


export default button;

