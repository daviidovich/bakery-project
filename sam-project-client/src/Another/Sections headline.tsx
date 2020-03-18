import React from "react";
import "./Sections headline.css";

function Headline(props: any) {
  return (
    <div className="headline">
      <div className="headline-image">
        <img src="/img/wheat-icon.png" alt=""></img>
      </div>
      <h2 className="headline-label color-brown">{props.label}</h2>
    </div>
  );
}

export default Headline;
