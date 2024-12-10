import React from 'react';
import "./styles/About.css";
import Picture from '../assets/photo_resume.png'

const About = () => {
  return (
    <div id='About-section'>
      <div className="about">
        <h1>
          Who am I? Well, I am..
        </h1>
        <div className='acquaintance'>
          <div className='myimg'>
            <img src={Picture} alt="my img"/>
          </div>
          <div className='myinfo'>

            <p>
              🔥I am Btech student with a passion for web development & UI/UX Design. I love to know new technolody and create new things with user comfort in center. I am a quick learner and always ready to take on new challenges. I like to work with a team who are passionate about their work and considerate of others as I believe it to be aspect of empthy that follows in the product that is being developed. 
            </p>
            <p>
              ✨Since childhood, the area of creation and innovation has fascinated me. A little craft jugaads that lead my interest to the field of engineering, after observig the world that seems to be working on conditions and loops, made me develop interest in the field of programming.
            </p>
            <p>
              🌼You may find me reading book or crocheting or scribbling my thoughts in my leisure. Best thing about me is that I like to observe and have different perspective for things. A little con about me is that I am bit of a procrastinator until determination hits me and a little underconfident.  
            </p>
            <p>
              🤝I am looking forward to connect with you and create something amazing.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;
// ❧