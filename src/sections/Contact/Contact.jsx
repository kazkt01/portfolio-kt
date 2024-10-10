import { useState } from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://api.staticforms.xyz/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        accessKey: "e9e0e58f-9849-4e77-8f92-ee1eb0e1df84",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          setError("Form submission failed.");
        }
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      {submitted ? (
        <p>Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name" hidden>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" hidden>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message" hidden>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <input className="hover btn" type="submit" value="Submit" />
        </form>
      )}
      {error && <p className="error">{error}</p>}
    </section>
  );
}

export default Contact;
