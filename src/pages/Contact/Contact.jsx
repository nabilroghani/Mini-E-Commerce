import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <h1>Get in Touch</h1>
        <p>
          We’d love to hear from you! Fill the form below and we’ll get back to
          you soon.
        </p>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>

          <input type="text" placeholder="Subject" required />
          <textarea
            placeholder="Write your message..."
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
