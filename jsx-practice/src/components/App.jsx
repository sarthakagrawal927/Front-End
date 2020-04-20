import React from "react";
import Heading from "./Heading.jsx";
import Images from "./Images.jsx";
import * as maths from "../Calc.js";

var dt = new Date();
var curryear = dt.getFullYear();

function App() {
  return (
    <div>
      <Heading />
      <Images />
      <ul>
        <li> {maths.default.add(3, 4)}</li>
        <li> {maths.default.multiply(3, 4)}</li>
        <li> {maths.default.diff(3, 4)}</li>
      </ul>
      <p>Copyright {curryear}</p>
    </div>
  );
}

export default App;
