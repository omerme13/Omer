import React from 'react';

import './HalfCircle.scss';

const halfCircle = props => (
    <div className="half-circle">
        <div class={`half-circle__border ${props.fixed}`} style={{'background': `linear-gradient(to right, ${props.left} 50%, ${props.right} 50%)`}}>
            <div class="half-circle__fill"></div>
        </div>
    </div>
)

export default halfCircle;