import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const maxCharacterLimit = 250;

  // Update message length when the textarea content changes
  const handleChange = (e) => {
    setMessageLength(e.target.value.length);
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    // Create account `https://dashboard.emailjs.com/sign-up`
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          setSuccessMessageVisible(true);

          // Optional: Reset the form after successful submission
          form.current.reset();

          // Hide the success message after a certain time (e.g., 5 seconds)
          setTimeout(() => {
            setSuccessMessageVisible(false);
          }, 4000);
        },
        () => {
          setErrorMessageVisible(true);

          // Hide the error message after a certain time (e.g., 5 seconds)
          setTimeout(() => {
            setErrorMessageVisible(false);
          }, 4000);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="contact-form-content">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-container">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          type="email"
          name="user_email"
          placeholder="Email Address"
          required
        />
        <textarea
          type="text"
          name="message"
          placeholder="Your Message"
          rows={3}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          disabled={loading || messageLength >= maxCharacterLimit}
        >
          {loading
            ? "Loading..."
            : messageLength >= maxCharacterLimit
            ? "Character Maximum 250"
            : "Send"}
        </button>
      </form>

      {successMessageVisible && (
        <div className="success-popup">
          <p>Message sent successfully!</p>
        </div>
      )}

      {errorMessageVisible && (
        <div className="error-popup">
          <p>Failed to send message!</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
