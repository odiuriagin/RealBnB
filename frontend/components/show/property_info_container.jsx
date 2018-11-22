import { connect } from 'react-redux';
import PropertyInfo from './property_info';
import { fetchUser } from '../../actions/user_actions';
import { fetchProperty } from '../../actions/properties_actions';
import { deleteReview } from '../../actions/review_actions';


const mapStateToProps = (state = {}, ownProps) => {

  return {
    property: state.entities.properties[ownProps.propertyId],
    users: state.entities.users,
    currentUserId: state.session.currentUserId,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchProperty: (id) => dispatch(fetchProperty(id)),
    deleteReview: (id) => dispatch(deleteReview(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyInfo);
