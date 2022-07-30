import React from "react";
import "./form.scss";
import "../../SASS/_global.scss";
function Form() {
  return (
    <form>
      <div className="shorten">
        <input
          type="text"
          className="input"
          placeholder="Shorten a link here..."
        />
        <button className="colored main-button">Shorten it!</button>
      </div>
    </form>
  );
}

export default Form;
