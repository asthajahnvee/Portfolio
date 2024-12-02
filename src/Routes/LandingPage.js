import React from 'react';
import '../components/styles/LandingPage.css';
import {Link} from 'react-scroll';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Home from "../components/Home";
import Resume from "../components/Resume";
import {useState, useEffect} from 'react';

function LandingPage() {
  // let cntm=true;
  let title =[
    {
      id:1,
      title: "Work",
      targetId:"work-section"
    },
    {
      id:2,
      title: "About",
      targetId:"About-section"
    },
    {
      id:3,
      title: "Resume",
      targetId:"Resume-section"
    },
    {
      id:4,
      title: "Contact",
      targetId:"Contact-section"
    }
  ];
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
    <div className="vertical">
      {/* <div className="vertical-line-1"></div> */}
      <div className="horizontal">
        <header>
          <h1><Link to="Home-section" smooth={true} duration={400} offset={-60}>Jahnvee Patel</Link></h1>
          <div className="nav">
            <ul>
              {title.map((item) => (
                <li>
                  <Link to={item.targetId} smooth={true} duration={400} offset={-40}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <button className="mode" onClick={toggleTheme}>
              
              <div className={theme==='light' ? 'light':'dark'}></div>
              {console.log(theme)}
            </button>
          </div>
        </header>
        <main>
          <Home id="Home-section" />
          <Work id="work-section" />
          <About id="about-section" />
          <Resume id="resume-section" />
        </main>
        <footer>
        <Contact/>
          <p>🍀Made with love🍀</p>
        </footer>
      </div>
    </div>
    </>
  );
}

export default LandingPage;

// 🍀