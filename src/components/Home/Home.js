import React from 'react';
import './Home.scss';
import Icon from '../UI/Icon/Icon';
import omer from '../../assets/img/omer.PNG';

const home = () => (
    <header className="home" id="home">
        <div className="home__background"></div>
        <div className="home__content">
            <h1 className="heading-1 ">Omer Menachem</h1>
            <div className="home__details">
                <img className="home__image" src={omer} alt="Omer Menachem"/>
                <h2 className="heading-2 heading-2--i">Web Developer & Programmer</h2>
            </div>
            <div className="home__icons-container">
                <Icon name='logo-facebook' className="facebook home__icons" link='https://www.facebook.com/omer.menachem.7' />
                <Icon name='logo-linkedin' className="linkedin home__icons" link='https://www.linkedin.com/in/omer-menachem-035b3b161/' />
                <Icon name='logo-github' className="github home__icons" link='https://github.com/omerme13' />
            </div>
        </div>
    </header>
)

export default home;