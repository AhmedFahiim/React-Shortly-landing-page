import React from "react";
import "./advanced.scss";
import "../../SASS/_global.scss";
// Components
import Form from "../form/Form";
import Box from "../box/Box";
// Images
import img from "../../assets/images/icon-brand-recognition.svg";
import img2 from "../../assets/images/icon-detailed-records.svg";
import img3 from "../../assets/images/icon-fully-customizable.svg";

function Advance() {
  let featuresList = [
    {
      id: 1,
      img: img,
      head: "Brand Recognation",
      disc: " Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
      id: 2,
      img: img2,
      head: "Detailed Recordes",
      disc: "Gain insights into who is clicking your links. Knowing when andwhere people engage with your content helps inform better decisions.",
    },
    {
      id: 3,
      img: img3,
      head: "Fully Customizable",
      disc: " Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <section className="advanced">
      <Form />
      <div className="container">
        <article className="section-head">
          <h2 className="head-word">Advanced Statistics</h2>
          <p className="disc">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </article>
        <section className="holder">
          <div className="row">
            <Box list={featuresList} />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Advance;
