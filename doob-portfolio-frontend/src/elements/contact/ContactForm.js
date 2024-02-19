import React, { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const Result = () => {
  return (
    <p className="success-message">
      Your Message has been successfully sent. I will contact you soon.
    </p>
  );
};

function ContactForm({ props, formStyle }) {
  const [result, showresult] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axiosInstance.post("/api/contact-submissions", formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      e.target.reset();
      showresult(true);

      setTimeout(() => {
        showresult(false);
      }, 5000);
    } catch (err) {
      setError((err.response?.data?.message || []).join("<br/>"));
    }
  };

  return (
    <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          value={formData.subject}
          maxLength={100}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <textarea
          name="message"
          placeholder="Your Message"
          required
          minLength={100}
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="form-group">
        <button className="btn-default btn-large">Submit Now</button>
      </div>

      <div className="form-group">{result ? <Result /> : null}</div>
      {error && (
        <div className="form-group">
          <p
            className="success-error"
            dangerouslySetInnerHTML={{ __html: error }}
          />
        </div>
      )}
    </form>
  );
}
export default ContactForm;
