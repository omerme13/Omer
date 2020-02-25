import React, {useState} from "react";

import Project from "./Project/Project";
import food from "../../../assets/img/food.jpg";
import snow from "../../../assets/img/snow.jpg";
import burger from "../../../assets/img/burger.jpg";
import dashboard from "../../../assets/img/dashboard.jpg";

import "./Projects.scss";
import Modal from '../../UI/Modal/Modal';

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleHamburgerGit = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="projects">
            <Project
                url="https://omer-burger-builder.netlify.com/"
                gitUrl="#/"
                imgSrc={burger}
                name="Burger Builder"
                info="React, Redux, Node, JWT & PostgreSQL"
                clicked={toggleHamburgerGit}
            />
            <Modal show={isModalOpen} modalClose={toggleHamburgerGit}>
                <h4 className="heading-4">
                    <a 
                        href="https://github.com/omerme13/burger-builder/"
                        className="modal__text"
                    >
                        Front End
                    </a>
                    <a 
                        href="https://github.com/omerme13/burger-builder-server/"
                        className="modal__text"
                    >
                        Back End
                    </a>
                </h4>    
            </Modal>
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
            <Project
                url="https://omer-calorie-tracker.netlify.com/"
                gitUrl="https://github.com/omerme13/Calorie-Tracker/"
                imgSrc={food}
                name="Calorie Tracker"
                info="HTML CSS & JS (Vanilla)"
            />
        </div>
    )
};

export default Projects;
