import React from 'react';


import './Circle.scss';

const circle = () => (

    <div className="circle">
        <div className="container">
            <svg className="pb" viewBox="0 0 64 64">
                <circle className="pb__track" cx="50%" cy="50%" r="30px"></circle>
                <circle className="pb__thumb" cx="50%" cy="50%" r="30px"></circle>
            </svg>
        </div>
    </div>
)

export default circle;