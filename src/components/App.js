import React from "react";
import HeaderFun from "./header/Header";
import Landing from "./landing/Landing";
import Advance from "./advanced/Advance";
import Bost from "./bost-link/Bost";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <HeaderFun />
      <Landing />
      <Advance />
      <Bost />
      <Footer />
    </div>
  );
}

export default App;
