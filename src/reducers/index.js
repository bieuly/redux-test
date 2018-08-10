import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// combineReducers() will generate functions that calls the provided reducers with the 'slices of state' according to their keys
// Here, the keys are visiblityFilter (with shorthand notation), and todos. So it will call the reducers with state.visibilityFilter and state.todos respectively
// If you want to write with shorthand form like this, then you must name your reducers with the same name as the pieces of state you want to change
export default combineReducers({
    visibilityFilter,
    todos
})