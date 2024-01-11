import React from "react";
import "./Flayer.css";

const Flayer = (props) => {
  return (
    <div id="flayer">
      <h1>{props.title}</h1>
      <h1>{props.text1}</h1>
      <h2>
        <b>{props.price1}</b>
      </h2>
      <h1>{props.text2}</h1>
      <h2>
        <b>{props.price2}</b>
      </h2>
    </div>
  );
};

export default Flayer;
