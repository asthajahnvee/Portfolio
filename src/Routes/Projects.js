import React from 'react';
import '../components/styles/Projects.css';
import {Link} from 'react-router-dom';
import Daydiaryimg from '../assets/DayDiary.png';
import Sudoku from '../assets/Sudoku.png';
import Quills from '../assets/Quills.jpg';
import arrowimg from '../assets/arrow.ico';
import ChatApp from '../assets/Chatapp.jpeg';

const projectData = {
  "Development Projects": [
    {
      title: "DayDiary",
      projectimg: Daydiaryimg,
      description: "DayDiary is Chrome Extenstion to keep mini diary of your day with cat theme!",
      techstack: "Menifest.json. HTML, CSS, Vanilla JS",
      github: "https://github.com/asthajahnvee/chromeExtension",
      platform: "Github"
    },
    {
      title: "Talkies",
      projectimg: ChatApp,
      description: "make online friends from their bio and connect to your similar personalities!",
      techstack: "Mongo DB, ExpressJs, ReactJS, nodeJS, Socket.io",
      github: "https://github.com/LiveChatRoom07/LiveChatRoom",
      platform: "Github"
    },
    {
      title: "Sudoku Solver",
      projectimg: Sudoku,
      description: "Sudoku Solver using cpp and Colour theory algorithm",
      techstack: "C++",
      github: "https://dmsudokusolversc205.weebly.com/",
      platform: "Website"
    }
  ],
  "UI/UX Projects": [
    {
      title:"QuickPay",
      projectimg: "path/to/uiux-project1.jpg",
      description: "Description of UI/UX project 1",
      techstack: "Tech stack for UI/UX project 1",
      github: "https://www.behance.net/gallery/197847625/QuickPay-An-Online-Payment-App",
      platform:"Behance"
    },
    {
      title:"aquaExplorer",
      projectimg: "path/to/uiux-project2.jpg",
      description: "Description of UI/UX project 2",
      techstack: "Tech stack for UI/UX project 2",
      github: "https://www.behance.net/gallery/173285843/aquaExplorer",
      platform: "Behance"
    },
    {
      title:"Wedview",
      projectimg: "path/to/uiux-project2.jpg",
      description: "Description of UI/UX project 2",
      techstack: "Tech stack for UI/UX project 2",
      github: "https://www.behance.net/gallery/171655713/Wedview-a-wedding-preview-app",
      platform: "Behance"
    },
    {
      title:"Artistano_desire",
      projectimg: "path/to/uiux-project2.jpg",
      description: "Description of UI/UX project 2",
      techstack: "Tech stack for UI/UX project 2",
      github: "https://www.behance.net/gallery/171792577/Artistano_desire-an-online-artshop",
      platform: "Behance"
    },
    {
      title:"Quills",
      projectimg: Quills,
      description: "Description of UI/UX project 2",
      techstack: "Tech stack for UI/UX project 2",
      github: "https://www.behance.net/gallery/171597175/Quills",
      platform: "Behance"
    },
    {
      title:"medRemind",
      projectimg: "path/to/uiux-project2.jpg",
      description: "Description of UI/UX project 2",
      techstack: "Tech stack for UI/UX project 2",
      github: "https://www.behance.net/gallery/171720779/Medremind-a-medicine-reminder-app",
      platform: "Behance"
    },
    {
      title:"Incite",
      projectimg: "path/to/uiux-project2.jpg",
      description: "Description of UI/UX project 2",
      techstack: "Tech stack for UI/UX project 2",
      github: "https://www.behance.net/gallery/172788705/A-platform-for-encouraging-young-females-to-seek-jobs",
      platform: "Behance"
    }
  ],
  "Art Projects": [
    {
      title:"temp",
      projectimg: "path/to/art-project1.jpg",
      description: "Description of art project 1",
      techstack: "Tech stack for art project 1",
      github: "https://github.com/user/art-project1",
      platform: "Github"
    },
    {
      title:"temp",
      projectimg: "path/to/art-project2.jpg",
      description: "Description of art project 2",
      techstack: "Tech stack for art project 2",
      github: "https://github.com/user/art-project2",
      platform: "Github"
    }
  ]
};

export const ProjectDisplay = (props) => {
  return (
    <div className='projectlist'>
      <img src={props.projectimg} alt='img of project' />
      <div className='projectinfo'>
        <h2>{props.title}</h2>
        <h5>⤷ Description: <p>{props.description}</p></h5>
        <h5>⤷ TechStack: {props.techstack}</h5>
        <div className='githubdet'>
          ⤷ <a href={props.github} target="_blank">More info on {props.platform} <img src={arrowimg} alt='arrow'/></a>
        </div>
      </div>
    </div>
  );
}
//⁺✧₊ ❀₊✧ ❀
const Projects = (props) => {
  const projects = projectData[props.projecttype] || [];

  return (
    <div id='project-section'>
      <div className='homeback'>
        <h1> <Link to='/'> ₊✧ Jahnvee Patel ✧₊ </Link></h1>
      </div>
      <div className='projects'>
        <h1>{props.projecttype}</h1>
        <div className='projectlist1'>
        {projects.map((project, index) => (
          <ProjectDisplay
            key={index}
            title={project.title}
            projectimg={project.projectimg}
            description={project.description}
            techstack={project.techstack}
            github={project.github}
            platform={project.platform}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;