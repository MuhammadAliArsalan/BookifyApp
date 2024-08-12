import React from "react";
import Layout from "./../components/layout/layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy - Taimoor's Books Ltd"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <p>-We collect personal information voluntarily provided by users.</p>
          <p>
            -Policy may be updated periodically, with changes reflected on this
            page.
          </p>
          <p>
            -Use of the website implies consent to outlined terms in the Privacy
            Policy.
          </p>
          <p>
            -Personal information not sold, traded, or transferred without user
            consent.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
