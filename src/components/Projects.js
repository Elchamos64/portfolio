import React from 'react';
import Project1 from "../Images/project-1.png";
import Project2 from "../Images/project-2.png";
import Project3 from "../Images/project-3.png";


const Projects = () => {
    return (
        <div className='project-title' id='projects'>
            <p>Check out my recent</p>
            <h1>Projects
            <ProjectCard />
            </h1>      
        </div>
    );
};

const ProjectCard = () => {
    return (
        <div className='project-cards'>
            <div className='project-1'>
                <img src={Project1} alt="project" />
                <p>Sleep Outside</p>
                <a href='https://main--sleepoutside-oscar-ricky.netlify.app/'>App</a>
                <a href='https://github.com/vangricky/sleepoutside'>Github</a>
            </div>
            <div className='project-2'>
                <img src={Project2} alt="project" />
                <p>Card Game (Python)</p>
                <a href='https://github.com/Elchamos64/Team3.14_card_game'>Github</a>
            </div>
            <div className='project-3'>
                <img src={Project3} alt="project" />
                <p>Movie Scout</p>
                <a href='https://elchamos64.github.io/MovieScout/'>App</a>
                <a href='https://github.com/Elchamos64/MovieScout'>Github</a>
                <a href='https://www.youtube.com/watch?v=dtKw-8R2yQE'>Video Demo</a>
            </div>
            
        </div>
    );
};


export default Projects;