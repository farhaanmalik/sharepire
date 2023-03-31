import React from 'react';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

const About = () => {
  return (
    <>
      <div className="main-section">
        <div className="main">
          <Sidebar />
          <div className='container'>
            <div>About Us</div>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
