import React from "react";
import Leaflet from "leaflet";
import { EsriProvider as provider } from "leaflet-geosearch";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import CSS from "./Maps.module.css";
//import CovidCard from "../../Components/CovidCard/CovidCard";
import PopupModal from "./PopupModal/PopupModal";
delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default class extends React.Component {
  provider = new provider();
  state = {
    results: []
  };

  componentDidMount() {
    this.popup = React.createRef();
    this.props.stats.map(item =>
      this.provider.search({ query: item.country_name }).then(results => {
        if (results[0]) {
          const coord = { ...item, coords: [results[0].y, results[0].x] };
          this.setState(state => {
            return {
              results: [...state.results, coord]
            };
          });
        }
      })
    );
  }

  closePopusOnClick = () => {
    this.popup.current.leafletElement.options.leaflet.map.closePopup();
  };
  render() {
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;
    return (
      <Map
        center={[0, 0]}
        zoom={2}
        style={{ height: "400px" }}
        minZoom={2}
        className={CSS.map}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
          className={isDayTime ? null : CSS["leaflet-tile"]}
        />
        {this.state.results.map((item, key) => (
          <Marker position={item.coords} key={key}>
            <Popup ref={this.popup}>
              <PopupModal {...item} close={this.closePopusOnClick} />
            </Popup>
          </Marker>
        ))}
      </Map>
    );
  }
}
