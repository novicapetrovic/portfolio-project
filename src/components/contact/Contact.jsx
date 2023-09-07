import React, {useRef} from "react";
import "./contact.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {BsWhatsapp} from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_fowyy4c",
      "template_qlfn4tg",
      form.current,
      "APWr1KWTu5c_f_Yux"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <EmailOutlinedIcon className="contact__option-icon" />
            <h4>Email</h4>
            <h5>novicapetrovic97@gmail.com</h5>
            <a
              href="mailto:novicapetrovic97@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send Email
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+447403070704</h5>
            <a
              href="https://api.whatsapp.com/send?phone=447403070704"
              target="_blank"
              rel="noreferrer"
            >
              Call or Text
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
