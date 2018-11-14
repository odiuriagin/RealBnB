import { connect } from 'react-redux';
import Greeting from './greeting';
import {logout} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  const currentUserId = state.session.currentUserId;
  return {
    currentUser: state.entities.users[currentUserId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
