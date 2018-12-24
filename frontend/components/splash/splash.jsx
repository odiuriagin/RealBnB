import React from 'react';
import SplashNav from './splash_nav';
import { Redirect, withRouter } from 'react-router-dom';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      place: null,
    }
  }

  componentDidMount() {
    let input = document.getElementById('main-search');
    let options = {
      types: ['(cities)'],
    }

    let autocomplete = new google.maps.places.Autocomplete(input, options);

    autocomplete.addListener('place_changed', () => {
      let place = autocomplete.getPlace();
      this.setState({redirect: true, place});
    });

  }

  render() {

    if (this.state.redirect === true) {
      return <Redirect to={{ pathname: '/index', state: { place: this.state.place }}} />
    } 

    return (
      <div className="splash-main">
        <SplashNav />
        <div className="main-content">
          <p className="next-trip">Plan your next trip</p>
          <div className="main-search-container">
            <input id="main-search" type="text" placeholder='Try "New York"'></input>
          </div>
        </div>
      </div>
    )

  }
}

export default withRouter(Splash);
