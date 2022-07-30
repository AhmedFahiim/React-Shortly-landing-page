import React from "react";
import "./header.scss";
import "../../SASS/_global.scss";

function HeaderFun() {
  return (
    <div className="container">
      <header>
        <h2 className="logo">Shortly</h2>
        <nav>
          <ul className="links">
            <li className="link-item">
              <a href="#">Features</a>
            </li>
            <li className="link-item">
              <a href="#">Pricing</a>
            </li>
            <li className="link-item">
              <a href="#">Recources</a>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="main-button login">Login</button>
          <button className="main-button colored sign-up">Sign Up</button>
        </div>
      </header>
    </div>
  );
}
export default HeaderFun;
