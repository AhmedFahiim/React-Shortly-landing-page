import React from "react";
import "./landing.scss";
import "../../SASS/_global.scss";
import img from "../../assets/images/illustration-working.svg";
function Landing() {
  return (
    <section className="landing">
      <div className="container">
        <div className="row">
          <article className="content col-lg-6">
            <h1 className="main-text">
              More than just <br /> shorter links
            </h1>
            <p className="disc">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="main-button colored">Get Started</button>
          </article>
          <article className="image col-lg-6">
            <img src={img} />
          </article>
        </div>
      </div>
    </section>
  );
}

export default Landing;
