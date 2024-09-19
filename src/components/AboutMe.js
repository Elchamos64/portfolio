import '../styles/App.css'
import React from 'react';



const AboutMe = () => {
    return (
        <div>
            <h1 className="introduction">Hi, I am Oscar Ramos.</h1>
            <h2 className='major'>Software Engineer</h2>
            <p className='description'>In this website you can find some of my projects that I have created.
                <br></br> As well as some video tutorials. If you would like to contact me, <br></br>please click the button below. You can also visit my Github and linkedin.</p>
            <button className='contactMe' onClick={scrollToSection}>Contact Me</button>
        </div>
    );
}

const scrollToSection = () => {
    const section = document.getElementById('links');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
  };

export default AboutMe;