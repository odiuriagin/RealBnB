import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';


class BookForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      num_people: 1,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePeopleInput = this.handlePeopleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchProperty(this.props.propertyId)
  }

  getToday() {
      return new Date().toISOString().substr(0, 10);
  }

  getTomorrow() {
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 1);
      return currentDate.toISOString().substr(0, 10);
  }

  handleSubmit(e) {
    e.preventDefault();

    const booking_info = {
      property_id: parseInt(this.props.propertyId),
      check_in: this.state.startDate._d,
      check_out: this.state.endDate._d,
      num_people: this.state.num_people,
    }

    this.props.createBooking(booking_info)

  }

  handlePeopleInput(e) {
    this.setState({ num_people: e.target.value });
  }

  render() {

    return (

        <form className="book-form">
          <p className="book-form-price">${this.props.property.price}<span>   per night</span></p>
          <p className="book-form-dates-text">Dates</p>
          <div className="date-picker">
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="start-date"
              endDate={this.state.endDate}
              endDateId="end-date"
              startDatePlaceholderText={this.getToday()}
              showClearDates={true}
              endDatePlaceholderText={this.getTomorrow()}
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
            />
          </div>
          <p className="book-form-text book-form-guests-text">Guests</p>
          <input type="number" className="book-form-guests" defaultValue="1" min="1" max="6" onChange={this.handlePeopleInput}></input>
          <button className="book-form-submit" onClick={this.handleSubmit} >Book</button>
          <p className="no-charge">You won’t be charged yet</p>
        </form>

    );
}
};

export default BookForm;
