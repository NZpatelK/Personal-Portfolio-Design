import React from 'react';
import '../Styles/Home-AboutMe.css';
import { AboutMe } from '../Data/AboutMe';

const Home: React.FC = () => {

    return (
        <div className="headerSection">
          <h2>About Me </h2>
          <p>{AboutMe.message} </p>
        </div>
    );
};

export default Home;
