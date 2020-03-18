import React from "react";
import Headline from "../Another/Sections headline";
import { Comment, comment } from "./Slick-comments";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Section Client-reviews.css";
import "./Slick-comments.scss";

export default class Reviews extends React.Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2500
    };
    return (
      <div className="reviews" id="reviews">
        <div className="reviews-image">
          <img src="../img/reviews.jpg" alt=" " />
        </div>
        <div className="reviews-client">
          <div className="reviews-client-content flex-center">
            <Headline label="What a Client Say?" className="reviews-headline" />
            <div className="reviews-slider">
              <Slider {...settings}>
                <Comment
                  avatar={comment[0].avatar}
                  name={comment[0].name}
                  position={comment[0].position}
                  text={comment[0].text}
                />
                <Comment
                  avatar={comment[1].avatar}
                  name={comment[1].name}
                  position={comment[1].position}
                  text={comment[1].text}
                />
                <Comment
                  avatar={comment[2].avatar}
                  name={comment[2].name}
                  position={comment[2].position}
                  text={comment[2].text}
                />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
