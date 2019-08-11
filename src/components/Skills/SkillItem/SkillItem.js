import React from 'react';

import './SkillItem.scss';

const skillItem = props => (
    <div className="skill-item">
        <h4 className="heading-4 mb-xs text-left">
        <img  className="skill-item__icon" src={props.icon1} />  
        <img  className="skill-item__icon" src={props.icon2} />  
        </h4>
    
        <div className="skill-item__bars">
            <div className="skill-item__name">
                {props.name}    
            </div>
            <div className="skill-item__bar" style={{maxWidth: props.children, left: 0}}>
                <p className="skill-item__precent">
                    {props.children} 
                </p>
            </div>
        </div>    
        
    </div>
)

export default skillItem;