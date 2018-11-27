import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import Ratings from 'react-ratings-declarative';


class BookForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      num_people: 1,
      fireRedirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePeopleInput = this.handlePeopleInput.bind(this);
    this.blockedDays = this.blockedDays.bind(this);
  }

  componentDidMount() {
    this.props.fetchProperty(this.props.propertyId)
  }

  componentWillUnmount(oldProps) {
     this.props.clearBookingErrors();
  }

  blockedDays(day) {
    let bookedDates = this.props.property.bookedDates
    for (let i = 0; i < bookedDates.length; i++) {
      if (day.format('YYYY-MM-DD') === bookedDates[i]) {
        return true;
      }
    }
    return false;
  }

  handleSubmit(e) {
    e.preventDefault();

    const booking_info = {
      property_id: parseInt(this.props.propertyId),
      check_in: this.state.startDate._d,
      check_out: this.state.endDate._d,
      num_people: this.state.num_people,
    }
    this.props.createBooking(booking_info).then( () => this.setState({ fireRedirect: true }));
  }

  handlePeopleInput(e) {
    this.setState({ num_people: e.target.value });
  }

  render() {

    const { fireRedirect } = this.state;

    const errors = this.props.errors.map( (err, i) => {
      return(<li key={i}><span className="error-logo"><img src={window.error}/></span>{err}</li>)
    });

    return (
      <div className="book-form-container clearfix">
        <form className="book-form">
          <div className="book-form-price">
            <p className="book-form-price-p">${this.props.property.price}<span>   per night</span></p>
            <Ratings
              rating={this.props.property.averageRating}
              widgetDimensions="14px"
              widgetSpacings="2px"
              widgetRatedColors="#008489"
            >
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
            </Ratings><span className="book-form-ratings-num"> {this.props.property.reviewsNum}</span>
          </div>
          <ul className="errors book-form-error">{errors}</ul>
          <p className="book-form-dates-text">Dates</p>
          <div className="date-picker">
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="start-date"
              endDate={this.state.endDate}
              endDateId="end-date"
              startDatePlaceholderText="Check In"
              showClearDates={true}
              endDatePlaceholderText="Check Out"
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              isDayBlocked={day => this.blockedDays(day)}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
            />
          </div>
          <p className="book-form-text book-form-guests-text">Guests</p>
          <select className="book-form-guests" onChange={this.handlePeopleInput} defaultValue="1">
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
            <option value="5">5 guests</option>
            <option value="6">6 guests</option>
          </select>
          <button className="book-form-submit" onClick={this.handleSubmit} >Book</button>
          <p className="no-charge">You won’t be charged yet</p>
        </form>
        { fireRedirect && <Redirect to="/trips" /> }
      </div>
    );
}
};

export default withRouter(BookForm);
