import React from 'react';
import '../Styles/Service.css';
import { ServiceData } from '../Data/service';

const Service: React.FC = () => {

    return (
        <>
            <h2>Service</h2>
            <div className="ServiceContainer">

                {ServiceData.map((service, index) => {

                    return (
                        <div className="ServiceCard" key={index}>
                            <div className="ServiceContent">
                                <h3>{service.Description}</h3>
                                <ul>
                                    {service.Features.map((feature, index) => {
                                        return (
                                            <li key={index}>{feature}</li>
                                        )
                                    })}
                                </ul>
                                <h4>FREE</h4>
                            </div>
                        </div>
                    );

                })}
            </div>
        </>
    );
};

export default Service;
