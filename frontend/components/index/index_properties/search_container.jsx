import { connect } from 'react-redux';
import IndexProperties from './index_properties';
import { fetchProperties } from '../../../actions/properties_actions';
import { updateFilter } from '../../../actions/filter_actions';
import Search from './search';

const mapStateToProps = state => ({
  properties: Object.keys(state.entities.properties).map(id => state.entities.properties[id]),
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
