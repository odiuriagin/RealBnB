import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../../util/marker_manager';

const mapOptions = {
  center: { lat: 40.758888, lng: -73.953621 },
  zoom: 12
};

class IndexMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      place: false,
    }
  }

  componentDidMount() {

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.properties);
    
    if (this.props.location.state) {
      if (this.props.location.state.newPropertyPlace)
        this.map.setCenter(this.props.location.state.newPropertyPlace)
      else {
        let place = this.props.location.state.place;
        this.map.setCenter(place.geometry.location);
      }
    }

    let defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(40.758888, -73.953621),
      new google.maps.LatLng(40.858888, -73.853621)
    );

    let input = document.getElementById('nav-search-field');
    let options = {
      bounds: defaultBounds,
      types: ['(cities)'],
    };

    let autocomplete = new google.maps.places.Autocomplete(input, options);

    autocomplete.addListener('place_changed', () => {
      let place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
      } else {
        this.setState( { place: true } );
        this.map.setCenter(place.geometry.location);
      }
    });
  }

    componentDidUpdate() {
      if (this.props.searchErrors.length > 0 && this.state.place) {
        this.props.clearSearchErrors();
        this.setState( {place: false} );
      }
      this.MarkerManager.updateMarkers(this.props.properties);
    }

    registerListeners() {
      google.maps.event.addListener(this.map, 'idle', () => {
        const { north, south, east, west } = this.map.getBounds().toJSON();
        const bounds = {
          northEast: { latitude:north, longitude:east },
          southWest: { latitude: south, longitude: west }
        };
        this.setState({isLoading: true});
        this.props.updateFilter('bounds', bounds).then(() => this.setState({isLoading: false}))
      });
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
