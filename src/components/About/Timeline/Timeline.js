import React from 'react'

import Icon from '../../UI/Icon/Icon';
import TimelineItem from './TimelineItem/TimelineItem';

import './Timeline.scss';

const timeline = () => (
    <div className="timeline">
        <Icon className="timeline__icon timeline__icon--work" name="ios-briefcase" />
        <Icon className="timeline__icon timeline__icon--education" name="ios-ribbon" />
        <ul className="timeline__education">
            <TimelineItem 
                year="2018 - 2019"
                title="Programming & Web Development"
                place="Self taught"
            />
            <TimelineItem 
                year="2014 - 2018"
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