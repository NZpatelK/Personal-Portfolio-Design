import React from 'react';
import '../Styles/Home-AboutMe.css';
import { AboutMeData } from '../Data/AboutMe';

const AboutMe: React.FC = () => {

    return (
        <div className="headerSection">
          <h2>About Me </h2>
          <p>{AboutMeData.message} </p>
        </div>
    );
};

export default AboutMe;
