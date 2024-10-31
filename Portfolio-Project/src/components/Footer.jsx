import gitHubIcon from '../assets/github.svg';
import linkedInIcon from '../assets/linkedin.svg';


function Footer() {
    return (
        <footer className='sectionFooter'>
            <div className='footer-icons'>
                <a href={"https://github.com/jkupi"} target="_blank">
                    <img src={gitHubIcon}/>
                </a>
                <a href={"https://www.linkedin.com/in/jaakob-alakulppi-248b41213/"} target="_blank">
                    <img src={linkedInIcon}/>
                </a>
                <a>
                    <img/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;