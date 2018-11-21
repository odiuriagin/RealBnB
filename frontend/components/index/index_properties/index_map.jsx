import React from 'react';

class IndexMap extends React.Component {

  componentDidMount() {
      const mapOptions = {
        center: { lat: 37.773972, lng: -122.431297 },
        zoom: 15
      };

      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.marker = new google.maps.Circle({
        strokeColor: '#357b88',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#8ed8cf',
        fillOpacity: 0.55,
        map: this.map,
        center: { lat: 37.773972, lng: -122.431297 },
        radius: 150
      });
    }

    render() {
      return (
        <div className="index-map-container">
          <div className="index-map" ref={ map => this.mapNode = map }></div>
        </div>
      )
    }
}

export default IndexMap;
