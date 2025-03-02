import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Divya/contact.css";

const ContactUs = () => {
  const form = useRef(null);
  const [checked, setChecked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!checked) {
      alert("Please agree to the terms and privacy policy.");
      return;
    }

    emailjs
      .sendForm(
        "service_aj7c979",
        "template_u1e1plm",
        form.current,
        "SdAOCgKfZzh8F-vAG"
      )
      .then((result) => {
        console.log("Email sent successfully:", result);
        alert("Message sent successfully!");
        form.current.reset();
        setChecked(false);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="contact-container">
      {/* Left Side - Contact Form */}
      <div className="contact-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Fill out the form below, and we'll respond promptly.</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-field">
            <input type="text" name="user_name" id="name" required />
            <label htmlFor="name">Name</label>
          </div>

          <div className="form-field">
            <input type="email" name="user_email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-field">
            <input type="tel" name="user_phone" id="phone" required />
            <label htmlFor="phone">Phone</label>
          </div>

          <div className="form-field">
            <textarea name="message" id="message" required></textarea>
            <label htmlFor="message">Feedback</label>
          </div>

          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <label htmlFor="terms" className="terms-label">
              I agree to the terms and privacy policy.
            </label>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Right Side - Contact Info */}
      <div className="contact-info">
        <div>
          <span>
            <svg
              width="39"
              height="40"
              viewBox="0 0 39 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4949 17.9833C12.7778 22.7 16.4559 26.55 20.9424 28.9667L24.4303 25.3C24.8583 24.85 25.4924 24.7 26.0473 24.9C27.8229 25.5167 29.7412 25.85 31.7071 25.85C32.579 25.85 33.2924 26.6 33.2924 27.5167V33.3333C33.2924 34.25 32.579 35 31.7071 35C16.8205 35 4.75586 22.3167 4.75586 6.66667C4.75586 5.75 5.46927 5 6.34123 5H11.89C12.762 5 13.4754 5.75 13.4754 6.66667C13.4754 8.75 13.7924 10.75 14.379 12.6167C14.5534 13.2 14.4266 13.85 13.9827 14.3167L10.4949 17.9833Z"
                fill="#1E1E1E"
              />
            </svg>
          </span>
          +91 9892882747
        </div>
        <div>
          <span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.6663 10.0001C36.6663 8.16675 35.1663 6.66675 33.333 6.66675H6.66634C4.83301 6.66675 3.33301 8.16675 3.33301 10.0001V30.0001C3.33301 31.8334 4.83301 33.3334 6.66634 33.3334H33.333C35.1663 33.3334 36.6663 31.8334 36.6663 30.0001V10.0001ZM33.333 10.0001L19.9997 18.3334L6.66634 10.0001H33.333ZM33.333 30.0001H6.66634V13.3334L19.9997 21.6667L33.333 13.3334V30.0001Z"
                fill="black"
              />
            </svg>
          </span>
          shrigajananarts07@gmail.com
        </div>
        <div className="location">
          <span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6663 33.3333V23.3333H23.333V33.3333H31.6663V20H36.6663L19.9997 5L3.33301 20H8.33301V33.3333H16.6663Z"
                fill="#1E1E1E"
              />
            </svg>
          </span>
          <h3>Shri Gajanan Arts LLP</h3>
        </div>
        <p>
          106/1, Richard Compound, Manicha Pada, Near Bhanshali Techno, Vasai
          East - 401208
        </p>

        <div className="map-container">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.325505856665!2d72.81193387519538!3d19.182624682043047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61e44e6e257%3A0xb6e8b1e9bbddae8b!2sVasai%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1619779204091!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
