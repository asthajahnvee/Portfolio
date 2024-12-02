import React from 'react';
import './styles/Home.css';
import daisy from '../assets/Daisye.png';


const Home = () => {
  return (
    <>
    <div id='Home-section'>
      <div className="home">
        <div className='asthethics'>        
          <img src={daisy} alt="asthetic imgs"/>
        </div>
        <div className='text'>
          <h1>Hey, I am Jahnvee.</h1>
          <p>
            A Booknerd and Empath getting drunk on coffee at 2AM while designing better experiences for you.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
export default Home;