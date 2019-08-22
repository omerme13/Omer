import React from 'react'

import { Link } from 'react-scroll'

import './NavItem.scss'

const navItem = props => (
    <li class="navigation__item" >
        <Link 
            href={`#${props.title}`} 
            activeClass="active" 
            className="navigation__link" 
            to={props.title} 
            spy={true} 
            smooth={true} 
            duration={700} 
            onClick={props.closeMenu}
        >
            {props.title}
        </Link>
    </li>
)

export default navItem;