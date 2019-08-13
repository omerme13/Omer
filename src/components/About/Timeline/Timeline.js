import React from 'react'

import './Timeline.scss';

const timeline = props => (
    <div className="timeline">
        <img className="timeline__icon timeline__icon--work" src={props.work} />  
        <img className="timeline__icon timeline__icon--education" src={props.education} />  
        <ul className="timeline__education">
            <li className="timeline__item">
                <strong>Programming & Web Development</strong>,&nbsp; <em>Self taught</em>.                         
            </li>
            <li className="timeline__item">
                <p className="timeline__paragraph">
                    <strong>Industrial Engineering & Management</strong> (information systems Specialization ),&nbsp; graduated with honors. <em>The Open University of Israel</em>.
                </p>
            </li>
        </ul>
        <ul className="timeline__work">
            <li className="timeline__item">
                <strong>Web Developer</strong>,&nbsp; <em>Freelance</em>.                         
            </li>
            <li className="timeline__item">
                <p className="timeline__paragraph">
                    <strong>Production Planning & Control Manager</strong>,&nbsp; <em>Meishav B.M Ltd</em>.
                </p>
            </li>
        </ul>
    </div>

)

export default timeline;