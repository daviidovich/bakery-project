import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faClock,
  faShoppingBasket,
  faSearch,
  faPaperPlane,
  faCaretDown,
  faMinus,
  faComment
} from "@fortawesome/free-solid-svg-icons";

export const PhoneIcon = (
  <FontAwesomeIcon icon={faPhoneAlt} className="color-beige" />
);
export const MapIcon = (
  <FontAwesomeIcon icon={faMapMarkerAlt} className="color-beige" />
);
export const ClockIcon = (
  <FontAwesomeIcon icon={faClock} className="color-beige" />
);
export const BasketIcon = <FontAwesomeIcon icon={faShoppingBasket} />;
export const SearchIcon = (
  <FontAwesomeIcon icon={faSearch} className="color-beige" />
);
export const PaperPlane = (
  <FontAwesomeIcon icon={faPaperPlane} className="color-white" />
);
export const SelectIcon = (
  <FontAwesomeIcon icon={faCaretDown} className="color-beige" />
);
export const MinusIcon = (
  <FontAwesomeIcon icon={faMinus} className="color-beige" />
);
export const CommentIcon = (
  <FontAwesomeIcon icon={faComment} className="color-beige" />
);
