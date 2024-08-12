import React from "react";
import Layout from "./../components/layout/layout";

const About = () => {
  return (
    <Layout title={"About us - Taimoor's Books Ltd"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <strong className="text-justify mt-2">
            Welcome to Taimoor's Books Ltd – your literary escape into a world
            of diverse genres and captivating reads. As publishers and purveyors
            of knowledge, we offer a curated collection of books that cater to
            every reader's taste. Immerse yourself in our selection, explore new
            worlds, and embrace the joy of reading with Taimoor's Books.
          </strong>
        </div>
      </div>
    </Layout>
  );
};

export default About;
