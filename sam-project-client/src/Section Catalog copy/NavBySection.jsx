import React from "react";
import filterBySection from "../Another/FilterBySection";

export default class NavBySection extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const value = event.target.innerHTML;
    console.log("handleclick:", value); //here you will get the value of the li element
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
          {Object.keys(filteredItems).map(i => {
            return (
              <li
                key={i}
                className="navbysection-item text"
                onClick={this.handleClick}
              >
                {filteredItems[i].section}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}