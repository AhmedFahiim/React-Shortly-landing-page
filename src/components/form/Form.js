import React, { useState } from "react";
import "./form.scss";
import "../../SASS/_global.scss";
function Form() {
  const [value, setvalue] = useState("");

  return (
    <form>
      <div className="shorten">
        <input
          value={value}
          onChange={(e) => setvalue(e.target.value)}
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
