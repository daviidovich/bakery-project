import React from "react";
import "./Section Features.scss";
import Headline from "../Another/Sections headline";
import FeaturesList from "./Section Features-cards";

export default class Features extends React.Component {
  render() {
    return (
      <div className="features" id="features">
        <Headline label="Product features" />
        <FeaturesList />
      </div>
    );
  }
}
