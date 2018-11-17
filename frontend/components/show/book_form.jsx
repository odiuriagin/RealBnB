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
    }
  }

  getToday() {
      return new Date().toISOString().substr(0, 10);
  }

  getTomorrow() {
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 1);
      return currentDate.toISOString().substr(0, 10);
  }

  render() {

    return (

        <form className="book-form">
          <p className="book-form-price">${this.props.price}<span>   per night</span></p>
          <p className="book-form-dates-text">Dates</p>
          <div className="date-picker">
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="start-date"
              endDate={this.state.endDate}
              endDateId="end-date"
              startDatePlaceholderText={this.getToday()}
              endDatePlaceholderText={this.getTomorrow()}
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
            />
          </div>
          <p className="book-form-text book-form-guests-text">Guests</p>
          <input type="number" className="book-form-guests" defaultValue="1" min="1" max="6"></input>
          <button className="book-form-submit">Book</button>
          <p className="no-charge">You won’t be charged yet</p>
        </form>

    );
}
};

export default BookForm;
