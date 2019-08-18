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
        <VisibilitySensor>
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


        {/* THE OLD SKILL BARS */}
        {/* <div className="skill-item__icons">
            <img  className="skill-item__icon" src={props.icon1} />  
            <img  className="skill-item__icon" src={props.icon2} />  
        </div> */}

        {/* <img  className="skill-item__icon" src={props.icon1} />  
        <img  className="skill-item__icon" src={props.icon2} />   */}

        {/* <div className="skill-item__bars">
            <div className="skill-item__name">
                {props.name}    
            </div>
            <div className="skill-item__bar" style={{maxWidth: props.precent, left: 0}}>
                <p className="skill-item__precent">
                    {props.precent} 
                </p>
            </div>
        </div>     */}
    </div>
)

export default skillItem;