import React from 'react';
import Project1 from "../Images/Project-1.jpg";


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
                <p>My first project</p>
                <a href='https://github.com/Elchamos64'>Github</a>
                <a href='https://github.com/Elchamos64'>Video Demo</a>
            </div>
            <div className='project-2'>
                <img src={Project1} alt="project" />
                <p>My Second project</p>
                <a href='https://github.com/Elchamos64'>Github</a>
                <a href='https://github.com/Elchamos64'>Video Demo</a>
            </div>
            <div className='project-3'>
                <img src={Project1} alt="project" />
                <p>My Third project</p>
                <a href='https://github.com/Elchamos64'>Github</a>
                <a href='https://github.com/Elchamos64'>Video Demo</a>
            </div>
            
        </div>
    );
};


export default Projects;