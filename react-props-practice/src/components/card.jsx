import React from "react";
import Avatar from "./avatar";
import Detail from "./details";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Detail detailInfo={props.phoneNumber} />
          <Detail detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
