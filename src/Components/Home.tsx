import React from 'react';
import '../Styles/Home.css';
import vid2 from '../assets/sample1.webm';
import Roles from './Roles';

const Home: React.FC = () => {

    return (
        <>
            <div className="headerSection">
                <h2><span>Hey,</span><br /> I'm Karan Patel</h2>
                <Roles />
            </div>
            <div className="videoSection">
                <video autoPlay muted src={vid2} className='vid' />
            </div>
        </>
    );
};

export default Home;
