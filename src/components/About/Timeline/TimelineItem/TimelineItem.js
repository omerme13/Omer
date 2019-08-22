import React from 'react'

import './TimelineItem.scss';

const lineBreak = <p></p>;

const timelineItem = props => {
    const description = props.description
        ? props.description
        : null;


    return (
        <li className="timeline-item">
            <p className="timeline-item__paragraph">
                <div className="timeline-item__year">{props.year}</div>
                <strong>{props.title}</strong><br/> 
                {description}{lineBreak}
                <em>{props.place}</em>.                                       
            </p>
        </li>
    );
}

export default timelineItem;