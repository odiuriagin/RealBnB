import { connect } from 'react-redux';
import IndexNav from './index_nav';
import { logout, login } from '../../../actions/session_actions';
import { receiveSearchErrors, clearSearchErrors } from '../../../actions/search_actions';
import {openModal} from '../../../actions/modal_actions';


const mapStateToProps = (state) => {
  const currentUserId = state.session.currentUserId;
  return {
    currentUser: state.entities.users[currentUserId],
    searchErrors: state.errors.search,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    login: () => dispatch(login()),
    openModal: (form) => dispatch(openModal(form)),
    demoLogin: (user) => dispatch(login(user)),
    receiveSearchErrors: () => dispatch(receiveSearchErrors()),
    clearSearchErrors: () => dispatch(clearSearchErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexNav);
