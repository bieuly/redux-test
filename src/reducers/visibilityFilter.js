import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions'

// This reducer only changes the visibilityFilter property of the state, so it only returns the filter value
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter