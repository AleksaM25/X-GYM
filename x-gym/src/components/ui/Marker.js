import React from "react";
import "./Marker.css";

const Marker = (props) => {
  return (
    <div id="marker">
      <h3>{props.text}</h3>
    </div>
  );
};

export default Marker;
