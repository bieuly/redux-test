import { connect } from 'react-redux'
import Link from '../components/Link';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

// Use bindActionCreators, when you want to pass some action creators down to a component that isn't aware of redux, and you don't want to pass dispatch or the redux store to it
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () =>  dispatch(setVisibilityFilter(ownProps.filter))
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink;