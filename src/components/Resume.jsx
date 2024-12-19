import resumeFile from '../assets/Jaakob_resume.pdf';

function Resume() {
    return <div className='resume'>
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
            <li>TypeScript</li>
            <li>RESTful APIs</li>
            <li>React</li>
            <li>Vite</li>
          </ul>
          <h4>Back-End Procifiencies</h4>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Java</li>
            <li>Python</li>
            <li>C#</li>
            <li>Relational Databases: MySQL, PostgreSQL</li>
            <li>MongoDB</li>
            <li>Sequelize ORM</li>
            <li>APIs</li>
            <li>CI/CD pipelines</li>
          </ul>
        </div>
      </div>;
  }
  
  export default Resume;