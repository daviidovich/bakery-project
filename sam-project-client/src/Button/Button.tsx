import React from "react";
import "./Button.css";

class Button extends React.Component<{ label: any; onClick: any }> {
  render() {
    return (
      <div className="button flex-center" onClick={this.props.onClick}>
        <div className="button-label">{this.props.label}</div>
      </div>
    );
  }
}

export default Button;
