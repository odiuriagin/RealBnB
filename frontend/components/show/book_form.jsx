import React from 'react';

const BookForm = (props) => {
  return (
    <div>
      <p className="book-form-price">${props.props.price}<span>   per night</span></p>
      <form>
        <input type="date"></input>
        <input type="select"></input>
      </form>
    </div>
  );
};

export default BookForm;
