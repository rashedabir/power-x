import React from "react";
import emailjs from "emailjs-com";
import Slide from "../components/Slide";

function Contact() {
  const senEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ue386q7",
        "template_esngl0h",
        e.target,
        "user_oktvvkMex6eXX9DyZOgTp"
      )
      .then(
        () => {
          alert("Email Sent");
        },
        (error) => {
          alert(error);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Slide props="contact" />
      <div className="contact py-3">
        <form onSubmit={senEmail}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="your name"
              required
              name="name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="your@email.com"
              required
              name="email"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              required
              name="message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            submit <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
