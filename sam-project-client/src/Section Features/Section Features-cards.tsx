import React from "react";
import api from "../API/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "./cake.png";
import filterBySection from "../Another/FilterBySection";

interface mySt {
  items: any;
}

class FeaturesList extends React.Component<{}, mySt> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount = async () => {
    await api.getAllProducts().then(items => {
      this.setState({
        items: items.data.data
      });
    });
  };

  render() {
    const items = this.state.items;

    const featSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    var filteredItems = filterBySection(items, "section");

    return (
      <div className="features-content flex-center">
        <div className="features-slider">
          <Slider {...featSettings}>
            {Object.keys(filteredItems).map((i: any) => {
              return (
                <div key={i} className="feature-wrapper">
                  <div className="feature">
                    <div className="feature-content flex-center">
                      <img
                        className="feature-image flex-center"
                        src={image}
                        alt=" "
                      />
                      <h3 className="feature-title color-brown">
                        Baker & {filteredItems[i].section}
                      </h3>
                      <div className="text-center text">
                        {filteredItems[i].description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default FeaturesList;
