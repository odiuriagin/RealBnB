import React from 'react';

class ShowPageMap extends React.Component {

  componentDidMount() {

      const { latitude, longitude } = this.props.property;

      const mapOptions = {
        center: { lat: longitude, lng: latitude },
        zoom: 15
      };
      // wrap this.mapNode in a Google Map
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.marker = new google.maps.Circle({
        strokeColor: '#357b88',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#8ed8cf',
        fillOpacity: 0.55,
        map: this.map,
        center: { lat: longitude, lng: latitude },
        radius: 150
      });
    }

    render() {
      return (

        <div className="show-page-map-container" ref={ map => this.mapNode = map }></div> // this ref gives us access to the map dom node

      )
    }
}

export default ShowPageMap;
