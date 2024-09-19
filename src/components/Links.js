import "../styles/App.css";
import React from 'react';
import 'boxicons';


const Links = () => {
    return (
        <div className="links" id="links">
            <a href="https://github.com/Elchamos64">
            <box-icon size="lg" color="#75E6DA" type='logo' name='github'></box-icon>
            </a>
            <a href="https://www.linkedin.com/in/oscar-ramos-7aab1a237/">
            <box-icon size="lg" color="#75E6DA" type='logo' name='linkedin'></box-icon>
            </a>
            <a href="mailto:oscar.ramos.andres@gmail.com">
            <box-icon size="lg" color="#75E6DA" type='logo' name='gmail'></box-icon>
            </a>
        </div>
    );
};


export default Links;