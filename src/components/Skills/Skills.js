import React from 'react';

import SkillItem from './SkillItem/SkillItem';

import html from '../../assets/img/html-5.svg';
import css from '../../assets/img/css-3.svg';
import sass from '../../assets/img/sass.svg';
import js from '../../assets/img/javascript.svg';
import react from '../../assets/img/react.svg';
import redux from '../../assets/img/redux.svg';
import node from '../../assets/img/node.svg';
import express from '../../assets/img/express.svg';
import postgresql from '../../assets/img/postgresql.svg';

import './Skills.scss';


const skillList = [
    {name:"HTML", precent: '90%', icon1: html, icon2: null},
    {name:"CSS & SASS", precent: '85%', icon1: css, icon2: sass},
    {name:"JavaScript", precent: '75%', icon1: js, icon2: null},
    {name:"React", precent: '65%', icon1: react, icon2: null},
    {name:"Redux", precent: '55%', icon1: redux, icon2: null},
    {name:"Node & Express", precent: '55%', icon1: node, icon2: express},
    {name:"PostgreSQL", precent: '75%', icon1: postgresql, icon2: null},
];

const skills = () => (
    <section className="skills" id="skills">
        <h2 className="heading-2">my skills</h2>
        <p className="skills__paragraph">My proficiency in web technologies:</p>
          
         <div className="skills__wrapper">
         
             {skillList.map(skill => (
                <SkillItem
                    key={skill.name}
                    name={skill.name} 
                    precent={skill.precent}
                    icon1={skill.icon1} 
                    icon2={skill.icon2}
                />
            ))}
        </div>
    </section>
);

export default skills;