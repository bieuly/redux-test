import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions'

const { SHOW_ALL } = VisibilityFilters;

// This reducer only changes the todos piece of the state, so it only returns the array of todos
function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO: 
            return [...state, {text: action.text, completed: false}]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                    if(index === action.index){
                        return Object.assign({}, todo, {completed: !todo.completed})
                    }
                    return todo
                })
        default:
            return state
    }
}

// This reducer only changes the visibilityFilter property of the state, so it only returns the filter value
function visibilityFilter(state = SHOW_ALL, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

// combineReducers() will generate functions that calls the provided reducers with the 'slices of state' according to their keys
// Here, the keys are visiblityFilter (with shorthand notation), and todos. So it will call the reducers with state.visibilityFilter and state.todos respectively
// If you want to write with shorthand form like this, then you must name your reducers with the same name as the pieces of state you want to change
const todoAppReducer = combineReducers({
    visibilityFilter,
    todos
})

export default todoAppReducer;