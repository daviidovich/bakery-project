import React from "react";
import "./Button.css";
import cx from "classnames";

class Button extends React.Component<{
  label: any;
  onClick: any;
  isActive: boolean;
}> {
  render() {
    return (
      <div
        className={cx("button flex-center", {
          "button-brown-back": this.props.isActive,
        })}
        onClick={this.props.onClick}
      >
        <div className="button-label">{this.props.label}</div>
      </div>
    );
  }
}

export default Button;
