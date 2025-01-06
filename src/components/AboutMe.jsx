import profilePicture from '../assets/profile_pic.jpg'

function AboutMe() {
    return <section className='about-me'>
        <div className='about-me-content'>
            <h2>About me</h2>
            <img src={profilePicture} className='profile-picture'/>
            <p>Hi, I’m Jaakob Alakulppi, a Full-Stack Developer with a passion for building innovative and user-centric web applications. My journey into the world of coding began with a curiosity for solving problems and creating solutions that make a difference. Over time, I’ve honed my skills in both front-end and back-end development, specializing in technologies like React, Node.js, and relational databases such as MySQL and PostgreSQL. I thrive on turning ideas into reality and enjoy the challenge of creating seamless, scalable, and responsive applications.
            <br/><br/>With a strong foundation in computer science and hands-on experience from various projects, I’ve developed a versatile skill set that includes proficiency in HTML, CSS, JavaScript, TypeScript, Python, Java, and RESTful APIs. I’ve worked on projects ranging from full stack web applications to command-line applications, each designed to enhance user experience and streamline processes. My approach to development is rooted in continuous learning and collaboration. I’m always eager to explore new technologies and methodologies to stay ahead in the ever-evolving tech landscape. Whether it’s building a dynamic front-end or optimizing a back-end system, I’m committed to delivering high-quality solutions that meet user needs.<br/><br/>When I’m not coding, I enjoy exploring new technologies, starting fresh projects to challenge myself, and staying active through sports and outdoor activities. I’m passionate about continuous learning and often dive into coding workshops to expand my skill set and stay updated with the latest trends in the tech world. My goal is to use my skills to create meaningful applications that solve real-world problems and make a positive impact. I’m always open to new opportunities and challenges, so feel free to reach out if you’d like to connect or work together on a project!
            </p>
        </div>
    </section>
}

export default AboutMe;