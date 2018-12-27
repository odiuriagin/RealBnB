import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router-dom';

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

  componentDidUpdate() {
    if (this.state.redirect && !this.state.place.geometry) {
      alert("Please enter a valid city!");
      this.setState({ redirect: false, error: true });
    }
  }

  render() {

    let navbar;
    const user = {name: "Demo User", email: "demo@gmail.com", password: "starwars"};
    let error = (<div></div>);

    if (this.state.redirect === true) {
      if (this.state.place.geometry) {
        return <Redirect to={{ pathname: '/index', state: { place: this.state.place }}} />
      } 
    } 
    // else if (this.state.error && !this.state.redirect) {
      // error = (<li className="splash-error"><span className="error-logo"><img src={window.error}/></span>Please select a valid city!</li>);
    // }

    if (this.props.currentUser) {
      let userLogo = this.props.currentUser.userPhotoUrl ? this.props.currentUser.userPhotoUrl : window.user_logo;
      navbar = (
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
      )
    } else {
      navbar = (
        <ul className="main-nav-list">
          <li><a onClick={() => this.props.openModal('signup')}>Sign Up</a></li>
          <li><a onClick={() => this.props.openModal('login')}>Log In</a></li>
          <li><a onClick={() => this.props.demoLogin(user)}>Demo User</a></li>
        </ul>
      )
    }

    return (
      <div className="main-nav ">
        <Link to={'/'}><img src={window.logo_red} className="red-logo" /></Link>
        <input id="nav-search-field" type="text" placeholder='Try "Miami"'></input>
        <ul className="errors" id="index-nav-error">{error}</ul>
        {navbar}
      </div>
    )
  }

}


export default withRouter(IndexNav);
