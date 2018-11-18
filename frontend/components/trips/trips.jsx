import React from 'react';

class Trips extends React.Component {

  componentDidMount() {
    this.props.fetchBookings()
  }

  render() {
    return (
      <div>Got here</div>
    )
  }
}


export default Trips;
