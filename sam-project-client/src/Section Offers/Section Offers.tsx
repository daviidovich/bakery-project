import React from "react";
import "./Section Offers.scss";
import Headline from "../Another/Sections headline";
import OfferCards from "./Section Offers-cards";

function Offers() {
  return (
    <div className="offers" id="offers">
      <Headline label="Offer This Week" />
      <div className="offers-content flex-center">
        <OfferCards />
      </div>
    </div>
  );
}

export default Offers;
