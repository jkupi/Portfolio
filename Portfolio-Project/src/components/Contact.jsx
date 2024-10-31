import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'name required';
      formIsValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'email required';
      formIsValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'enter a valid email address';
      formIsValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'message required';
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
    } else {
      alert('Successfull!!!!!!!!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  }

    return <div className="contact-form">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div>
            <label>Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div>
            <label>Message</label>
            <textarea
              id="message"
              name="message"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>;
  }
  
  export default Contact;