import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Redirect, withRouter, Switch } from 'react-router-dom';

class IndexNav extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      place: null,
    }
  }

  componentDidMount() {

    let input = document.getElementById('nav-search-field');
    let options = {
      types: ['(cities)'],
    };

    let autocomplete = new google.maps.places.Autocomplete(input, options);

    autocomplete.addListener('place_changed', () => {
      let place = autocomplete.getPlace();
        this.setState({redirect: true, place});
    });

  }

  render() {

    let userLogo = this.props.currentUser.userPhotoUrl ? this.props.currentUser.userPhotoUrl : window.user_logo;

    if (this.state.redirect === true) {
      return <Redirect to={{ pathname: '/index', state: { place: this.state.place }}} />
    } 

    return (
      <div className="main-nav">
        <Link to={'/'}><img src={window.logo_red} className="red-logo" /></Link>
        <input id="nav-search-field" type="text" placeholder='Try "Miami"'></input>
        <ul className="main-nav-list">
          <li><Link to={'/new'}>Become a host</Link></li>
          <li><Link to={'/trips'}>Trips</Link></li>
          <li>
            <a href="#"><img className="user-photo" src={userLogo}></img></a>
            <ul className="main-nav-dropdown">

              <li><a onClick={this.props.logout}>Log Out</a></li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }

}


export default withRouter(IndexNav);
