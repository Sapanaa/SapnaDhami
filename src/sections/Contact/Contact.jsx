import { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }

    setError('');
    setIsSubmitted(true);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle" style={{ fontFamily: 'GTA', fontSize: '52px', color: '#0288D1', textShadow: '2px 2px black' }}>Contact</h1>

      {isSubmitted && <p className={styles.successMessage}>Thank you for reaching out!</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className={styles.textarea}
          ></textarea>
        </div>

        <input
          type="submit"
          value="Submit"
          className={styles.submitBtn}
        />
      </form>
    </section>
  );
}

export default Contact;
