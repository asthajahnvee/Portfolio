import './styles/Resume.css';
import resume from '../assets/Resume.jpg';


const Resume = () => {
  return (
    <>
      <div id='Resume-section'>
        <div className="resume">
          <h1>My formal Introduction..</h1>
            <div className="resumephoto">
              <a href='https://drive.google.com/file/d/1vewr3evZyzMz9L7CT1qpiIqUq9mFtXAq/view?usp=sharing' target='_blank'>
                <img src={resume} alt='resume'/>
              </a>
            </div>
        </div>
      </div>
    </>
  );
}

export default Resume;