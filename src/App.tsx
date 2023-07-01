import React, { useEffect } from 'react';
import './App.css';
import { Moivate } from './Data/motivate';
import { Service } from './Data/service';
import linkedln from './assets/linkedln.png';
import BackgroundRain from './Components/BackgroundRain';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Remind from './Components/Remind';

interface Movatie {
  title: string;
  message: string;
}

function App() {
  const [movatieWords, setMovatieWords] = React.useState<Movatie[]>([]);

  useEffect(() => {
    const wordds: Movatie[] = [];

    while (wordds.length < 5) {
      const randomNumber = Math.floor(Math.random() * Moivate.length);

      if (!wordds.includes(Moivate[randomNumber])) {
        wordds.push(Moivate[randomNumber]);
      }
    }

    setMovatieWords(wordds);
    console.log(wordds);
  }, []);

  return (
    <div>

      <BackgroundRain />

      {/* ----------------------------------------------- */}

      <section className="full-section home">
        <Home />
      </section>

      {/* ----------------------------------------------- */}

      <section className="full-section home aboutMe">
        <AboutMe />
      </section>

      {/* ----------------------------------------------- */}

      <section className="full-section remind">
        <Remind />
      </section>

      {movatieWords.map((word, index) => {

        return (
          <section className="full-section movtivational" key={index} id={'m-' + index}>
            <h2>{word.title}</h2>
            <p>{word.message}</p>
            <a href={index < movatieWords.length - 1 ? '#m-' + (index + 1) : '#service'} className="next">Next</a>
          </section>
        )

      })};

      {/* ----------------------------------------------- */}

      <section className="full-section service" id='service'>
        <h2>Serivce</h2>
        <div className="ServiceContainer">

          {Service.map((service, index) => {

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
        {/* <p>This is the content of section 3.</p> */}
      </section>

      {/* ----------------------------------------------- */}

      <section className="full-section">
        <div>
          <a href="https://www.linkedin.com/in/karan-h-patel/"><img src={linkedln} alt="" /> </a>
        </div>
      </section>

    </div>
  );
}

export default App;
