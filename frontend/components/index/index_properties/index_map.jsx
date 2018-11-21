import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../../util/marker_manager';

class IndexMap extends React.Component {

  componentDidMount() {
      const mapOptions = {
        center: { lat: 40.758888, lng: -73.953621 },
        zoom: 12
      };

      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
      this.MarkerManager.updateMarkers(this.props.properties);

      var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(40.758888, -73.953621),
        new google.maps.LatLng(40.858888, -73.853621)
      );


      var input = document.getElementById('nav-search-field');
      var options = {
        bounds: defaultBounds,
        types: ['(cities)'],
      };

      let autocomplete = new google.maps.places.Autocomplete(input, options);


    }

    componentDidUpdate() {
      this.MarkerManager.updateMarkers(this.props.properties);
    }

    handleMarkerClick(property) {
      this.props.history.push(`properties/${property.id}`);
    }

    render() {
      return (
        <div className="index-map-container">
          <div className="index-map" ref={ map => this.mapNode = map }></div>
        </div>
      )
    }
}

export default withRouter(IndexMap);
