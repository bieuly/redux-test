// Define all types of actions
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBLITY_FILTER';

// Create action creators to just return those types of actions.
// Need to figure out what kind of data those actions will have.
// These action creators will not dispatch it. Instead we can later call store.dispatch to do that.
// However, if using react-redux, don't need to worry about calling dispatch when using bindActionCreators().
// bindActionCreators() will automatically bind the provided action creators with the dispatch method.
let nextTodoId = 0
export function addTodo(text) {
    return { type: ADD_TODO, id: nextTodoId++, text }
}

export function toggleTodo(id) {
    return { type: TOGGLE_TODO, id }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

// Visbility filters
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}