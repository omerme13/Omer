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

const skills = () => (
    <section className="skills">
        <h2 className="heading-2">my skills</h2>
        <p className="skills__paragraph">Here are the levels of my confidence in these areas:</p>
        <div className="skills__wrapper">
            <SkillItem name="HTML" icon1={html}>90%</SkillItem>
            <SkillItem name="CSS & SASS" icon1={css} icon2={sass}>85%</SkillItem>
            <SkillItem name="JS" icon1={js}>75%</SkillItem>
            <SkillItem name="React" icon1={react}>65%</SkillItem>
            <SkillItem name="Redux" icon1={redux}>55%</SkillItem>
            <SkillItem name="Node & Express" icon1={node} icon2={express}>55%</SkillItem>
            <SkillItem name="PostgreSQL" icon1={postgresql}>75%</SkillItem>
        </div>
    </section>
)

export default skills;