import { connect } from 'react-redux';
import BookForm from './book_form';
import { fetchUser } from '../../actions/user_actions';
import { fetchProperty } from '../../actions/properties_actions';
import { createBooking } from '../../actions/booking_actions';

const mapStateToProps = (state = {}, ownProps) => {
  return {
    property: state.entities.properties[ownProps.propertyId],
    currentUserId: state.session.currentUserId,
    errors: state.errors.booking
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchProperty: (id) => dispatch(fetchProperty(id)),
    createBooking: (booking) => dispatch(createBooking(booking)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
