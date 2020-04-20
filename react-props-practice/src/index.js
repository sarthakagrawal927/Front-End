import React from "react";
import ReactDOM from "react-dom";

function Cards(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.photo} alt="avatar_img" />
      <p>Phone number - {props.phoneNumber}</p>
      <p>Email ID - {props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts :</h1>
    <Cards
      name="Beyonce"
      phoneNumber="+123 456 789"
      email="b@beyonce.com"
      photo="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    />
    <Cards
      name="Beyonce"
      phoneNumber="+123 456 789"
      email="b@beyonce.com"
      photo="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    />
    <Cards
      name="Beyonce"
      phoneNumber="+123 456 789"
      email="b@beyonce.com"
      photo="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    />
  </div>,
  document.getElementById("root")
);
