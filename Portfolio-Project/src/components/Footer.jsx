import gitHubIcon from '../assets/github.svg';
import linkedInIcon from '../assets/linkedin.svg';
import stackOverflowIcon from '../assets/stackoverflow-icon.svg';


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
                <a href={"https://stackoverflow.com/"} target="_blank">
                    <img src={stackOverflowIcon}/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;