import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import './styles/LandingPage.css'; // Ensure your CSS file is correctly imported

function Landingpg() {
  const [theme, setTheme] = useState('light');
  const title = [
    { targetId: '/home', title: 'Home' },
    { targetId: '/work', title: 'Work' },
    { targetId: '/about', title: 'About' },
    { targetId: '/resume', title: 'Resume' },
    { targetId: '/contact', title: 'Contact' }
  ];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div className={`landing-page ${theme}`}>
        <header>
          <div>
            <ul>
              {title.map((item, index) => (
                <li key={index}>
                  <Link to={item.targetId} smooth={true} duration={400}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <button className="mode" onClick={toggleTheme}>
              <div className={theme === 'light' ? 'light' : 'dark'}></div>
              {console.log(theme)}
            </button>
          </div>
        </header>
        <main>
          <Home />
          <Work />
          <About />
          <Resume />
          <Contact />
        </main>
        <footer>
          <Contact />
          <p>🍀Made with love🍀</p>
        </footer>
      </div>
    </>
  );
}

export default Landingpg;