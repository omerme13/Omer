import React from 'react';

import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

import './SkillItem.scss';

const skillItem = props => (
    <div className="skill-item">
        <div className="skill-item__icons">
            <img  className="skill-item__icon" src={props.icon1} />  
            <img  className="skill-item__icon" src={props.icon2} />  
        </div>
        <VisibilitySensor partialVisibility>
            {({ isVisible }) => {
                const percentage = isVisible ? props.precent.slice(0, -1) : 0;
                return (
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                    />
                );
            }}
        </VisibilitySensor>
        <div className="skill-item__name">
            {props.name}    
        </div>
    </div>
)

export default skillItem;