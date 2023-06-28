import React, { useEffect } from 'react';
import '../Styles/BackgroundRain.css'

const BackgroundRain: React.FC = () => {
   
    useEffect(() => {
        const rain = () => {
          let amount = 50;
          let i = 0;
    
          while (i < amount) {
            let drop = document.createElement('i');
    
            let size = Math.random() * 8+2;
            let posX = Math.floor(Math.random() * window.innerWidth);
            let delay = Math.random() * -20;
            let duration = Math.random() * 10;
    
            drop.style.width = 0.5 + size + 'px';
            drop.style.left = posX * 3 + 'px';
            drop.style.animationDelay = delay + 's';
            drop.style.animationDuration = 1 + duration + 's';
    
            document.body.appendChild(drop);
            i++;
          }
        };
    
        rain();
      }, []);

    

    return (null );
};

export default BackgroundRain;
