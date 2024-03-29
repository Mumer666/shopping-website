import React from "react";

function Contact() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <span
          style={{ fontSize: 30, width: 500 }}
          className="my-5 badge bg-danger text-light"
        >
          Welcome to Our Home
        </span>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4806.864604581998!2d74.35374742812864!3d31.579964917544764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b273d6ed0c1%3A0x4dcac84ea2200944!2sUniversity%20of%20Engineering%20and%20Technology%2C%20Lahore!5e0!3m2!1sen!2s!4v1671640867737!5m2!1sen!2s"
        title="map"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div
        style={{ background: "#D3D3D3", width: "50%" }}
        className="container mt-5"
      >
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 d-flex justify-content-center">
            <form action="https://formspree.io/f/moqzalpj" method="POST">
              <div className="d-flex flex-column my-5">
                <span style={{fontSize:30}} className="badge bg-danger text-light my-3">Write your Query</span>
                <input
                  className=" rounded-left rounded-right"
                  type="text"
                  placeholder="enter your Username"
                  required
                  autoComplete="off"
                  name="Username"
                  style={{ width: 300 }}
                />
                <input
                  className=" mt-3 rounded-left rounded-right"
                  type="text"
                  placeholder="enter your Email"
                  required
                  autoComplete="off"
                  name="Email"
                  style={{ width: 300 }}
                />
                <textarea
                  className="mt-3"
                  cols="30"
                  rows="5"
                  placeholder="Enter your Message Here"
                  name="Message"
                  required
                  autoComplete="off"
                />
                <input className="mt-3 btn btn-danger" type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
