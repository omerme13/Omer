import React from 'react'

import Icon from '../UI/Icon/Icon';

import './Footer.scss';

const footer = () => (
    <footer className="footer">
        <div className="footer__email">
            <Icon name="mail" className="footer__icons" />
            <p>omerme13@gmail.com</p>
        </div>
        <div className="footer__phone">
            <Icon name="call" className="footer__icons" />
            <p>+972(0) 549146602</p>
        </div>
        <div className="footer__icons-container">
            <Icon name='logo-github' className="github footer__icons" link='https://github.com/omerme13' />
            <Icon name='logo-facebook' className="facebook footer__icons" link='https://www.facebook.com/omer.menachem.7' />
            <Icon name='logo-linkedin' className="linkedin footer__icons" link='https://www.linkedin.com/in/omer-menachem-035b3b161/' />
        </div>
        <p className="footer__copy">
            Built by Omer Menachem. &nbsp; All rights reserved &copy;2021.
        </p>
    </footer>
);

export default footer;