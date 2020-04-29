import React from "react";
import api from "../API/api";

import image from "./cake.png";

export default class FeaturesCard extends React.Component<{ item: any }> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const item = this.props.item;

    return (
      <div className="feature-wrapper">
        <div className="feature">
          <div className="feature-content flex-center">
            <img className="feature-image flex-center" src={image} alt=" " />
            <h3 className="feature-title color-brown">
              Baker & {item.section}
            </h3>
            <div className="text-center text">{item.description}</div>
          </div>
        </div>
      </div>
    );
  }
}
