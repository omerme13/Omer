import React from 'react'

import Icon from '../UI/Icon/Icon';

import './Footer.scss';

const footer = () => (
    <footer className="footer">
        <p className="footer__email">
            <Icon name="mail" className="footer__icons" />
            omerme13@gmail.com
        </p>
        <p className="footer__phone">
            <Icon name="call" className="footer__icons" />
            +972(0) 549146602
        </p>
        <div className="footer__icons-container">
            <Icon name='logo-github' className="github footer__icons" link='https://github.com/omerme13' />
            <Icon name='logo-facebook' className="facebook footer__icons" link='https://www.facebook.com/omer.menachem.7' />
            <Icon name='logo-linkedin' className="linkedin footer__icons" link='https://www.linkedin.com/in/omer-menachem-035b3b161/' />
        </div>
        <p className="footer__copy">
            Built by Omer Menachem. &nbsp; All rights reserved &copy;2019.
        </p>
    </footer>
);

export default footer;