import React from "react";
import Button from "../Button/Button";

export default class HistoryButton extends React.Component<{
  swapFn(dataFromChild: string): void;
  info: any;
}> {
  switchTab = () => {
    this.props.swapFn(this.props.info);
  };

  render() {
    let btnName: string = `Bakery ${this.props.info}`;
    return <Button label={btnName} onClick={this.switchTab} />;
  }
}
