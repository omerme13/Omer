import React from 'react'

import NavItem from './NavItem/NavItem';

import './Navigation.scss';

const navigation = props => {

    const shouldAnimate = name => {
        return `navigation__${name} ${props.show ? `navigation__${name}--animated` : null}`;
    }

    return (
        <div className="navigation">
        <div className="navigation__button" onClick={props.toggleNav}>
            <span className={shouldAnimate('icon')}>
                &nbsp;
            </span>
        </div>
        <div className={shouldAnimate('background')}>
            &nbsp;
        </div>
        <nav className={shouldAnimate('nav')}>
            <ul className="navigation__list">
                <NavItem title ="home" closeMenu={props.toggleNav} />
                <NavItem title ="about" closeMenu={props.toggleNav} />
                <NavItem title ="skills" closeMenu={props.toggleNav} />
                <NavItem title ="work" closeMenu={props.toggleNav} />
                <NavItem title ="contact" closeMenu={props.toggleNav} />
            </ul>
        </nav>
    </div>
    )

}



export default navigation;