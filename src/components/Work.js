import React from 'react';
import "./styles/Work.css";
import programillustration from "../assets/Program_vivid.jpeg";
import UIUXillustration from "../assets/UIUX_COOL.jpeg";
import Design from "../assets/Design.jpeg";
import {Link} from 'react-router-dom';

export const Card = (props)=>{
  return(
      <>
        <div className='cards'>
          <img src={props.img} alt='img of project'/>
          <h2><Link to={props.pagelink}>{props.projectype}</Link></h2>
          <p>{props.description}</p>
        </div>
      </>
  );
}
const Work = () => {
  return (
    <div id="work-section">
      <div className='work'>
         <h1>Take a look at my Projects...</h1>
         <ul>
          <li>
            <Card img={programillustration} projectype="Development Projects" description="Programming projects developed on tea-time ideas." pagelink="/projects/development"/>
          </li>
          <li>
            <Card img={UIUXillustration} projectype="UI/ UX projects" description="UI/UX projects based on brainstormin of real life problems" pagelink="/projects/uiux"/>
          </li>
          <li>
            <Card img={Design} projectype="Art Projects" description="Art Projects inspired by nature & imagination" pagelink="/projects/art"/>
          </li>
         </ul>
      </div>
    </div>
  );
}
export default Work;