import { connect } from 'react-redux';
import IndexProperties from './index_properties';
import { fetchProperties } from '../../../actions/properties_actions';
import Search from './search';

const mapStateToProps = state => ({
  properties: Object.keys(state.entities.properties).map(id => state.entities.properties[id]),
});

const mapDispatchToProps = dispatch => ({
  fetchProperties: () => dispatch(fetchProperties()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
