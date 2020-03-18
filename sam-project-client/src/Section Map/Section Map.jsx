import React from "react";
import "./Section Map.css";
import { YMaps, Map, GeoObject, Placemark } from "react-yandex-maps";
import { PhoneIcon, MapIcon } from "../Another/Icons";

const mapData = {
  center: [-35.751574, 137.573856],
  zoom: 6,
  controls: []
};

const MyPlacemark = () => (
  <YMaps>
    <Map state={mapData} width="100%" height="800px">
      <Placemark
        geometry={{
          type: "Point",
          coordinates: [-34.9517, 138.5938]
        }}
      />
      <Placemark
        geometry={{
          type: "Point",
          coordinates: [-37.8137, 144.963]
        }}
      />
      <Placemark
        geometry={{
          type: "Point",
          coordinates: [-35.3069, 149.1255]
        }}
      />
    </Map>
  </YMaps>
);

class Yandex extends React.Component {
  render() {
    return (
      <div id="map">
        <MyPlacemark />
      </div>
    );
  }
}

export default Yandex;
