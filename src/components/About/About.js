import React from 'react';

import Timeline from './Timeline/Timeline';
import computer from '../../assets/img/computer.jpg';

import './About.scss';

const about = () => (
    <section className="about" id="about">
        <h2 className="heading-2">about me</h2>
        <div className="about__content">
            <Timeline />
            <div className="about__text">
                <p className="about__paragraph">
                    I am a freelance web developer & an Industrial Engineer that specialized in information systems.<br/>
                    When I was a student I have discovered the wonderful world of web development.
                    I explored, learned and worked in this field ever since. I love this job. 
                    For that reason I manage to learn and develope every day. 
                </p>
                <img className="about__image" src={computer} alt="omer" />
            </div>
        </div>
    </section>
)

export default about;