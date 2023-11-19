import React, { useState } from 'react';
import './home.css';
import spain from './spain.svg';
import france from './france.png';
import english from './english.png';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const translations = {
    english: {
      helloIm: "Hello, I'm Hichy",
      welcometo: "young 20 years old, passionate about website development, programming, and finding solutions to problems. I am currently studying in a professional training institute about this field and I try to develop my personality and programming skills daily.",
    },
    france: {
      helloIm: "Bonjour, je m'appelle Hichy",
      welcometo: "jeune de 20 ans , passionné par website development ,la programmation ,et trouver les solution des problèmes.J'étudie actuellement dans un institut de formation professionnelle à propos de ce domaine et J'essaie quotidiennement de développer ma personnalité et mes compétences en programmation.",
    },
    spain: {
      helloIm: "hola soy hichy",
      welcometo: "Joven de 20 años, apasionado por el desarrollo de sitios web, la programación y la búsqueda de soluciones a problemas. Actualmente estoy estudiando en un instituto de formación profesional sobre este campo y Intento desarrollar mi personalidad y mis habilidades de programación a diario.",
    },
  };

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <>
      <section className='main'>
        <div>
          <h2 className='helloIm'>
            {translations[selectedLanguage].helloIm} <br />
            <span className='cc1'>Full Stack Developer</span>
          </h2>
          <h3 className='welcometo'>{translations[selectedLanguage].welcometo}</h3>
          <a href='https://www.linkedin.com/in/mohamed-hichy-a76130279' className='divbtnlin'>
            <i class='fa-brands fa-linkedin' id='lin'></i> My Linkedin
          </a>
          <div className='social-media'>
            <a href=''>
              <i class='fa-brands fa-instagram'></i>
            </a>
            <a href=''>
              <i class='fa-brands fa-facebook'></i>
            </a>
            <a href=''>
              <i class='fa-brands fa-whatsapp'></i>
            </a>
          </div>

          <h3 className='uLangue'>Langue :</h3>
          <div className='langue'>
            <img
              width={10}
              src={france}
              alt='france'
              onClick={() => handleLanguageClick('france')}
              style={{ cursor: 'pointer' }}
            />
            <img
              width={10}
              src={spain}
              alt='spain'
              onClick={() => handleLanguageClick('spain')}
              style={{ cursor: 'pointer' }}
            />
            <img
              width={10}
              src={english}
              alt='english'
              onClick={() => handleLanguageClick('english')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
