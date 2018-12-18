export default class MarkerManager {

  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(properties) {
    const propertiesObj = {};

    properties.forEach(property => propertiesObj[property.id] = property);

    properties.filter(property => !this.markers[property.id])
      .forEach(newProperty => this.createMarkerFromProperty(newProperty, this.handleClick));

    Object.keys(this.markers).filter(propertyId => !propertiesObj[propertyId])
      .forEach((propertyId) => this.removeMarker(this.markers[propertyId]));
  }

  createMarkerFromProperty(property) {
    const position = new google.maps.LatLng(property.longitude, property.latitude);

    const price = {
      fontSize: "12px",
      fontWeight: "bold",
      color: "black",
      text: `$${property.price}`
    };

    const markerIcon = {
      path: "M 25 0 L 375 0 L 375 200 L 260 200 L 200 250 L 140 200 L 25 200 Z",
      anchor: new google.maps.Point(200, 240),
      labelOrigin: new google.maps.Point(200, 110),
      scale: 0.12,
      fillColor: "white",
      fillOpacity: 1,
      strokeColor: "rgba(0, 0, 0, 0.2)",
      strokeWeight: 1
    }

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      propertyId: property.id,
      label: price,
      icon: markerIcon
    });

    marker.addListener('click', () => this.handleClick(property));
    this.markers[marker.propertyId] = marker;

  }

  removeMarker(marker) {
    this.markers[marker.propertyId].setMap(null);
    delete this.markers[marker.propertyId];
  }

}
