import gitHubIcon from '../assets/github.svg';
import comingSoon from '../assets/comingSoon.png';
import readme from '../assets/readme.png';
import employee_tracker from '../assets/employee_tracker.jpg';
import vehicleBuilder from '../assets/vehicleBuilder.png';
import weatherAPI from '../assets/weather.jpg';

function Portfolio() {
  const projects = [
    {
      title: 'Weather API',
      image: [weatherAPI],
      deployedLink: 'link',
      gitHubLink: 'https://github.com/jkupi/Weather_api',
    },
    {
      title: 'Generate README',
      image: [readme],
      deployedLink: 'link',
      gitHubLink: 'link',
    },
    {
      title: 'Employee Tracker',
      image: [employee_tracker],
      deployedLink: 'link',
      gitHubLink: 'https://github.com/jkupi/Employee-Tracker',
    },
    {
      title: 'Vehicle Builder',
      image: [vehicleBuilder],
      deployedLink: 'link',
      gitHubLink: 'https://github.com/jkupi/Vehicle-Builder',
    },
    {
      title: 'Coming Soon',
      image: [comingSoon],
      deployedLink: 'link',
      gitHubLink: 'link',
    },
    {
      title: 'Coming Soon',
      image: [comingSoon],
      deployedLink: 'link',
      gitHubLink: 'link',
    },
  ];

    return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="card">
            <img className='project-pictures' src={project.image} />
            <div>
              <h3 className='card-text' >{project.title}</h3>
              <div className="card-links">
                <a href={project.deployedLink} target="_blank" className="deployed-link">Deployed website</a>
                <a href={project.gitHubLink} target="_blank">
                  <img className='github-icon' src={gitHubIcon}></img>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  }
  
  export default Portfolio;