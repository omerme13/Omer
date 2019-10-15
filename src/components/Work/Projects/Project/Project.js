import React from 'react';

import Icon from '../../../UI/Icon/Icon';

import './Project.scss';

const project = props => (
    <div className="project">
        <img className="project__image" src={props.imgSrc} alt={props.name}/>
        <h4 className="project__name heading-4">
            {props.name}
        </h4>
        <div className="project__info">
            {props.info}
        </div>
        <div className="project__icons">
            <Icon name="globe" color="#3498db" link={props.url} />
            <Icon name="logo-github" color="#333" link={props.gitUrl} />
        </div>
    </div>
)

export default project;