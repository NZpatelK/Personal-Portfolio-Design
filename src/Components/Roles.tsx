import React, { useEffect } from "react";
import "../Styles/Roles.css";

const Roles: React.FC = () => {

  useEffect(() => {
    const words = document.querySelectorAll('.word');
    words.forEach((word) => {
      const letters = word.textContent!.split('  ');
      word.textContent = '';
      letters.forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.className = 'letter';
        word.appendChild(span);
      });
    });

    let currentWordIndex = 0;
    const maxWordIndex = words.length - 1;
    (words[currentWordIndex] as HTMLElement).style.opacity = '1';

    const rotateText = () => {
      const currentWord = words[currentWordIndex] as HTMLElement;
      const nextWord =
        currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

      // rotate out letters of current word
      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          (letter as HTMLElement).className = 'letter out';
        }, i * 80);
      });

      // reveal and rotate in letters of next word
      (nextWord as HTMLElement).style.opacity = '1';
      Array.from(nextWord.children).forEach((letter, i) => {
        (letter as HTMLElement).className = 'letter behind';
        setTimeout(() => {
          (letter as HTMLElement).className = 'letter in';
        }, 340 + i * 80);
      });

      currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    rotateText();
    const rotationInterval = setInterval(rotateText, 2000);

    return () => {
      clearInterval(rotationInterval);
    };
  }, []);

  return (
    <div>
      <div className="role-rotating-text">
        <h3 className="role-name">I am a</h3>
        {' '}
        <h3 className="role-name">
          <span className="word w-1">Web Developer.</span>
          <span className="word w-2">Mobile Developer.</span>
          <span className="word w-3">Full Stack Developer.</span>
          <span className="word w-4">Frontend Developer.</span>
          <span className="word w-5">UI/UX Designer.</span>
        </h3>
      </div>
    </div>
  );
};



export default Roles;
