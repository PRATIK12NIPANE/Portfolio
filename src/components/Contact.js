import { useState } from "react";

import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [messageColor, setMessageColor] = useState(""); // State for message color

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_n7267sg", // Replace with your EmailJS Service ID
        "template_f493ht9", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "tYzm5vbKROTdHBKZF" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setStatusMessage(
            "Thank you for your message! We’ll be in touch soon."
          );
          setMessageColor("green"); // Success color
          console.log(result.text);
        },
        (error) => {
          setStatusMessage("Oops! Something went wrong. Please try again.");
          setMessageColor("red"); // Error color
          console.error(error.text);
        }
      );
  };

  return (
    <div className="container-xxl bg-white p-0">
      {/* Contact Form Start */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            
            <h1 className="text-center mb-5">Contact Us</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <form onSubmit={sendEmail}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "150px" }}
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                    {statusMessage && (
                      <div className="col-12 text-center mt-3">
                        <p style={{ color: messageColor }}>{statusMessage}</p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form End */}
    </div>
  );
};

export default Contact;
