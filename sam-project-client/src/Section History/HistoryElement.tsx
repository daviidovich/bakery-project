import React from "react";
import cx from "classnames";
import { Link } from "react-scroll";

interface HistoryElement {
  image: any;
  header: string;
  desc: string;
  subheader: string;
  info: any;
  cta: string;
}

export default class HistoryElem extends React.Component<
  { current: HistoryElement },
  {}
> {
  render() {
    //console.log(this.props);
    const { image, header, desc, subheader, info, cta } = this.props.current;

    return (
      <div className="onbutton-content">
        <div className="onbutton-image">
          <img src={image} alt=" " />
        </div>
        <div className="onbutton-info">
          <h3 className="color-brown">{header}</h3>
          <p className="text">{desc}</p>
          <h4 className="color-brown">{subheader}</h4>
          {info &&
            Object.keys(info).map((i: any) => {
              return (
                <div
                  key={i}
                  className={cx(info[i].class, "ouraddress", "text")}
                >
                  {info[i].icon} {info[i].text}
                </div>
              );
            })}
          <div className="view-on-map text">
            <Link to="map" spy={true} smooth={true} offset={-70} duration={500}>
              {cta}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
