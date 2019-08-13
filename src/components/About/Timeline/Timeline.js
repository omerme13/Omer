import React from 'react'

import TimelineItem from './TimelineItem/TimelineItem';
import workIcon from '../../../assets/img/work.svg';
import educationIcon from '../../../assets/img/education.svg';

import './Timeline.scss';

const timeline = () => (
    <div className="timeline">
        <img className="timeline__icon timeline__icon--work" src={workIcon} />  
        <img className="timeline__icon timeline__icon--education" src={educationIcon} />  
        <ul className="timeline__education">
            <TimelineItem 
                year="2018 - 2019"
                title="Programming & Web Development"
                place="Self taught"
            />
            <TimelineItem 
                year="2018 - 2019"
                title="Industrial Engineering & Management"
                description="Graduated with honors, specialized in Information Systems."
                place="The Open University of Israel"
            />                    
        </ul>
        <ul className="timeline__work">
            <TimelineItem 
                year="2018 - NOW"
                title="Web Developer"
                place="Freelance"
            />
            <TimelineItem 
                year="2010 - 2018"
                title="Production Planning & Control Manager"
                place="Meishav B.M Ltd"
            />    
        </ul>
    </div>
)

export default timeline;