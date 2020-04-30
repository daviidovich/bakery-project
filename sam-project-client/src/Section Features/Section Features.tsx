import React from "react";
import "./Section Features.scss";
import Headline from "../Another/Sections headline";
import FeaturesCard from "./Section Features-cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import filterBySection from "../Another/FilterBySection";
import api from "../API/api";

interface mySt {
  items: Array<Object>;
}

export default class Features extends React.Component<{}, mySt> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount = async () => {
    await api.getAllProducts().then((items: any) => {
      this.setState({
        items: items.data.data,
      });
    });
  };
  render() {
    const items = this.state.items;
    const featSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    var filteredItems = filterBySection(items, "section");
    return (
      <div className="features" id="features">
        <Headline label="Product features" />
        <div className="features-content flex-center">
          <div className="features-slider">
            <Slider {...featSettings}>
              {filteredItems.map((item, i) => {
                return <FeaturesCard item={item} key={i} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
