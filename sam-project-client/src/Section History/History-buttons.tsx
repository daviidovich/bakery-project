import React from "react";
import Button from "../Button/Button";

export default class HistoryButton extends React.Component<{
  toggler(dataFromChild: string): void;
  setActive(value: string): void;
  label: any;
  isActive: boolean;
}> {
  switchTab = () => {
    this.props.toggler(this.props.label);
    this.props.setActive(this.props.label);
  };

  render() {
    const btnName: string = `Bakery ${this.props.label}`;

    return (
      <Button
        label={btnName}
        onClick={this.switchTab}
        isActive={this.props.isActive}
      />
    );
  }
}
