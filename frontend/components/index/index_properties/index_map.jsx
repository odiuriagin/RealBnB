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
