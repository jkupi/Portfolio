import resumeFile from '../assets/Jaakob_resume.pdf';

function Resume() {
    return <div class='resume'>
        <h2>Resume</h2>
        <a href={resumeFile} download className='download-link'>
          Download my resume
        </a>
        <h3>Proficiencies:</h3>
        <div className='proficienies'>
          <h4>Front-End Procifiencies</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
          <h4>Back-End Procifiencies</h4>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>APIs</li>
          </ul>
        </div>
      </div>;
  }
  
  export default Resume;