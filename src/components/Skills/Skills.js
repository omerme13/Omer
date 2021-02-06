import React from "react";
import SkillItem from "./SkillItem/SkillItem";

import "./Skills.scss";

const skillList = [
    {name:"HTML", precent: '90%', id1: 'html-5'},
    {name:"CSS & SASS", precent: '85%', id1: 'css-3', id2: 'sass'},
    {name:"JavaScript", precent: '80%', id1: 'javascript'},
    {name:"React & React Native", precent: '75%', id1: 'react'},
    {name:"Redux", precent: '80%', id1: 'redux'},
    {name:"Node & Express", precent: '80%', id1: 'node', id2: 'express'},
    {name:"PostgreSQL", precent: '75%', id1: 'postgresql'},
    {name:"MongoDB & Mongoose", precent: '75%', id1: 'mongodb'},
    {name:"Typescript", precent: '80%', id1: 'typescript'},
    {name:"Graphql", precent: '50%', id1: 'graphql'},
    {name:"Rxjs", precent: '50%', id1: 'reactivex'},
    {name:"Material UI", precent: '80%', id1: 'material-ui'},
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
                    id1={skill.id1}
                    id2={skill.id2}
                />
            ))}
        </div>
    </section>
);

export default skills;
