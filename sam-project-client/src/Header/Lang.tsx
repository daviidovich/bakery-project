import React from "react";
import { SelectIcon } from "../Another/Icons";

class Lang extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { value: "Eng" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="header-info__lang">
        <select
          onChange={this.handleChange}
          className="header-info__lang-select text"
        >
          <option className="text" value="eng">
            Eng
          </option>
          <option className="text" value="lime">
            Ru
          </option>
        </select>
      </div>
    );
  }
}

export default Lang;
