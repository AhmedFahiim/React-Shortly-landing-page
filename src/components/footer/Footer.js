import React from "react";
import "./footer.scss";
import "../../SASS/_global.scss";

// import images
import FaceBook from "../../assets/images/icon-facebook.svg";
import Twitter from "../../assets/images/icon-twitter.svg";
import Pintrest from "../../assets/images/icon-pinterest.svg";
import Instagram from "../../assets/images/icon-instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <article className="row">
          <h2 className="logo col-md-3">Shortly</h2>
          <div className="column col-4 col-md-2">
            <h5 className="Features">Features</h5>
            <ul className="footer-links">
              <li className="link-item">Link Shorting</li>
              <li className="link-item">Branded Links</li>
              <li className="link-item">Analytics</li>
            </ul>
          </div>
          <div className="column col-4 col-md-2">
            <h5 className="Resources">Resources</h5>
            <ul className="footer-links">
              <li className="link-item">Blog</li>
              <li className="link-item">Developers</li>
              <li className="link-item">Support</li>
            </ul>
          </div>
          <div className="column col-4 col-md-2">
            <h5 className="Company">Company</h5>
            <ul className="footer-links">
              <li className="link-item">About</li>
              <li className="link-item">Our team</li>
              <li className="link-item">Careers</li>
              <li className="link-item">Contact</li>
            </ul>
          </div>
          <div className="column social col-md-3">
            <img src={FaceBook} />
            <img src={Twitter} />
            <img src={Pintrest} />
            <img src={Instagram} />
          </div>
        </article>
      </div>
    </footer>
  );
}

export default Footer;
