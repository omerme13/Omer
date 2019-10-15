import React from 'react';

import Project from './Project/Project';
import food from '../../../assets/img/food.jpg';
import todo from '../../../assets/img/todo.jpg';
import books from '../../../assets/img/books.jpg';
import snow from '../../../assets/img/snow.jpg';
import burger from '../../../assets/img/burger.jpg';
import dashboard from '../../../assets/img/dashboard.jpg';

import './Projects.scss';

const projects = () => (
    <div className="projects">
        <Project 
            url="https://omer-todo-list.netlify.com/" 
            gitUrl="https://github.com/omerme13/Task-List/"             
            imgSrc={todo}
            name="Task List"
            info="HTML, CSS & JS"
        />
        <Project
            url="https://omer-calorie-tracker.netlify.com/"
            gitUrl="https://github.com/omerme13/Calorie-Tracker/"             
            imgSrc={food}
            name="Calorie Tracker"
            info="HTML, CSS & JS"
        />
        <Project
            url="https://omer-burger-builder.netlify.com/"
            gitUrl="https://github.com/omerme13/burger-builder/"             
            imgSrc={burger}
            name="Burger Builder"
            info="React, Redux, Node & PostgreSQL"
        />
        <Project 
            url="https://omer-booklist.netlify.com/" 
            gitUrl="https://github.com/omerme13/Booklist/"             
            imgSrc={books}
            name="Book List"
            info="HTML, CSS & JS"

        />
        <Project
            url="https://weather-new.netlify.com/"
            gitUrl="https://github.com/omerme13/Weather-new/"             
            imgSrc={snow}
            name="Weather App"
            info="React & SCSS"
        />
        <Project
            url="https://omer-dashboard.netlify.com/"
            gitUrl="https://github.com/omerme13/dashboard"             
            imgSrc={dashboard}
            name="Dashboard"
            info="React & SCSS"

        />
    </div>
)

export default projects;