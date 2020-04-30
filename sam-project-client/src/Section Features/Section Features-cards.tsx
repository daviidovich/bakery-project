import React from "react";

export default class FeaturesCard extends React.Component<{ item: any }> {
  render() {
    const item = this.props.item;

    return (
      <div className="feature-wrapper">
        <div className="feature">
          <div className="feature-content flex-center">
            <img
              className="feature-image flex-center"
              src="/img/cake.png"
              alt=" "
            />
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
