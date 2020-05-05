import React from "react";
import filterBySection from "../Another/FilterBySection";

export default class NavBySection extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const value = event.target.innerHTML;
    if (this.props.getNavValue) this.props.getNavValue(value);
  }
  render() {
    let items = this.props.items;
    let filteredItems = filterBySection(items, "section");

    return (
      <div className="navbysection">
        <ul className="navbysection-content flex-center">
          <li className="navbysection-item text" onClick={this.handleClick}>
            Show All
          </li>
          {filteredItems.map((item, i) => {
            return (
              <li
                key={i}
                className="navbysection-item text"
                onClick={this.handleClick}
              >
                {item.section}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
