import React from 'react';
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar } from "react-circular-progressbar";

import 'react-circular-progressbar/dist/styles.css';
import './SkillItem.scss';

import icons from '../../../assets/img/sprite.svg';
// import icons from '../../../assets/img/InlineSprite.svg';

const skillItem = props => (
    <div className="skill-item">
        <div className="skill-item__icons">
            <svg className="skill-item__icon">
                <use xlinkHref={`${icons}#${props.id1}`} />
            </svg>
            <svg 
                className="skill-item__icon" 
                style={{display: props.id2 ? 'inline-block' : 'none'}}
            >
                <use xlinkHref={`${icons}#${props.id2}`} />
            </svg>
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