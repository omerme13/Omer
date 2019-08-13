import React from 'react';

import Timeline from './Timeline/Timeline';
import education from '../../assets/img/education.svg';
import work from '../../assets/img/work.svg';

import './About.scss';

const about = () => (
    <section className="about">
        <h2 className="heading-2">about me</h2>
        <div className="about__content">
            <Timeline work={work} education={education} />
            <div className="about__text">
                <p className="about__paragraph">When I was a student I have discovered the wonderful world of web development.
                    I explored, learned and experimented in this field ever since.
                </p>
                <p className="about__paragraph">
                    I am currently seeking a job as a Front End / Full Stack developer.
                    I wish to find the right place, thrive and grow along with it.  
                </p>
            </div>
        </div>
    </section>
)

export default about;