import React from 'react';

// image
import profileImage from './profile.png';

// css
import './portfolio.css';

function Portfolio() {
  return (
    <>
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <img src="..." class="rounded me-2" alt="..." />
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>

      <div className='card1'>
        <div className='container'>
          <h2>About me</h2>
          <div>
            <img src={profileImage} alt="profile" />
          </div>
          <span>I am Kavya 3rd year Btech Information Science student from NMAMIT, Nitte <br />I'm excited to connect and work with you all</span>
        </div>
      </div>

      <div className='card2' id="skills">
        <div className='container'>
          <h2>Skills</h2>
          <div style={{ display: "flex", gap: "5px", marginLeft: '230px' }}>
            <span class="badge bg-primary">C language</span>
            <span class="badge bg-primary">C++</span>
            <span class="badge bg-primary">Java</span>
            <span class="badge bg-primary">Python</span>
            <span class="badge bg-primary">HTML</span>
          </div>

        </div>
      </div>

      <div className='card2' id="hobbies">
        <div className='container'>
          <h2>Hobbies</h2>
          <div>- Listening to music </div>
          <div>- Cycling</div>
          <div>- Playing carrom</div>
        </div>
      </div>

      <div className='card2' id="contactMe">
        <div className='container'>
          <h2>For more info contact me</h2>
          <div><a href="https://www.linkedin.com/mwlite/in/kavya-shet-8049ab190">Linkedin</a></div>
          <div><a href="mailto:kavya1998@gmail.com">E-mail</a></div>
        </div>
      </div>

    </>

  );
}

export default Portfolio;