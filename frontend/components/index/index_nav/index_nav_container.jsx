import { connect } from 'react-redux';
import IndexNav from './index_nav';
import { logout, login } from '../../../actions/session_actions';
import {openModal} from '../../../actions/modal_actions';


const mapStateToProps = (state) => {
  const currentUserId = state.session.currentUserId;
  return {
    currentUser: state.entities.users[currentUserId],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    login: () => dispatch(login()),
    openModal: (form) => dispatch(openModal(form)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexNav);
