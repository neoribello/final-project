import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { Icon } from "leaflet";

//component to show search icon on maps page and allow users to search
function MapSearch() {
  const map = useMap();

  const icon = new Icon({
    iconUrl: "/building.png",
    iconSize: [20, 20],
  });

  useEffect(() => {
    var geocoder = L.Control.Geocoder.nominatim();
    // eslint-disable-next-line no-restricted-globals
    if (typeof URLSearchParams !== "undefined" && location.search) {
      // parse /?geocoder=nominatim from URL
      // eslint-disable-next-line no-restricted-globals
      var params = new URLSearchParams(location.search);
      var geocoderString = params.get("geocoder");
      if (geocoderString && L.Control.Geocoder[geocoderString]) {
        geocoder = L.Control.Geocoder[geocoderString]();
      } else if (geocoderString) {
        console.warn("Unsupported geocoder", geocoderString);
      }
    }

    L.Control.geocoder({
      query: "",
      position: "topright",
      collapsed: false,
      placeholder: "Search here...",
      defaultMarkGeocode: true,
      geocoder,
    })
      .on("markgeocode", function (e) {
        var latlng = e.geocode.center;
        L.marker(latlng, { icon })
          .addTo(map)
          .bindPopup(e.geocode.name)
          .openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
  }, []);

  return null;
}

export default MapSearch;
