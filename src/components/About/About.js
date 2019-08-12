import React from 'react';
import './About.scss';
import m from '../../assets/img/snow.jpg';

const about = () => (
    <section className="about">
        <h2 className="heading-2">about me</h2>
        <div className="about__content">
            <img src={m} className="about__image" />
            <div className="about__text">
                <p className="about__paragraph">
                    I live in Rosh Haayin Israel.
                    I have a B.Sc in Industrial Engineering from the Open University Of Israel.
                </p>
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