import React from "react";

const customStyle = {
  color: "red",
  fontsize: "20px",
  border: "1px solid black"
};

var message = "good ";
var dt = new Date();
var time = dt.getHours();
if (time < 5) {
  message += "night";
  customStyle.color = "black";
} else if (time < 11) {
  message += "morning";
  customStyle.color = "yellow";
} else if (time < 16) {
  message += "afternoon";
} else if (time < 20) {
  message += "evening";
  customStyle.color = "blue";
} else {
  message += "night";
  customStyle.color = "black";
}

function Heading() {
  return (
    <h1 style={customStyle} class="heading" contentEditable="true">
      {message}
    </h1>
  );
}

export default Heading;
