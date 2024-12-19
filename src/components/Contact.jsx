// import { useState } from "react";

function Contact() {
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   setErrors({ ...errors, [name]: '' });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let formIsValid = true;
  //   const newErrors = {};

  //   if (!formData.name.trim()) {
  //     newErrors.name = 'name required';
  //     formIsValid = false;
  //   }

  //   if (!formData.email.trim()) {
  //     newErrors.email = 'email required';
  //     formIsValid = false;
  //   } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
  //     newErrors.email = 'enter a valid email address';
  //     formIsValid = false;
  //   }

  //   if (!formData.message.trim()) {
  //     newErrors.message = 'message required';
  //     formIsValid = false;
  //   }

  //   if (!formIsValid) {
  //     setErrors(newErrors);
  //   } else {
  //     alert('Successfull!!!!!!!!');
  //     setFormData({ name: '', email: '', message: '' });
  //     setErrors({});
  //   }
  // }

    return <div className="contact-form">
        <h2>Contact Me:</h2>
      <p>If you have any questions or would like to get in touch, feel free to reach out to me through the following channels:</p>
      <ul>
        <li>
          <strong>Email:</strong> jbalakulppi@gmail.com
        </li>
        <li>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jaakob-alakulppi-/" target="_blank" rel="noopener noreferrer"> Jaakob Alakulppi</a>
        </li>
        <li>
          <strong>GitHub:</strong> <a href="https://github.com/jkupi" target="_blank" rel="noopener noreferrer"> jkupi</a>
        </li>
      </ul>
      <p>I will get back to you as soon as possible!</p> 
      </div>;
  }
  
  export default Contact;