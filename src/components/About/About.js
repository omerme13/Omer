import React from 'react';
import './About.scss';
import education from '../../assets/img/education.svg';
import work from '../../assets/img/work.svg';

const about = () => (
    <section className="about">
        <h2 className="heading-2">about me</h2>
        <div className="about__content">
                <img className="about__icon about__icon--work" src={work} />  
                <img className="about__icon about__icon--education" src={education} />  
                <ul className="timeline__education">
                    <li className="timeline__item">
                        Self taught web developer
                    </li>
                    <li className="timeline__item">
                        <p className="timeline__paragraph">
                            Industrial Engineering graduate with honors from the Open University of Israel.                            
                        </p>
                    </li>
                </ul>
                <ul className="timeline__work">
                    <li className="timeline__item">
                        Freelance web developer
                    </li>
                    <li className="timeline__item">
                        <p className="timeline__paragraph">
                            Production Planning & Control Manager at Meishav B.M Ltd.
                        </p>
                    </li>
                </ul>


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