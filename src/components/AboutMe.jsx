import profilePicture from '../assets/profile_pic.jpg'

function AboutMe() {
    return <section className='about-me'>
        <div className='about-me-content'>
            <h2>About me</h2>
            <img src={profilePicture} className='profile-picture'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corrupti iure ullam a quos nobis vitae repudiandae rerum. Deleniti libero aliquid quae assumenda quo eius est aperiam velit aspernatur vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea illum nam minus. Quis animi ea sunt blanditiis, reprehenderit nostrum sapiente eligendi enim voluptas itaque, accusamus sed? Facilis odio tenetur rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos labore architecto dignissimos beatae dolorum fugiat saepe fuga, quisquam nesciunt odit pariatur aperiam dicta velit delectus explicabo porro, exercitationem Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati tempore ducimus qui aliquam modi, voluptates debitis atque id, dolorum esse beatae numquam unde facere consectetur, quibusdam deserunt veritatis quos!</p>
        </div>
    </section>
}

export default AboutMe;