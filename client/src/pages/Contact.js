import React from "react";
import Layout from "./../components/layout/layout";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us - Taimoor's Books Ltd"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="/images/contact.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <strong className="text-justify mt-2">
            Any queries and info about books, feel free to call and email
            anytime. We're available 24/7.
          </strong>
          <p className="mt-3">
            <BiMailSend /> : taimoorhabib948@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +92 3042872301
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
