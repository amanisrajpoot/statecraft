import React from "react";

const ContactForm2 = () => {
  return (
    <form action="mailto:helpdesk@statecraft.in" method="post" enctype="text/plain">
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <label className="d-block">Name*</label>
            <input
              type="text"
              placeholder="Jain Buddh"
              name="name"
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
          <label className="d-block">Phone Number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              required
            />
            <small>Format: 1234567890</small>
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <textarea
              placeholder="Your message*"
              name="message"
              required
              defaultValue={""}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn-one fw-500 w-100 text-uppercase fs-14 d-block"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm2;
