import React, { useEffect } from 'react';
import './App.css';
import { Moivate } from './Data/motivate';
import linkedln from './assets/linkedln.png';
import BackgroundRain from './Components/BackgroundRain';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Remind from './Components/Remind';
import Service from './Components/Service';

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

      {/* Homme Section */}
      <section className="full-section home">
        <Home />
      </section>

      {/* ----------------------------------------------- */}
      {/* About Me Section */}

      <section className="full-section home aboutMe">
        <AboutMe />
      </section>

      {/* ----------------------------------------------- */}
      {/* Remind Section */}

      <section className="full-section remind">
        <Remind />
      </section>

      {/* ----------------------------------------------- */}
      {/* Movtivation Sections */}

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
      {/* Service Section */}

      <section className="full-section service" id='service'>
        <Service/>
       
      </section>

      {/* ----------------------------------------------- */}
      {/* Footer Section */}

      <section className="full-section">
        <div>
          <a href="https://www.linkedin.com/in/karan-h-patel/"><img src={linkedln} alt="" /> </a>
        </div>
      </section>

    </div>
  );
}

export default App;
