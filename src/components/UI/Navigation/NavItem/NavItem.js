import React from 'react'

import { Link } from 'react-scroll'

const navItem = props => (
    <li class="navigation__item" >
        <Link href={`#${props.title}`} activeClass="active" className="navigation__link" to={props.title} spy={true} smooth={true} duration={700} onClick={props.closeMenu}>
            {props.title}
        </Link>
        {/* <a href={`#${props.title}`} className="navigation__link">{props.title}</a> */}
    </li>
)

export default navItem;