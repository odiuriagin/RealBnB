import { connect } from 'react-redux';
import { updateFilter } from '../../../actions/filter_actions';
import { clearSearchErrors } from '../../../actions/search_actions';
import Search from './search';

const mapStateToProps = state => ({
  properties: Object.keys(state.entities.properties).map(id => state.entities.properties[id]),
  loading: state.ui.loading.propertiesLoading,
  searchErrors: state.errors.search,
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  clearSearchErrors: () => dispatch(clearSearchErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
